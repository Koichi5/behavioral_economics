import {
  Button,
  FormControl,
  MenuItem,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { PostAndAddressPage } from "./post_and_address_page";
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

export const GenderAndWorkAndHobbyPage = () => {
  const classes = useStyles();
  const [gender, setGender] = useState("");
  const [work, setWork] = useState("");
  const [hobby, setHobby] = useState("");
  const isWide = useMedia("(min-width: 800px)");

  const {
    formState: { errors },
  } = useForm<User>();

  var currentCount = 0;
  var currentGenderCount = 0;
  var currentWorkCount = 0;
  var currentHobbyCount = 0;

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };

  const updateGenderAndWorkAndHobbyCount = () => {
    const genderAndWorkAndHobbySubmitDoc = doc(
      db,
      "genderAndWorkAndHobbySubmission",
      "ur6R8Avm4P55AUAtFTX2"
    );
    updateDoc(genderAndWorkAndHobbySubmitDoc, {
      count: currentCount + 1,
    });
  };

  const updateGenderCount = () => {
    const genderCollectionPath = doc(
      db,
      "genderAndWorkAndHobbySubmission",
      "ur6R8Avm4P55AUAtFTX2",
      "genderRegister",
      "GkekzDOTmJP1FGHvdgj0"
    );
    if (gender != "") {
      updateDoc(genderCollectionPath, {
        count: currentGenderCount + 1,
      });
    }
  };

  const updateWorkCount = () => {
    const workCollectionPath = doc(
      db,
      "genderAndWorkAndHobbySubmission",
      "ur6R8Avm4P55AUAtFTX2",
      "workRegister",
      "r0LK8sEDjAxYMCfjY8Mv"
    );
    if (work != "") {
      updateDoc(workCollectionPath, {
        count: currentWorkCount + 1,
      });
    }
  };

  const updateHobbyCount = () => {
    const hobbyCollectionPath = doc(
      db,
      "genderAndWorkAndHobbySubmission",
      "ur6R8Avm4P55AUAtFTX2",
      "hobbyRegister",
      "ChTom4Cvys1I6eKTN786"
    );
    if (hobby != "") {
      updateDoc(hobbyCollectionPath, {
        count: currentHobbyCount + 1,
      });
    }
  };

  const fetchgenderAndWorkAndHobbySubmissionCount = async () => {
    var genderAndWorkAndHobbySubmissionCount = 0;
    const genderAndWorkAndHobbySubmitRef = doc(
      db,
      "genderAndWorkAndHobbySubmission",
      "ur6R8Avm4P55AUAtFTX2"
    );

    try {
      const snapshot = await getDoc(genderAndWorkAndHobbySubmitRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        genderAndWorkAndHobbySubmissionCount = Number(docData.count);
      }
      console.log(genderAndWorkAndHobbySubmissionCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return genderAndWorkAndHobbySubmissionCount;
  };

  const fetchGenderCount = async () => {
    var genderCount = 0;
    const genderCountRef = doc(
      db,
      "genderAndWorkAndHobbySubmission",
      "ur6R8Avm4P55AUAtFTX2",
      "genderRegister",
      "GkekzDOTmJP1FGHvdgj0"
    );

    try {
      const snapshot = await getDoc(genderCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        genderCount = Number(docData.count);
      }
      console.log(genderCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return genderCount;
  };

  const fetchWorkCount = async () => {
    var workCount = 0;
    const workCountRef = doc(
      db,
      "genderAndWorkAndHobbySubmission",
      "ur6R8Avm4P55AUAtFTX2",
      "workRegister",
      "r0LK8sEDjAxYMCfjY8Mv"
    );

    try {
      const snapshot = await getDoc(workCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        workCount = Number(docData.count);
      }
      console.log(workCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return workCount;
  };

  const fetchHobbyCount = async () => {
    var hobbyCount = 0;
    const hobbyCountRef = doc(
      db,
      "genderAndWorkAndHobbySubmission",
      "ur6R8Avm4P55AUAtFTX2",
      "hobbyRegister",
      "ChTom4Cvys1I6eKTN786"
    );

    try {
      const snapshot = await getDoc(hobbyCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        hobbyCount = Number(docData.count);
      }
      console.log(hobbyCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return hobbyCount;
  };

  const _onBrowserBack = () => {
    console.log("browser back fired !");
    updateGenderCount();
    updateWorkCount();
    updateHobbyCount();
  };

  const _onCancel = () => {
    var result = window.confirm('今までの記録が破棄されますが、よろしいですか？')
    if(result) {
      window.location.href = "https://behavioral-economics-8d29e.web.app/"
    }
  }

  const _onPressed = () => {
    updateGenderAndWorkAndHobbyCount();
    updateGenderCount();
    updateWorkCount();
    updateHobbyCount();
  };

  useEffect(() => {
    (async () => {
      currentCount = await fetchgenderAndWorkAndHobbySubmissionCount();
      currentGenderCount = await fetchGenderCount();
      currentWorkCount = await fetchWorkCount();
      currentHobbyCount = await fetchHobbyCount();
    })();
    window.onpopstate = () => {
      _onBrowserBack();
    };
  });
  return (
    <div className={classes.root}>
      <CustomParticle />
      <div>
        {isWide ? <CustomStepper arg1={2} /> : <CustomMobileStepper arg1={3} />}
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
          <p>性別</p>
          <FormControl
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
          >
            <Select
              // labelId="demo-simple-select-label"
              className={classes.input}
              id="demo-simple-select"
              value={gender}
              label="Degree"
              onChange={handleGenderChange}
            >
              <MenuItem value={10}>男性</MenuItem>
              <MenuItem value={20}>女性</MenuItem>
              <MenuItem value={30}>その他</MenuItem>
              <MenuItem value={40}>選択しない</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          className={classes.fieldWrapper}
          style={{
            flexDirection: isWide ? "row" : "column",
            paddingLeft: isWide ? "20%" : "0",
            paddingRight: isWide ? "20%" : "0",
          }}
        >
          <p>職業</p>
          <TextField
            onChange={(event) => setWork(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            InputProps={{ className: classes.input }}
            id="outlined-name"
            label="例）学生"
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
          <p>趣味</p>
          <TextField
            onChange={(event) => setHobby(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            InputProps={{ className: classes.input }}
            id="outlined-name"
            label="例）読書"
            variant="outlined"
          />
        </div>
        {errors.name && <span>エラーが発生しました</span>}
        <div className={classes.buttonRow}>
          <Link to="/fourth_page" style={{ paddingRight: "3%" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={_onCancel}
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
          <Link to="/fourth_page" style={{ paddingLeft: "3%" }}>
            <Button
              disabled={gender == "" || work == "" || hobby == ""}
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
          <Route path="/fourth_page" element={<PostAndAddressPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};
