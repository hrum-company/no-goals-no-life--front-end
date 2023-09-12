import { memo } from 'react'

import { GoalListTemplate } from 'entities/goal'

import { GoalListProps } from './types'

// const goals: Goal[] = [
//   {
//     id: 1,
//     listId: 1,

//     name: 'Цель 1',
//     description: 'string',

//     completed: false,
//     createdAt: '12-10-2004',
//   },
//   {
//     id: 2,
//     listId: 2,

//     name: 'Цель 2',

//     completed: true,
//     createdAt: '12-10-2004',
//     completedAt: '24-4-2020',
//   },
//   {
//     id: 3,
//     listId: 3,

//     name: 'Цель 2',

//     completed: true,
//     createdAt: '12-10-2004',
//     completedAt: '24-4-2020',
//   },
//   {
//     id: 4,
//     listId: 4,

//     name: 'Купить мотоцикл',

//     completed: true,
//     createdAt: '12-10-2004',
//     completedAt: '24-4-2020',
//   },
// ]

export const GoalList = memo(function GoalList({ goals }: GoalListProps) {
  return <GoalListTemplate goals={goals} />
})
