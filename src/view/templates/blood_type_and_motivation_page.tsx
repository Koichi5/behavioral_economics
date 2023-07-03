import { Button, FormControl, MenuItem, makeStyles } from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CustomParticle from "../atoms/particle";
import { SchoolInfoPage } from "./school_info_page";

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

  input: {
    background: "GhostWhite",
  },
}));

export const BloodTypeAndMotivationPage = () => {
  const classes = useStyles();
  const [bloodType, setBloodType] = useState("");
  const [motivation, setMotivation] = useState("");

  const handleBloodTypeChange = (event: SelectChangeEvent) => {
    setBloodType(event.target.value);
  };

  const handleMotivationChange = (event: SelectChangeEvent) => {
    setMotivation(event.target.value);
  };

  const {
    formState: { errors },
  } = useForm<User>();

  var currentCount = 0;

  const onPressed = () => {
    const bloodTypeAndMotivationSubmitDoc = doc(
      db,
      "bloodTypeAndMotivationSubmission",
      "YkUZ38YRtTgjXKbPshm6"
    );
    const countUpdateDocumentRef = updateDoc(bloodTypeAndMotivationSubmitDoc, {
      count: currentCount + 1,
    });
    console.log(countUpdateDocumentRef);
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

  useEffect(() => {
    (async () => {
      currentCount = await fetchBloodTypeAndMotivationSubmissionCount();
    })();
  });
  return (
    <div className={classes.root}>
      <CustomParticle />
      <CustomStepper arg1={5} />
      <div className={classes.fieldWrapper}>
        <p>血液型</p>
        <FormControl className={classes.field}>
          <Select
            className={classes.input}
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
      <div className={classes.fieldWrapper}>
        <p>動機</p>
        <div style={{ display: "flex" }}>
          <FormControl className={classes.field}>
            <Select
              className={classes.input}
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
      {errors.name && <span>エラーが発生しました</span>}
      <Link to="/seventh_page">
        <Button
          disabled={bloodType == "" || motivation == ""}
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
          次　　へ
        </Button>
      </Link>
      <Routes>
        <Route path="/seventh_page" element={<SchoolInfoPage />}></Route>
      </Routes>
    </div>
  );
};
