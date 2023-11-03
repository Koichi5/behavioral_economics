import { Button, FormControl, MenuItem, makeStyles } from "@material-ui/core";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CustomParticle from "../atoms/particle";
import { SchoolInfoPage } from "./school_info_page";
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
}));

export const BloodTypeAndMotivationPage = () => {
  const classes = useStyles();
  const { state } = useLocation();
  const [bloodType, setBloodType] = useState("");
  const [motivation, setMotivation] = useState("");
  const isWide = useMedia("(min-width: 800px)");

  const handleBloodTypeChange = (event: SelectChangeEvent) => {
    setBloodType(event.target.value);
  };

  const handleMotivationChange = (event: SelectChangeEvent) => {
    setMotivation(event.target.value);
  };

  const updateBloodTypeAndMotivationCount = async (value: number) => {
    const bloodTypeAndMotivationSubmitDoc = doc(
      db,
      "bloodTypeAndMotivationSubmission",
      "YkUZ38YRtTgjXKbPshm6"
    );
    await updateDoc(bloodTypeAndMotivationSubmitDoc, {
      count: value + 1,
    });
  };

  const updateBloodCount = async (value: number) => {
    const bloodCollectionPath = doc(
      db,
      "bloodTypeAndMotivationSubmission",
      "YkUZ38YRtTgjXKbPshm6",
      "bloodRegister",
      "9nvY1Fx8O4tR5ZXM7H40"
    );
    if (bloodType != "") {
      await updateDoc(bloodCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateMotivationCount = async (value: number) => {
    const motivationCollectionPath = doc(
      db,
      "bloodTypeAndMotivationSubmission",
      "YkUZ38YRtTgjXKbPshm6",
      "motivationRegister",
      "V7XfOwzoIs4Oxm00PygN"
    );
    if (motivation != "") {
      await updateDoc(motivationCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateBloodTypeAndMotivationInterruptedMaleCount = async (value: number) => {
    const bloodTypeAndMotivationInterruptedMalePath = doc(db, "bloodTypeAndMotivationInterruptedGender", "aJUKJFVN3WPZpm9bMNo1");
    if (state.state == "10") {
      await updateDoc(bloodTypeAndMotivationInterruptedMalePath, {
        male: value + 1,
      });
    }
  };

  const updateBloodTypeAndMotivationInterruptedFemaleCount = async (value: number) => {
    const bloodTypeAndMotivationInterruptedFemalePath = doc(db, "bloodTypeAndMotivationInterruptedGender", "aJUKJFVN3WPZpm9bMNo1");
    if (state.state == "20") {
      await updateDoc(bloodTypeAndMotivationInterruptedFemalePath, {
        female: value + 1,
      });
    }
  };

  const updateBloodTypeAndMotivationInterruptedOtherCount = async (value: number) => {
    const bloodTypeAndMotivationInterruptedOtherPath = doc(db, "bloodTypeAndMotivationInterruptedGender", "aJUKJFVN3WPZpm9bMNo1");
    if (state.state == "30") {
      await updateDoc(bloodTypeAndMotivationInterruptedOtherPath, {
        other: value + 1,
      });
    }
  };

  const updateBloodTypeAndMotivationInterruptedNotSelectedCount = async (value: number) => {
    const bloodTypeAndMotivationInterruptedNotSelectedPath = doc(db, "bloodTypeAndMotivationInterruptedGender", "aJUKJFVN3WPZpm9bMNo1");
    if (state.state == "40") {
      await updateDoc(bloodTypeAndMotivationInterruptedNotSelectedPath, {
        notSelected: value + 1,
      });
    }
  };

  const fetchBloodTypeAndMotivationSubmissionCount = async () => {
    var bloodTypeAndMotivationSubmissionCount = 0;
    const bloodTypeAndMotivationSubmitRef = doc(
      db,
      "bloodTypeAndMotivationSubmission",
      "YkUZ38YRtTgjXKbPshm6"
    );
    try {
      const snapshot = await getDoc(bloodTypeAndMotivationSubmitRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        bloodTypeAndMotivationSubmissionCount = Number(docData.count);
      }
      console.log(bloodTypeAndMotivationSubmissionCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return bloodTypeAndMotivationSubmissionCount;
  };

  const fetchBloodCount = async () => {
    var bloodCount = 0;
    const bloodCountRef = doc(
      db,
      "bloodTypeAndMotivationSubmission",
      "YkUZ38YRtTgjXKbPshm6",
      "bloodRegister",
      "9nvY1Fx8O4tR5ZXM7H40"
    );

    try {
      const snapshot = await getDoc(bloodCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        bloodCount = Number(docData.count);
      }
      console.log(bloodCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return bloodCount;
  };

  const fetchMotivationCount = async () => {
    var motivationCount = 0;
    const motivationCountRef = doc(
      db,
      "bloodTypeAndMotivationSubmission",
      "YkUZ38YRtTgjXKbPshm6",
      "motivationRegister",
      "V7XfOwzoIs4Oxm00PygN"
    );

    try {
      const snapshot = await getDoc(motivationCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        motivationCount = Number(docData.count);
      }
      console.log(motivationCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return motivationCount;
  };

  const fetchBloodTypeAndMotivationInterruptedMaleCount = async () => {
    var maleCount = 0;
    const maleCountRef = doc(db, "bloodTypeAndMotivationInterruptedGender", "aJUKJFVN3WPZpm9bMNo1");

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

  const fetchBloodTypeAndMotivationInterruptedFemaleCount = async () => {
    var femaleCount = 0;
    const femaleCountRef = doc(db, "bloodTypeAndMotivationInterruptedGender", "aJUKJFVN3WPZpm9bMNo1");

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

  const fetchBloodTypeAndMotivationInterruptedOtherCount = async () => {
    var otherCount = 0;
    const otherCountRef = doc(db, "bloodTypeAndMotivationInterruptedGender", "aJUKJFVN3WPZpm9bMNo1");

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

  const fetchBloodTypeAndMotivationInterruptedNotSelectedCount = async () => {
    var notSelectedCount = 0;
    const notSelectedCountRef = doc(db, "bloodTypeAndMotivationInterruptedGender", "aJUKJFVN3WPZpm9bMNo1");

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

  const _onBrowserBack = async () => {
    console.log("browser back fired !");
    await fetchBloodCount().then((value) => {
      updateBloodCount(value);
    });
    await fetchMotivationCount().then((value) => {
      updateMotivationCount(value);
    });

    if(state.state == "10") {
      await fetchBloodTypeAndMotivationInterruptedMaleCount().then((value) => {
        updateBloodTypeAndMotivationInterruptedMaleCount(value);
      });
    } else if (state.state == "20") {
      await fetchBloodTypeAndMotivationInterruptedFemaleCount().then((value) => {
        updateBloodTypeAndMotivationInterruptedFemaleCount(value);
      });
    } else if (state.state == "30") {
      await fetchBloodTypeAndMotivationInterruptedOtherCount().then((value) => {
        updateBloodTypeAndMotivationInterruptedOtherCount(value);
      });
    } else if (state.state == "40") {
      await fetchBloodTypeAndMotivationInterruptedNotSelectedCount().then((value) => {
        updateBloodTypeAndMotivationInterruptedNotSelectedCount(value);
      });
    } else {
      console.log("エラーが発生しました");
    }

    fetchAndUpdateTotalGender();
  };

  const _onPressed = async () => {
    await fetchBloodTypeAndMotivationSubmissionCount().then((value) => {
      updateBloodTypeAndMotivationCount(value);
    });
    await fetchBloodCount().then((value) => {
      updateBloodCount(value);
    });
    await fetchMotivationCount().then((value) => {
      updateMotivationCount(value);
    });
  };

  const blockBrowserBack = useCallback(() => {
    window.history.go(1);
  }, []);

  useEffect(() => {
    (() => {
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", blockBrowserBack);
      return () => {
        window.removeEventListener("popstate", blockBrowserBack);
      };      // const initialCount = await fetchBloodTypeAndMotivationSubmissionCount();
      // setCurrentCount(initialCount);
      // const initialBloodCount = await fetchBloodCount();
      // setCurrentBloodCount(initialBloodCount);
      // const initialMotivationCount = await fetchMotivationCount();
      // setCurrentMotivationCount(initialMotivationCount);
    })();
  }, [blockBrowserBack]);
  return (
    <div className={classes.root}>
      <CustomParticle />
      {isWide ? <CustomStepper arg1={5} /> : <CustomMobileStepper arg1={5} />}
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
          <p>血液型</p>
          <FormControl
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
          >
            <Select
              id="demo-simple-select"
              value={bloodType}
              label="Degree"
              onChange={handleBloodTypeChange}
            >
              <MenuItem value={10}>A型</MenuItem>
              <MenuItem value={20}>B型</MenuItem>
              <MenuItem value={30}>O型</MenuItem>
              <MenuItem value={40}>AB型</MenuItem>
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
          <p>動機</p>
          <div style={{ display: "flex" }}>
            <FormControl
              className={classes.field}
              style={{ minWidth: isWide ? "400px" : "300px" }}
            >
              <Select
                id="demo-simple-select"
                value={motivation}
                label="Age"
                onChange={handleMotivationChange}
              >
                <MenuItem value={10}>学校からの紹介</MenuItem>
                <MenuItem value={20}>友人からの紹介</MenuItem>
                <MenuItem value={30}>家族からの紹介</MenuItem>
                <MenuItem value={40}>テレビ、新聞、雑誌で見た</MenuItem>
                <MenuItem value={50}>SNSで見た</MenuItem>
                <MenuItem value={60}>Webサイトを見た</MenuItem>
                <MenuItem value={70}>その他</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
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
            to="/seventh_page"
            style={{ paddingLeft: isWide ? "3%" : "0" }}
            state={{ state: state.state }}
          >
            <Button
              disabled={bloodType == "" || motivation == ""}
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
          <Route path="/seventh_page" element={<SchoolInfoPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};
