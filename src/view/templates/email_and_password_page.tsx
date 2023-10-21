import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useCallback, useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { Link, Route, Routes } from "react-router-dom";
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const isWide = useMedia("(min-width: 800px)");
  const [currentCount, setCurrentCount] = useState(0);
  const [currentEmailCount, setCurrentEmailCount] = useState(0);
  const [currentPasswordCount, setCurrentPasswordCount] = useState(0);
  const [currentRetypePasswordCount, setCurrentRetypePasswordCount] =
    useState(0);

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

  const updateEmailAndPasswordCount = async () => {
    console.log("update email and password count");
    const emailAndPasswordSubmissionDoc = doc(
      db,
      "emailAndPasswordSubmission",
      "f1l7UtMKxLke8l40C3FZ"
    );
    await updateDoc(emailAndPasswordSubmissionDoc, {
      count: currentCount + 1,
    });
    setCurrentCount((prev) => prev + 1);
  };

  const updateEmailCount = async () => {
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
        count: currentEmailCount + 1,
      });
      setCurrentEmailCount((prev) => prev + 1);
    }
  };

  const updatePasswordCount = async () => {
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
        count: currentPasswordCount + 1,
      });
    }
    setCurrentPasswordCount((prev) => prev + 1);
  };

  const updateRetypePasswordCount = async () => {
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
        count: currentRetypePasswordCount + 1,
      });
    }
    setCurrentRetypePasswordCount((prev) => prev + 1);
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

  const _onBrowserBack = () => {
    console.log("browser back fired !");
    updateEmailCount();
    updatePasswordCount();
    updateRetypePasswordCount();
  };

  const _onPressed = () => {
    console.log("onpressed fired");
    updateEmailAndPasswordCount();
    updateEmailCount();
    updatePasswordCount();
    updateRetypePasswordCount();
  };

  useEffect(() => {
    (async () => {
      const initEmailAndPasswordSubmissionCount =
        await fetchEmailAndPasswordSubmissionCount();
      setCurrentCount(initEmailAndPasswordSubmissionCount);

      const initEmailRegisterCount = await fetchEmailRegisterCount();
      setCurrentEmailCount(initEmailRegisterCount);

      const initPasswordRegisterCount = await fetchPasswordRegisterCount();
      setCurrentPasswordCount(initPasswordRegisterCount);

      const initRetypePasswordRegisterCount =
        await fetchRetypePasswordRegisterCount();
      setCurrentRetypePasswordCount(initRetypePasswordRegisterCount);
    })();
    window.onpopstate = () => {
      _onBrowserBack();
    };
  }, []);

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
        {isWide ? <CustomStepper arg1={0} /> : <CustomMobileStepper arg1={1} />}
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
          <p>パスワード</p>
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
              label="パスワード"
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
          <p>パスワード（確認）</p>
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
              label="パスワード（確認）"
            />
            <FormHelperText error>
              {errors.retypePassword && errors.retypePassword.message}
            </FormHelperText>
          </div>
        </div>
        {errors.name && <span>エラーが発生しました</span>}
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
          <Link
            to={
              emailRegex.test(email) &&
              passwordRegex.test(password) &&
              retypePasswordRegex.test(retypePassword)
                ? "/second_page"
                : "#"
            }
            style={{ paddingLeft: isWide ? "3%" : "0" }}
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
            path="/second_page"
            element={<NicknameAndPhoneAndBirthPage />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default EmailAndPasswordPage;
