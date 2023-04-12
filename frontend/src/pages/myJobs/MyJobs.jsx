import React from 'react'
import {Link} from "react-router-dom"
import "./MyJobs.scss"

const MyJobs = () => {
  return (
    <div className='myJobs'>
      <div className='container'>
        <div className='title'>
          <h1>Jobs</h1>
          <Link to="/add">
            <button>Add new job</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='image' src='/images/myjob.png' alt=''/>
            </td>
            <td>Job1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src='/images/delete.png' alt=''/>
            </td>
          </tr>
          <tr>
            <td>
              <img className='image' src='/images/myjob.png' alt=''/>
            </td>
            <td>Job1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src='/images/delete.png' alt=''/>
            </td>
          </tr>
          <tr>
            <td>
              <img className='image' src='/images/myjob.png' alt=''/>
            </td>
            <td>Job1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src='/images/delete.png' alt=''/>
            </td>
          </tr>
          <tr>
            <td>
              <img className='image' src='/images/myjob.png' alt=''/>
            </td>
            <td>Job1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src='/images/delete.png' alt=''/>
            </td>
          </tr>
          <tr>
            <td>
              <img className='image' src='/images/myjob.png' alt=''/>
            </td>
            <td>Job1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src='/images/delete.png' alt=''/>
            </td>
          </tr>
          <tr>
            <td>
              <img className='image' src='/images/myjob.png' alt=''/>
            </td>
            <td>Job1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src='/images/delete.png' alt=''/>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyJobs