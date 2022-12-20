import Image from 'next/image';

const SkillItem = ({ imageUrl, title }) => (
  <li className="p-6 shadow-xl rounded-xl cursor-default hover:scale-105 ease-in duration-300">
    <div className="grid grid-cols-2 gap-4 justify-center items-center">
      <div className="m-auto">
        <Image src={`/../public/assets/skills/${imageUrl}`} width="64" height="64" alt="/" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3>{title}</h3>
      </div>
    </div>
  </li>
);

export default SkillItem;
