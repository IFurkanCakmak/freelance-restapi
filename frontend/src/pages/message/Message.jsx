import React from "react";
import "./Message.scss";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import  newRequest from "../../utils/newRequest"

const Message = () => {
  const { id } = useParams();
  const currentUser =JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) =>{
      return newRequest.post(`/messages`, message);
    },

    onSuccess:()=>{
      queryClient.invalidateQueries(["messages"])
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault() /* preventDefault is used for not refresh the page */
mutation.mutate({
  conversationId:id,
  desc:e.target[0].value,
});
e.target[0].value= "";
  };

  return (
    <div className="message">
      <div className="container">
        <span className="littleCat">
          <Link to="/messages" className="link">
            MESAJLAR
          </Link>{" "}
          &gt; 
        </span>
        {isLoading ? (
          "loading"
        ) : error ? (
          "Something went wrong"
        ) : (
          <div className="messages">
         {data.map((m)=> (

           <div className={m.userId === currentUser._id ? "seller item" :"item"} key={m._id}>
              <img
                src="/images/noimage.jpg"
                alt=""
              />
              <p>
            {m.desc}
              </p>
            </div>
            )) }
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea
            type="text"
            
            placeholder="Write a message"
            cols="30"
            rows="10"
         />
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
