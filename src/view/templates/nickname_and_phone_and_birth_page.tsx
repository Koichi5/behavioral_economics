import { Button, TextField, makeStyles } from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";
import { GenderAndWorkAndHobbyPage } from "./gender_and_work_and_hobby_page";
import { useMedia } from "react-use";
import { CustomMobileStepper } from "../atoms/mobile_stepper";
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
    marginBottom: "50px",
    marginTop: "2%",
  },
}));

const phoneNumRegex = /^\d{3}-\d{4}-\d{4}$/;
const birthdayRegex = /^\d{4}-\d{1,2}-\d{1,2}$/;

export const NicknameAndPhoneAndBirthPage = () => {
  const classes = useStyles();
  const [nickName, setNickName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const isWide = useMedia("(min-width: 800px)");
  const [currentCount, setCurrentCount] = useState(0);
  const [currentNickNameCount, setCurrentNickNameCount] = useState(0);
  const [currentPhoneCount, setCurrentPhoneCount] = useState(0);
  const [currentBirthCount, setCurrentBirthCount] = useState(0);

  const {
    register,
    formState: { errors },
  } = useForm();

  const updateNickNameAndPhoneAndBirthCount = async () => {
    const nicknameAndPhoneAndBirthSubmitDoc = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk"
    );
    await updateDoc(nicknameAndPhoneAndBirthSubmitDoc, {
      count: currentCount + 1,
    });
    setCurrentCount(prev => prev + 1);
  };

  const updateNickNameCount = async () => {
    const nickNameCollectionPath = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "nickNameRegister",
      "Ao7DYTETqqe6tUQYNSHV"
    );
    if (nickName != "") {
      await updateDoc(nickNameCollectionPath, {
        count: currentNickNameCount + 1,
      });
      setCurrentNickNameCount(prev => prev + 1);
    }
  };

  const updatePhoneCount = async () => {
    const phoneCollectionPath = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "phoneRegister",
      "hG6rf4GftXlDxu9qsI13"
    );
    if (phoneNumber != "") {
      await updateDoc(phoneCollectionPath, {
        count: currentPhoneCount + 1,
      });
      setCurrentPhoneCount(prev => prev + 1);
    }
  };

  const updateBirthCount = async () => {
    const birthCollectionPath = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "birthRegister",
      "gv9RkSKdABBnbSnSD5Ms"
    );
    if (birthDay != "") {
      await updateDoc(birthCollectionPath, {
        count: currentBirthCount + 1,
      });
      setCurrentBirthCount(prev => prev + 1);
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
      const initialCount = await fetchNicknameAndPhoneAndBirthSubmissionCount();
      setCurrentCount(initialCount);
      const initialNickNameCount = await fetchNicknameCount();
      setCurrentNickNameCount(initialNickNameCount);
      const initialPhoneCount = await fetchPhoneCount();
      setCurrentPhoneCount(initialPhoneCount);
      const initialBirthCount = await fetchBirthCount();
      setCurrentBirthCount(initialBirthCount);
    })();
    window.onpopstate = () => {
      _onBrowserBack();
    };
  }, []);

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
              {...register("nickName", {
                required: "ニックネームは必須です",
                minLength: {
                  value: 3,
                  message: "３文字以上である必要があります",
                },
              })}
              onChange={(event) => setNickName(event.target.value)}
              className={classes.field}
              style={{ minWidth: isWide ? "400px" : "300px" }}
              id="outlined-name"
              label="ニックネーム"
              variant="outlined"
              error={Boolean(errors.nickName)}
              helperText={errors.nickName && errors.nickName.message}
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
              {...register("phone", {
                required: "電話番号は必須です",
                pattern: {
                  value: phoneNumRegex,
                  message: "電話番号の形式が適当ではありません",
                },
              })}
              onChange={(event) => setPhoneNumber(event.target.value)}
              className={classes.field}
              style={{ minWidth: isWide ? "400px" : "300px" }}
              id="outlined-name"
              label="例）090-1234-5678"
              variant="outlined"
              error={Boolean(errors.phone)}
              helperText={errors.phone && errors.phone.message}
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
              {...register("birthday", {
                required: "誕生日は必須です",
                pattern: {
                  value: birthdayRegex,
                  message: "誕生日の形式が適当ではありません",
                },
              })}
              onChange={(event) => setBirthDay(event.target.value)}
              className={classes.field}
              style={{ minWidth: isWide ? "400px" : "300px" }}
              id="outlined-name"
              label="例）2000-01-01"
              variant="outlined"
              error={Boolean(errors.birthday)}
              helperText={errors.birthday && errors.birthday.message}
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
            <Link to='/third_page'>
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
          </div>
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
