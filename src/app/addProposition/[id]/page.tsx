"use client"
import React from 'react'
import "../../../styles/Proposition.css"
import Link from 'next/link'
import { addComment } from '@/server/Actions'

const AddProposition = ({params}: any) => {
  const [comment, setComment] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }

  return (
    <section className="proposition">
      <h2>Create a proposition</h2>

      <form action={() => addComment(comment, params.id)}>
        <input type="text" name="comment" placeholder="Enter your comment" value={comment} onChange={handleChange} required />
        <button type="submit">Create</button>
      </form>

      <Link href="/" className="cancel">Cancel</Link>
    </section>
  )
}

export default AddProposition