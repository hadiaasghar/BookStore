import React from 'react'
import list from "../Compoments/List.json"
import Card from './Card'
import { Link } from 'react-router-dom'


const Course = () => {
  return (
    <>
    <div className="max-w-screen-2xl mx-auto md:px-20 px-4 py-24 dark:bg-slate-900 dark:text-white">
  <div className="dark:bg-slate-900 dark:text-white items-center justify-center text-center">
    <h1 className="text-2xl md:text-4xl m-0 p-0 dark:bg-slate-900 dark:text-white">
      Ready to dive into exciting books and ignite <span className="text-pink-500">your passion for reading?</span>
    </h1>

    <p className="mt-11">
      "Step into the world of stories waiting to be told and uncover adventures, mysteries, and knowledge within every book. Let your imagination soar with every page you turn as books become your gateway to endless possibilities and dreams. Ready to explore exciting books and ignite your passion for reading? Find your next favorite read and embark on a journey like no other. Discover the joy of learning, the thrill of adventure, and the power of words that stay with you forever. The world of books is calling—are you ready to answer?"
    </p>

    <Link to="/">
      <button className="bg-pink-500 px-6 py-3 text-white mt-6 hover:bg-pink-700 duration-100 rounded-md">
        Back
      </button>
    </Link>
  </div>
  <div className="grid md:grid-cols-4  grid-cols-1">
    {list.map((item, index) => (
      <Card key={item.id} item={item} />
    ))}
  </div>
</div>

    </>
  )
}

export default Course
