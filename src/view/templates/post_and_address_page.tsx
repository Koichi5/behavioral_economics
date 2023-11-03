import { Button, TextField, makeStyles } from "@material-ui/core";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useCallback, useEffect, useRef, useState } from "react";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";
import { OtherPhoneAndNamePage } from "./other_phone_and_name_page";
import { useMedia } from "react-use";
import { CustomMobileStepper } from "../atoms/mobile_stepper";
import { useForm } from "react-hook-form";

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

const postCodeRegex = /^\d{3}-\d{4}$/;

export const PostAndAddressPage = () => {
  const ref: React.MutableRefObject<HTMLDialogElement | null> = useRef(null);
  const classes = useStyles();
  const { state } = useLocation();
  const [postNumber, setPostNumber] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const isWide = useMedia("(min-width: 800px)");

  const {
    register,
    formState: { errors },
  } = useForm();

  const showModal = useCallback(() => {
    if (ref.current) {
      ref.current.showModal();
    }
  }, []);

  const closeModal = useCallback(() => {
    if (ref.current) {
      ref.current.close();
    }
  }, []);

  const updatePostAndAddressCount = async (value: number) => {
    const postAndAddressSubmitDoc = doc(
      db,
      "postAndAddressSubmission",
      "inOV9RPe59p1ZG6TO831"
    );
    await updateDoc(postAndAddressSubmitDoc, {
      count: value + 1,
    });
  };

  const updatePostCount = async (value: number) => {
    const postCollectionPath = doc(
      db,
      "postAndAddressSubmission",
      "inOV9RPe59p1ZG6TO831",
      "postRegister",
      "7KoO3rPoHTWyrrey91k4"
    );
    if (postNumber != "") {
      await updateDoc(postCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateAddressCount = async (value: number) => {
    const addressCollectionPath = doc(
      db,
      "postAndAddressSubmission",
      "inOV9RPe59p1ZG6TO831",
      "addressRegister",
      "d61Fl4OHDJS88Vlgqwdx"
    );
    if (address != "") {
      await updateDoc(addressCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateDetailAddressCount = async (value: number) => {
    const detailAddressCollectionPath = doc(
      db,
      "postAndAddressSubmission",
      "inOV9RPe59p1ZG6TO831",
      "detailAddressRegister",
      "p1vwGJTbvPi3zA0XRwPW"
    );
    if (detailAddress != "") {
      await updateDoc(detailAddressCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updatePostAndAddressInterruptedMaleCount = async (value: number) => {
    const postAndAddressInterruptedMalePath = doc(db, "postAndAddressInterruptedGender", "1gCq33UwHPjpmqYwwLLX");
    if (state.state == "10") {
      await updateDoc(postAndAddressInterruptedMalePath, {
        male: value + 1,
      });
    }
  };

  const updatePostAndAddressInterruptedFemaleCount = async (value: number) => {
    const postAndAddressInterruptedFemalePath = doc(db, "postAndAddressInterruptedGender", "1gCq33UwHPjpmqYwwLLX");
    if (state.state == "20") {
      await updateDoc(postAndAddressInterruptedFemalePath, {
        female: value + 1,
      });
    }
  };

  const updatePostAndAddressInterruptedOtherCount = async (value: number) => {
    const postAndAddressInterruptedOtherPath = doc(db, "postAndAddressInterruptedGender", "1gCq33UwHPjpmqYwwLLX");
    if (state.state == "30") {
      await updateDoc(postAndAddressInterruptedOtherPath, {
        other: value + 1,
      });
    }
  };

  const updatePostAndAddressInterruptedNotSelectedCount = async (value: number) => {
    const postAndAddressInterruptedNotSelectedPath = doc(db, "postAndAddressInterruptedGender", "1gCq33UwHPjpmqYwwLLX");
    if (state.state == "40") {
      await updateDoc(postAndAddressInterruptedNotSelectedPath, {
        notSelected: value + 1,
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

  const fetchPostAndAddressInterruptedMaleCount = async () => {
    var maleCount = 0;
    const maleCountRef = doc(db, "postAndAddressInterruptedGender", "1gCq33UwHPjpmqYwwLLX");

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

  const fetchPostAndAddressInterruptedFemaleCount = async () => {
    var femaleCount = 0;
    const femaleCountRef = doc(db, "postAndAddressInterruptedGender", "1gCq33UwHPjpmqYwwLLX");

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

  const fetchPostAndAddressInterruptedOtherCount = async () => {
    var otherCount = 0;
    const otherCountRef = doc(db, "postAndAddressInterruptedGender", "1gCq33UwHPjpmqYwwLLX");

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

  const fetchPostAndAddressInterruptedNotSelectedCount = async () => {
    var notSelectedCount = 0;
    const notSelectedCountRef = doc(db, "postAndAddressInterruptedGender", "1gCq33UwHPjpmqYwwLLX");

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
    await fetchPostCount().then((value) => {
      updatePostCount(value);
    })
    await fetchAddressCount().then((value) => {
      updateAddressCount(value);
    })
    await fetchDetailAddressCount().then((value) => {
      updateDetailAddressCount(value);
    })

    if(state.state == "10") {
      await fetchPostAndAddressInterruptedMaleCount().then((value) => {
        updatePostAndAddressInterruptedMaleCount(value);
      });
    } else if (state.state == "20") {
      await fetchPostAndAddressInterruptedFemaleCount().then((value) => {
        updatePostAndAddressInterruptedFemaleCount(value);
      });
    } else if (state.state == "30") {
      await fetchPostAndAddressInterruptedOtherCount().then((value) => {
        updatePostAndAddressInterruptedOtherCount(value);
      });
    } else if (state.state == "40") {
      await fetchPostAndAddressInterruptedNotSelectedCount().then((value) => {
        updatePostAndAddressInterruptedNotSelectedCount(value);
      });
    } else {
      console.log("エラーが発生しました");
    }

    fetchAndUpdateTotalGender();
  };

  const _onPressed = async () => {
    await fetchPostAndAddressSubmissionCount().then((value) => {
      updatePostAndAddressCount(value);
    })
    await fetchPostCount().then((value) => {
      updatePostCount(value);
    })
    await fetchAddressCount().then((value) => {
      updateAddressCount(value);
    })
    await fetchDetailAddressCount().then((value) => {
      updateDetailAddressCount(value);
    })
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
      };
      // const initialCount = await fetchPostAndAddressSubmissionCount();
      // setCurrentCount(initialCount);

      // const initialPostCount = await fetchPostCount();
      // setCurrentPostCount(initialPostCount);

      // const initialAddressCount = await fetchAddressCount();
      // setCurrentAddressCount(initialAddressCount);

      // const initialDetailAddressCount = await fetchDetailAddressCount();
      // setCurrentDetailAddressCount(initialDetailAddressCount);

      console.log(`gender state: ${state.state}`);
    })();
  }, [blockBrowserBack]);
  return (
    <div className={classes.root}>
      <dialog ref={ref} style={{ top: "30px" }}>
        <p>郵便番号の形式が適当ではありません</p>
        <p>郵便番号は〇〇〇-〇〇〇〇の形式にしてください</p>
        <br />
        <button type="button" onClick={closeModal}>
          閉じる
        </button>
      </dialog>
      <CustomParticle />
      {isWide ? <CustomStepper arg1={3} /> : <CustomMobileStepper arg1={3} />}
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
            {...register("postCode", {
              required: "郵便番号は必須です",
              pattern: {
                value: postCodeRegex,
                message: "郵便番号の形式が適当ではありません",
              },
            })}
            onChange={(event) => setPostNumber(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-name"
            label="例）123-4567"
            variant="outlined"
            error={Boolean(errors.postCode)}
            helperText={errors.postCode && errors.postCode.message}
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
            to={postCodeRegex.test(postNumber) ? "/fifth_page" : "#"}
            style={{ paddingLeft: isWide ? "3%" : "0" }}
            state={{ state: state.state }}
          >
            <Button
              disabled={
                postNumber == "" || address == "" || detailAddress == ""
              }
              variant="contained"
              color="primary"
              onClick={
                postCodeRegex.test(postNumber)
                  ? _onPressed
                  : () => {
                      showModal();
                    }
              }
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
