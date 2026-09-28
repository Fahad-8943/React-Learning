import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function UserHeader() {
  const [listStatus, setListStatus] = useState(false)

  return (
    <>
      <div className='grid grid-cols-3 p-3'>
        <div className='flex items-center'>
          <img src="https://bookstore-wine-nu.vercel.app/logo.png" alt="" />
          <h1 className='text-3xl font-bold ms-3 md:hidden'>BOOKSTORE</h1>
        </div>
        <div className='md:flex items-center justify-center hidden'>
          <h1 className='text-3xl font-bold'>BOOKSTORE</h1>
        </div>
        <div className='md:flex justify-end gap-5 items-center hidden'>
          <FontAwesomeIcon icon={faInstagram} className='text-2xl' />
          <FontAwesomeIcon icon={faTwitter} className='text-2xl' />
          <FontAwesomeIcon icon={faFacebook} className='text-2xl' />
          <Link className='border border-black rounded py-2 px-3'> <FontAwesomeIcon icon={faUser} /> Login</Link>
        </div>
      </div>
      <nav className='bg-black text-white font-bold p-3 md:flex item-center justify-center '>

        <div className='flex justify-between items-center w-full md:hidden'>
          <button onClick={() => setListStatus(!listStatus)}>
            <FontAwesomeIcon icon={faBars} className='text-2xl' />
          </button>
          <Link className='border border-white rounded py-2 px-3'> <FontAwesomeIcon icon={faUser} /> Login</Link>
        </div>

        <div className={listStatus ? 'flex flex-col gap-5 mt-2 my-2' : 'md:flex hidden'}>
          <Link to={'/'} className='mx-4'>Home</Link>
          <Link to={'/all-books'} className='mx-4'>Books</Link>
          <Link to={'/contact'} className='mx-4'>Contact</Link>
        </div>


      </nav>
    </>
  )
}

export default UserHeader