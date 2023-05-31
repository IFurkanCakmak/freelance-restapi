import React from "react";
import { Link } from "react-router-dom";
import "./MyJobs.scss";
import getCurrentUser from "../../utils/getCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const MyJobs = () => {
  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["myJobs"],
    queryFn: () =>
      newRequest.get(`/jobs?userId=${currentUser._id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/jobs/${id}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["myJobs"]);
    },
  });

  const handleDelete = (id) =>  {
    mutation.mutate(id);
  }

  return (
    <div className="myJobs">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="container">
          <div className="title">
            <h1>İlanlar</h1>
            {currentUser.isSeller && (
              <Link to="/add">
                <button>Yeni ilan ekle</button>
              </Link>
            )}
          </div>
          <table>
            <tr>
              <th>Kapak resmi</th>
              <th>Başlık</th>
              <th>Fiyat</th>
              <th>Sipariş sayısı</th>
              <th>İşlem</th>
            </tr>
          {data.map((job)=>(

            <tr key={job._id}>
              <td>
                <img className="image" src={job.cover} alt="" />
              </td>
              <td>{job.title}</td>
              <td>{job.price}</td>
              <td>{job.sales}</td>
              <td>
                <img
                  className="delete"
                  src="/images/delete.png"
                  alt=""
                  onClick={()=>handleDelete(job._id)}
                />
              </td>
            </tr>

          )) }
          </table>
        </div>
      )}
    </div>
  );
};

export default MyJobs;
