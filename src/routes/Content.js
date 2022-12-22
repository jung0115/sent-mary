// content 내부 페이지
import { useEffect, useState } from "react";
import styles from './Content.module.css';

const Content = () => {
  const [loading, setLoading] = useState(false);
  const [dDay, setDDay] = useState(0);
  const [contentIcons, setContentIcons] = useState([]);

  const contentsNum = 30; // 컨텐츠 개수

  // d-day 계산
  const calculateD_Day = () => {
    var now = new Date();
    var dday = new Date(2023, 0, 20);
    var gap = dday.getTime() - now.getTime();
    var result = Math.ceil(gap / (1000 * 60 * 60 * 24));
    //console.log(result);

    setDDay(result);
  }

  // contents icon setting
  /*const getContents = async() => {
    const open = "img/open_icons/dessert_";
    const close = "img/closed_icons/closed_dessert_"
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

  useEffect(() => {
    setContentIcons([]);
    calculateD_Day(); // 디데이 날짜 계산
    getContents();
  }, [dDay]);*/

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
              src="img/browser-header.png" />

            <div className={styles.dDay}>
              D-{dDay}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default Content;