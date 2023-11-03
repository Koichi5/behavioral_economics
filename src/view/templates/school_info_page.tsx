import {
  Button,
  FormControl,
  MenuItem,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CustomParticle from "../atoms/particle";
import { ExplanationPage } from "./explanation_page";
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

export const SchoolInfoPage = () => {
  const classes = useStyles();
  const { state } = useLocation();
  const [schoolName, setSchoolName] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [degree, setDegree] = useState("");
  const [degreeStartYear, setDegreeStartYear] = useState("");
  const [degreeStartMonth, setDegreeStartMonth] = useState("");
  const [degreeEndYear, setDegreeEndYear] = useState("");
  const [degreeEndMonth, setDegreeEndMonth] = useState("");
  const isWide = useMedia("(min-width: 800px)");

  const handleDegreeChange = (event: SelectChangeEvent) => {
    setDegree(event.target.value);
  };

  const handleDegreeStartYearChange = (event: SelectChangeEvent) => {
    setDegreeStartYear(event.target.value);
  };

  const handleDegreeStartMonthChange = (event: SelectChangeEvent) => {
    setDegreeStartMonth(event.target.value);
  };

  const handleDegreeEndYearChange = (event: SelectChangeEvent) => {
    setDegreeEndYear(event.target.value);
  };

  const handleDegreeEndMonthChange = (event: SelectChangeEvent) => {
    setDegreeEndMonth(event.target.value);
  };

  const updateSchoolInfoCount = async (value: number) => {
    const schoolInfoSubmitDoc = doc(
      db,
      "schoolInfoSubmission",
      "P0GIu0A69M2u9dGD3oKX"
    );
    await updateDoc(schoolInfoSubmitDoc, {
      count: value + 1,
    });
  };

  const updateSchoolNameCount = async (value: number) => {
    const schoolNameCollectionPath = doc(
      db,
      "schoolInfoSubmission",
      "P0GIu0A69M2u9dGD3oKX",
      "schoolNameRegister",
      "9hrSr3eAGujdTbXPBoz7"
    );
    if (schoolName != "") {
      await updateDoc(schoolNameCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateDepartmentNameCount = async (value: number) => {
    const departmentNameCollectionPath = doc(
      db,
      "schoolInfoSubmission",
      "P0GIu0A69M2u9dGD3oKX",
      "departmentNameRegister",
      "xaZiKRD6NeJizO6lJmJ2"
    );
    if (departmentName != "") {
      await updateDoc(departmentNameCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateDegreeCount = async (value: number) => {
    const degreeCollectionPath = doc(
      db,
      "schoolInfoSubmission",
      "P0GIu0A69M2u9dGD3oKX",
      "degreeRegister",
      "le1MU9KzmFxjs5m67Pq1"
    );
    if (degree != "") {
      await updateDoc(degreeCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateDegreeYearsCount = async (value: number) => {
    const degreeYearsCollectionPath = doc(
      db,
      "schoolInfoSubmission",
      "P0GIu0A69M2u9dGD3oKX",
      "degreeYearsRegister",
      "kllMW7XfFc29QguJHFFj"
    );
    if (
      degreeStartYear != "" &&
      degreeStartMonth != "" &&
      degreeEndYear != "" &&
      degreeEndMonth != ""
    ) {
      await updateDoc(degreeYearsCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateSchoolInfoInterruptedMaleCount = async (value: number) => {
    const schoolInfoInterruptedMalePath = doc(db, "schoolInfoInterruptedGender", "bfyLZDbUw5gk6KokTevU");
    if (state.state == "10") {
      await updateDoc(schoolInfoInterruptedMalePath, {
        male: value + 1,
      });
    }
  };

  const updateSchoolInfoInterruptedFemaleCount = async (value: number) => {
    const schoolInfoInterruptedFemalePath = doc(db, "schoolInfoInterruptedGender", "bfyLZDbUw5gk6KokTevU");
    if (state.state == "20") {
      await updateDoc(schoolInfoInterruptedFemalePath, {
        female: value + 1,
      });
    }
  };

  const updateSchoolInfoInterruptedOtherCount = async (value: number) => {
    const schoolInfoInterruptedOtherPath = doc(db, "schoolInfoInterruptedGender", "bfyLZDbUw5gk6KokTevU");
    if (state.state == "30") {
      await updateDoc(schoolInfoInterruptedOtherPath, {
        other: value + 1,
      });
    }
  };

  const updateSchoolInfoInterruptedNotSelectedCount = async (value: number) => {
    const schoolInfoInterruptedNotSelectedPath = doc(db, "schoolInfoInterruptedGender", "bfyLZDbUw5gk6KokTevU");
    if (state.state == "40") {
      await updateDoc(schoolInfoInterruptedNotSelectedPath, {
        notSelected: value + 1,
      });
    }
  };

  const fetchSchoolInfoSubmissionCount = async () => {
    var schoolInfoSubmissionSubmitCount = 0;
    const schoolInfoSubmitRef = doc(
      db,
      "schoolInfoSubmission",
      "P0GIu0A69M2u9dGD3oKX"
    );

    try {
      const snapshot = await getDoc(schoolInfoSubmitRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        schoolInfoSubmissionSubmitCount = Number(docData.count);
      }
      console.log(schoolInfoSubmissionSubmitCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return schoolInfoSubmissionSubmitCount;
  };

  const fetchSchoolNameCount = async () => {
    var schoolNameCount = 0;
    const schoolNameCountRef = doc(
      db,
      "schoolInfoSubmission",
      "P0GIu0A69M2u9dGD3oKX",
      "schoolNameRegister",
      "9hrSr3eAGujdTbXPBoz7"
    );

    try {
      const snapshot = await getDoc(schoolNameCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        schoolNameCount = Number(docData.count);
      }
      console.log(schoolNameCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return schoolNameCount;
  };

  const fetchDepartmentNameCount = async () => {
    var departmentNameCount = 0;
    const departmentNameCountRef = doc(
      db,
      "schoolInfoSubmission",
      "P0GIu0A69M2u9dGD3oKX",
      "departmentNameRegister",
      "xaZiKRD6NeJizO6lJmJ2"
    );

    try {
      const snapshot = await getDoc(departmentNameCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        departmentNameCount = Number(docData.count);
      }
      console.log(departmentNameCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return departmentNameCount;
  };

  const fetchDegreeCount = async () => {
    var degreeCount = 0;
    const degreeCountRef = doc(
      db,
      "schoolInfoSubmission",
      "P0GIu0A69M2u9dGD3oKX",
      "degreeRegister",
      "le1MU9KzmFxjs5m67Pq1"
    );

    try {
      const snapshot = await getDoc(degreeCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        degreeCount = Number(docData.count);
      }
      console.log(degreeCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return degreeCount;
  };

  const fetchDegreeYearsCount = async () => {
    var degreeYearsCount = 0;
    const degreeYearsCountRef = doc(
      db,
      "schoolInfoSubmission",
      "P0GIu0A69M2u9dGD3oKX",
      "degreeYearsRegister",
      "kllMW7XfFc29QguJHFFj"
    );

    try {
      const snapshot = await getDoc(degreeYearsCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        degreeYearsCount = Number(docData.count);
      }
      console.log(degreeYearsCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return degreeYearsCount;
  };

  const fetchSchoolInfoInterruptedMaleCount = async () => {
    var maleCount = 0;
    const maleCountRef = doc(db, "schoolInfoInterruptedGender", "bfyLZDbUw5gk6KokTevU");

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

  const fetchSchoolInfoInterruptedFemaleCount = async () => {
    var femaleCount = 0;
    const femaleCountRef = doc(db, "schoolInfoInterruptedGender", "bfyLZDbUw5gk6KokTevU");

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

  const fetchSchoolInfoInterruptedOtherCount = async () => {
    var otherCount = 0;
    const otherCountRef = doc(db, "schoolInfoInterruptedGender", "bfyLZDbUw5gk6KokTevU");

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

  const fetchSchoolInfoInterruptedNotSelectedCount = async () => {
    var notSelectedCount = 0;
    const notSelectedCountRef = doc(db, "schoolInfoInterruptedGender", "bfyLZDbUw5gk6KokTevU");

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
    await fetchSchoolNameCount().then((value) => {
      updateSchoolNameCount(value);
    });
    await fetchDepartmentNameCount().then((value) => {
      updateDepartmentNameCount(value);
    });
    await fetchDegreeCount().then((value) => {
      updateDegreeCount(value);
    });
    await fetchDegreeYearsCount().then((value) => {
      updateDegreeYearsCount(value);
    });

    if(state.state == "10") {
      await fetchSchoolInfoInterruptedMaleCount().then((value) => {
        updateSchoolInfoInterruptedMaleCount(value);
      });
    } else if (state.state == "20") {
      await fetchSchoolInfoInterruptedFemaleCount().then((value) => {
        updateSchoolInfoInterruptedFemaleCount(value);
      });
    } else if (state.state == "30") {
      await fetchSchoolInfoInterruptedOtherCount().then((value) => {
        updateSchoolInfoInterruptedOtherCount(value);
      });
    } else if (state.state == "40") {
      await fetchSchoolInfoInterruptedNotSelectedCount().then((value) => {
        updateSchoolInfoInterruptedNotSelectedCount(value);
      });
    } else {
      console.log("エラーが発生しました");
    }

    fetchAndUpdateTotalGender();
  };

  const _onPressed = async () => {
    await fetchSchoolInfoSubmissionCount().then((value) => {
      updateSchoolInfoCount(value);
    });
    await fetchSchoolNameCount().then((value) => {
      updateSchoolNameCount(value);
    });
    await fetchDepartmentNameCount().then((value) => {
      updateDepartmentNameCount(value);
    });
    await fetchDegreeCount().then((value) => {
      updateDegreeCount(value);
    });
    await fetchDegreeYearsCount().then((value) => {
      updateDegreeYearsCount(value);
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
      };      // const initialCount = await fetchSchoolInfoSubmissionCount();
      // setCurrentCount(initialCount);

      // const initialSchoolNameCount = await fetchSchoolNameCount();
      // setCurrentSchoolNameCount(initialSchoolNameCount);

      // const initialDepartmentNameCount = await fetchDepartmentNameCount();
      // setCurrentDepartmentNameCount(initialDepartmentNameCount);

      // const initialDegreeCount = await fetchDegreeCount();
      // setCurrentDegreeCount(initialDegreeCount);

      // const initialDegreeYearsCount = await fetchDegreeYearsCount();
      // setCurrentDegreeYearsCount(initialDegreeYearsCount);
    })();
  }, [blockBrowserBack]);
  return (
    <div className={classes.root}>
      <CustomParticle />
      {isWide ? <CustomStepper arg1={6} /> : <CustomMobileStepper arg1={6} />}
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
          <p>学校名</p>
          <TextField
            onChange={(event) => setSchoolName(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-name"
            label="例）太郎大学"
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
          <p>学部・学科</p>
          <TextField
            onChange={(event) => setDepartmentName(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-name"
            label="例）文学部文学科"
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
          <p>学位</p>
          <FormControl
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
          >
            <Select
              id="demo-simple-select"
              value={degree}
              label="Degree"
              onChange={handleDegreeChange}
            >
              <MenuItem value={10}>中卒</MenuItem>
              <MenuItem value={20}>高卒</MenuItem>
              <MenuItem value={30}>短期大学士</MenuItem>
              <MenuItem value={40}>学士</MenuItem>
              <MenuItem value={50}>修士</MenuItem>
              <MenuItem value={60}>博士</MenuItem>
              <MenuItem value={70}>その他</MenuItem>
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
          <p>在学期間</p>
          <div style={{ display: "flex" }}>
            <FormControl>
              <Select
                style={{
                  maxWidth: isWide ? "100px" : "50px",
                  maxHeight: "45px",
                  minWidth: isWide ? "100px" : "50px",
                  minHeight: "45px",
                  marginTop: "3%",
                }}
                id="demo-simple-select"
                value={degreeStartYear}
                label="Age"
                onChange={handleDegreeStartYearChange}
              >
                <MenuItem value={10}>2023</MenuItem>
                <MenuItem value={20}>2022</MenuItem>
                <MenuItem value={30}>2021</MenuItem>
                <MenuItem value={40}>2020</MenuItem>
                <MenuItem value={50}>2019</MenuItem>
                <MenuItem value={60}>2018</MenuItem>
                <MenuItem value={70}>2017</MenuItem>
                <MenuItem value={80}>2016</MenuItem>
                <MenuItem value={90}>2015</MenuItem>
                <MenuItem value={100}>2014</MenuItem>
                <MenuItem value={110}>2013</MenuItem>
                <MenuItem value={120}>2012</MenuItem>
              </Select>
            </FormControl>
            <p style={{ paddingLeft: 10, paddingRight: 10 }}>年</p>
            <FormControl>
              <Select
                style={{
                  maxWidth: isWide ? "100px" : "50px",
                  maxHeight: "45px",
                  minWidth: isWide ? "100px" : "50px",
                  minHeight: "45px",
                  marginTop: "3%",
                }}
                id="demo-simple-select"
                value={degreeStartMonth}
                label="Age"
                onChange={handleDegreeStartMonthChange}
              >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
                <MenuItem value={40}>4</MenuItem>
                <MenuItem value={50}>5</MenuItem>
                <MenuItem value={60}>6</MenuItem>
                <MenuItem value={70}>7</MenuItem>
                <MenuItem value={80}>8</MenuItem>
                <MenuItem value={90}>9</MenuItem>
                <MenuItem value={100}>10</MenuItem>
                <MenuItem value={110}>11</MenuItem>
                <MenuItem value={120}>12</MenuItem>
              </Select>
            </FormControl>
            <p style={{ paddingLeft: 10 }}>月</p>
            <p style={{ paddingLeft: 10, paddingRight: 10 }}>~</p>
            <FormControl>
              <Select
                style={{
                  maxWidth: isWide ? "100px" : "50px",
                  maxHeight: "45px",
                  minWidth: isWide ? "100px" : "50px",
                  minHeight: "45px",
                  marginTop: "3%",
                }}
                id="demo-simple-select"
                value={degreeEndYear}
                label="Age"
                onChange={handleDegreeEndYearChange}
              >
                <MenuItem value={10}>2030</MenuItem>
                <MenuItem value={20}>2029</MenuItem>
                <MenuItem value={30}>2028</MenuItem>
                <MenuItem value={40}>2027</MenuItem>
                <MenuItem value={50}>2026</MenuItem>
                <MenuItem value={60}>2025</MenuItem>
                <MenuItem value={70}>2024</MenuItem>
                <MenuItem value={80}>2023</MenuItem>
                <MenuItem value={90}>2022</MenuItem>
                <MenuItem value={100}>2021</MenuItem>
                <MenuItem value={110}>2020</MenuItem>
                <MenuItem value={120}>2019</MenuItem>
                <MenuItem value={110}>2018</MenuItem>
                <MenuItem value={120}>2017</MenuItem>
                <MenuItem value={110}>2016</MenuItem>
                <MenuItem value={120}>2015</MenuItem>
              </Select>
            </FormControl>
            <p style={{ paddingLeft: 10, paddingRight: 10 }}>年</p>
            <FormControl>
              <Select
                style={{
                  maxWidth: isWide ? "100px" : "50px",
                  maxHeight: "45px",
                  minWidth: isWide ? "100px" : "50px",
                  minHeight: "45px",
                  marginTop: "3%",
                }}
                id="demo-simple-select"
                value={degreeEndMonth}
                label="Age"
                onChange={handleDegreeEndMonthChange}
              >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
                <MenuItem value={40}>4</MenuItem>
                <MenuItem value={50}>5</MenuItem>
                <MenuItem value={60}>6</MenuItem>
                <MenuItem value={70}>7</MenuItem>
                <MenuItem value={80}>8</MenuItem>
                <MenuItem value={90}>9</MenuItem>
                <MenuItem value={100}>10</MenuItem>
                <MenuItem value={110}>11</MenuItem>
                <MenuItem value={120}>12</MenuItem>
              </Select>
            </FormControl>
            <p style={{ paddingLeft: 10, paddingRight: 10 }}>月</p>
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
            to="/explanation_page"
            style={{ paddingLeft: isWide ? "3%" : "0" }}
            state={{ state: state.state }}
          >
            <Button
              disabled={
                schoolName == "" ||
                departmentName == "" ||
                degree == "" ||
                degreeStartYear == "" ||
                degreeStartMonth == "" ||
                degreeEndYear == "" ||
                degreeEndMonth == ""
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
              登　　録
            </Button>
          </Link>
        </div>
        <Routes>
          <Route path="/explanation_page" element={<ExplanationPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};
