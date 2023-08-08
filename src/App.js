import { useRef, useState } from "react";
import { getYoutubeVideoId } from "./id2Url";
import axios from "axios";
function App() {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    const youtubeId = getYoutubeVideoId(inputUrlRef.current.value);

    const options = {
      method: "get",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      headers: {
        "X-RapidAPI-Key": "8ba375b17emshc530d09d1a6b6e0p1770d6jsn2fec0f979250",
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
      params: {
        id: youtubeId,
      },
    };
    axios(options)
      .then((res) => setUrlResult(res.data.link))
      .catch((err) => console.log(err));

    inputUrlRef.current.value = "";
  };
  return (
    <div className="app">
      <span className="logo">youtube2mp3</span>
      <section className="content">
        <h1 className="content_title">YouTube to MP3 converter</h1>
        <p className="content_description">
          Transform YouTube videos into MP3 in just few clicks!
        </p>

        <form onSubmit={handleSubmit} className="form">
          <input
            ref={inputUrlRef}
            className="form_input"
            placeholder="Paste a youtube video URL link..."
            type="text"
          />
          <button type="submit" className="form_button">
            Convert
          </button>
        </form>
        {urlResult ? (
          <a
            target="_blank"
            href={urlResult}
            rel="noreferrer"
            className="download_btn"
          >
            Download MP3
          </a>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default App;
