import {
  Button,
  FormControl,
  MenuItem,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CustomParticle from "../atoms/particle";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    top: "10%",
  },

  fieldWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingLeft: "20%",
    paddingRight: "20%",
  },

  field: {
    paddingBottom: "50px",
    maxWidth: "400px",
    maxHeight: "45px",
    minWidth: "400px",
    minHeight: "45px",
    marginTop: "2%",
  },
}));

export const FourthPage = () => {
  const classes = useStyles();
  const [degree, setDegree] = React.useState("");
  const [degreeStartYear, setDegreeStartYear] = React.useState("");
  const [degreeStartMonth, setDegreeStartMonth] = React.useState("");
  const [degreeEndYear, setDegreeEndYear] = React.useState("");
  const [degreeEndMonth, setDegreeEndMonth] = React.useState("");

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

  const onPressed = () => {
    const thirdSubmitDoc = doc(db, "fourthSubmission", "XTtjNvymSrgYzOw9Og5c");
    const countUpdateDocumentRef = updateDoc(thirdSubmitDoc, {
      count: currentCount + 1,
    });
    console.log(countUpdateDocumentRef);
  };

  const fetchThirdSubmissionCount = async () => {
    var thirdSubmitCount = 0;
    const thirdSubmitRef = doc(db, "fourthSubmission", "XTtjNvymSrgYzOw9Og5c");

    try {
      const snapshot = await getDoc(thirdSubmitRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        thirdSubmitCount = Number(docData.count);
      }
      console.log(thirdSubmitCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return thirdSubmitCount;
  };

  useEffect(() => {
    (async () => {
      currentCount = await fetchThirdSubmissionCount();
    })();
  });
  return (
    <div className={classes.root}>
      <CustomParticle />
      <CustomStepper arg1={3} />
      <div className={classes.fieldWrapper}>
        <p>学校名</p>
        <TextField
          className={classes.field}
          id="outlined-name"
          label="例）太郎大学"
          variant="outlined"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <p>学部・学科</p>
        <TextField
          className={classes.field}
          id="outlined-name"
          label="例）文学部文学科"
          variant="outlined"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <p>学位</p>
        <FormControl className={classes.field}>
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
      <div className={classes.fieldWrapper}>
        <p>在学期間</p>
        <div style={{ display: "flex" }}>
          <FormControl>
            {/* <InputLabel id="demo-simple-select-label">学位</InputLabel> */}
            <Select
              // labelId="demo-simple-select-label"
              style={{
                maxWidth: "100px",
                maxHeight: "45px",
                minWidth: "100px",
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
                maxWidth: "100px",
                maxHeight: "45px",
                minWidth: "100px",
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
                maxWidth: "100px",
                maxHeight: "45px",
                minWidth: "100px",
                minHeight: "45px",
                marginTop: "3%",
              }}
              id="demo-simple-select"
              value={degreeEndYear}
              label="Age"
              onChange={handleDegreeEndYearChange}
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
                maxWidth: "100px",
                maxHeight: "45px",
                minWidth: "100px",
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
      <Link to="/fourth_page">
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
        <Route path="/fourth_page" element={<FourthPage />}></Route>
      </Routes>
    </div>
  );
};
