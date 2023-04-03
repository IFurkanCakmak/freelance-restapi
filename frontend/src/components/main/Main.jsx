import React from 'react'
import "./Main.scss"

 export const Main = () => {
  return (
    <div className='main'>
    
        <div className='container'>
            <div className='base'>
                <h1>Find the perfect freelance services for your business</h1>
                <div className='search'>
                    <div className='searchInput'>
                        <img src='/images/search.png' alt=''/>
                        <input type='text' placeholder="Search for what you need"></input>
                    </div>
                    <button>Search</button>
                </div>
                <div className='popular'>
                    <button>Web Design</button>
                    <button>Shopify</button>
                    <button>SEO</button>
                    <button>Content</button>
                    <button>Music</button>
                </div>
            </div>
        </div>
    </div>
  )
}
