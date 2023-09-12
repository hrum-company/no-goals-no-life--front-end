import { memo } from 'react'

import { CreateGoalForm } from 'widgets/goal'

import { CreateGoalButton } from 'features/goal'

import { PageLayout, Typography } from 'shared/ui'

export const CreateGoalPage = memo(function CreateGoalPage() {
  return (
    <PageLayout
      header={
        <Typography level="h2" color="primary">
          Создание цели
        </Typography>
      }
      footer={<CreateGoalButton />}
    >
      <CreateGoalForm />
    </PageLayout>
  )
})
