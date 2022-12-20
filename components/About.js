import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => (
  <section id="about" className="w-full md:h-screen p-2 flex items-center py-16">
    <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
        <h2 className="py-4">Who I am</h2>
        <p className="py-2 text-gray-600">Hello, my name is Abdelmejid Oumer and I am a full-stack developer with a specialty in JavaScript, React, Redux, and Ruby on Rails.</p>
        <p className="py-2 text-gray-600">&quot;I&apos;m currently completing coursework at Microverse, a remote software development program that allows developers from all over the world to pair-program and build projects together. I&apos;ve spent the last several months completely immersed in remote development, building everything from landing pages to Rails APIs.&quot;, working remotely and asynchronously with people across five different time zones.</p>
        <p className="py-2 text-gray-600">My latest work experience was in the academic industry, specifically, at Wollo University in Ethiopia, where I focused on teaching object-oriented programming and building dynamic websites. I have received several accolades for having participated and become top three in building apps and coding challenges with other universities and was the best in terms of delivering clean code.</p>
        <Link href="/#projects" className="py-2 text-gray-600 underline cursor-pointer">Check out my latest projects.</Link>
      </div>
      <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <Image src={AboutImg} className="rounded-xl" alt="/" />
      </div>
    </div>
  </section>
);

export default About;
