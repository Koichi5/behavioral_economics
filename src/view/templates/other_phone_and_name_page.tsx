import { Button, TextField, makeStyles } from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";
import { BloodTypeAndMotivationPage } from "./blood_type_and_motivation_page";
import { CustomMobileStepper } from "../atoms/mobile_stepper";
import { useMedia } from "react-use";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    top: "10%",
  },

  formWrapper: {
    display: "flex",
    flexDirection: "column",
  },

  fieldWrapper: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "start",
    alignItems: "start",
  },

  field: {
    paddingBottom: "50px",
    marginTop: "2%",
  },

  input: {
    background: "GhostWhite",
  },

  buttonRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const OtherPhoneAndNamePage = () => {
  const classes = useStyles();
  const [otherPhone, setOtherPhone] = useState("");
  const [otherName, setOtherName] = useState("");
  const [otherRelation, setOtherRelation] = useState("");
  const isWide = useMedia("(min-width: 800px)");

  const {
    formState: { errors },
  } = useForm<User>();

  var currentCount = 0;
  var currentOtherPhoneCount = 0;
  var currentOtherNameCount = 0;
  var currentOtherRelationCount = 0;

  const updateOtherPhoneAndNameAndRelation = () => {
    const otherPhoneAndNameSubmitDoc = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k"
    );
    updateDoc(otherPhoneAndNameSubmitDoc, {
      count: currentCount + 1,
    });
  };

  const updateOtherPhoneCount = () => {
    const otherPhoneCollectionPath = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherPhoneRegister",
      "pLxO66ORBxCNZSMUcGmc"
    );
    if (otherPhone != "") {
      updateDoc(otherPhoneCollectionPath, {
        count: currentOtherPhoneCount + 1,
      });
    }
  };

  const updateOtherNameCount = () => {
    const otherNameCollectionPath = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherNameRegister",
      "VjS0kT9lHBcibqvxdCch"
    );
    if (otherName != "") {
      updateDoc(otherNameCollectionPath, {
        count: currentOtherNameCount + 1,
      });
    }
  };

  const updateOtherRelationCount = () => {
    const otherRelationCollectionPath = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherRelationRegister",
      "BMJmc7A6sA9ch0cJiM9L"
    );
    if (otherRelation != "") {
      updateDoc(otherRelationCollectionPath, {
        count: currentOtherRelationCount + 1,
      });
    }
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

  const fetchOtherPhoneCount = async () => {
    var otherPhoneCount = 0;
    const otherPhoneCountRef = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherPhoneRegister",
      "pLxO66ORBxCNZSMUcGmc"
    );

    try {
      const snapshot = await getDoc(otherPhoneCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        otherPhoneCount = Number(docData.count);
      }
      console.log(otherPhoneCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return otherPhoneCount;
  };

  const fetchOtherNameCount = async () => {
    var otherNameCount = 0;
    const otherNameCountRef = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherNameRegister",
      "VjS0kT9lHBcibqvxdCch"
    );

    try {
      const snapshot = await getDoc(otherNameCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        otherNameCount = Number(docData.count);
      }
      console.log(otherNameCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return otherNameCount;
  };

  const fetchOtherRelationCount = async () => {
    var otherRelationCount = 0;
    const otherRelationCountRef = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherRelationRegister",
      "BMJmc7A6sA9ch0cJiM9L"
    );

    try {
      const snapshot = await getDoc(otherRelationCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        otherRelationCount = Number(docData.count);
      }
      console.log(otherRelationCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return otherRelationCount;
  };

  const _onBrowserBack = () => {
    console.log("browser back fired !");
    updateOtherPhoneCount();
    updateOtherNameCount();
    updateOtherRelationCount();
  };

  const _onPressed = () => {
    updateOtherPhoneAndNameAndRelation();
    updateOtherPhoneCount();
    updateOtherNameCount();
    updateOtherRelationCount();
  };

  useEffect(() => {
    (async () => {
      currentCount = await fetchotherPhoneAndNameSubmissionCount();
      currentOtherPhoneCount = await fetchOtherPhoneCount();
      currentOtherNameCount = await fetchOtherNameCount();
      currentOtherRelationCount = await fetchOtherRelationCount();
    })();
    window.onpopstate = () => {
      _onBrowserBack();
    };
  });
  return (
    <div className={classes.root}>
      <CustomParticle />
      {isWide ? <CustomStepper arg1={4} /> : <CustomMobileStepper arg1={5} />}
      <div
        className={classes.formWrapper}
        style={{ alignItems: isWide ? "inherit" : "center" }}
      >
        <div
          className={classes.fieldWrapper}
          style={{
            flexDirection: isWide ? "row" : "column",
            paddingLeft: isWide ? "20%" : "0",
            paddingRight: isWide ? "20%" : "0",
          }}
        >
          <p>緊急連絡先</p>
          <TextField
            onChange={(event) => setOtherPhone(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            InputProps={{ className: classes.input }}
            id="outlined-name"
            label="例）01234567890"
            variant="outlined"
          />
        </div>
        <div
          className={classes.fieldWrapper}
          style={{
            flexDirection: isWide ? "row" : "column",
            paddingLeft: isWide ? "20%" : "0",
            paddingRight: isWide ? "20%" : "0",
          }}
        >
          <p>緊急連絡先の方の氏名</p>
          <TextField
            onChange={(event) => setOtherName(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            InputProps={{ className: classes.input }}
            id="outlined-name"
            label="緊急連絡先の方の氏名"
            variant="outlined"
          />
        </div>
        <div
          className={classes.fieldWrapper}
          style={{
            flexDirection: isWide ? "row" : "column",
            paddingLeft: isWide ? "20%" : "0",
            paddingRight: isWide ? "20%" : "0",
          }}
        >
          <p>続柄</p>
          <TextField
            onChange={(event) => setOtherRelation(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            InputProps={{ className: classes.input }}
            id="outlined-name"
            label="例）母親"
            variant="outlined"
          />
        </div>
        {errors.name && <span>エラーが発生しました</span>}
        <div className={classes.buttonRow}>
        <Link to="/sixth_page" style={{ paddingRight: "3%" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={_onPressed}
              style={{
                maxWidth: "400px",
                maxHeight: "45px",
                minWidth: "300px",
                minHeight: "45px",
                marginTop: "3%",
              }}
            >
              やめる
            </Button>
          </Link>
        <Link to="/sixth_page" style={{ paddingLeft: "3%" }}>
          <Button
            disabled={
              otherPhone == "" || otherName == "" || otherRelation == ""
            }
            variant="contained"
            color="primary"
            onClick={_onPressed}
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
        </div>
        <Routes>
          <Route
            path="/sixth_page"
            element={<BloodTypeAndMotivationPage />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};
