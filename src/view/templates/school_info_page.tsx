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

  const {
    formState: { errors },
  } = useForm<User>();

  var currentCount = 0;
  var currentSchoolNameCount = 0;
  var currentDepartmentNameCount = 0;
  var currentDegreeCount = 0;
  var currentDegreeYearsCount = 0;

  const updateSchoolInfoCount = () => {
    const schoolInfoSubmitDoc = doc(
      db,
      "schoolInfoSubmission",
      "P0GIu0A69M2u9dGD3oKX"
    );
    updateDoc(schoolInfoSubmitDoc, {
      count: currentCount + 1,
    });
  };

  const updateSchoolNameCount = () => {
    const schoolNameCollectionPath = doc(
      db,
      "schoolInfoSubmission",
      "P0GIu0A69M2u9dGD3oKX",
      "schoolNameRegister",
      "9hrSr3eAGujdTbXPBoz7"
    );
    if (schoolName != "") {
      updateDoc(schoolNameCollectionPath, {
        count: currentSchoolNameCount + 1,
      });
    }
  };

  const updateDepartmentNameCount = () => {
    const departmentNameCollectionPath = doc(
      db,
      "schoolInfoSubmission",
      "P0GIu0A69M2u9dGD3oKX",
      "departmentNameRegister",
      "xaZiKRD6NeJizO6lJmJ2"
    );
    if (departmentName != "") {
      updateDoc(departmentNameCollectionPath, {
        count: currentDepartmentNameCount + 1,
      });
    }
  };

  const updateDegreeCount = () => {
    const degreeCollectionPath = doc(
      db,
      "schoolInfoSubmission",
      "P0GIu0A69M2u9dGD3oKX",
      "degreeRegister",
      "le1MU9KzmFxjs5m67Pq1"
    );
    if (degree != "") {
      updateDoc(degreeCollectionPath, {
        count: currentDegreeCount + 1,
      });
    }
  };

  const updateDegreeYearsCount = () => {
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
      updateDoc(degreeYearsCollectionPath, {
        count: currentDegreeYearsCount + 1,
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

  const _onBrowserBack = () => {
    console.log("browser back fired !");
    updateSchoolNameCount();
    updateDepartmentNameCount();
    updateDegreeCount();
    updateDegreeYearsCount();
  };

  // const _onCancel = () => {
  //   var result = window.confirm('今までの記録が破棄されますが、よろしいですか？')
  //   if(result) {
  //     window.location.href = "https://behavioral-economics-8d29e.web.app/"
  //   }
  // }

  const _onPressed = () => {
    updateSchoolInfoCount();
    updateSchoolNameCount();
    updateDepartmentNameCount();
    updateDegreeCount();
    updateDegreeYearsCount();
  };

  useEffect(() => {
    (async () => {
      currentCount = await fetchSchoolInfoSubmissionCount();
      currentSchoolNameCount = await fetchSchoolNameCount();
      currentDepartmentNameCount = await fetchDepartmentNameCount();
      currentDegreeCount = await fetchDegreeCount();
      currentDegreeYearsCount = await fetchDegreeYearsCount();
    })();
    window.onpopstate = () => {
      _onBrowserBack();
    };
  });
  return (
    <div className={classes.root}>
      <CustomParticle />
      {isWide ? <CustomStepper arg1={6} /> : <CustomMobileStepper arg1={7} />}
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
            {/* <InputLabel id="demo-simple-select-label">学位</InputLabel> */}
            <Select
              // labelId="demo-simple-select-label"
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
              {/* <InputLabel id="demo-simple-select-label">学位</InputLabel> */}
              <Select
                // labelId="demo-simple-select-label"
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
              {/* <InputLabel id="demo-simple-select-label">学位</InputLabel> */}
              <Select
                // labelId="demo-simple-select-label"
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
              {/* <InputLabel id="demo-simple-select-label">学位</InputLabel> */}
              <Select
                // labelId="demo-simple-select-label"
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
              {/* <InputLabel id="demo-simple-select-label">学位</InputLabel> */}
              <Select
                // labelId="demo-simple-select-label"
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
            >
              やめる
            </Button>
          </Link>
        <Link to="/explanation_page" style={{ paddingLeft: isWide ? "3%" : "0" }}>
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
