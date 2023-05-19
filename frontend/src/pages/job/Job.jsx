import React from "react";
import "./Job.scss";
import Slider from "infinite-react-carousel";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import Reviews from "../../components/reviews/Reviews";

function Job() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["job"],
    queryFn: () =>
      newRequest.get(`/jobs/single/${id}`).then((res) => {
        return res.data;
      }),
  });


  const userId = data?.userId;
  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),

      enabled: !!userId,  /* runs this query only when userId exists */
  });

  return (
    <div className="job">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="container">
          <div className="left">
            <span className="littleCat">Jobook &gt; Web Design</span>
            <h1>{data.title}</h1>

            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong"
            ) : (
              <div className="user">
                <img
                  className="profilePhoto"
                  src={dataUser.img || "/images/noimage.jpg"}
                  alt=""
                />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/images/star.png" alt="" key={i} />
                      ))}
                    <span>
                      {Math.round(data.totalStars / data.starNumber)}/5
                    </span>
                  </div>
                )}
              </div>
            )}
            <Slider slidesToShow={1} arrowScroll={1} className="slider">
              {data.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
            </Slider>
            <h2>About This Work</h2>
            <p>{data.desc}</p>
            
              
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong"
            ) : (<div className="seller">
              <h2>About the seller</h2>
              <div className="user">
                <img
                  src={dataUser.img || "/images/noimage.jpg"}
                  alt=""
                />
                <div className="info">
                  <span>{dataUser.username}</span>
                  {!isNaN(data.totalStars / data.starNumber) && (
                    <div className="stars">
                      {Array(Math.round(data.totalStars / data.starNumber))
                        .fill()
                        .map((item, i) => (
                          <img src="/images/star.png" alt="" key={i} />
                        ))}
                      <span>
                        {Math.round(data.totalStars / data.starNumber)}/5
                      </span>
                    </div>
                  )}
                  <button>Message</button>
                </div>
              </div>
              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    <span className="desc">{dataUser.country}</span>
                  </div>
                  <div className="item">
                    <span className="title">Member since</span>
                    <span className="desc">Aug 2022</span>
                  </div>
                  <div className="item">
                    <span className="title">Avg. response time</span>
                    <span className="desc">4 hours</span>
                  </div>
                  <div className="item">
                    <span className="title">Last delivery</span>
                    <span className="desc">1 day</span>
                  </div>
                  <div className="item">
                    <span className="title">Languages</span>
                    <span className="desc">English</span>
                  </div>
                </div>
                <hr />
                <p>
                {dataUser.desc}
                </p>
              </div>
            </div>
            )}
            <Reviews jobId={id}/> {/* this {id} comes from useparams (to detect which job insert's reviews will display) */}
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>$ {data.price}</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/images/clock.png" alt="" />
                <span>{data.deliveryTime} Days delivery</span>
              </div>
              <div className="item">
                <img src="/images/recycle.png" alt="" />
                <span>{data.revisionNumber} revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/images/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Job;
