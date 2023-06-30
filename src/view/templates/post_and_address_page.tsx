import { Button, TextField, makeStyles } from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { SchoolInfoPage } from "./school_info_page";
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
    background: "GhostWhite",
  },
}));

export const PostAndAddressPage = () => {
  const classes = useStyles();
  const {
    formState: { errors },
  } = useForm<User>();

  var currentCount = 0;

  const onPressed = () => {
    const thirdSubmitDoc = doc(db, "thirdSubmission", "5eWb85uV53vHB8wvA6AH");
    const countUpdateDocumentRef = updateDoc(thirdSubmitDoc, {
      count: currentCount + 1,
    });
    console.log(countUpdateDocumentRef);
  };

  const fetchThirdSubmissionCount = async () => {
    var thirdSubmitCount = 0;
    const thirdSubmitRef = doc(db, "thirdSubmission", "5eWb85uV53vHB8wvA6AH");

    try {
      const snapshot = await getDoc(thirdSubmitRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        thirdSubmitCount = Number(docData.count);
      }
      console.log(thirdSubmitCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return thirdSubmitCount;
  };

  useEffect(() => {
    (async () => {
      currentCount = await fetchThirdSubmissionCount();
    })();
  });
  return (
    <div className={classes.root}>
      <CustomParticle />
      <CustomStepper arg1={3} />
      <div className={classes.fieldWrapper}>
        <p>郵便番号</p>
        <TextField
          className={classes.field}
          InputProps={{ className: classes.input }}
          id="outlined-name"
          label="例）123-4567"
          variant="outlined"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <p>住所（都道府県、市町村、番地）</p>
        <TextField
          className={classes.field}
          InputProps={{ className: classes.input }}
          id="outlined-name"
          label="例）東京都渋谷区渋谷2-15-1"
          variant="outlined"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <p>住所（アパート名等）</p>
        <TextField
          className={classes.field}
          InputProps={{ className: classes.input }}
          id="outlined-name"
          label="例）クロスタワー12F"
          variant="outlined"
        />
      </div>
      {errors.name && <span>エラーが発生しました</span>}
      <Link to="/fifth_page">
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
        <Route path="/fifth_page" element={<SchoolInfoPage />}></Route>
      </Routes>
    </div>
  );
};
