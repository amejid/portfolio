import exoticImg from '../public/assets/projects/exotic.webp'
import crownImg from '../public/assets/projects/crown.webp'
import pokemonImg from '../public/assets/projects/pokemon.webp'
import ytechImg from '../public/assets/projects/ytech.webp'

import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <section id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5661e5]'>Projects</p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem title='Property Finder' backgroundImg={exoticImg} projectUrl='/property' />
          <ProjectItem title='Property Finder' backgroundImg={crownImg} projectUrl='/property' />
          <ProjectItem title='Property Finder' backgroundImg={pokemonImg} projectUrl='/property' />
          <ProjectItem title='Property Finder' backgroundImg={ytechImg} projectUrl='/property' />
        </div>
      </div>
    </section>
  )
}

export default Projects;