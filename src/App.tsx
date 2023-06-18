import { makeStyles } from "@material-ui/core";
import InitialPage from "./view/templates/initial_page";
import { Route, Routes } from "react-router-dom";
import { ThirdPage } from "./view/templates/third_page";
import { FourthPage } from "./view/templates/fourth_page";
import { SecondPage } from "./view/templates/second_page";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <InitialPage / */}
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/second_page" element={<SecondPage />} />
        <Route path="/third_page" element={<ThirdPage />} />
        <Route path="/fourth_page" element={<FourthPage />} />
      </Routes>
    </div>
  );
}

export default App;
