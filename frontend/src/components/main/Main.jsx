import React from 'react'
import "./Main.scss"

export const Main = () => {
  return (
    <div className='main'>
    
        <div className='container'>
            <div className='left'>
                <h1>Find the perfect freelance services for your business</h1>
                <div className='search'>
                    <div className='searchInput'>
                        <img src='/images/search.png' alt=''/>
                        <input type='text' placeholder="Search for what you need"></input>
                    </div>
                    <button>Search</button>
                </div>
                <div className='popular'>
                    <button>Web Development</button>
                    <button>Design</button>
                    <button>SEO</button>
                    <button>Marketing</button>
                </div>
            </div>
        </div>
    </div>
  )
}
