import React from 'react'
import {Link} from "react-router-dom"
import "./Orders.scss"

const Orders = () => {
  
  const currentUser = {
    id:1,
    username:"Mada Faka",
    isSeller:true,
  };

  return (
    <div className='orders'>
      <div className='container'>
        <div className='title'>
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
             {/*if current user seller displays clinet if not displays seller  */}
            <th>{currentUser?.isSeller ? "Client" :"Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className='image' src='/images/myjob.png' alt=''/>
            </td>
            <td>Job1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='contact' src='/images/contact.png' alt=''/>
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
              <img className='contact' src='/images/contact.png' alt=''/>
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
              <img className='contact' src='/images/contact.png' alt=''/>
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
              <img className='contact' src='/images/contact.png' alt=''/>
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
              <img className='contact' src='/images/contact.png' alt=''/>
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
              <img className='contact' src='/images/contact.png' alt=''/>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders