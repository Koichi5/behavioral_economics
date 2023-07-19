import { Button, TextField, makeStyles } from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";
import { GenderAndWorkAndHobbyPage } from "./gender_and_work_and_hobby_page";
import { useMedia } from "react-use";
import { CustomMobileStepper } from "../atoms/mobile_stepper";

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
    marginBottom: "50px",
    marginTop: "2%",
  },

  input: {
    background: "GhostWhite",
  },
}));

export const NicknameAndPhoneAndBirthPage = () => {
  const classes = useStyles();
  const [nickName, setNickName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const isWide = useMedia("(min-width: 800px)");

  const {
    formState: { errors },
  } = useForm<User>();

  var currentCount = 0;
  var currentNickNameCount = 0;
  var currentPhoneCount = 0;
  var currentBirthCount = 0;

  const updateNickNameAndPhoneAndBirthCount = () => {
    const nicknameAndPhoneAndBirthSubmitDoc = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk"
    );
    updateDoc(nicknameAndPhoneAndBirthSubmitDoc, {
      count: currentCount + 1,
    });
  };

  const updateNickNameCount = () => {
    const nickNameCollectionPath = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "nickNameRegister",
      "Ao7DYTETqqe6tUQYNSHV"
    );
    if (nickName != "") {
      updateDoc(nickNameCollectionPath, {
        count: currentNickNameCount + 1,
      });
    }
  };

  const updatePhoneCount = () => {
    const phoneCollectionPath = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "phoneRegister",
      "hG6rf4GftXlDxu9qsI13"
    );
    if (phoneNumber != "") {
      updateDoc(phoneCollectionPath, {
        count: currentPhoneCount + 1,
      });
    }
  };

  const updateBirthCount = () => {
    const birthCollectionPath = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "birthRegister",
      "gv9RkSKdABBnbSnSD5Ms"
    );
    if (birthDay != "") {
      updateDoc(birthCollectionPath, {
        count: currentBirthCount + 1,
      });
    }
  };

  const fetchNicknameAndPhoneAndBirthSubmissionCount = async () => {
    var nicknameAndPhoneAndBirthSubmitCount = 0;
    const nicknameAndPhoneAndBirthSubmitRef = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk"
    );
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

  const fetchNicknameCount = async () => {
    var nicknameCount = 0;
    const nickNameCountRef = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "nickNameRegister",
      "Ao7DYTETqqe6tUQYNSHV"
    );

    try {
      const snapshot = await getDoc(nickNameCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        nicknameCount = Number(docData.count);
      }
      console.log(nicknameCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return nicknameCount;
  };

  const fetchPhoneCount = async () => {
    var phoneCount = 0;
    const phoneCountRef = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "phoneRegister",
      "hG6rf4GftXlDxu9qsI13"
    );
    try {
      const snapshot = await getDoc(phoneCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        phoneCount = Number(docData.count);
      }
      console.log(phoneCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return phoneCount;
  };

  const fetchBirthCount = async () => {
    var birthCount = 0;
    const birthCountRef = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "birthRegister",
      "gv9RkSKdABBnbSnSD5Ms"
    );
    try {
      const snapshot = await getDoc(birthCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        birthCount = Number(docData.count);
      }
      console.log(birthCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return birthCount;
  };

  const _onBrowserBack = () => {
    console.log("browser back fired !");
    updateNickNameCount();
    updatePhoneCount();
    updateBirthCount();
  };

  const _onPressed = () => {
    updateNickNameAndPhoneAndBirthCount();
    updateNickNameCount();
    updatePhoneCount();
    updateBirthCount();
  };

  useEffect(() => {
    (async () => {
      currentCount = await fetchNicknameAndPhoneAndBirthSubmissionCount();
      currentNickNameCount = await fetchNicknameCount();
      currentPhoneCount = await fetchPhoneCount();
      currentBirthCount = await fetchBirthCount();
    })();
    window.onpopstate = () => {
      _onBrowserBack();
    };
  });

  return (
    <div className={classes.root}>
      <CustomParticle />
      {isWide ? <CustomStepper arg1={1} /> : <CustomMobileStepper arg1={2} />}
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
          <p>ニックネーム</p>
          <TextField
            onChange={(event) => setNickName(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            InputProps={{ className: classes.input }}
            id="outlined-name"
            label="ニックネーム"
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
          <p>電話番号</p>
          <TextField
            onChange={(event) => setPhoneNumber(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            InputProps={{ className: classes.input }}
            id="outlined-name"
            label="例）090-1234-5678"
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
          <p>誕生日</p>
          <TextField
            onChange={(event) => setBirthDay(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            InputProps={{ className: classes.input }}
            id="outlined-name"
            label="例）2000-01-01"
            variant="outlined"
          />
          {errors.name && <span>エラーが発生しました</span>}
        </div>
        <Link to="/third_page">
          <Button
            disabled={nickName == "" || phoneNumber == "" || birthDay == ""}
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
        <Routes>
          <Route
            path="/third_page"
            element={<GenderAndWorkAndHobbyPage />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};
