import SkillItem from './SkillItem';

const SKILLS = [
  {
    imageUrl: 'react.png',
    title: 'React',
  },
  {
    imageUrl: 'redux.png',
    title: 'Redux',
  },
  {
    imageUrl: 'tailwind.png',
    title: 'Tailwind',
  },
  {
    imageUrl: 'graphql.png',
    title: 'GraphQL',
  },
  {
    imageUrl: 'rails.png',
    title: 'Ruby on Rails',
  },
  {
    imageUrl: 'postgresql.png',
    title: 'PostgreSQL',
  },
  {
    imageUrl: 'node.png',
    title: 'Node',
  },
  {
    imageUrl: 'mongo.png',
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
