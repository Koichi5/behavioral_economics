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
    alignItems: "center",
  },

  fieldWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "start",
    alignItems: "start",
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
  const isWide = useMedia("(min-width: 800px)");

  var currentCount = 0;
  var currentBloodCount = 0;
  var currentMotivationCount = 0;

  const handleBloodTypeChange = (event: SelectChangeEvent) => {
    setBloodType(event.target.value);
  };

  const handleMotivationChange = (event: SelectChangeEvent) => {
    setMotivation(event.target.value);
  };

  const {
    formState: { errors },
  } = useForm<User>();

  const updateBloodTypeAndMotivationCount = () => {
    const bloodTypeAndMotivationSubmitDoc = doc(
      db,
      "bloodTypeAndMotivationSubmission",
      "YkUZ38YRtTgjXKbPshm6"
    );
    updateDoc(bloodTypeAndMotivationSubmitDoc, {
      count: currentCount + 1,
    });
  };

  const updateBloodCount = () => {
    const bloodCollectionPath = doc(
      db,
      "bloodTypeAndMotivationSubmission",
      "YkUZ38YRtTgjXKbPshm6",
      "bloodRegister",
      "9nvY1Fx8O4tR5ZXM7H40"
    );
    if (bloodType != "") {
      updateDoc(bloodCollectionPath, {
        count: currentBloodCount + 1,
      });
    }
  };

  const updateMotivationCount = () => {
    const motivationCollectionPath = doc(
      db,
      "bloodTypeAndMotivationSubmission",
      "YkUZ38YRtTgjXKbPshm6",
      "motivationRegister",
      "V7XfOwzoIs4Oxm00PygN"
    );
    if (motivation != "") {
      updateDoc(motivationCollectionPath, {
        count: currentMotivationCount + 1,
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

  const fetchmotivationCount = async () => {
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

  const _onBrowserBack = () => {
    console.log("browser back fired !");
    updateBloodCount();
    updateMotivationCount();
  };

  const _onPressed = () => {
    updateBloodTypeAndMotivationCount();
    updateBloodCount();
    updateMotivationCount();
  };

  useEffect(() => {
    (async () => {
      currentCount = await fetchBloodTypeAndMotivationSubmissionCount();
      currentBloodCount = await fetchBloodCount();
      currentMotivationCount = await fetchmotivationCount();
    })();
    window.onpopstate = () => {
      _onBrowserBack();
    };
  });
  return (
    <div className={classes.root}>
      <CustomParticle />
      {isWide ? <CustomStepper arg1={5} /> : <CustomMobileStepper arg1={6} />}
      <div className={classes.formWrapper}>
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
        <Routes>
          <Route path="/seventh_page" element={<SchoolInfoPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};
