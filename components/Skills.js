import reactLogo from '../public/assets/skills/react.png';
import reduxLogo from '../public/assets/skills/redux.png';
import tailwindLogo from '../public/assets/skills/tailwind.png';
import graphLogo from '../public/assets/skills/graphql.png';
import railsLogo from '../public/assets/skills/rails.png';
import postLogo from '../public/assets/skills/postgresql.png';
import nodeLogo from '../public/assets/skills/node.png';
import mongoLogo from '../public/assets/skills/mongo.png';

import SkillItem from './SkillItem';

const SKILLS = [
  {
    imageUrl: reactLogo,
    title: 'React',
  },
  {
    imageUrl: reduxLogo,
    title: 'Redux',
  },
  {
    imageUrl: tailwindLogo,
    title: 'Tailwind',
  },
  {
    imageUrl: graphLogo,
    title: 'GraphQL',
  },
  {
    imageUrl: railsLogo,
    title: 'Ruby on Rails',
  },
  {
    imageUrl: postLogo,
    title: 'PostgreSQL',
  },
  {
    imageUrl: nodeLogo,
    title: 'Node',
  },
  {
    imageUrl: mongoLogo,
    title: 'MongoDB',
  },
];

const Skills = () => (
  <section id="skills" className="w-full lg:h-screen p-2">
    <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
      <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
      <h2 className="py-4">What I Can Do</h2>
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{SKILLS.map((skill) => <SkillItem key={skill.title} imageUrl={skill.imageUrl} title={skill.title} />)}</ul>
    </div>
  </section>
);

export default Skills;
