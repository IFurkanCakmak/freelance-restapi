import React, { useEffect, useRef, useState } from "react";
import "./Jobs.scss";
import JobCard from "../../components/jobCard/JobCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import { useLocation } from "react-router-dom";



const Jobs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: () =>
      newRequest
        .get(
          `/jobs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  },[sort]); /* refetch jobs whenever this sort changes */

  const apply = () =>{
    refetch()
  };

  

  return (
    <div className="jobs">
      <div className="container">
          <span className="littlecat">Jobook &gt; Keşfedin </span>
        <h1>İlanlar</h1>
        <p>Freelancerları keşfedin</p>
        <div className="menu">
          <div className="left">
            <span>Fiyat : </span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Uygula</button>
          </div>
          <div className="right">
            <span className="sortBy">Sırala : </span>
            <span className="sortType">
              {sort === "sales" ? "Puana göre" : "En güncel"}
            </span>
            <img
              src="./images/down.png"
              alt=""
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>En güncel</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Puana göre</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong"
            : data.map((job) => <JobCard key={job._id} item={job} />)}
        </div>
      </div>
    </div>
  );
};
export default Jobs;
