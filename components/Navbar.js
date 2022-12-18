import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {useEffect, useState} from "react";

const NAV_LINKS = [
  {
    to: '/#home',
    text: 'Home'
  },
  {
    to: '/#about',
    text: 'About'
  },
  {
    to: '/#skills',
    text: 'Skills'
  },
  {
    to: '/#projects',
    text: 'Projects'
  },
  {
    to: '/#contact',
    text: 'Contact'
  }
]

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow);
  }, [])

  const handleNav = () => {
    setNav((prev) => !prev);
  }

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src="/../public/assets/navLogo.png" alt='' width='125' height='50'/>
        <div>
          <ul className='hidden md:flex'>
            {NAV_LINKS.map(navLink => (
              <li key={navLink.to} className='ml-10 text-sm uppercase hover:border-b'>
                <Link href={navLink.to}>{navLink.text}</Link>
              </li>
            ))}
          </ul>
          <div onClick={handleNav} className='cursor-pointer md:hidden'>
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Image src='/../public/assets/navLogo.png' alt='/' width='87' height='35'/>
              </Link>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Let&apos;s build something together</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <li className='py-4 text-sm'>
                <Link href='/'>Home</Link>
              </li>
              <li className='py-4 text-sm'>
                <Link href='/'>About</Link>
              </li>
              <li className='py-4 text-sm'>
                <Link href='/'>Skills</Link>
              </li>
              <li className='py-4 text-sm'>
                <Link href='/'>Projects</Link>
              </li>
              <li className='py-4 text-sm'>
                <Link href='/'>Contact</Link>
              </li>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s Connect</p>
              <ul className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <li
                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                  <FaLinkedinIn/>
                </li>
                <li
                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                  <FaGithub/>
                </li>
                <li
                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                  <AiOutlineMail/>
                </li>
                <li
                  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                  <BsFillPersonLinesFill/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;