import { Button, TextField, makeStyles } from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { ThirdPage } from "./third_page";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    top: "10%",
  },

  fieldWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingLeft: "20%",
    paddingRight: "20%",
  },

  field: {
    paddingBottom: "50px",
    maxWidth: "400px",
    maxHeight: "45px",
    minWidth: "400px",
    minHeight: "45px",
    marginTop: "2%",
  },

  input: {
    background: "gray",
  },
}));

export const SecondPage = () => {
  const classes = useStyles();

  const {
    formState: { errors },
  } = useForm<User>();

  var currentCount = 0;

  const onPressed = () => {
    const secondSubmitDoc = doc(db, "secondSubmission", "GIn1VvtwHBz2EGojpuVd");
    const countUpdateDocumentRef = updateDoc(secondSubmitDoc, {
      count: currentCount + 1,
    });
    console.log(countUpdateDocumentRef);
  };

  const fetchSecondSubmissionCount = async () => {
    var secondSubmitCount = 0;
    const secondSubmitRef = doc(db, "secondSubmission", "GIn1VvtwHBz2EGojpuVd");

    try {
      const snapshot = await getDoc(secondSubmitRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        secondSubmitCount = Number(docData.count);
      }
      console.log(secondSubmitCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return secondSubmitCount;
  };

  useEffect(() => {
    (async () => {
      currentCount = await fetchSecondSubmissionCount();
    })();
  });

  return (
    <div className={classes.root}>
      <CustomParticle />
      <CustomStepper arg1={1} />
      <div className={classes.fieldWrapper}>
        <p>ニックネーム</p>
        <TextField
          className={classes.field}
          InputProps={{ className: classes.input }}
          id="outlined-name"
          label="ニックネーム"
          variant="outlined"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <p>電話番号</p>
        <TextField
          className={classes.field}
          InputProps={{ className: classes.input }}
          id="outlined-name"
          label="例）090-1234-5678"
          variant="outlined"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <p>誕生日</p>
        <TextField
          className={classes.field}
          InputProps={{ className: classes.input }}
          id="outlined-name"
          label="例）2000-01-01"
          variant="outlined"
        />
        {errors.name && <span>エラーが発生しました</span>}
      </div>
      <Link to="/third_page">
        <Button
          variant="contained"
          color="primary"
          onClick={onPressed}
          style={{
            maxWidth: "400px",
            maxHeight: "45px",
            minWidth: "300px",
            minHeight: "45px",
            marginTop: "3%",
          }}
        >
          登　　録
        </Button>
      </Link>
      <Routes>
        <Route path="/third_page" element={<ThirdPage />}></Route>
      </Routes>
    </div>
  );
};
