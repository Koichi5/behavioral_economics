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
import CustomParticle from "../atoms/particle";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { FinalPage } from "./final_page";

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
    background: "gray",
  },
}));

export const FifthPage = () => {
  const classes = useStyles();
  const [gender, setGender] = React.useState("");

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };

  const {
    formState: { errors },
  } = useForm<User>();

  var currentCount = 0;

  const onPressed = () => {
    const fifthSubmitDoc = doc(db, "fifthSubmission", "5xpPQVRCPGKm4SahUoqn");
    const countUpdateDocumentRef = updateDoc(fifthSubmitDoc, {
      count: currentCount + 1,
    });
    console.log(countUpdateDocumentRef);
  };

  const fetchFifthSubmissionCount = async () => {
    var fifthSubmitCount = 0;
    const fifthSubmitRef = doc(db, "fifthSubmission", "5xpPQVRCPGKm4SahUoqn");

    try {
      const snapshot = await getDoc(fifthSubmitRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        fifthSubmitCount = Number(docData.count);
      }
      console.log(fifthSubmitCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return fifthSubmitCount;
  };

  useEffect(() => {
    (async () => {
      currentCount = await fetchFifthSubmissionCount();
    })();
  });
  return (
    <div className={classes.root}>
      <CustomParticle />
      <CustomStepper arg1={4} />
      <div className={classes.fieldWrapper}>
        <p>性別</p>
        <FormControl className={classes.field}>
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
      <div className={classes.fieldWrapper}>
        <p>職業</p>
        <TextField
          className={classes.field}
          InputProps={{ className: classes.input }}
          id="outlined-name"
          label="例）学生"
          variant="outlined"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <p>趣味</p>
        <TextField
          className={classes.field}
          InputProps={{ className: classes.input }}
          id="outlined-name"
          label="例）読書"
          variant="outlined"
        />
      </div>
      {errors.name && <span>エラーが発生しました</span>}
      <Link to="/final_page">
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
        <Route path="/final_page" element={<FinalPage />}></Route>
      </Routes>
    </div>
  );
};
