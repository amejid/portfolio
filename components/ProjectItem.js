import Image from 'next/image';

const ProjectItem = ({ title, backgroundImg, sourceUrl, demoUrl, description }) => (
  <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
    <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt="/" />
    <div className="hidden w-[80%] group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
      <p className="pb-4 pt-2 text-white text-center">{description}</p>
      <div className='grid grid-cols-2 gap-4 mx-16'>
        <a href={sourceUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">SOURCE</p>
        </a>
        <a href={demoUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">LIVE</p>
        </a>
      </div>
    </div>
  </div>
);

export default ProjectItem;
