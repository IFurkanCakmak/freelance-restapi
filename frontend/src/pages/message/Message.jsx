import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="littleCat">
          <Link to="/messages" className="link">MESSAGES</Link> &gt; JOHN DOE &gt;
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Loreasmodomqwmodmqodomomwdqmod wqdnısagyudqwuygu gudwq jwdqııo
              hdwqhioodiwh qohsdssddwq ıqwdıuqwıdudqwubdwqbb
              bdsuqduıwqhudqhuwıdwhusadasdk odwjq ıdsadspdwqkpkdqwk kd wqkop
              kpowqkpodkop dk qkokwqd
            </p>
          </div>
          <div className="item seller">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Loreasmodomqwmodmqodomomwdqmod wqdnısagyudqwuygu gudwq jwdqııo
              hdwqhioodiwh qohsdssddwq ıqwdıuqwıdudqwubdwqbb
              bdsuqduıwqhudqhuwıdwhusadasdk odwjq ıdsadspdwqkpkdqwk kd wqkop
              kpowqkpodkop dk qkokwqd
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Loreasmodomqwmodmqodomomwdqmod wqdnısagyudqwuygu gudwq jwdqııo
              hdwqhioodiwh qohsdssddwq ıqwdıuqwıdudqwubdwqbb
              bdsuqduıwqhudqhuwıdwhusadasdk odwjq ıdsadspdwqkpkdqwk kd wqkop
              kpowqkpodkop dk qkokwqd
            </p>
          </div>
          <div className="item seller">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Loreasmodomqwmodmqodomomwdqmod wqdnısagyudqwuygu gudwq jwdqııo
              hdwqhioodiwh qohsdssddwq ıqwdıuqwıdudqwubdwqbb
              bdsuqduıwqhudqhuwıdwhusadasdk odwjq ıdsadspdwqkpkdqwk kd wqkop
              kpowqkpodkop dk qkokwqd
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Loreasmodomqwmodmqodomomwdqmod wqdnısagyudqwuygu gudwq jwdqııo
              hdwqhioodiwh qohsdssddwq ıqwdıuqwıdudqwubdwqbb
              bdsuqduıwqhudqhuwıdwhusadasdk odwjq ıdsadspdwqkpkdqwk kd wqkop
              kpowqkpodkop dk qkokwqd
            </p>
          </div>
          <div className="item seller">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Loreasmodomqwmodmqodomomwdqmod wqdnısagyudqwuygu gudwq jwdqııo
              hdwqhioodiwh qohsdssddwq ıqwdıuqwıdudqwubdwqbb
              bdsuqduıwqhudqhuwıdwhusadasdk odwjq ıdsadspdwqkpkdqwk kd wqkop
              kpowqkpodkop dk qkokwqd
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Loreasmodomqwmodmqodomomwdqmod wqdnısagyudqwuygu gudwq jwdqııo
              hdwqhioodiwh qohsdssddwq ıqwdıuqwıdudqwubdwqbb
              bdsuqduıwqhudqhuwıdwhusadasdk odwjq ıdsadspdwqkpkdqwk kd wqkop
              kpowqkpodkop dk qkokwqd
            </p>
          </div>
          <div className="item seller">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Loreasmodomqwmodmqodomomwdqmod wqdnısagyudqwuygu gudwq jwdqııo
              hdwqhioodiwh qohsdssddwq ıqwdıuqwıdudqwubdwqbb
              bdsuqduıwqhudqhuwıdwhusadasdk odwjq ıdsadspdwqkpkdqwk kd wqkop
              kpowqkpodkop dk qkokwqd
            </p>
          </div>
        </div>
        <hr/>
        <div className="write">
          <textarea
            name=""
            id=""
            placeholder="Write a message"
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
