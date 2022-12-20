import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => (
  <section id="home" className="w-full h-screen text-center">
    <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
      <div>
        <p className="uppercase text-sm tracking-widest text-gray-600">LET&apos;S BUILD SOMETHING TOGETHER</p>
        <h1 className="py-4 text-gray-700">
          Hi, I&apos;m
          {' '}
          <span className="text-[#5651e5]">Abdelmejid</span>
          <br />
          A Full-Stack Web Developer
        </h1>
        <p className="py-4 text-lg text-gray-600 max-w-[70%] m-auto">I&apos;m a full-stack developer who specializes in developing web applications and APIs. I have experience in all aspects of software development such as design, coding, debugging, testing and maintenance. With me on your team, you can be sure that your products are built to the highest standards and delivered on time.</p>
        <ul className="flex items-center justify-between max-w-[330px] m-auto py-4">
          <li
            className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500"
          >
            <FaLinkedinIn />
          </li>
          <li
            className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500"
          >
            <FaGithub />
          </li>
          <li
            className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500"
          >
            <AiOutlineMail />
          </li>
          <li
            className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500"
          >
            <BsFillPersonLinesFill />
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Main;
