import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/airbnb-logo.png'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Header(){
  return (
    <header className="sticky grid grid-cols-3 bg-white shadow-md top-0 p-5">
      {/* Left Side*/}
      <div className="relative flex items-center h-12 cursor-pointer my-auto">
        <Image
          src={Logo}
          layout="fill"
          objectFit="contain"
        />
      </div>
      {/* Search Bar */}
      <div className="flex items-center border-2 rounded-full md:shadow-md" >
        <input type="text" placeholder="Start your search" className="flex-grow pl-5 bg-transparent outline-none text-sm md:text-lg" />
        <AiOutlineSearch size={30} style={{ padding: "5px" }} className="hidden md:inline-flex md:mx-2 bg-[#FF5A5F] text-white rounded-full cursor-pointer "/>
      </div>
      {/* Right side */}
    </header>
  )
}