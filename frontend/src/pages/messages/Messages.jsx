import React from "react";
import "./Messages.scss";
import {Link} from "react-router-dom"

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Mada Faka",
    isSeller: true,
  };

  const message =
    "lorem ipsum dsjadhqwıdwqhıuqwdhuı hdwqhuıdhuı  dwıqhdoh wqıuıuh dıwqh ıuqw dhhıdw hıasdjıqwdıdqwııashıdhıasdhıashıdhıasdhııq";

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Client</th>
            <th>Last message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 day agp</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 day agp</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 day agp</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 day agp</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 day agp</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 day agp</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 day agp</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
