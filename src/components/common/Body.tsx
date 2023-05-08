import React, { type ReactElement, type ReactNode } from 'react'
import Banner from './Banner';

interface BodyProps {
  title: string;
  description: string;
  link: string;
  completed: Date;
  image: {
    src: string;
    alt: string;
  }
  children: ReactNode;
}

const Body = ({ title, description, link, completed, image, children }: BodyProps): ReactElement => {
  return (
    <main className='min-h-screen max-w-7xl mx-auto px-5 pt-10'>

      <Banner image={image}/>

      {/* Header */}
      <article className='max-w-3xl mx-auto p-5'>
        <h1 className='text-3xl mt-10 mb-3'>{title}</h1>
        <h2 className='text-xl font-light text-gray-500 mb-2'>{description}</h2>
        <div className='flex items-center space-x-2'>
          <p className='font-extralight text-sm'>
            Link: <a href={link} className='text-green-600'>{link}</a> -
            Completed at: {completed.toLocaleString()}</p>
        </div>

        {/* Content */}
        <div>
          <section>
            {children}
          </section>
        </div>
      </article>
    </main>
  )
}

export default Body