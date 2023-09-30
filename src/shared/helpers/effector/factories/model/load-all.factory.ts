import { Effect, Store, createEvent, createStore, sample } from 'effector'

export function LoadAllFactory<Data>(
  $store: Store<Data[]>,
  requestFx: Effect<void, Data[], Error>
) {
  const $alreadyLoaded = createStore<boolean>(false)

  // Events
  const requested = createEvent()
  const alreadyLoadedChanged = createEvent<boolean>()

  // Pendings
  const $pending = requestFx.pending

  // Bussines Logic
  sample({
    clock: requested,
    source: $pending,
    filter: (pending) => !pending,
    target: requestFx,
  })

  $store.on(requestFx.doneData, (_, data) => data)

  $alreadyLoaded.on(alreadyLoadedChanged, (_, value) => value)

  sample({
    clock: requestFx.done,
    source: $alreadyLoaded,
    filter: (alreadyLoaded) => !alreadyLoaded,
    fn: () => true,
    target: alreadyLoadedChanged,
  })

  return {
    $pending,
    $alreadyLoaded,

    requested,

    done: requestFx.done,
    fail: requestFx.fail,
  }
}
