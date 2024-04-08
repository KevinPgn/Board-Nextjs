"use client"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import "../../styles/Create.css"
import React from 'react'
import { createTitle } from '@/server/Actions'
import { useRouter } from "next/navigation"
import Link from "next/link"

const CreateBoard = () => {
  const router = useRouter()
  const [value, setValue] = React.useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!value) {
      toast.error('Please enter a title')
      return
    }

    const data = new FormData()
    data.append('title', value)

    try {
      await createTitle(data)
      toast.success('Board created')
      setValue('')
      setTimeout(() => {
        router.push('/')
      }, 1000)
    } catch (e) {
      toast.error('An error occurred')
    }
  }
  
  return (
    <>
    <section className="create">
      <h2>Create a board</h2>

      <form action={createTitle} onSubmit={handleSubmit}>
        <input type="text" name="title" value={value} onChange={handleChange}/>
        <button type="submit">Create board</button>
      </form>

      <Link href="/" className="cancel">Cancel</Link>
      <ToastContainer />
    </section>
    </>
  )
}

export default CreateBoard