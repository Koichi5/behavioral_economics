import { Button, TextField, makeStyles } from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";
import { BloodTypeAndMotivationPage } from "./blood_type_and_motivation_page";

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

export const OtherPhoneAndNamePage = () => {
  const classes = useStyles();
  const [otherPhone, setOtherPhone] = useState("");
  const [otherName, setOtherName] = useState("");
  const [otherRelation, setOtherRelation] = useState("");

  const {
    formState: { errors },
  } = useForm<User>();

  var currentCount = 0;

  const onPressed = () => {
    const otherPhoneAndNameSubmitDoc = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k"
    );
    const countUpdateDocumentRef = updateDoc(otherPhoneAndNameSubmitDoc, {
      count: currentCount + 1,
    });
    console.log(countUpdateDocumentRef);
  };

  const fetchotherPhoneAndNameSubmissionCount = async () => {
    var phoneAndNameSubmissionCount = 0;
    const phoneAndNameSubmiiRef = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k"
    );

    try {
      const snapshot = await getDoc(phoneAndNameSubmiiRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        phoneAndNameSubmissionCount = Number(docData.count);
      }
      console.log(phoneAndNameSubmissionCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return phoneAndNameSubmissionCount;
  };

  useEffect(() => {
    (async () => {
      currentCount = await fetchotherPhoneAndNameSubmissionCount();
    })();
  });
  return (
    <div className={classes.root}>
      <CustomParticle />
      <CustomStepper arg1={4} />
      <div className={classes.fieldWrapper}>
        <p>緊急連絡先</p>
        <TextField
          onChange={(event) => setOtherPhone(event.target.value)}
          className={classes.field}
          InputProps={{ className: classes.input }}
          id="outlined-name"
          label="例）01234567890"
          variant="outlined"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <p>緊急連絡先の方の氏名</p>
        <TextField
          onChange={(event) => setOtherName(event.target.value)}
          className={classes.field}
          InputProps={{ className: classes.input }}
          id="outlined-name"
          label="緊急連絡先の方の氏名"
          variant="outlined"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <p>続柄</p>
        <TextField
          onChange={(event) => setOtherRelation(event.target.value)}
          className={classes.field}
          InputProps={{ className: classes.input }}
          id="outlined-name"
          label="例）母親"
          variant="outlined"
        />
      </div>
      {errors.name && <span>エラーが発生しました</span>}
      <Link to="/sixth_page">
        <Button
          disabled={otherPhone == "" || otherName == "" || otherRelation == ""}
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
        <Route
          path="/sixth_page"
          element={<BloodTypeAndMotivationPage />}
        ></Route>
      </Routes>
    </div>
  );
};
