import { Store, attach, createStore, sample } from 'effector'
import { debug } from 'patronum'

import { FriendsBook, api } from 'shared/api'
import { ModelEvent, ModelEventFactory } from 'shared/helpers/effector'

//#region //* API

const requestFindAllFriendsBookFx = attach({ effect: api.friendsBook.requestFindAllFriendsBookFx })

//#endregion

//#region //* Store

const $items = createStore<FriendsBook[]>([])

debug($items)

//#endregion

//#region //* Events

const loadAll = ModelEventFactory()

//#endregion

//#region //* Bussines Logic

//?
sample({
  clock: loadAll.inited,
  fn: () => null,
  target: requestFindAllFriendsBookFx,
})

loadAll.$pending = requestFindAllFriendsBookFx.pending
$items.on(requestFindAllFriendsBookFx.doneData, (_, items) => items)

sample({
  clock: requestFindAllFriendsBookFx.done,
  target: loadAll.done,
})

//#endregion

//#region //* Model

export interface FriendsBookModel {
  $items: Store<FriendsBook[]>

  loadAll: ModelEvent<void>
}

export const $$friendsBook = {
  $items,

  loadAll,
}

//#endregion
