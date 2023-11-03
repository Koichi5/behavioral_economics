import { Button, makeStyles } from "@material-ui/core";
import CustomParticle from "../atoms/particle";
import { Link, Route, Routes } from "react-router-dom";
import { useMedia } from "react-use";
import { GenderAndWorkAndHobbyPage } from "./gender_and_work_and_hobby_page";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    top: "30%",
    bottom: "10%",
  },
}));

export const ExplainAboutSavingDataPage = () => {
  const classes = useStyles();
  const isWide = useMedia("(min-width: 800px)");

  return (
    <div className={classes.root} style={{ fontSize: isWide ? "" : "15px" }}>
      <CustomParticle />
      <p>
      皆さんに入力してもらった情報のうち、「性別」と「事後アンケート」は記録されますが、それ以外の情報は一切記録されることはありません。      </p>
      <p>つまり、それらの情報を実験実施者を含む第三者が確認することができないようになっていますので安心してください。</p>
      <p>ただし、皆さんはアプリ登録をする場面を想像して、各項目に正しい情報を入力するようにしてください。</p>
      <p>
        以降のページからでも、回答したくないと思った場合は「やめる」ボタンを押すことで記録を中断することができます。
      </p>
      <Link to="/initial_page">
        <Button
          variant="contained"
          color="primary"
          style={{
            maxWidth: "400px",
            maxHeight: "45px",
            minWidth: "300px",
            minHeight: "45px",
            marginTop: "3%",
          }}
        >
          次へ
        </Button>
      </Link>
      <Routes>
        <Route
          path="/initial_page"
          element={<GenderAndWorkAndHobbyPage />}
        ></Route>
      </Routes>
    </div>
  );
};
