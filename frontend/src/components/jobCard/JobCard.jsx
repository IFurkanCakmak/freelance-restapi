import React from "react";
import "./JobCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const JobCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <Link to="/job/123" className="link">
      <div className="jobCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "sometghin went wrong "
          ) : (
            <div className="user">
              <img src={data.img || "/images/noimage.jpg"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            <img src="/images/star.png" alt="" />
            <span>{!isNaN(item.totalStars / item.starNumber)  &&  Math.round(item.totalStars / item.starNumber)}/5</span>
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
