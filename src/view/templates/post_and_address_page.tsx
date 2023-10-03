import { Button, TextField, makeStyles } from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";
import { OtherPhoneAndNamePage } from "./other_phone_and_name_page";
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

export const PostAndAddressPage = () => {
  const classes = useStyles();
  const [postNumber, setPostNumber] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const isWide = useMedia("(min-width: 800px)");

  var currentCount = 0;
  var currentPostCount = 0;
  var currentAddressCount = 0;
  var currentDetailAddressCount = 0;

  const updatePostAndAddressCount = () => {
    const postAndAddressSubmitDoc = doc(
      db,
      "postAndAddressSubmission",
      "inOV9RPe59p1ZG6TO831"
    );
    updateDoc(postAndAddressSubmitDoc, {
      count: currentCount + 1,
    });
  };

  const updatePostCount = () => {
    const postCollectionPath = doc(
      db,
      "postAndAddressSubmission",
      "inOV9RPe59p1ZG6TO831",
      "postRegister",
      "7KoO3rPoHTWyrrey91k4"
    );
    if (postNumber != "") {
      updateDoc(postCollectionPath, {
        count: currentPostCount + 1,
      });
    }
  };

  const updateAddressCount = () => {
    const addressCollectionPath = doc(
      db,
      "postAndAddressSubmission",
      "inOV9RPe59p1ZG6TO831",
      "addressRegister",
      "d61Fl4OHDJS88Vlgqwdx"
    );
    if (address != "") {
      updateDoc(addressCollectionPath, {
        count: currentAddressCount + 1,
      });
    }
  };

  const updateDetailAddressCount = () => {
    const detailAddressCollectionPath = doc(
      db,
      "postAndAddressSubmission",
      "inOV9RPe59p1ZG6TO831",
      "detailAddressRegister",
      "p1vwGJTbvPi3zA0XRwPW"
    );
    if (detailAddress != "") {
      updateDoc(detailAddressCollectionPath, {
        count: currentDetailAddressCount + 1,
      });
    }
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

  const fetchPostCount = async () => {
    var postCount = 0;
    const postCountRef = doc(
      db,
      "postAndAddressSubmission",
      "inOV9RPe59p1ZG6TO831",
      "postRegister",
      "7KoO3rPoHTWyrrey91k4"
    );

    try {
      const snapshot = await getDoc(postCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        postCount = Number(docData.count);
      }
      console.log(postCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return postCount;
  };

  const fetchAddressCount = async () => {
    var addressCount = 0;
    const addressCountRef = doc(
      db,
      "postAndAddressSubmission",
      "inOV9RPe59p1ZG6TO831",
      "addressRegister",
      "d61Fl4OHDJS88Vlgqwdx"
    );

    try {
      const snapshot = await getDoc(addressCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        addressCount = Number(docData.count);
      }
      console.log(addressCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return addressCount;
  };

  const fetchDetailAddressCount = async () => {
    var detailAddressCount = 0;
    const detailAddressCountRef = doc(
      db,
      "postAndAddressSubmission",
      "inOV9RPe59p1ZG6TO831",
      "detailAddressRegister",
      "p1vwGJTbvPi3zA0XRwPW"
    );

    try {
      const snapshot = await getDoc(detailAddressCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        detailAddressCount = Number(docData.count);
      }
      console.log(detailAddressCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return detailAddressCount;
  };

  const _onBrowserBack = () => {
    console.log("browser back fired !");
    updatePostCount();
    updateAddressCount();
    updateDetailAddressCount();
  };

  // const _onCancel = () => {
  //   var result = window.confirm('今までの記録が破棄されますが、よろしいですか？')
  //   if(result) {
  //     window.location.href = "https://behavioral-economics-8d29e.web.app/"
  //   }
  // }

  const _onPressed = () => {
    updatePostAndAddressCount();
    updatePostCount();
    updateAddressCount();
    updateDetailAddressCount();
  };

  useEffect(() => {
    (async () => {
      currentCount = await fetchPostAndAddressSubmissionCount();
      currentPostCount = await fetchPostCount();
      currentAddressCount = await fetchAddressCount();
      currentDetailAddressCount = await fetchDetailAddressCount();
    })();
    window.onpopstate = () => {
      _onBrowserBack();
    };
  });
  return (
    <div className={classes.root}>
      <CustomParticle />
      {isWide ? <CustomStepper arg1={3} /> : <CustomMobileStepper arg1={4} />}
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
          <p>郵便番号</p>
          <TextField
            onChange={(event) => setPostNumber(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-name"
            label="例）123-4567"
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
          <p>住所（都道府県、市町村、番地）</p>
          <TextField
            onChange={(event) => setAddress(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-name"
            label="例）東京都渋谷区渋谷2-15-1"
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
          <p>住所（アパート名等）</p>
          <TextField
            onChange={(event) => setDetailAddress(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-name"
            label="例）クロスタワー12F"
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
            >
              やめる
            </Button>
          </Link>
        <Link to="/fifth_page" style={{ paddingLeft: isWide ? "3%" : "0" }}>
          <Button
            disabled={postNumber == "" || address == "" || detailAddress == ""}
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
          <Route path="/fifth_page" element={<OtherPhoneAndNamePage />}></Route>
        </Routes>
      </div>
    </div>
  );
};
