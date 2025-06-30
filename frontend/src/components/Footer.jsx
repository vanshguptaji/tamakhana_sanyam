import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Footer = () => {
  const { navigate } = useContext(ShopContext)

  const handleNavigation = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <div className='mt-8 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm text-black'>

        <div>
            <div className='font-sans text-4xl font-bold mb-5'>TAMAKHANA</div>
            <nav className='flex flex-col gap-2'>
              <NavLink 
                to="/" 
                onClick={() => handleNavigation('/')}
                className={({ isActive }) =>
                  `hover:text-gray-600 cursor-pointer transition-colors ${
                    isActive ? 'underline font-medium' : ''
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/collection" 
                onClick={() => handleNavigation('/collection')}
                className={({ isActive }) =>
                  `hover:text-gray-600 cursor-pointer transition-colors ${
                    isActive ? 'underline font-medium' : ''
                  }`
                }
              >
                Collection
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={() => handleNavigation('/about')}
                className={({ isActive }) =>
                  `hover:text-gray-600 cursor-pointer transition-colors ${
                    isActive ? 'underline font-medium' : ''
                  }`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={() => handleNavigation('/contact')}
                className={({ isActive }) =>
                  `hover:text-gray-600 cursor-pointer transition-colors ${
                    isActive ? 'underline font-medium' : ''
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-black'>
                <li className="hover:text-gray-600 cursor-pointer transition-colors">Delivery</li>
                <li className="hover:text-gray-600 cursor-pointer transition-colors">Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-black'>
                <li>+1-212-456-7890</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ tamakhana.com - All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
