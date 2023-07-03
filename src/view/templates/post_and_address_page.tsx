import { Button, TextField, makeStyles } from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";
import { OtherPhoneAndNamePage } from "./other_phone_and_name_page";

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

export const PostAndAddressPage = () => {
  const classes = useStyles();
  const [postNumber, setPostNumber] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const {
    formState: { errors },
  } = useForm<User>();

  var currentCount = 0;

  const onPressed = () => {
    const postAndAddressSubmitDoc = doc(
      db,
      "postAndAddressSubmission",
      "inOV9RPe59p1ZG6TO831"
    );
    const countUpdateDocumentRef = updateDoc(postAndAddressSubmitDoc, {
      count: currentCount + 1,
    });
    console.log(countUpdateDocumentRef);
  };

  const fetchPostAndAddressSubmissionCount = async () => {
    var postAndAddressSubmissionCount = 0;
    const postAndAddressSubmitRef = doc(
      db,
      "postAndAddressSubmission",
      "inOV9RPe59p1ZG6TO831"
    );

    try {
      const snapshot = await getDoc(postAndAddressSubmitRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        postAndAddressSubmissionCount = Number(docData.count);
      }
      console.log(postAndAddressSubmissionCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return postAndAddressSubmissionCount;
  };

  useEffect(() => {
    (async () => {
      currentCount = await fetchPostAndAddressSubmissionCount();
    })();
  });
  return (
    <div className={classes.root}>
      <CustomParticle />
      <CustomStepper arg1={3} />
      <div className={classes.fieldWrapper}>
        <p>郵便番号</p>
        <TextField
          onChange={(event) => setPostNumber(event.target.value)}
          className={classes.field}
          InputProps={{ className: classes.input }}
          id="outlined-name"
          label="例）123-4567"
          variant="outlined"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <p>住所（都道府県、市町村、番地）</p>
        <TextField
          onChange={(event) => setAddress(event.target.value)}
          className={classes.field}
          InputProps={{ className: classes.input }}
          id="outlined-name"
          label="例）東京都渋谷区渋谷2-15-1"
          variant="outlined"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <p>住所（アパート名等）</p>
        <TextField
          onChange={(event) => setDetailAddress(event.target.value)}
          className={classes.field}
          InputProps={{ className: classes.input }}
          id="outlined-name"
          label="例）クロスタワー12F"
          variant="outlined"
        />
      </div>
      {errors.name && <span>エラーが発生しました</span>}
      <Link to="/fifth_page">
        <Button
          disabled={postNumber == "" || address == "" || detailAddress == ""}
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
        <Route path="/fifth_page" element={<OtherPhoneAndNamePage />}></Route>
      </Routes>
    </div>
  );
};
