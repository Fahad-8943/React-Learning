import React from 'react'
import UserHeader from '../components/UserHeader'


function Home() {
  return (
    <div>
      <UserHeader />
      <div className='h-100 bg-[url(/book.jpg)] bg-cover bg-center'>
      <h1>Wonderfull Gifts</h1>
      <p>Give your family and friends a book</p>
      <input type="text" placeholder='Search Books' />

      </div>
    </div>
  )
}

export default Home