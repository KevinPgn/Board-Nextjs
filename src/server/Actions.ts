"use server"

import { revalidatePath } from "next/cache"
import {prisma} from "../libs/db"

export async function getAllTitle() {
  const result = await prisma.title.findMany()
  return result
}

export async function createTitle(data: FormData) {
  const title = data.get('title') as string
  
  if (!title) {
    throw new Error('Please enter a title')
  }

   await prisma.title.create({
    data: {
      title
    }
  })
  
  revalidatePath('/')
}

export async function deleteTitle(id: string) {
  await prisma.comment.deleteMany({
    where: {
      titleId: id
    }
  })

  await prisma.title.delete({
    where: {
      id
    }
  })
  
  revalidatePath('/')
}

export async function getTitleId(id: string) {
  return await prisma.title.findUnique({
    where: {
      id: id
    }
  })
}

//when we click on the propostion button i can add a comment at this title 
export async function addComment(comment: string, id: string) {
  
  if (!comment) {
    throw new Error('Please enter a comment')
  }

  await prisma.comment.create({
    data: {
      comment,
      titleId: id,
      upvotes: 0,
      downvotes: 0
    }
  })
  
  revalidatePath('/[id]')
}

export async function getComment(id: string) {
  return await prisma.comment.findMany({
    where: {
      titleId: id
    }
  })
}

export async function upvoteComment(id: string) {
  const comment = await prisma.comment.findUnique({
    where: {
      id
    }
  })

  await prisma.comment.update({
    where: {
      id
    },
    data: {
      upvotes: comment ? comment.upvotes + 1 : 1
    }
  })
  
  revalidatePath('/[id]')
}

export async function downvoteComment(id: string) {
  const comment = await prisma.comment.findUnique({
    where: {
      id
    }
  })

  await prisma.comment.update({
    where: {
      id
    },
    data: {
      downvotes: comment ? comment.downvotes + 1 : 1
    }
  })
  
  revalidatePath('/[id]')
}