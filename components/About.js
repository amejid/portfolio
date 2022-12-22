import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/mypic.webp';

const About = () => (
  <section id="about" className="w-full md:h-screen p-2 flex items-center py-16">
    <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
        <h2 className="py-4">Who I am</h2>
        <p className="py-2 text-gray-600">Hi there!</p>
        <p className="py-2 text-gray-600">As a full-stack developer specializing in React and Rails, I am skilled in creating dynamic and responsive web applications that provide a seamless user experience. I have extensive experience with React on the front end, which allows me to build interactive and engaging user interfaces, and Rails on the back end, which enables me to create and manage the server side of web applications. </p>
        <p className="py-2 text-gray-600">I am comfortable working with numerous tools and technologies, including version control systems like Git, and own a strong foundation in computer science concepts such as algorithms and data structures. I am also a proactive learner, constantly seeking to improve my skills and stay up-to-date with the latest industry trends. </p>
        <p className="py-2 text-gray-600">Overall, my combination of technical skills and ability to deliver high-quality solutions make me an asset to any team working on web development projects.</p>
        <Link href="/#projects" className="py-2 text-gray-600 underline cursor-pointer">Check out my latest projects.</Link>
      </div>
      <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <Image src={AboutImg} className="rounded-xl" alt="/" />
      </div>
    </div>
  </section>
);

export default About;
