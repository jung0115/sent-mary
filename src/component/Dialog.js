import Content from "../routes/Content";
import styles from "./Dialog.module.css";

//"/content"
//onSubmit="return checkPassword()"
//action={form.pass.value == "1234" ? <Content /> : console.log("비밀번호 에러")}
const Dialog = () => {

  return (
    <div className={styles.darkBackground}>
      <div className={styles.dialogBlock}>
        <h3 className={styles.title}>비밀번호를 입력하세요.</h3>
        <form
          className={styles.form}
          method="post"
          name="dialogForm"
          action={"/content/"}>
          <input
            className={styles.inputPassword}
            type="password"
            name="pass"/>
          <input
            className={styles.passwordSubmit}
            type="submit"
            value="확인"/>
        </form>
      </div>
    </div>
  );
}

export default Dialog;