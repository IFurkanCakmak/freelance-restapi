import React from 'react'
import './Home.scss'
import { Main } from '../../components/main/Main'
import Slides from '../../components/slides/Slides';
import { cards,projects } from '../../data'
import CatCard from '../../components/catCard/CatCard'
import DiscoverProducts from '../../components/discoverProducts/DiscoverProducts';
import SeeFreelancers from '../../components/seeFreelancers/SeeFreelancers';
import ProjectCard from '../../components/projectCard/ProjectCard';



const Home = () => {
  return (
    <div className='home'>
      <Main/>
      <DiscoverProducts/>
      <Slides slidesToShow={5} arrowsScroll={1}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slides>
      <SeeFreelancers/>
       <Slides slidesToShow={4} arrowsScroll={4}>
       {projects.map(card=>(
          <ProjectCard key={card.id} item={card}/>
        ))}
       
      </Slides>
    </div>
  )
};

export default Home;
