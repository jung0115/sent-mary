//firebase.js
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyC8cwKZVNuNnf_toJy3PMxDSz1bW0ndcII",
  authDomain: "sent-mary.firebaseapp.com",
  projectId: "sent-mary",
  storageBucket: "sent-mary.appspot.com",
  messagingSenderId: "66452275230",
  appId: "1:66452275230:web:844190eb45b34d5514ae0f",
  measurementId: "G-Q2NJRJX8ZR"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };