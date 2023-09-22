import { Button, TextField, makeStyles } from "@material-ui/core";
import CustomParticle from "../atoms/particle";
import { useState } from "react";
import { useMedia } from "react-use";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { Link, Route, Routes } from "react-router-dom";
import { FinalPage } from "./final_page";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  field: {
    paddingBottom: "50px",
    marginTop: "2%",
  },
}));

export const AskCommentsPage = () => {
  const classes = useStyles();
  const [comment, setComment] = useState("");
  const isWide = useMedia("(min-width: 800px)");

  const addComment = (props: { inputComment: String }) => {
    addDoc(collection(db, "comments"), {
      comment: props.inputComment,
    });
  };

  return (
    <div className={classes.root}>
      <CustomParticle />
      <p>今までの入力で面倒だった部分や感じたことを自由に記述してください</p>
      <TextField
        onChange={(event) => setComment(event.target.value)}
        className={classes.field}
        style={{
          minWidth: isWide ? "700px" : "300px",
        }}
        multiline={true}
        rows={5}
        id="outlined-name"
        label="例）住所の入力が面倒だった"
        variant="outlined"
      ></TextField>
      <Link to="/final_page" style={{ paddingLeft: isWide ? "3%" : "0" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addComment({ inputComment: comment })}
          style={{
            maxWidth: "400px",
            maxHeight: "45px",
            minWidth: "300px",
            minHeight: "45px",
            marginTop: "3%",
          }}
        >
          送信
        </Button>
      </Link>
      <Routes>
          <Route path="/final_page" element={<FinalPage />}></Route>
        </Routes>
    </div>
  );
};
