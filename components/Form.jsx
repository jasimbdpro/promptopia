import React from 'react'
import Link from 'next/link'
const Form = ({ type, post, setPost, setSetsubmitting, handleSubmit,
}) => {
  return (
    <section className=' w-full max-w-full flex-start flex-col'>
      <h1 className=' head_text text-left'>{type}</h1>
      <span className="blue_gradient">{type} Post</span>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompt with the world, and let your imagination run wild with any AI powered platform.
      </p>

      <form action="" className=' mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism' onSubmit={handleSubmit}>
        <label>
          <span>Your AI Prompt</span>
        </label>
      </form>
    </section>
  )
}

export default Form