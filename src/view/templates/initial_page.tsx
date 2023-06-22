import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { Link, Route, Routes } from "react-router-dom";
import { SecondPage } from "./second_page";
import {
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";
import { VisibilityOff, Visibility } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    top: "15%",
  },

  fieldWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingLeft: "20%",
    paddingRight: "20%",
  },

  field: {
    marginBottom: "50px",
    maxWidth: "400px",
    maxHeight: "45px",
    minWidth: "400px",
    minHeight: "45px",
    marginTop: "2%",
  },

  secretField: {
    marginBottom: "50px",
    maxWidth: "400px",
    minWidth: "400px",
    marginTop: "2%",
  },
}));

function InitialPage() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleClickConfirmShowPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const {
    formState: { errors },
  } = useForm<User>();

  var currentCount = 0;

  const onPressed = () => {
    const initialSubmitDoc = doc(
      db,
      "initialSubmission",
      "BI7F9fAnwmGeHdku5EIq"
    );
    const countUpdateDocumentRef = updateDoc(initialSubmitDoc, {
      count: currentCount + 1,
    });
    console.log(countUpdateDocumentRef);
  };

  const fetchInitialSubmissionCount = async () => {
    var initialSubmitCount = 0;
    const initialSubmitRef = doc(
      db,
      "initialSubmission",
      "BI7F9fAnwmGeHdku5EIq"
    );

    try {
      const snapshot = await getDoc(initialSubmitRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        initialSubmitCount = Number(docData.count);
      }
      console.log(initialSubmitCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return initialSubmitCount;
  };

  useEffect(() => {
    (async () => {
      currentCount = await fetchInitialSubmissionCount();
    })();
  });

  return (
    <div className={classes.root}>
      <CustomParticle />
      <CustomStepper arg1={0} />
      <div className={classes.fieldWrapper}>
        <p>メールアドレス</p>
        <TextField
          className={classes.field}
          id="outlined-email"
          label="メールアドレス"
          variant="outlined"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <p>パスワード</p>
        <OutlinedInput
          className={classes.secretField}
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
      <div className={classes.fieldWrapper}>
        <p>パスワード（確認）</p>
        <OutlinedInput
          className={classes.secretField}
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
      <Link to="/second_page">
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
        <Route path="/second_page" element={<SecondPage />}></Route>
      </Routes>
    </div>
  );
}

export default InitialPage;
