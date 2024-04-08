import React from 'react'
import { getTitleId } from '@/server/Actions'
import { Board } from '@/components/Board'
import { getComment } from '@/server/Actions'

const BoardDetailed = async ({params}: any) => {
  const title = await getTitleId(params.id)
  const comment = await getComment(params.id)

  return (
    <>
      <Board 
        title={title}
        comment={comment}
      />
    </>
  )
}

export default BoardDetailed