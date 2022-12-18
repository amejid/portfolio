import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillPersonLinesFill} from "react-icons/bs";

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>LET&apos;S BUILD SOMETHING TOGETHER</p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&apos;m <span className='text-[#5651e5]'>Abdelmejid</span><br/>
            A Full-Stack Web Developer
          </h1>
          <h2 className='py-2 text-gray-700'></h2>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>

          </p>
          <ul className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <li
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
              <FaLinkedinIn/>
            </li>
            <li
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
              <FaGithub/>
            </li>
            <li
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
              <AiOutlineMail/>
            </li>
            <li
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
              <BsFillPersonLinesFill/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main