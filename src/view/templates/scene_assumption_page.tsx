import { Button, makeStyles } from "@material-ui/core";
import CustomParticle from "../atoms/particle";
import { Link, Route, Routes } from "react-router-dom";
import { useMedia } from "react-use";
import { ExplainAboutSavingDataPage } from "./explain_about_saving_data_page";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    top: "30%",
    bottom: "10%",
  },
}));

export const SceneAssumptionPage = () => {
  const classes = useStyles();
  const isWide = useMedia("(min-width: 800px)");

  return (
    <div className={classes.root} style={{fontSize: isWide ? "": "15px"}}>
      <CustomParticle />
      <p>
        これからの画面では、とあるアプリを登録する場面を想定してアンケートに回答してもらいます。
      </p>
      <Link to="/explain_about_saving_data_page">
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
          path="/explain_about_saving_data_page"
          element={<ExplainAboutSavingDataPage />}
        ></Route>
      </Routes>
    </div>
  );
};
