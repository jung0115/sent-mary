// content 내부 페이지
import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import styles from './Content.module.css';

const Content = ({ contentNum }) => {
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
    <div>
      {loading ? (
        <h1>Loading...</h1> // 로딩 페이지
      ) : (
        // content 페이지
        <div>
          <div className={styles.dDay}>
            D-{dDay}
          </div>

          <div className={styles.contentFrame}>
            <div className={styles.contentText}>
              {content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default Content;