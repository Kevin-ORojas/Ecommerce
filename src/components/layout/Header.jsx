import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { changeIsShowCart } from '../../slices/cart.slice'

const Header = () => {
  const { token } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleClickChangeShowCart = () => {
    if(!token) return navigate("/login")
    dispatch(changeIsShowCart());
  };
  
  return (
    <section className=' bg-gray-900 pt-4 py-2 flex justify-between items-center md:border-[1px] '>
      <Link to="/">
        <h1 className='text-xl hover:text-red-400 text-blue-500 p-2 sm:pl-6 font-bold'>PagoPay </h1>
      </Link>

      <nav className='text-xl  flex md:gap-20 gap-8 px-5  '>
      <Link to="/login" >
          <i className=' hover:text-blue-500 hover:animate-pulse  text-gray-400 bx bx-user'></i>
          </Link>
          <Link to="/purchases">
          <i className='hover:text-blue-500 hover:animate-pulse text-gray-400 bx bx-box'></i>
          </Link>
          <button onClick={handleClickChangeShowCart}>
          <i className='hover:text-blue-500 hover:animate-pulse  text-gray-400 bx bx-cart'></i>
          </button>
      </nav>
    </section>
  )
}

export default Header