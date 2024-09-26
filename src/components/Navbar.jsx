import React from 'react'
import { stules } from '../utils/stules'
import { navigationLinks } from '../utils/constats'
import { logo } from '../assets/images'

const Navbar = () => {
  return (
    <div className={`w-full py-5 ${stules.flexBetween}`}>
      {/* logo start  */}
      <div className={`${stules.heading}`}>
        <img src={logo} alt="images logo" className='w-[130px] h-[80px]' />
      </div>
      {/* Navigation links start */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((navigationLinks, index) => (
          <li className={`text-white font-poppins font-normal cursor-pointer text-[16px] ${index === navigationLinks.length -1 ? "mr-0" : "mr-10" }`} key={navigationLinks.id}>
            {navigationLinks.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
