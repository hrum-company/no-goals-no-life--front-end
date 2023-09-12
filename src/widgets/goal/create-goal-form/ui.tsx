import { useUnit } from 'effector-react'
import { memo, useMemo } from 'react'

import {
  $createGoalDescription,
  $createGoalName,
  GoalDescriptionTextarea,
  GoalNameInput,
  createGoalDescriptionChanged,
  createGoalNameChanged,
} from 'features/goal'

import { CreateGoalFormTemplate } from 'entities/goal'

export const CreateGoalForm = memo(function CreateGoalForm() {
  // Effector
  const [name, nameChanged, description, descriptionChanged] = useUnit([
    $createGoalName,
    createGoalNameChanged,
    $createGoalDescription,
    createGoalDescriptionChanged,
  ])

  const formContent = useMemo(
    () => (
      <>
        <GoalNameInput value={name} onChange={nameChanged} />
        <GoalDescriptionTextarea value={description} onChange={descriptionChanged} />
      </>
    ),
    [description, descriptionChanged, name, nameChanged]
  )

  return <CreateGoalFormTemplate>{formContent}</CreateGoalFormTemplate>
})
