import exoticImg from '../public/assets/projects/exotic.webp';
import crownImg from '../public/assets/projects/crown.webp';
import pokemonImg from '../public/assets/projects/pokemon.webp';
import ytechImg from '../public/assets/projects/ytech.webp';
import ProjectItem from './ProjectItem';

const PROJECTS = [
  {
    title: 'Exotic Rentals',
    description: 'Exotic Rentals API is a backend API for a car rental application. It allows users to create an account, login, and book a car for a specific period of time. It also allows users to view all available cars, and view a specific car. It also allows users to view all bookings made by a specific user.',
    image: exoticImg,
    sourceUrl: 'https://github.com/NickEmma/car-rental-api',
    demoUrl: 'https://car-rental-k2ms0rho4-nickemma.vercel.app',
  },
  {
    title: 'Crown Store',
    description: 'A full-stack e-commerce web application built with React, Redux, and Firebase. It is a fully functional e-commerce website that allows users to browse products, add products to cart, and checkout. It also allows users to sign up, sign in, and sign out. It also allows users to make payments using Stripe.',
    image: crownImg,
    sourceUrl: 'https://github.com/amejid/crown-store',
    demoUrl: 'https://visionary-eclair-eaf65a.netlify.app',
  },
  {
    title: 'Pokemon Collection',
    description: 'Pokémon Cards Collection project is the application for showing top 20 pokemon, Users can see details of a specific Pokémon by clicking see-details button Users can give Stars to one or more Cards.Users can comment on pokemon card details.',
    image: pokemonImg,
    sourceUrl: 'https://github.com/ishpaul777/pokemon-cards-collection',
    demoUrl: 'https://ishpaul777.github.io/pokemon-cards-collection',
  },
  {
    title: 'YTech Landing',
    description: 'This a dynamic, two page, responsive website for a local tech startup named Y-Tech to showcase their services. The team section on the homepage is displayed dynamically from an array of objects using JavaScript.',
    image: ytechImg,
    sourceUrl: 'https://github.com/amejid/ytech-landing',
    demoUrl: 'https://amejid.github.io/ytech-landing',
  },
]

const Projects = () => (
  <section id="projects" className="w-full">
    <div className="max-w-[1240px] mx-auto px-2 py-16">
      <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
      <h2 className="py-4">What I&apos;ve Built</h2>
      <ul className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map(project => (
          <ProjectItem key={project.title} title={project.title} description={project.description} backgroundImg={project.image} sourceUrl={project.sourceUrl} demoUrl={project.demoUrl} />
        ))}
      </ul>
    </div>
  </section>
);

export default Projects;
