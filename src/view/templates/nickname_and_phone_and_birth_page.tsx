import { Button, TextField, makeStyles } from "@material-ui/core";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useCallback, useEffect, useRef, useState } from "react";
import { db } from "../../firebase";
import { CustomStepper } from "../atoms/stepper";
import CustomParticle from "../atoms/particle";
import { useMedia } from "react-use";
import { CustomMobileStepper } from "../atoms/mobile_stepper";
import { useForm } from "react-hook-form";
import { PostAndAddressPage } from "./post_and_address_page";

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
    marginBottom: "50px",
    marginTop: "2%",
  },
}));

const nicknameRegex = /^.{5,}$/;
const phoneNumRegex = /^\d{3}-\d{4}-\d{4}$/;
const birthdayRegex = /^\d{4}-\d{1,2}-\d{1,2}$/;

export const NicknameAndPhoneAndBirthPage = () => {
  const ref: React.MutableRefObject<HTMLDialogElement | null> = useRef(null);
  const classes = useStyles();
  const { state } = useLocation();
  const [nickName, setNickName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDay, setBirthDay] = useState("");
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

  const updateNickNameAndPhoneAndBirthCount = async (value: number) => {
    const nicknameAndPhoneAndBirthSubmitDoc = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk"
    );
    await updateDoc(nicknameAndPhoneAndBirthSubmitDoc, {
      count: value + 1,
    });
  };

  const updateNickNameCount = async (value: number) => {
    const nickNameCollectionPath = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "nickNameRegister",
      "Ao7DYTETqqe6tUQYNSHV"
    );
    if (nickName != "") {
      await updateDoc(nickNameCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updatePhoneCount = async (value: number) => {
    const phoneCollectionPath = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "phoneRegister",
      "hG6rf4GftXlDxu9qsI13"
    );
    if (phoneNumber != "") {
      await updateDoc(phoneCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateBirthCount = async (value: number) => {
    const birthCollectionPath = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "birthRegister",
      "gv9RkSKdABBnbSnSD5Ms"
    );
    if (birthDay != "") {
      await updateDoc(birthCollectionPath, {
        count: value + 1,
      });
    }
  };

  const updateNicknameAndPhoneAndBirthInterruptedMaleCount = async (value: number) => {
    const nicknameAndPhoneAndBirthInterruptedMalePath = doc(db, "nicknameAndPhoneAndBirthInterruptedGender", "5Qy3CfF72RLlyCICl2tu");
    if (state.state == "10") {
      await updateDoc(nicknameAndPhoneAndBirthInterruptedMalePath, {
        male: value + 1,
      });
    }
  };

  const updateNicknameAndPhoneAndBirthInterruptedFemaleCount = async (value: number) => {
    const nicknameAndPhoneAndBirthInterruptedFemalePath = doc(db, "nicknameAndPhoneAndBirthInterruptedGender", "5Qy3CfF72RLlyCICl2tu");
    if (state.state == "20") {
      await updateDoc(nicknameAndPhoneAndBirthInterruptedFemalePath, {
        female: value + 1,
      });
    }
  };

  const updateNicknameAndPhoneAndBirthInterruptedOtherCount = async (value: number) => {
    const nicknameAndPhoneAndBirthInterruptedOtherPath = doc(db, "nicknameAndPhoneAndBirthInterruptedGender", "5Qy3CfF72RLlyCICl2tu");
    if (state.state == "30") {
      await updateDoc(nicknameAndPhoneAndBirthInterruptedOtherPath, {
        other: value + 1,
      });
    }
  };

  const updateNicknameAndPhoneAndBirthInterruptedNotSelectedCount = async (value: number) => {
    const nicknameAndPhoneAndBirthInterruptedNotSelectedPath = doc(db, "nicknameAndPhoneAndBirthInterruptedGender", "5Qy3CfF72RLlyCICl2tu");
    if (state.state == "40") {
      await updateDoc(nicknameAndPhoneAndBirthInterruptedNotSelectedPath, {
        notSelected: value + 1,
      });
    }
  };

  const fetchNicknameAndPhoneAndBirthSubmissionCount = async () => {
    var nicknameAndPhoneAndBirthSubmitCount = 0;
    const nicknameAndPhoneAndBirthSubmitRef = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk"
    );
    try {
      const snapshot = await getDoc(nicknameAndPhoneAndBirthSubmitRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        nicknameAndPhoneAndBirthSubmitCount = Number(docData.count);
      }
      console.log(nicknameAndPhoneAndBirthSubmitCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return nicknameAndPhoneAndBirthSubmitCount;
  };

  const fetchNicknameCount = async () => {
    var nicknameCount = 0;
    const nickNameCountRef = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "nickNameRegister",
      "Ao7DYTETqqe6tUQYNSHV"
    );

    try {
      const snapshot = await getDoc(nickNameCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        nicknameCount = Number(docData.count);
      }
      console.log(nicknameCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return nicknameCount;
  };

  const fetchPhoneCount = async () => {
    var phoneCount = 0;
    const phoneCountRef = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "phoneRegister",
      "hG6rf4GftXlDxu9qsI13"
    );
    try {
      const snapshot = await getDoc(phoneCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        phoneCount = Number(docData.count);
      }
      console.log(phoneCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return phoneCount;
  };

  const fetchBirthCount = async () => {
    var birthCount = 0;
    const birthCountRef = doc(
      db,
      "nicknameAndPhoneAndBirthSubmission",
      "VBWeQgZmJSEwJZ4STudk",
      "birthRegister",
      "gv9RkSKdABBnbSnSD5Ms"
    );
    try {
      const snapshot = await getDoc(birthCountRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        birthCount = Number(docData.count);
      }
      console.log(birthCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return birthCount;
  };

  const fetchNicknameAndPhoneAndBirthInterruptedMaleCount = async () => {
    var maleCount = 0;
    const maleCountRef = doc(db, "nicknameAndPhoneAndBirthInterruptedGender", "5Qy3CfF72RLlyCICl2tu");

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

  const fetchNicknameAndPhoneAndBirthInterruptedFemaleCount = async () => {
    var femaleCount = 0;
    const femaleCountRef = doc(db, "nicknameAndPhoneAndBirthInterruptedGender", "5Qy3CfF72RLlyCICl2tu");

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

  const fetchNicknameAndPhoneAndBirthInterruptedOtherCount = async () => {
    var otherCount = 0;
    const otherCountRef = doc(db, "nicknameAndPhoneAndBirthInterruptedGender", "5Qy3CfF72RLlyCICl2tu");

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

  const fetchNicknameAndPhoneAndBirthInterruptedNotSelectedCount = async () => {
    var notSelectedCount = 0;
    const notSelectedCountRef = doc(db, "nicknameAndPhoneAndBirthInterruptedGender", "5Qy3CfF72RLlyCICl2tu");

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
    await fetchNicknameCount().then((value) => {
      updateNickNameCount(value);
    });

    await fetchPhoneCount().then((value) => {
      updatePhoneCount(value);
    });

    await fetchBirthCount().then((value) => {
      updateBirthCount(value);
    });

    if(state.state == "10") {
      await fetchNicknameAndPhoneAndBirthInterruptedMaleCount().then((value) => {
        updateNicknameAndPhoneAndBirthInterruptedMaleCount(value);
      });
    } else if (state.state == "20") {
      await fetchNicknameAndPhoneAndBirthInterruptedFemaleCount().then((value) => {
        updateNicknameAndPhoneAndBirthInterruptedFemaleCount(value);
      });
    } else if (state.state == "30") {
      await fetchNicknameAndPhoneAndBirthInterruptedOtherCount().then((value) => {
        updateNicknameAndPhoneAndBirthInterruptedOtherCount(value);
      });
    } else if (state.state == "40") {
      await fetchNicknameAndPhoneAndBirthInterruptedNotSelectedCount().then((value) => {
        updateNicknameAndPhoneAndBirthInterruptedNotSelectedCount(value);
      });
    } else {
      console.log("エラーが発生しました");
    }

    fetchAndUpdateTotalGender();
  };

  const _onPressed = async () => {
    await fetchNicknameAndPhoneAndBirthSubmissionCount().then((value) => {
      updateNickNameAndPhoneAndBirthCount(value);
    });

    await fetchNicknameCount().then((value) => {
      updateNickNameCount(value);
    });

    await fetchPhoneCount().then((value) => {
      updatePhoneCount(value);
    });

    await fetchBirthCount().then((value) => {
      updateBirthCount(value);
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
      };      // const initialCount = await fetchNicknameAndPhoneAndBirthSubmissionCount();
      // setCurrentCount(initialCount);

      // const initialNickNameCount = await fetchNicknameCount();
      // setCurrentNickNameCount(initialNickNameCount);

      // const initialPhoneCount = await fetchPhoneCount();
      // setCurrentPhoneCount(initialPhoneCount);

      // const initialBirthCount = await fetchBirthCount();
      // setCurrentBirthCount(initialBirthCount);
    })();
  }, [blockBrowserBack]);

  return (
    <div className={classes.root}>
      <dialog ref={ref} style={{ top: "30px" }}>
        <p>ニックネーム、電話番号、または誕生日の形式が正しくありません</p>
        <p>ニックネームは５文字以上にしてください。</p>
        <br />
        <button type="button" onClick={closeModal}>
          閉じる
        </button>
      </dialog>
      <CustomParticle />
      {isWide ? <CustomStepper arg1={2} /> : <CustomMobileStepper arg1={2} />}
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
          <p>ニックネーム</p>
          <TextField
            {...register("nickName", {
              required: "ニックネームは必須です",
              minLength: {
                value: 5,
                message: "５文字以上である必要があります",
              },
            })}
            onChange={(event) => setNickName(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-name"
            label="ニックネーム"
            variant="outlined"
            error={Boolean(errors.nickName)}
            helperText={errors.nickName && errors.nickName.message}
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
          <p>電話番号</p>
          <TextField
            {...register("phone", {
              required: "電話番号は必須です",
              pattern: {
                value: phoneNumRegex,
                message: "電話番号の形式が適当ではありません",
              },
            })}
            onChange={(event) => setPhoneNumber(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-name"
            label="例）090-1234-5678"
            variant="outlined"
            error={Boolean(errors.phone)}
            helperText={errors.phone && errors.phone.message}
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
          <p>誕生日</p>
          <TextField
            {...register("birthday", {
              required: "誕生日は必須です",
              pattern: {
                value: birthdayRegex,
                message: "誕生日の形式が適当ではありません",
              },
            })}
            onChange={(event) => setBirthDay(event.target.value)}
            className={classes.field}
            style={{ minWidth: isWide ? "400px" : "300px" }}
            id="outlined-name"
            label="例）2000-01-01"
            variant="outlined"
            error={Boolean(errors.birthday)}
            helperText={errors.birthday && errors.birthday.message}
          />
        </div>
        <div>
          <Link to={"/final_page"} style={{ paddingRight: isWide ? "3%" : "0" }}>
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
            to={
              nicknameRegex.test(nickName) &&
              phoneNumRegex.test(phoneNumber) &&
              birthdayRegex.test(birthDay)
                ? "/fourth_page"
                : "#"
            }
            state={{ state: state.state }}
          >
            <Button
              disabled={nickName == "" || phoneNumber == "" || birthDay == ""}
              variant="contained"
              color="primary"
              onClick={
                nicknameRegex.test(nickName) &&
                phoneNumRegex.test(phoneNumber) &&
                birthdayRegex.test(birthDay)
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
          <Route path="/fourth_page" element={<PostAndAddressPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};
