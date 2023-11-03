import { Button, makeStyles } from "@material-ui/core";
import CustomParticle from "../atoms/particle";
import { Link, Route, Routes } from "react-router-dom";
import { AskCommentsPage } from "./ask_ comments_page";
import { useCallback, useEffect } from "react";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    top: "10%",
  },
}));

export const ApologizePage = () => {
  const classes = useStyles();

  const blockBrowserBack = useCallback(() => {
    window.history.go(1);
  }, []);

  useEffect(() => {
    (() => {
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", blockBrowserBack);
      return () => {
        window.removeEventListener("popstate", blockBrowserBack);
      };      
    })();
  }, [blockBrowserBack]);

  return (
    <div className={classes.root}>
      <CustomParticle />
      <p>関西大学経済学部岡野ゼミです。</p>
      <br></br>
      <p>ここまで情報を入力していただきありがとうございます。</p>
      <p>
        このWebサイトは、今までの登録の流れで「どのくらいの割合の人が登録を断念するか」
      </p>
      <p>ということをゼミ内の実験として検証するために作成されたものであり、</p>
      <p>
        より現実的な結果を得るためにあえて新規登録という形を取らせていただきました。
      </p>
      <br></br>
      <p>最後まで入力して頂いたのにも関わらず、申し訳ありません。</p>
      <p>入力して頂いた情報の取り扱いに関しましては、こちらからは性別以外のデータを</p>
      <p>記録、確認できない仕組みとなっておりますので、ご安心ください。</p>
      <p>次のページからは事後アンケートですので、よろしければご回答ください。</p>
      <p>(事後アンケートの内容は保存されます)</p>
      <Link to="/ask_comments_page">
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
        <Route path="/ask_comments_page" element={<AskCommentsPage />}></Route>
      </Routes>
    </div>
  );
};
