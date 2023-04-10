import React from "react";
import "./JobCard.scss";
import { Link } from "react-router-dom";

const JobCard = ({ item }) => {
  return (
    <Link to="/job/123" className="link">
      <div className="jobCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src="/images/star.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
        <img src="/images/heart.png" alt="" />
          <div className="price">
            <span>Starting at</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
