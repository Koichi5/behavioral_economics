import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { Link, Route, Routes } from "react-router-dom";
import { NicknameAndPhoneAndBirthPage } from "./nickname_and_phone_and_birth_page";
import {
  Button,
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
    marginBottom: "50px",
    maxWidth: "400px",
    marginTop: "2%",
  },

  buttonRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function EmailAndPasswordPage() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const isWide = useMedia("(min-width: 800px)");

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleClickConfirmShowPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const backButtonListener = () => {
    useEffect(() => {
      window.onpopstate = () => {
        onBrowserBack();
      };
    });
  };

  const {
    formState: { errors },
  } = useForm<User>();

  var currentCount = 0;
  var currentEmailCount = 0;

  const onPressed = () => {
    const emailAndPasswordSubmissionDoc = doc(
      db,
      "emailAndPasswordSubmission",
      "f1l7UtMKxLke8l40C3FZ"
    );
    const countUpdateDocumentRef = updateDoc(emailAndPasswordSubmissionDoc, {
      count: currentCount + 1,
    });
    console.log(countUpdateDocumentRef);
  };

  const onBrowserBack = () => {
    const emailCollectionPath = doc(
      db,
      "emailAndPasswordSubmission",
      "f1l7UtMKxLke8l40C3FZ",
      "emailRegister",
      "GmE3vIiVFF3agndDBXsh"
    );
    if (email != "") {
      updateDoc(emailCollectionPath, {
        count: currentEmailCount + 1,
      });
    }
  };

  const onCancel = () => {
    var result = window.confirm('今までの記録が破棄されますが、よろしいですか？')
    if(result) {
      window.location.href = "https://behavioral-economics-8d29e.web.app/"
    }
  }

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
    console.log("current email and password submission count:", currentCount);
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

  useEffect(() => {
    async () => {
      currentCount = await fetchEmailAndPasswordSubmissionCount();
      currentEmailCount = await fetchEmailRegisterCount();
      backButtonListener();
    };
  }, []);

  return (
    <div className={classes.root}>
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
            onChange={(event) => setEmail(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-email"
            label="メールアドレス"
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
          <p>パスワード</p>
          <OutlinedInput
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
          <OutlinedInput
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
        </div>
        {errors.name && <span>エラーが発生しました</span>}
        <div className={classes.buttonRow}>
          <Link to="/second_page" style={{ paddingRight: "3%" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={onCancel}
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
          <Link to="/second_page" style={{ paddingLeft: "3%" }}>
            <Button
              disabled={email == "" || password == "" || retypePassword == ""}
              variant="contained"
              color="primary"
              onClick={onPressed}
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
