import { Button, makeStyles } from "@material-ui/core";
import CustomParticle from "../atoms/particle";
import { Link, Route, Routes } from "react-router-dom";
import { useMedia } from "react-use";
import { SceneAssumptionPage } from "./scene_assumption_page";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    top: "10%",
    bottom: "10%",
  },
}));

export const InitialExplanationPage = () => {
  const classes = useStyles();
  const isWide = useMedia("(min-width: 800px)");

  return (
    <div className={classes.root} style={{fontSize: isWide ? "": "15px"}}>
      <CustomParticle />
      <p>
        本アンケートは、関西大学経済学部岡野ゼミに所属する３年生の小笠原 実花、岸本 浩一智、濱渦 ほのか、渡邉 裕太による学術的研究の一部として実施されます。
      </p>
      <p>
        本アンケートは、経済学に関する調査で、アンケートによって人々の経済的意思決定とアプリケーションの関係を調べることを目的としています。
      </p>
      <p>
        アンケート内の質問に対するあなたの回答や、提供していただくデータの匿名性は保証されています。結果は統計的に処理され、
      </p>
      <p>
        外部に漏れたり、ほかの目的に使用されたりすることは一切ありません。論文やゼミナール大会などの成果公開の場でも、匿名性が保持された形で公表されます。
      </p>
      <p>x
        また、本アンケートの回答や提供していただくデータは、本講義（行動経済学２）の成績とは無関係であり、参加を強制するものではありません。
      </p>
      <p>
        上記の趣旨をご理解いただいたうえで素直にありのままをお答えください。
      </p>
      <br></br>
      <p>以上の説明を理解した上で、アンケート及びデータの提供に同意していただけますか？</p>
      <p>
        同意した後でも、回答したくないと思った場合は「やめる」ボタンを押すことで記録を中断することができます。
      </p>      <Link to="/scene_assumption_page">
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
          同意する
        </Button>
      </Link>
      <Routes>
        <Route
          path="/scene_assumption_page"
          element={<SceneAssumptionPage />}
        ></Route>
      </Routes>
    </div>
  );
};
