import { Button, TextField, makeStyles } from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";
import { BloodTypeAndMotivationPage } from "./blood_type_and_motivation_page";
import { CustomMobileStepper } from "../atoms/mobile_stepper";
import { useMedia } from "react-use";
import { useForm } from "react-hook-form";

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
}));

const otherPhoneNumRegex = /^\d{3}-\d{4}-\d{4}$/;

export const OtherPhoneAndNamePage = () => {
  const classes = useStyles();
  const [otherPhone, setOtherPhone] = useState("");
  const [otherName, setOtherName] = useState("");
  const [otherRelation, setOtherRelation] = useState("");
  const isWide = useMedia("(min-width: 800px)");
  const [currentCount, setCurrentCount] = useState(0);
  const [currentOtherPhoneCount, setCurrentOtherPhoneCount] = useState(0);
  const [currentOtherNameCount, setCurrentOtherNameCount] = useState(0);
  const [currentOtherRelationCount, setCurrentOtherRelationCount] = useState(0);

  const {
    register,
    formState: { errors },
  } = useForm();

  const updateOtherPhoneAndNameAndRelation = async () => {
    const otherPhoneAndNameSubmitDoc = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k"
    );
    await updateDoc(otherPhoneAndNameSubmitDoc, {
      count: currentCount + 1,
    });
    setCurrentCount(prev => prev + 1);
  };

  const updateOtherPhoneCount = async () => {
    const otherPhoneCollectionPath = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherPhoneRegister",
      "pLxO66ORBxCNZSMUcGmc"
    );
    if (otherPhone != "") {
      await updateDoc(otherPhoneCollectionPath, {
        count: currentOtherPhoneCount + 1,
      });
      setCurrentOtherPhoneCount(prev => prev + 1);
    }
  };

  const updateOtherNameCount = async () => {
    const otherNameCollectionPath = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherNameRegister",
      "VjS0kT9lHBcibqvxdCch"
    );
    if (otherName != "") {
      await updateDoc(otherNameCollectionPath, {
        count: currentOtherNameCount + 1,
      });
      setCurrentOtherNameCount(prev => prev + 1);
    }
  };

  const updateOtherRelationCount = async () => {
    const otherRelationCollectionPath = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherRelationRegister",
      "BMJmc7A6sA9ch0cJiM9L"
    );
    if (otherRelation != "") {
      await updateDoc(otherRelationCollectionPath, {
        count: currentOtherRelationCount + 1,
      });
      setCurrentOtherRelationCount(prev => prev + 1);
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
      const initialCount = await fetchotherPhoneAndNameSubmissionCount();
      setCurrentCount(initialCount);

      const initialOtherPhoneCount = await fetchOtherPhoneCount();
      setCurrentOtherPhoneCount(initialOtherPhoneCount);

      const initialOtherNameCount = await fetchOtherNameCount();
      setCurrentOtherNameCount(initialOtherNameCount);

      const initialOtherRelationCount = await fetchOtherRelationCount();
      setCurrentOtherRelationCount(initialOtherRelationCount);
    })();
    window.onpopstate = () => {
      _onBrowserBack();
    };
  }, []);
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
            {...register("otherPhoneNum", {
              required: "電話番号は必須です",
              pattern: {
                value: otherPhoneNumRegex,
                message: "電話番号の形式が適当ではありません",
              },
            })}
            onChange={(event) => setOtherPhone(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-name"
            label="例）012-3456-7890"
            variant="outlined"
            error={Boolean(errors.otherPhoneNum)}
            helperText={errors.otherPhoneNum && errors.otherPhoneNum.message}
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
            id="outlined-name"
            label="例）母親"
            variant="outlined"
          />
        </div>
        <div>
          <Link to="/" style={{ paddingRight: isWide ? "3%" : "0" }}>
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
              onClick={_onBrowserBack}
            >
              やめる
            </Button>
          </Link>
          <Link to="/sixth_page">
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
