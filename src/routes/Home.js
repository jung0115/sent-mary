import { useEffect, useState } from "react";
import './Home.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [contentIcons, setContentIcons] = useState([]);

  const contentsNum = 30; // 컨텐츠 개수

  const getContents = async() => {
    //const open = "dessert_";
    const close = "img/closed_icons/closed_dessert_"
    for(var i = 1; i <= contentsNum; i++) {
      //const openSrc = open + i + ".png";
      const contentSrc = close + i + ".png";
      const contentSet = {contentNum: i, contentSrc: contentSrc};

      setContentIcons((currentArray) => [...currentArray, contentSet]);
    }

    setLoading(false);
  }

  useEffect(() => {
    setContentIcons([]);
    getContents();
  }, []);
  
  //console.log(movies);
  return (
    <div className="container">
      {loading ? (
        <h1>Loading...</h1> // 로딩 페이지
      ) : (
        // 메인 페이지
        <div className="home">
          {/* 제목 */}
          <div className="title">
            sent mary
          </div>

          {/* 메인 프레임 */}
          <div className="main-frame">
            {/* 프레임 헤더 */}
            <img
              className="frame-header"
              alt="header"
              src="img/browser-header.png" />

            <div className="d-day">
              D-{contentsNum}
            </div>

            <div className="content-list">
              {contentIcons.map(contentIcon => (
                <div className="content-set">
                  <img
                    className="content-icon"
                    alt="content"
                    src={contentIcon.contentSrc} />
                  
                  <span className="content-num">
                    {contentIcon.contentNum}
                  </span>
                </div>
              ))}
            </div>

            <div className="sources">
              <a href="[https://kr.freepik.com/free-vector/dessert-icons-in-pixel-art_29012360.htm](https://kr.freepik.com/free-vector/dessert-icons-in-pixel-art_29012360.htm)">Freepik</a>
              <a href="[https://kr.freepik.com/free-vector/drinks-icons-in-pixel-art_29012370.htm#from_view=detail_serie](https://kr.freepik.com/free-vector/drinks-icons-in-pixel-art_29012370.htm#from_view=detail_serie)">Freepik</a>
              <a href="[https://kr.freepik.com/free-vector/ice-cream-icons-in-pixel-art_29012357.htm#from_view=detail_serie](https://kr.freepik.com/free-vector/ice-cream-icons-in-pixel-art_29012357.htm#from_view=detail_serie)">Freepik</a>
              <a href="[https://kr.freepik.com/free-vector/fruit-icons-in-pixel-art_29012368.htm#from_view=detail_serie](https://kr.freepik.com/free-vector/fruit-icons-in-pixel-art_29012368.htm#from_view=detail_serie)">Freepik</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default Home;