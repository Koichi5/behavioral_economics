import { Button, TextField, makeStyles } from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";
import { GenderAndWorkAndHobbyPage } from "./gender_and_work_and_hobby_page";

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

export const NicknameAndPhoneAndBirthPage = () => {
  const classes = useStyles();

  const {
    formState: { errors },
  } = useForm<User>();

  var currentCount = 0;

  const onPressed = () => {
    const nicknameAndPhoneAndBirthSubmitDoc = doc(db, "nicknameAndPhoneAndBirthSubmission", "VBWeQgZmJSEwJZ4STudk");
    const countUpdateDocumentRef = updateDoc(nicknameAndPhoneAndBirthSubmitDoc, {
      count: currentCount + 1,
    });
    console.log(countUpdateDocumentRef);
  };

  const fetchNicknameAndPhoneAndBirthSubmissionCount = async () => {
    var nicknameAndPhoneAndBirthSubmitCount = 0;
    const nicknameAndPhoneAndBirthSubmitRef = doc(db, "nicknameAndPhoneAndBirthSubmission", "VBWeQgZmJSEwJZ4STudk");

    try {
      const snapshot = await getDoc(nicknameAndPhoneAndBirthSubmitRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        nicknameAndPhoneAndBirthSubmitCount = Number(docData.count);
      }
      console.log(nicknameAndPhoneAndBirthSubmitCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return nicknameAndPhoneAndBirthSubmitCount;
  };

  useEffect(() => {
    (async () => {
      currentCount = await fetchNicknameAndPhoneAndBirthSubmissionCount();
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
          次　　へ
        </Button>
      </Link>
      <Routes>
        <Route path="/third_page" element={<GenderAndWorkAndHobbyPage />}></Route>
      </Routes>
    </div>
  );
};
