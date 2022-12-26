// content 내부 페이지
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";
import styles from './Content.module.css';

const Content = () => {
  const {id} = useParams();
  const contentNum = String(id);

  const [loading, setLoading] = useState(false);
  const [dDay, setDDay] = useState(0);
  const [content, setContent] = useState("");

  // d-day 계산
  const calculateD_Day = () => {
    var result = 31 - contentNum;
    //console.log(result);

    setDDay(result);
  }

  // contents setting
  const getContents = async() => {
    //console.log(firestore);
    const mContent = firestore.collection("contents");
    mContent.doc(String(contentNum)).get().then((doc) => {
      // document의 데이터를 가져옴
      // console.log(doc.data());
      // console.log(doc.data().text);
      setContent(doc.data().text);
    });

    setLoading(false);
  }

  useEffect(() => {
    setContent([]);
    calculateD_Day(); // 디데이 날짜 계산
    getContents();
  }, []);

  
  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1> // 로딩 페이지
      ) : (
        // content 페이지
        <div className={styles.home}>
          {/* 제목 */}
          <div className={styles.title}>
            <Link
              className={styles.titleLink}
              to={`/`}>
              sent mary
            </Link>
          </div>

          {/* 메인 프레임 */}
          <div className={styles.mainFrame}>
            {/* 프레임 헤더 */}
            <img
              className={styles.frameHeader}
              alt="header"
              src={process.env.PUBLIC_URL + '/img/browser-header.png'} />

            <div className={styles.dDay}>
              D-{dDay}
            </div>

            <div className={styles.contentFrame}>
              <div className={styles.contentText}>
                {content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default Content;