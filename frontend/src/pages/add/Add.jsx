import React, { useReducer, useState } from "react";
import "./Add.scss";
import { jobReducer, INITIAL_STATE } from "../../reducers/jobReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import {useNavigate} from "react-router-dom"

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(jobReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        /* this promise all using because we are sending multiple uploads */
        [...files].map(async (file) => {
          /* [...files] is for when directly sending them they are set as filelis but we can not make multiple uploads to fileList so we transofrm that from fileList to javascirpt array like that */
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate()

  /* console.log(state) */

  const queryClient =useQueryClient()

  const mutation = useMutation({
    mutationFn: (job) =>{
      return newRequest.post("/jobs" , job);
    },

    onSuccess:()=>{
      queryClient.invalidateQueries(["myJobs"])
    }
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    mutation.mutate(state);
    navigate("/myjobs")
  }

  return (
    <div className="add">
      <div className="container">
        <h1>Yeni iş ilanı ekle</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Başlık</label>
            <input
              type="text"
              name="title"
              placeholder="Şunu yapabilirim ......"
              onChange={handleChange}
            />
            <label htmlFor="">Kategori</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="design">Grafik Tasarım</option>
              <option value="digital">Dijital Pazarlama</option>
              <option value="content">İçerik Üretimi</option>
              <option value="web">Web Geliştirme</option>
              <option value="video">Video ve Animasyon</option>
              <option value="music">Müzik ve Seslendirme</option>
              <option value="seo">SEO</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Kapak Resmi</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="">Fotoğraflarınızı yükleyin</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>{uploading ? "yükleniyor" : "Yükle"}</button>
            </div>
            <label htmlFor="">Açıklama</label>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="16"
              placeholder="Müşterilerinizin fikir sahibi olması için kısa bir açıklama ekleyin"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Oluştur</button>
          </div>
          <div className="right">
            <label htmlFor="">Hizmet Başlığı</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="e.g. Web sayfası tasarımı"
              onChange={handleChange}
            />
            <label htmlFor="">Kısa Açıklama</label>
            <textarea
              name="shortDesc"
              onChange={handleChange}
              id=""
              placeholder="Tek bir cümle ile hizmetinizi açıklayın"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="">Teslimat Süresi(e.g 5 gün)</label>
            <input type="number" name="deliveryTime" onChange={handleChange} />
            <label htmlFor="">Revize Hakkı</label>
            <input type="number" name="revisionNumber" onChange={handleChange} />
            <label htmlFor="">Özellik ekleyin</label>
            <form action="" className="add" onSubmit={handleFeature}>
              <input type="text" placeholder="e.g. Sayfa Tasarımı" />
              <button type="submit">Ekle</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map ((f) =>(
                <div className="item" key={f}>
                <button onClick={()=>dispatch({type:"REMOVE_FEATURE", payload:f})}> {/* The dispatch function accepts an object that represents the type of action we want to execute when it is called. */}
                  {f}
                  <span>X</span>
                </button>
              </div>
              ))}
            </div>

            <label htmlFor="">Fiyat</label>
            <input type="number" name="price" onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
