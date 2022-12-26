import { useEffect, useState } from "react";
import styles from './Home.module.css';
import Content from "./Content";
import Dialog from "../component/Dialog";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [dDay, setDDay] = useState(0);
  const [contentIcons, setContentIcons] = useState([]);
  const [selectContent, setSelectContent] = useState(0);

  const contentsNum = 30; // 컨텐츠 개수

  // d-day 계산
  const calculateD_Day = () => {
    var now = new Date();
    var dday = new Date(2023, 0, 23);
    var gap = dday.getTime() - now.getTime();
    var result = Math.ceil(gap / (1000 * 60 * 60 * 24));
    //console.log(result);

    setDDay(result);
  }

  // contents icon setting
  const getContents = async() => {
    const open = process.env.PUBLIC_URL + "/img/open_icons/dessert_";
    const close = process.env.PUBLIC_URL + "/img/closed_icons/closed_dessert_"
    for(var i = 1; i <= contentsNum; i++) {
      var contentSrc;
      var openCheck = false;
      if((32-i) > dDay) {
        contentSrc = open + i + ".png";
        openCheck = true;
      }
      else {
        contentSrc = close + i + ".png";
      }
      const contentSet = {contentNum: i,
                          contentSrc: contentSrc,
                          openCheck: openCheck};

      setContentIcons((currentArray) => [...currentArray, contentSet]);
    }

    setLoading(false);
  }

  // content 페이지로 이동
  const goToContent = (contentNum, openCheck) => {
    if(openCheck) {
      console.log(contentNum + " open");
      setSelectContent(contentNum);

      var link = `/content/${contentNum}`;
      //location.href = link;
      //location.replace(link);

    }
    else {
      console.log(contentNum + " close");
    }
  }

  useEffect(() => {
    setContentIcons([]);
    calculateD_Day(); // 디데이 날짜 계산
    getContents();
  }, [dDay, selectContent]);

  
  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1> // 로딩 페이지
      ) : (
        // 메인 페이지
        <div className={styles.home}>
          {/* 제목 */}
          <div className={styles.title}>
            sent mary
          </div>

          {/* 메인 프레임 */}
          <div className={styles.mainFrame}>
            {/* 프레임 헤더 */}
            <img
              className={styles.frameHeader}
              alt="header"
              src={process.env.PUBLIC_URL + '/img/browser-header.png'} />

            {selectContent == 0 ?
              (<div>
                <div className={styles.dDay}>
                  D-{dDay}
                </div>

                <div className={styles.contentList}>
                  {contentIcons.map(contentIcon => (
                    <div
                      key={contentIcon.contentNum}
                      className={styles.contentSet}
                      onClick={(() => 
                        goToContent(contentIcon.contentNum, contentIcon.openCheck)
                      )}>
                      <img
                        className={styles.contentIcon}
                        alt="content"
                        src={contentIcon.contentSrc} />
                      
                      <span className={styles.contentNum}>
                        {contentIcon.contentNum}
                      </span>
                    </div>
                  ))}
                </div>
                <div className={styles.sources}>
                  <a href="[https://kr.freepik.com/free-vector/dessert-icons-in-pixel-art_29012360.htm](https://kr.freepik.com/free-vector/dessert-icons-in-pixel-art_29012360.htm)">Freepik</a>
                  <a href="[https://kr.freepik.com/free-vector/drinks-icons-in-pixel-art_29012370.htm#from_view=detail_serie](https://kr.freepik.com/free-vector/drinks-icons-in-pixel-art_29012370.htm#from_view=detail_serie)">Freepik</a>
                  <a href="[https://kr.freepik.com/free-vector/ice-cream-icons-in-pixel-art_29012357.htm#from_view=detail_serie](https://kr.freepik.com/free-vector/ice-cream-icons-in-pixel-art_29012357.htm#from_view=detail_serie)">Freepik</a>
                  <a href="[https://kr.freepik.com/free-vector/fruit-icons-in-pixel-art_29012368.htm#from_view=detail_serie](https://kr.freepik.com/free-vector/fruit-icons-in-pixel-art_29012368.htm#from_view=detail_serie)">Freepik</a>
                </div>
              </div>
              )
              : (<Content contentNum={selectContent}/>)}
          </div>
        </div>
      )}
    </div>
  );
}
/* 
{selectContent == 0 ?
          (console.log("close"))
          : (<Dialog />)}
*/

//npm run deploy
export default Home;