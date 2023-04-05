import React, { useState } from 'react'
import './Jobs.scss'
import { jobs } from '../../data';
import JobCard from "../../components/jobCard/JobCard"

 const Jobs = () => {

  const [sort, setSort]= useState("sales");
  const [open , setOpen] =useState(false)


  const reSort=(type)=>{
    setSort(type)
    setOpen(false)
  }

  return (
    <div className='jobs'>
      <div className='container'>
        <span className='littlecat'>Jobook - Web Design</span>
        <h1>Web Developers</h1>
        <p>Explore the freelancers</p>
        <div className='menu'>
          <div className='left'>
            <span>Budget : </span>
            <input type='text' placeholder='min'/>
            <input type='text' placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className='right'>
            <span className='sortBy'>Sort : </span>
            <span className='sortType'>{sort=== "sales" ? "Best Selling" : "Latest"}</span>
            <img src='./images/down.png' alt='' onClick={()=>setOpen(!open)}/>
            {open &&(
              <div className='rightMenu'>
              {sort ==="sales" ?<span onClick={()=>reSort("createdAt")}>Latest</span>
              :<span onClick={()=>reSort("sales")}>Best Selling</span>}
            </div>
            )}
            
          </div>
        </div>
        <div className='cards'>
          {jobs.map(job=>(
            <JobCard key={job.id} item={job}/>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Jobs