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
}));

export const GenderAndWorkAndHobbyPage = () => {
  const classes = useStyles();
  const [gender, setGender] = useState("");
  const [work, setWork] = useState("");
  const [hobby, setHobby] = useState("");
  const isWide = useMedia("(min-width: 800px)");
  const [currentCount, setCurrentCount] = useState(0);
  const [currentGenderCount, setCurrentGenderCount] = useState(0);
  const [currentWorkCount, setCurrentWorkCount] = useState(0);
  const [currentHobbyCount, setCurrentHobbyCount] = useState(0);
  const [currentMaleCount, setCurrentMaleCount] = useState(0);
  const [currentFemaleCount, setCurrentFemaleCount] = useState(0);
  const [currentOtherCount, setCurrentOtherCount] = useState(0);
  const [currentNotSelectedCount, setCurrentNotSelectedCount] = useState(0);

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };

  const updateGenderAndWorkAndHobbyCount = async () => {
    const genderAndWorkAndHobbySubmitDoc = doc(
      db,
      "genderAndWorkAndHobbySubmission",
      "ur6R8Avm4P55AUAtFTX2"
    );
    await updateDoc(genderAndWorkAndHobbySubmitDoc, {
      count: currentCount + 1,
    });
    setCurrentCount((prev) => prev + 1);
  };

  const updateGenderCount = async () => {
    const genderCollectionPath = doc(
      db,
      "genderAndWorkAndHobbySubmission",
      "ur6R8Avm4P55AUAtFTX2",
      "genderRegister",
      "GkekzDOTmJP1FGHvdgj0"
    );
    if (gender != "") {
      await updateDoc(genderCollectionPath, {
        count: currentGenderCount + 1,
      });
      setCurrentGenderCount((prev) => prev + 1);
    }
  };

  const updateWorkCount = async () => {
    const workCollectionPath = doc(
      db,
      "genderAndWorkAndHobbySubmission",
      "ur6R8Avm4P55AUAtFTX2",
      "workRegister",
      "r0LK8sEDjAxYMCfjY8Mv"
    );
    if (work != "") {
      await updateDoc(workCollectionPath, {
        count: currentWorkCount + 1,
      });
      setCurrentWorkCount((prev) => prev + 1);
    }
  };

  const updateHobbyCount = async () => {
    const hobbyCollectionPath = doc(
      db,
      "genderAndWorkAndHobbySubmission",
      "ur6R8Avm4P55AUAtFTX2",
      "hobbyRegister",
      "ChTom4Cvys1I6eKTN786"
    );
    if (hobby != "") {
      await updateDoc(hobbyCollectionPath, {
        count: currentHobbyCount + 1,
      });
      setCurrentHobbyCount((prev) => prev + 1);
    }
  };

  const updateTotalMaleCount = async () => {
    const maleCollectionPath = doc(db, "totalGender", "VggaCpkEXJGNhvIu95KA");
    if (gender == "10") {
      await updateDoc(maleCollectionPath, {
        male: currentMaleCount + 1,
      });
      setCurrentMaleCount((prev) => prev + 1);
    }
  };

  const updateTotalFemaleCount = async () => {
    const femaleCollectionPath = doc(db, "totalGender", "VggaCpkEXJGNhvIu95KA");
    if (gender == "20") {
      await updateDoc(femaleCollectionPath, {
        female: currentFemaleCount + 1,
      });
      setCurrentFemaleCount((prev) => prev + 1);
    }
  };

  const updateTotalOtherCount = async () => {
    const otherCollectionPath = doc(db, "totalGender", "VggaCpkEXJGNhvIu95KA");
    if (gender == "30") {
      await updateDoc(otherCollectionPath, {
        other: currentOtherCount + 1,
      });
      setCurrentOtherCount((prev) => prev + 1);
    }
  };

  const updateTotalNotSelectedCount = async () => {
    const notSelectedCollectionPath = doc(db, "totalGender", "VggaCpkEXJGNhvIu95KA");
    if (gender == "40") {
      await updateDoc(notSelectedCollectionPath, {
        notSelected: currentNotSelectedCount + 1,
      });
      setCurrentNotSelectedCount((prev) => prev + 1);
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

  const fetchTotalMaleCount = async () => {
    var maleCount = 0;
    const maleCountRef = doc(db, "totalGender", "VggaCpkEXJGNhvIu95KA");

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

  const fetchTotalFemaleCount = async () => {
    var femaleCount = 0;
    const femaleCountRef = doc(db, "totalGender", "VggaCpkEXJGNhvIu95KA");

    try {
      const snapshot = await getDoc(femaleCountRef);
      const docData = snapshot.data();
      if (docData && docData.female) {
        femaleCount = Number(docData.female);
      }
      console.log(`female count: ${femaleCount}`);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return femaleCount;
  };

  const fetchTotalOtherCount = async () => {
    var otherCount = 0;
    const otherCountRef = doc(db, "totalGender", "VggaCpkEXJGNhvIu95KA");

    try {
      const snapshot = await getDoc(otherCountRef);
      const docData = snapshot.data();
      if (docData && docData.other) {
        otherCount = Number(docData.other);
      }
      console.log(`other count: ${otherCount}`);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return otherCount;
  };

  const fetchTotalNotSelectedCount = async () => {
    var notSelectedCount = 0;
    const notSelectedCountRef = doc(db, "totalGender", "VggaCpkEXJGNhvIu95KA");

    try {
      const snapshot = await getDoc(notSelectedCountRef);
      const docData = snapshot.data();
      if (docData && docData.notSelected) {
        notSelectedCount = Number(docData.notSelected);
      }
      console.log(`notSelected count: ${notSelectedCount}`);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return notSelectedCount;
  };

  const _onBrowserBack = () => {
    console.log("browser back fired !");
    updateGenderCount();
    updateWorkCount();
    updateHobbyCount();
    updateTotalMaleCount();
    updateTotalFemaleCount();
    updateTotalOtherCount();
    updateTotalNotSelectedCount();
  };

  const _onPressed = () => {
    updateGenderAndWorkAndHobbyCount();
    updateGenderCount();
    updateWorkCount();
    updateHobbyCount();
    updateTotalMaleCount();
    updateTotalFemaleCount();
    updateTotalOtherCount();
    updateTotalNotSelectedCount();
  };

  useEffect(() => {
    (async () => {
      const initialCount = await fetchgenderAndWorkAndHobbySubmissionCount();
      setCurrentCount(initialCount);

      const initialGenderCount = await fetchGenderCount();
      setCurrentGenderCount(initialGenderCount);

      const initialWorkCount = await fetchWorkCount();
      setCurrentWorkCount(initialWorkCount);

      const initialHobbyCount = await fetchHobbyCount();
      setCurrentHobbyCount(initialHobbyCount);

      const initialMaleCount = await fetchTotalMaleCount();
      setCurrentMaleCount(initialMaleCount);

      const initialFemaleCount = await fetchTotalFemaleCount();
      setCurrentFemaleCount(initialFemaleCount);

      const initialOtherCount = await fetchTotalOtherCount();
      setCurrentOtherCount(initialOtherCount);

      const initialNotSelectedCount = await fetchTotalNotSelectedCount();
      setCurrentNotSelectedCount(initialNotSelectedCount);
    })();
    window.onpopstate = () => {
      _onBrowserBack();
    };
  }, []);
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
            id="outlined-name"
            label="例）読書"
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
          <Link to="/fourth_page" style={{ paddingLeft: isWide ? "3%" : "0" }} state={{state: gender}}>
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
