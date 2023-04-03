import React from 'react'
import './Home.scss'
import { Main } from '../../components/main/Main'
import Slides from '../../components/slides/Slides';
import { cards } from '../../data'
import CatCard from '../../components/catCard/CatCard'
import DiscoverProducts from '../../components/discoverProducts/DiscoverProducts';


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
    </div>
  )
};

export default Home
