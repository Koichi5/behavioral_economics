import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useCallback, useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { NicknameAndPhoneAndBirthPage } from "./nickname_and_phone_and_birth_page";
import {
  Button,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import "firebase/firestore";
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

  secretField: {
    maxWidth: "400px",
    marginTop: "2%",
  },
}));

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[.?/+=&%$#-])[a-zA-Z0-9.?/+=&%$#-]{8,}$/;
const retypePasswordRegex =
  /^(?=.*[A-Z])(?=.*[.?/+=&%$#-])[a-zA-Z0-9.?/+=&%$#-]{8,}$/;

function EmailAndPasswordPage() {
  const ref: React.MutableRefObject<HTMLDialogElement | null> = useRef(null);
  const classes = useStyles();
  const { state } = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const isWide = useMedia("(min-width: 800px)");
  const [currentCount, setCurrentCount] = useState(0);

  const {
    register,
    formState: { errors },
  } = useForm();

  const showModal = useCallback(() => {
    if (ref.current) {
      ref.current.showModal();
    }
  }, []);

  const closeModal = useCallback(() => {
    if (ref.current) {
      ref.current.close();
    }
  }, []);

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleClickConfirmShowPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const updateEmailAndPasswordCount = async (value: number) => {
    console.log("update email and password count");
    const emailAndPasswordSubmissionDoc = doc(
      db,
      "emailAndPasswordSubmission",
      "f1l7UtMKxLke8l40C3FZ"
    );
    await updateDoc(emailAndPasswordSubmissionDoc, {
      count: value + 1,
    });
    setCurrentCount((prev) => prev + 1);
  };

  const updateEmailCount = async (value: number) => {
    console.log("update email count");
    const emailCollectionPath = doc(
      db,
      "emailAndPasswordSubmission",
      "f1l7UtMKxLke8l40C3FZ",
      "emailRegister",
      "GmE3vIiVFF3agndDBXsh"
    );
    if (email != "") {
      await updateDoc(emailCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updatePasswordCount = async (value: number) => {
    console.log("update password count");
    const passwordCollectionPath = doc(
      db,
      "emailAndPasswordSubmission",
      "f1l7UtMKxLke8l40C3FZ",
      "passwordRegister",
      "NbzHplqtFue4vD8tL5Aj"
    );
    if (password != "") {
      await updateDoc(passwordCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateRetypePasswordCount = async (value: number) => {
    console.log("update retype password count");
    const retypePasswordCollectionPath = doc(
      db,
      "emailAndPasswordSubmission",
      "f1l7UtMKxLke8l40C3FZ",
      "retypePasswordRegister",
      "sTuAOF8AGV7G19sW1EwV"
    );
    if (retypePassword != "") {
      await updateDoc(retypePasswordCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateEmailAndPasswordInterruptedMaleCount = async (value: number) => {
    const emailAndPasswordInterruptedMalePath = doc(db, "emailAndPasswordInterruptedGender", "Z7zuYTmN3t5wpW6t2doc");
    if (state.state == "10") {
      await updateDoc(emailAndPasswordInterruptedMalePath, {
        male: value + 1,
      });
    }
  };

  const updateEmailAndPasswordInterruptedFemaleCount = async (value: number) => {
    const emailAndPasswordInterruptedFemalePath = doc(db, "emailAndPasswordInterruptedGender", "Z7zuYTmN3t5wpW6t2doc");
    if (state.state == "20") {
      await updateDoc(emailAndPasswordInterruptedFemalePath, {
        female: value + 1,
      });
    }
  };

  const updateEmailAndPasswordInterruptedOtherCount = async (value: number) => {
    const emailAndPasswordInterruptedOtherPath = doc(db, "emailAndPasswordInterruptedGender", "Z7zuYTmN3t5wpW6t2doc");
    if (state.state == "30") {
      await updateDoc(emailAndPasswordInterruptedOtherPath, {
        other: value + 1,
      });
    }
  };

  const updateEmailAndPasswordInterruptedNotSelectedCount = async (value: number) => {
    const emailAndPasswordInterruptedNotSelectedPath = doc(db, "emailAndPasswordInterruptedGender", "Z7zuYTmN3t5wpW6t2doc");
    if (state.state == "40") {
      await updateDoc(emailAndPasswordInterruptedNotSelectedPath, {
        notSelected: value + 1,
      });
    }
  };

  const fetchEmailAndPasswordSubmissionCount = async () => {
    var emailAndPasswordSubmitCount = 0;
    const emailAndPasswordSubmissitRef = doc(
      db,
      "emailAndPasswordSubmission",
      "f1l7UtMKxLke8l40C3FZ"
    );

    try {
      const snapshot = await getDoc(emailAndPasswordSubmissitRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        emailAndPasswordSubmitCount = Number(docData.count);
      }
      console.log(emailAndPasswordSubmitCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    console.log(`current email and password submission count: ${currentCount}`);
    return emailAndPasswordSubmitCount;
  };

  const fetchEmailRegisterCount = async () => {
    var emailRegisterCount = 0;
    const emailRegisterCountRef = doc(
      db,
      "emailAndPasswordSubmission",
      "f1l7UtMKxLke8l40C3FZ",
      "emailRegister",
      "GmE3vIiVFF3agndDBXsh"
    );

    try {
      const snapshot = await getDoc(emailRegisterCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        emailRegisterCount = Number(docData.count);
      }
      console.log(emailRegisterCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    console.log("current email count:", emailRegisterCount);
    return emailRegisterCount;
  };

  const fetchPasswordRegisterCount = async () => {
    var passwordRegisterCount = 0;
    const passwordRegisterCountRef = doc(
      db,
      "emailAndPasswordSubmission",
      "f1l7UtMKxLke8l40C3FZ",
      "passwordRegister",
      "NbzHplqtFue4vD8tL5Aj"
    );

    try {
      const snapshot = await getDoc(passwordRegisterCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        passwordRegisterCount = Number(docData.count);
      }
      console.log(passwordRegisterCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    console.log("current password count:", passwordRegisterCount);
    return passwordRegisterCount;
  };

  const fetchRetypePasswordRegisterCount = async () => {
    var retypePasswordRegisterCount = 0;
    const retypePasswordRegisterCountRef = doc(
      db,
      "emailAndPasswordSubmission",
      "f1l7UtMKxLke8l40C3FZ",
      "retypePasswordRegister",
      "sTuAOF8AGV7G19sW1EwV"
    );

    try {
      const snapshot = await getDoc(retypePasswordRegisterCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        retypePasswordRegisterCount = Number(docData.count);
      }
      console.log(retypePasswordRegisterCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    console.log("current retype password count:", retypePasswordRegisterCount);
    return retypePasswordRegisterCount;
  };

  const fetchAndUpdateTotalGender = async () => {
    const interruptedGenderRef = doc(
      db,
      "interruptedUserGender",
      "KFwuzSDtYDtpszPF4amu"
    );
    if (state.state == "10") {
      var interruptedMaleCount = 0;
      try {
        const snapshot = await getDoc(interruptedGenderRef);
        const docData = snapshot.data();
        if (docData && docData.male) {
          interruptedMaleCount = Number(docData.male);
        }
        console.log(interruptedMaleCount);
      } catch (error) {
        console.error("Firestoreの更新処理に失敗しました", error);
      }
      await updateDoc(interruptedGenderRef, {
        male: interruptedMaleCount + 1,
      });
    } else if (state.state == "20") {
      var interruptedFemaleCount = 0;
      try {
        const snapshot = await getDoc(interruptedGenderRef);
        const docData = snapshot.data();
        if (docData && docData.female) {
          interruptedFemaleCount = Number(docData.female);
        }
        console.log(interruptedFemaleCount);
      } catch (error) {
        console.error("Firestoreの更新処理に失敗しました", error);
      }
      await updateDoc(interruptedGenderRef, {
        female: interruptedFemaleCount + 1,
      });
    } else if (state.state == "30") {
      var interruptedOtherCount = 0;
      try {
        const snapshot = await getDoc(interruptedGenderRef);
        const docData = snapshot.data();
        if (docData && docData.other) {
          interruptedOtherCount = Number(docData.other);
        }
        console.log(interruptedOtherCount);
      } catch (error) {
        console.error("Firestoreの更新処理に失敗しました", error);
      }
      await updateDoc(interruptedGenderRef, {
        other: interruptedOtherCount + 1,
      });
    } else if (state.state == "40") {
      var interruptedNotSelectedCount = 0;
      try {
        const snapshot = await getDoc(interruptedGenderRef);
        const docData = snapshot.data();
        if (docData && docData.notSelected) {
          interruptedNotSelectedCount = Number(docData.notSelected);
        }
        console.log(interruptedNotSelectedCount);
      } catch (error) {
        console.error("Firestoreの更新処理に失敗しました", error);
      }
      await updateDoc(interruptedGenderRef, {
        notSelected: interruptedNotSelectedCount + 1,
      });
    } else {
      console.error("Firestoreの更新処理に失敗しました");
    }
  };

  const fetchEmailAndPasswordInterruptedMaleCount = async () => {
    var maleCount = 0;
    const maleCountRef = doc(db, "emailAndPasswordInterruptedGender", "Z7zuYTmN3t5wpW6t2doc");

    try {
      const snapshot = await getDoc(maleCountRef);
      const docData = snapshot.data();
      if (docData && docData.male) {
        maleCount = Number(docData.male);
      }
      console.log(`male count: ${maleCount}`);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return maleCount;
  };

  const fetchEmailAndPasswordInterruptedFemaleCount = async () => {
    var femaleCount = 0;
    const femaleCountRef = doc(db, "emailAndPasswordInterruptedGender", "Z7zuYTmN3t5wpW6t2doc");

    try {
      const snapshot = await getDoc(femaleCountRef);
      const docData = snapshot.data();
      if (docData && docData.female) {
        femaleCount = Number(docData.female);
      }
      console.log(`male count: ${femaleCount}`);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return femaleCount;
  };

  const fetchEmailAndPasswordInterruptedOtherCount = async () => {
    var otherCount = 0;
    const otherCountRef = doc(db, "emailAndPasswordInterruptedGender", "Z7zuYTmN3t5wpW6t2doc");

    try {
      const snapshot = await getDoc(otherCountRef);
      const docData = snapshot.data();
      if (docData && docData.other) {
        otherCount = Number(docData.other);
      }
      console.log(`male count: ${otherCount}`);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return otherCount;
  };

  const fetchEmailAndPasswordInterruptedNotSelectedCount = async () => {
    var notSelectedCount = 0;
    const notSelectedCountRef = doc(db, "emailAndPasswordInterruptedGender", "Z7zuYTmN3t5wpW6t2doc");

    try {
      const snapshot = await getDoc(notSelectedCountRef);
      const docData = snapshot.data();
      if (docData && docData.notSelected) {
        notSelectedCount = Number(docData.notSelected);
      }
      console.log(`male count: ${notSelectedCount}`);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return notSelectedCount;
  };

  const _onBrowserBack = async () => {
    console.log("browser back fired !");
    await fetchEmailRegisterCount().then((value) => {
      updateEmailCount(value);
    });

    await fetchPasswordRegisterCount().then((value) => {
      updatePasswordCount(value);
    });

    await fetchRetypePasswordRegisterCount().then((value) => {
      updateRetypePasswordCount(value);
    });

    if(state.state == "10") {
      await fetchEmailAndPasswordInterruptedMaleCount().then((value) => {
        updateEmailAndPasswordInterruptedMaleCount(value);
      });
    } else if (state.state == "20") {
      await fetchEmailAndPasswordInterruptedFemaleCount().then((value) => {
        updateEmailAndPasswordInterruptedFemaleCount(value);
      });
    } else if (state.state == "30") {
      await fetchEmailAndPasswordInterruptedOtherCount().then((value) => {
        updateEmailAndPasswordInterruptedOtherCount(value);
      });
    } else if (state.state == "40") {
      await fetchEmailAndPasswordInterruptedNotSelectedCount().then((value) => {
        updateEmailAndPasswordInterruptedNotSelectedCount(value);
      });
    } else {
      console.log("エラーが発生しました");
    }

    fetchAndUpdateTotalGender();
  };

  const _onPressed = async () => {
    console.log("onpressed fired");
    await fetchEmailAndPasswordSubmissionCount().then((value) => {
      updateEmailAndPasswordCount(value);
    });

    await fetchEmailRegisterCount().then((value) => {
      updateEmailCount(value);
    });

    await fetchPasswordRegisterCount().then((value) => {
      updatePasswordCount(value);
    });

    await fetchRetypePasswordRegisterCount().then((value) => {
      updateRetypePasswordCount(value);
    });
  };

  const blockBrowserBack = useCallback(() => {
    window.history.go(1)
}, [])

  useEffect(() => {
    (() => {
    window.history.pushState(null, '', window.location.href)
    window.addEventListener('popstate', blockBrowserBack)
    return () => {
        window.removeEventListener('popstate', blockBrowserBack)
    }
    // const initEmailAndPasswordSubmissionCount =
      //   await fetchEmailAndPasswordSubmissionCount();
      // setCurrentCount(initEmailAndPasswordSubmissionCount);
      // const initEmailRegisterCount = await fetchEmailRegisterCount();
      // setCurrentEmailCount(initEmailRegisterCount);
      // const initPasswordRegisterCount = await fetchPasswordRegisterCount();
      // setCurrentPasswordCount(initPasswordRegisterCount);
      // const initRetypePasswordRegisterCount =
      //   await fetchRetypePasswordRegisterCount();
      // setCurrentRetypePasswordCount(initRetypePasswordRegisterCount);
    })();
    window.onpopstate = () => {
      _onBrowserBack();
    };
  }, [blockBrowserBack]);

  return (
    <div className={classes.root}>
      <dialog ref={ref} style={{ top: "30px" }}>
        <p>メールアドレス、またはパスワードの形式が正しくありません</p>
        <p>
          パスワードは小文字、大文字、記号（%, $,
          #など）、数字を含む８文字以上にしてください
        </p>
        <br />
        <button type="button" onClick={closeModal}>
          閉じる
        </button>
      </dialog>
      <CustomParticle />
      <div>
        {isWide ? <CustomStepper arg1={1} /> : <CustomMobileStepper arg1={1} />}
      </div>
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
          <p>メールアドレス</p>
          <TextField
            {...register("email", {
              required: "メールアドレスは必須です",
              pattern: {
                value: emailRegex,
                message: "メールアドレスが適当ではありません",
              },
            })}
            onChange={(event) => setEmail(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-email"
            label="メールアドレス"
            variant="outlined"
            error={Boolean(errors.email)}
            helperText={errors.email && errors.email.message}
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
          <p>登録したいパスワード</p>
          <div style={{ marginBottom: "50px" }}>
            <OutlinedInput
              {...register("password", {
                required: "パスワードは必須です",
                pattern: {
                  value: passwordRegex,
                  message:
                    "小文字、大文字、記号（%, $, #など）、数字を含む８文字以上にしてください",
                },
              })}
              error={Boolean(errors.password)}
              onChange={(event) => setPassword(event.target.value)}
              className={classes.secretField}
              style={{ minWidth: isWide ? "400px" : "300px" }}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="登録したいパスワード"
            />
            <FormHelperText error>
              {errors.password && errors.password.message}
            </FormHelperText>
          </div>
        </div>
        <div
          className={classes.fieldWrapper}
          style={{
            flexDirection: isWide ? "row" : "column",
            paddingLeft: isWide ? "20%" : "0",
            paddingRight: isWide ? "20%" : "0",
          }}
        >
          <p>登録したいパスワード（確認）</p>
          <div style={{ marginBottom: "50px" }}>
            <OutlinedInput
              {...register("retypePassword", {
                required: "パスワードは必須です",
                pattern: {
                  value: retypePasswordRegex,
                  message:
                    "小文字、大文字、記号（%, $, #など）、数字を含む８文字以上にしてください",
                },
              })}
              error={Boolean(errors.retypePassword)}
              onChange={(event) => setRetypePassword(event.target.value)}
              className={classes.secretField}
              style={{ minWidth: isWide ? "400px" : "300px" }}
              id="outlined-adornment-password"
              type={showConfirmPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickConfirmShowPassword}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="登録したいパスワード（確認）"
            />
            <FormHelperText error>
              {errors.retypePassword && errors.retypePassword.message}
            </FormHelperText>
          </div>
        </div>
        {errors.name && <span>エラーが発生しました</span>}
        <div>
          <Link to="/final_page" style={{ paddingRight: isWide ? "3%" : "0" }}>
            <Button
              variant="text"
              color="secondary"
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
          <Link
            to={
              emailRegex.test(email) &&
              passwordRegex.test(password) &&
              retypePasswordRegex.test(retypePassword)
                ? "/third_page"
                : "#"
            }
            style={{ paddingLeft: isWide ? "3%" : "0" }}
            state={{ state: state.state }}
          >
            <Button
              disabled={email == "" || password == "" || retypePassword == ""}
              variant="contained"
              color="primary"
              onClick={
                emailRegex.test(email) &&
                passwordRegex.test(password) &&
                retypePasswordRegex.test(retypePassword)
                  ? _onPressed
                  : () => {
                      showModal();
                    }
              }
              style={{
                maxWidth: "400px",
                maxHeight: "45px",
                minWidth: "300px",
                minHeight: "45px",
                marginTop: "3%",
                paddingLeft: "1%",
              }}
            >
              次　　へ
            </Button>
          </Link>
        </div>
        <Routes>
          <Route
            path="/third_page"
            element={<NicknameAndPhoneAndBirthPage />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default EmailAndPasswordPage;
