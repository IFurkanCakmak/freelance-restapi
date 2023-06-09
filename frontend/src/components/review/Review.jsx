import React, { useState } from "react";
import "./Review.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });



  const [active, setActive] = useState(false);
  const like = () => {
    setActive(!active);
  };

  const [normal, setNormal] = useState(false);
  const dislike = () => {
    setNormal(!normal);
  };



  return (
    <div className="review">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something wwnet wrong"
      ) : (
        <div className="user">
          <img
            className="profilePhoto"
            src={data.img || "/images/noimage.jpg"}
            alt=""
          />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/images/star.png" alt="" key={i} />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Bu yorum faydalı oldu mu?</span>
        <button
          onClick={like}
          className={active ? "green-btn" : "white-btn"}
        >
          <img src="/images/like.png" />
        </button>

        <span>Evet</span>
        <button  onClick={dislike}
          className={normal? "red-btn" : "white-btn"}>
        <img src="/images/dislike.png" />
        </button>
        
        <span>Hayır</span>
      </div>
    </div>
  );
};

export default Review;
