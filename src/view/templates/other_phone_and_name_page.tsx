import { Button, TextField, makeStyles } from "@material-ui/core";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useCallback, useEffect, useRef, useState } from "react";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";
import { BloodTypeAndMotivationPage } from "./blood_type_and_motivation_page";
import { CustomMobileStepper } from "../atoms/mobile_stepper";
import { useMedia } from "react-use";
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

const otherPhoneNumRegex = /^\d{3}-\d{4}-\d{4}$/;

export const OtherPhoneAndNamePage = () => {
  const ref: React.MutableRefObject<HTMLDialogElement | null> = useRef(null);
  const classes = useStyles();
  const { state } = useLocation();
  const [otherPhone, setOtherPhone] = useState("");
  const [otherName, setOtherName] = useState("");
  const [otherRelation, setOtherRelation] = useState("");
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

  const updateOtherPhoneAndNameAndRelation = async (value: number) => {
    const otherPhoneAndNameSubmitDoc = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k"
    );
    await updateDoc(otherPhoneAndNameSubmitDoc, {
      count: value + 1,
    });
  };

  const updateOtherPhoneCount = async (value: number) => {
    const otherPhoneCollectionPath = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherPhoneRegister",
      "pLxO66ORBxCNZSMUcGmc"
    );
    if (otherPhone != "") {
      await updateDoc(otherPhoneCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateOtherNameCount = async (value: number) => {
    const otherNameCollectionPath = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherNameRegister",
      "VjS0kT9lHBcibqvxdCch"
    );
    if (otherName != "") {
      await updateDoc(otherNameCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateOtherRelationCount = async (value: number) => {
    const otherRelationCollectionPath = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherRelationRegister",
      "BMJmc7A6sA9ch0cJiM9L"
    );
    if (otherRelation != "") {
      await updateDoc(otherRelationCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateOtherPhoneAndNameAndRelationInterruptedMaleCount = async (value: number) => {
    const otherPhoneAndNameAndRelationInterruptedMalePath = doc(db, "otherPhoneAndNameAndRelationInterruptedGender", "fMPXWg9QmZJoWiOBU4h3");
    if (state.state == "10") {
      await updateDoc(otherPhoneAndNameAndRelationInterruptedMalePath, {
        male: value + 1,
      });
    }
  };

  const updateOtherPhoneAndNameAndRelationInterruptedFemaleCount = async (value: number) => {
    const otherPhoneAndNameAndRelationInterruptedFemalePath = doc(db, "otherPhoneAndNameAndRelationInterruptedGender", "fMPXWg9QmZJoWiOBU4h3");
    if (state.state == "20") {
      await updateDoc(otherPhoneAndNameAndRelationInterruptedFemalePath, {
        female: value + 1,
      });
    }
  };

  const updateOtherPhoneAndNameAndRelationInterruptedOtherCount = async (value: number) => {
    const otherPhoneAndNameAndRelationInterruptedOtherPath = doc(db, "otherPhoneAndNameAndRelationInterruptedGender", "fMPXWg9QmZJoWiOBU4h3");
    if (state.state == "30") {
      await updateDoc(otherPhoneAndNameAndRelationInterruptedOtherPath, {
        other: value + 1,
      });
    }
  };

  const updateOtherPhoneAndNameAndRelationInterruptedNotSelectedCount = async (value: number) => {
    const otherPhoneAndNameAndRelationInterruptedNotSelectedPath = doc(db, "otherPhoneAndNameAndRelationInterruptedGender", "fMPXWg9QmZJoWiOBU4h3");
    if (state.state == "40") {
      await updateDoc(otherPhoneAndNameAndRelationInterruptedNotSelectedPath, {
        notSelected: value + 1,
      });
    }
  };

  const fetchotherPhoneAndNameSubmissionCount = async () => {
    var phoneAndNameSubmissionCount = 0;
    const phoneAndNameSubmiiRef = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k"
    );

    try {
      const snapshot = await getDoc(phoneAndNameSubmiiRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        phoneAndNameSubmissionCount = Number(docData.count);
      }
      console.log(phoneAndNameSubmissionCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return phoneAndNameSubmissionCount;
  };

  const fetchOtherPhoneCount = async () => {
    var otherPhoneCount = 0;
    const otherPhoneCountRef = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherPhoneRegister",
      "pLxO66ORBxCNZSMUcGmc"
    );

    try {
      const snapshot = await getDoc(otherPhoneCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        otherPhoneCount = Number(docData.count);
      }
      console.log(otherPhoneCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return otherPhoneCount;
  };

  const fetchOtherNameCount = async () => {
    var otherNameCount = 0;
    const otherNameCountRef = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherNameRegister",
      "VjS0kT9lHBcibqvxdCch"
    );

    try {
      const snapshot = await getDoc(otherNameCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        otherNameCount = Number(docData.count);
      }
      console.log(otherNameCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return otherNameCount;
  };

  const fetchOtherRelationCount = async () => {
    var otherRelationCount = 0;
    const otherRelationCountRef = doc(
      db,
      "otherPhoneAndNameSubmission",
      "wSTeNxF4tp4LK6QOnC7k",
      "otherRelationRegister",
      "BMJmc7A6sA9ch0cJiM9L"
    );

    try {
      const snapshot = await getDoc(otherRelationCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        otherRelationCount = Number(docData.count);
      }
      console.log(otherRelationCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return otherRelationCount;
  };

  const fetchOtherPhoneAndNameAndRelationInterruptedMaleCount = async () => {
    var maleCount = 0;
    const maleCountRef = doc(db, "otherPhoneAndNameAndRelationInterruptedGender", "fMPXWg9QmZJoWiOBU4h3");

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

  const fetchOtherPhoneAndNameAndRelationInterruptedFemaleCount = async () => {
    var femaleCount = 0;
    const femaleCountRef = doc(db, "otherPhoneAndNameAndRelationInterruptedGender", "fMPXWg9QmZJoWiOBU4h3");

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

  const fetchOtherPhoneAndNameAndRelationInterruptedOtherCount = async () => {
    var otherCount = 0;
    const otherCountRef = doc(db, "otherPhoneAndNameAndRelationInterruptedGender", "fMPXWg9QmZJoWiOBU4h3");

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

  const fetchOtherPhoneAndNameAndRelationInterruptedNotSelectedCount = async () => {
    var notSelectedCount = 0;
    const notSelectedCountRef = doc(db, "otherPhoneAndNameAndRelationInterruptedGender", "fMPXWg9QmZJoWiOBU4h3");

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
    await fetchOtherPhoneCount().then((value) => {
      updateOtherPhoneCount(value);
    });
    await fetchOtherNameCount().then((value) => {
      updateOtherNameCount(value);
    });
    await fetchOtherRelationCount().then((value) => {
      updateOtherRelationCount(value);
    });

    if(state.state == "10") {
      await fetchOtherPhoneAndNameAndRelationInterruptedMaleCount().then((value) => {
        updateOtherPhoneAndNameAndRelationInterruptedMaleCount(value);
      });
    } else if (state.state == "20") {
      await fetchOtherPhoneAndNameAndRelationInterruptedFemaleCount().then((value) => {
        updateOtherPhoneAndNameAndRelationInterruptedFemaleCount(value);
      });
    } else if (state.state == "30") {
      await fetchOtherPhoneAndNameAndRelationInterruptedOtherCount().then((value) => {
        updateOtherPhoneAndNameAndRelationInterruptedOtherCount(value);
      });
    } else if (state.state == "40") {
      await fetchOtherPhoneAndNameAndRelationInterruptedNotSelectedCount().then((value) => {
        updateOtherPhoneAndNameAndRelationInterruptedNotSelectedCount(value);
      });
    } else {
      console.log("エラーが発生しました");
    }

    fetchAndUpdateTotalGender();
  };

  const _onPressed = async () => {
    await fetchotherPhoneAndNameSubmissionCount().then((value) => {
      updateOtherPhoneAndNameAndRelation(value);
    });
    await fetchOtherPhoneCount().then((value) => {
      updateOtherPhoneCount(value);
    });
    await fetchOtherNameCount().then((value) => {
      updateOtherNameCount(value);
    });
    await fetchOtherRelationCount().then((value) => {
      updateOtherRelationCount(value);
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
      };      // const initialCount = await fetchotherPhoneAndNameSubmissionCount();
      // setCurrentCount(initialCount);

      // const initialOtherPhoneCount = await fetchOtherPhoneCount();
      // setCurrentOtherPhoneCount(initialOtherPhoneCount);

      // const initialOtherNameCount = await fetchOtherNameCount();
      // setCurrentOtherNameCount(initialOtherNameCount);

      // const initialOtherRelationCount = await fetchOtherRelationCount();
      // setCurrentOtherRelationCount(initialOtherRelationCount);

    })();
  }, [blockBrowserBack]);
  return (
    <div className={classes.root}>
      <dialog ref={ref} style={{ top: "30px" }}>
        <p>緊急連絡先の形式が適当ではありません</p>
        <p>緊急連絡先は〇〇〇-〇〇〇〇-〇〇〇〇の形式にしてください</p>
        <br />
        <button type="button" onClick={closeModal}>
          閉じる
        </button>
      </dialog>
      <CustomParticle />
      {isWide ? <CustomStepper arg1={4} /> : <CustomMobileStepper arg1={4} />}
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
          <p>緊急連絡先</p>
          <TextField
            {...register("otherPhoneNum", {
              required: "電話番号は必須です",
              pattern: {
                value: otherPhoneNumRegex,
                message: "電話番号の形式が適当ではありません",
              },
            })}
            onChange={(event) => setOtherPhone(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-name"
            label="例）012-3456-7890"
            variant="outlined"
            error={Boolean(errors.otherPhoneNum)}
            helperText={errors.otherPhoneNum && errors.otherPhoneNum.message}
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
          <p>緊急連絡先の方の氏名</p>
          <TextField
            onChange={(event) => setOtherName(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-name"
            label="緊急連絡先の方の氏名"
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
          <p>続柄</p>
          <TextField
            onChange={(event) => setOtherRelation(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-name"
            label="例）母親"
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
            to={otherPhoneNumRegex.test(otherPhone) ? "/sixth_page" : "#"}
            state={{ state: state.state }}
          >
            <Button
              disabled={
                otherPhone == "" || otherName == "" || otherRelation == ""
              }
              variant="contained"
              color="primary"
              onClick={
                otherPhoneNumRegex.test(otherPhone)
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
          <Route
            path="/sixth_page"
            element={<BloodTypeAndMotivationPage />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};
