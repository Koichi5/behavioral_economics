import Checkbox from "@mui/material/Checkbox";
import { Button, TextField, makeStyles } from "@material-ui/core";
import CustomParticle from "../atoms/particle";
import { useCallback, useEffect, useState } from "react";
import { useMedia } from "react-use";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link, Route, Routes } from "react-router-dom";
import { FinalPage } from "./final_page";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: "10%",
    paddingBottom: "10%",
  },

  field: {
    paddingBottom: "50px",
    marginTop: "2%",
  },

  checkboxWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  checkbox: {
    display: "flex",
  },

  checkboxColumn: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const AskCommentsPage = () => {
  const classes = useStyles();
  const [comment, setComment] = useState("");
  const [isEmailConfirmd, setIsEmailConfirmed] = useState(true);
  const [isPasswordConfirmd, setIsPasswordConfirmed] = useState(true);
  const [isRetypePasswordConfirmd, setIsRetypePasswordConfirmed] =
    useState(true);
  const [isNicknameConfirmd, setIsNicknameConfirmed] = useState(true);
  const [isPhoneNumConfirmd, setIsPhoneNumConfirmed] = useState(true);
  const [isBirthdayConfirmd, setIsBirthdayConfirmed] = useState(true);
  const [isGenderConfirmd, setIsGenderConfirmed] = useState(true);
  const [isWorkConfirmd, setIsWorkConfirmed] = useState(true);
  const [isHobbyConfirmd, setIsHobbyConfirmed] = useState(true);
  const [isPostCodeConfirmd, setIsPostCodeConfirmed] = useState(true);
  const [isAddressConfirmd, setIsAddressConfirmed] = useState(true);
  const [isOtherPhoneNumConfirmd, setIsOtherPhoneNumConfirmed] = useState(true);
  const [isOtherNameConfirmd, setIsOtherNameConfirmed] = useState(true);
  const [isOtherRelationConfirmd, setIsOtherRelationConfirmed] = useState(true);
  const [isBloodTypeConfirmd, setIsBloodTypeConfirmed] = useState(true);
  const [isMotivationConfirmd, setIsMotivationConfirmed] = useState(true);
  const [isSchoolNameConfirmd, setIsSchoolNameConfirmed] = useState(true);
  const [isDepartmentNameConfirmd, setIsDepartmentNameConfirmed] =
    useState(true);
  const [isDegreeConfirmd, setIsDegreeConfirmed] = useState(true);
  const [isDegreeYearsConfirmd, setIsDegreeYearsConfirmed] = useState(true);

  const [isLiedEmailConfirmd, setIsLiedEmailConfirmed] = useState(true);
  const [isLiedPasswordConfirmd, setIsLiedPasswordConfirmed] = useState(true);
  const [isLiedRetypePasswordConfirmd, setIsLiedRetypePasswordConfirmed] =
    useState(true);
  const [isLiedNicknameConfirmd, setIsLiedNicknameConfirmed] = useState(true);
  const [isLiedPhoneNumConfirmd, setIsLiedPhoneNumConfirmed] = useState(true);
  const [isLiedBirthdayConfirmd, setIsLiedBirthdayConfirmed] = useState(true);
  const [isLiedGenderConfirmd, setIsLiedGenderConfirmed] = useState(true);
  const [isLiedWorkConfirmd, setIsLiedWorkConfirmed] = useState(true);
  const [isLiedHobbyConfirmd, setIsLiedHobbyConfirmed] = useState(true);
  const [isLiedPostCodeConfirmd, setIsLiedPostCodeConfirmed] = useState(true);
  const [isLiedAddressConfirmd, setIsLiedAddressConfirmed] = useState(true);
  const [isLiedOtherPhoneNumConfirmd, setIsLiedOtherPhoneNumConfirmed] =
    useState(true);
  const [isLiedOtherNameConfirmd, setIsLiedOtherNameConfirmed] = useState(true);
  const [isLiedOtherRelationConfirmd, setIsLiedOtherRelationConfirmed] =
    useState(true);
  const [isLiedBloodTypeConfirmd, setIsLiedBloodTypeConfirmed] = useState(true);
  const [isLiedMotivationConfirmd, setIsLiedMotivationConfirmed] =
    useState(true);
  const [isLiedSchoolNameConfirmd, setIsLiedSchoolNameConfirmed] =
    useState(true);
  const [isLiedDepartmentNameConfirmd, setIsLiedDepartmentNameConfirmed] =
    useState(true);
  const [isLiedDegreeConfirmd, setIsLiedDegreeConfirmed] = useState(true);
  const [isLiedDegreeYearsConfirmd, setIsLiedDegreeYearsConfirmed] =
    useState(true);

  const handleIsEmailConfirmedChange = () => {
    setIsEmailConfirmed(!isEmailConfirmd);
    console.log(isEmailConfirmd);
  };

  const handleIsPasswordConfirmedChange = () => {
    setIsPasswordConfirmed(!isPasswordConfirmd);
    console.log(isPasswordConfirmd);
  };

  const handleIsRetypePasswordConfirmedChange = () => {
    setIsRetypePasswordConfirmed(!isRetypePasswordConfirmd);
    console.log(isRetypePasswordConfirmd);
  };

  const handleIsNicknameConfirmedChange = () => {
    setIsNicknameConfirmed(!isNicknameConfirmd);
    console.log(isNicknameConfirmd);
  };

  const handleIsPhoneNumConfirmedChange = () => {
    setIsPhoneNumConfirmed(!isPhoneNumConfirmd);
    console.log(isPhoneNumConfirmd);
  };

  const handleIsBirthdayConfirmedChange = () => {
    setIsBirthdayConfirmed(!isBirthdayConfirmd);
    console.log(isBirthdayConfirmd);
  };

  const handleIsGenderConfirmedChange = () => {
    setIsGenderConfirmed(!isGenderConfirmd);
    console.log(isGenderConfirmd);
  };

  const handleIsWorkConfirmedChange = () => {
    setIsWorkConfirmed(!isWorkConfirmd);
    console.log(isWorkConfirmd);
  };

  const handleIsHobbyConfirmedChange = () => {
    setIsHobbyConfirmed(!isHobbyConfirmd);
    console.log(isHobbyConfirmd);
  };

  const handleIsPostCodeConfirmedChange = () => {
    setIsPostCodeConfirmed(!isPostCodeConfirmd);
    console.log(isPostCodeConfirmd);
  };

  const handleIsAddressConfirmedChange = () => {
    setIsAddressConfirmed(!isAddressConfirmd);
    console.log(isAddressConfirmd);
  };

  const handleIsOtherPhoneNumConfirmedChange = () => {
    setIsOtherPhoneNumConfirmed(!isOtherPhoneNumConfirmd);
    console.log(isOtherPhoneNumConfirmd);
  };

  const handleIsOtherNameConfirmedChange = () => {
    setIsOtherNameConfirmed(!isOtherNameConfirmd);
    console.log(isOtherNameConfirmd);
  };

  const handleIsOtherRelationConfirmedChange = () => {
    setIsOtherRelationConfirmed(!isOtherRelationConfirmd);
    console.log(isOtherRelationConfirmd);
  };

  const handleIsBloodTypeConfirmedChange = () => {
    setIsBloodTypeConfirmed(!isBloodTypeConfirmd);
    console.log(isBloodTypeConfirmd);
  };

  const handleIsMotivationConfirmedChange = () => {
    setIsMotivationConfirmed(!isMotivationConfirmd);
    console.log(isMotivationConfirmd);
  };

  const handleIsSchoolNameConfirmedChange = () => {
    setIsSchoolNameConfirmed(!isSchoolNameConfirmd);
    console.log(isSchoolNameConfirmd);
  };

  const handleIsDepartmentNameConfirmedChange = () => {
    setIsDepartmentNameConfirmed(!isDepartmentNameConfirmd);
    console.log(isDepartmentNameConfirmd);
  };

  const handleIsDegreeConfirmedChange = () => {
    setIsDegreeConfirmed(!isDegreeConfirmd);
    console.log(isDegreeConfirmd);
  };

  const handleIsDegreeYearsConfirmedChange = () => {
    setIsDegreeYearsConfirmed(!isDegreeYearsConfirmd);
    console.log(isDegreeYearsConfirmd);
  };

  const handleIsLiedEmailConfirmedChange = () => {
    setIsLiedEmailConfirmed(!isLiedEmailConfirmd);
  };

  const handleIsLiedPasswordConfirmedChange = () => {
    setIsLiedPasswordConfirmed(!isLiedPasswordConfirmd);
  };

  const handleIsLiedRetypePasswordConfirmedChange = () => {
    setIsLiedRetypePasswordConfirmed(!isLiedRetypePasswordConfirmd);
  };

  const handleIsLiedNicknameConfirmedChange = () => {
    setIsLiedNicknameConfirmed(!isLiedNicknameConfirmd);
  };

  const handleIsLiedPhoneNumConfirmedChange = () => {
    setIsLiedPhoneNumConfirmed(!isLiedPhoneNumConfirmd);
  };

  const handleIsLiedBirthdayConfirmedChange = () => {
    setIsLiedBirthdayConfirmed(!isLiedBirthdayConfirmd);
  };

  const handleIsLiedGenderConfirmedChange = () => {
    setIsLiedGenderConfirmed(!isLiedGenderConfirmd);
  };

  const handleIsLiedWorkConfirmedChange = () => {
    setIsLiedWorkConfirmed(!isLiedWorkConfirmd);
  };

  const handleIsLiedHobbyConfirmedChange = () => {
    setIsLiedHobbyConfirmed(!isLiedHobbyConfirmd);
  };

  const handleIsLiedPostCodeConfirmedChange = () => {
    setIsLiedPostCodeConfirmed(!isLiedPostCodeConfirmd);
  };

  const handleIsLiedAddressConfirmedChange = () => {
    setIsLiedAddressConfirmed(!isLiedAddressConfirmd);
  };

  const handleIsLiedOtherPhoneNumConfirmedChange = () => {
    setIsLiedOtherPhoneNumConfirmed(!isLiedOtherPhoneNumConfirmd);
  };

  const handleIsLiedOtherNameConfirmedChange = () => {
    setIsLiedOtherNameConfirmed(!isLiedOtherNameConfirmd);
  };

  const handleIsLiedOtherRelationConfirmedChange = () => {
    setIsLiedOtherRelationConfirmed(!isLiedOtherRelationConfirmd);
  };

  const handleIsLiedBloodTypeConfirmedChange = () => {
    setIsLiedBloodTypeConfirmed(!isLiedBloodTypeConfirmd);
  };

  const handleIsLiedMotivationConfirmedChange = () => {
    setIsLiedMotivationConfirmed(!isLiedMotivationConfirmd);
  };

  const handleIsLiedSchoolNameConfirmedChange = () => {
    setIsLiedSchoolNameConfirmed(!isLiedSchoolNameConfirmd);
  };

  const handleIsLiedDepartmentNameConfirmedChange = () => {
    setIsLiedDepartmentNameConfirmed(!isLiedDepartmentNameConfirmd);
  };

  const handleIsLiedDegreeConfirmedChange = () => {
    setIsLiedDegreeConfirmed(!isLiedDegreeConfirmd);
  };

  const handleIsLiedDegreeYearsConfirmedChange = () => {
    setIsLiedDegreeYearsConfirmed(!isLiedDegreeYearsConfirmd);
  };

  const isWide = useMedia("(min-width: 800px)");

  const fetchEmailCount = async () => {
    var emailCount = 0;
    const emailCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "emailCount",
      "U8H2X1bwtVB2ilP10EgY"
    );

    try {
      const snapshot = await getDoc(emailCountPath);
      const docData = snapshot.data();
      if (docData && docData.count) {
        emailCount = Number(docData.count);
      }
      console.log(emailCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return emailCount;
  };

  const updateEmailCount = (value: number) => {
    console.log("updateEmailCount");
    const emailCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "emailCount",
      "U8H2X1bwtVB2ilP10EgY"
    );
    updateDoc(emailCountPath, {
      count: value + 1,
    });
  };

  const fetchPasswordCount = async () => {
    var passwordCount = 0;
    const passwordCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "passwordCount",
      "khbYQLwsrJ5qMxjxLAjx"
    );

    try {
      const snapshot = await getDoc(passwordCountPath);
      const docData = snapshot.data();
      if (docData && docData.count) {
        passwordCount = Number(docData.count);
      }
      console.log(passwordCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return passwordCount;
  };

  const updatePasswordCount = (value: number) => {
    console.log("updatePasswordCount");
    const passwordCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "passwordCount",
      "khbYQLwsrJ5qMxjxLAjx"
    );
    updateDoc(passwordCountPath, {
      count: value + 1,
    });
  };

  const fetchRetypePasswordCount = async () => {
    var retypePasswordCount = 0;
    const retypePasswordCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "retypePasswordCount",
      "bJztMoQcshMaNqMZ758E"
    );

    try {
      const snapshot = await getDoc(retypePasswordCountPath);
      const docData = snapshot.data();
      if (docData && docData.count) {
        retypePasswordCount = Number(docData.count);
      }
      console.log(retypePasswordCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return retypePasswordCount;
  };

  const updateRetypePasswordCount = (value: number) => {
    console.log("updateRetypePasswordCount");
    const retypePasswordCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "retypePasswordCount",
      "bJztMoQcshMaNqMZ758E"
    );
    updateDoc(retypePasswordCountPath, {
      count: value + 1,
    });
  };

  const fetchNicknameCount = async () => {
    var nicknameCount = 0;
    const nicknameCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "nicknameCount",
      "POyYYIZmmEmBXWBJMd7P"
    );
    try {
      const snapshot = await getDoc(nicknameCountPath);
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

  const updateNicknameCount = (value: number) => {
    console.log("updateNicknameCount");
    const nicknameCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "nicknameCount",
      "POyYYIZmmEmBXWBJMd7P"
    );
    updateDoc(nicknameCountPath, {
      count: value + 1,
    });
  };

  const fetchPhoneNumCount = async () => {
    var phoneNumCount = 0;
    const phoneNumCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "phoneNumCount",
      "fyQLSoKGqHkBDYBVaZaQ"
    );
    try {
      const snapshot = await getDoc(phoneNumCountPath);
      const docData = snapshot.data();
      if (docData && docData.count) {
        phoneNumCount = Number(docData.count);
      }
      console.log(phoneNumCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return phoneNumCount;
  };

  const updatePhoneNumCount = (value: number) => {
    console.log("updatePhoneNumCount");
    const phoneNumCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "phoneNumCount",
      "fyQLSoKGqHkBDYBVaZaQ"
    );
    updateDoc(phoneNumCountPath, {
      count: value + 1,
    });
  };

  const fetchBirthdayCount = async () => {
    var birthdayCount = 0;
    const birthdayCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "birthdayCount",
      "eBKXQXQk8uaEsFoOGMb4"
    );
    try {
      const snapshot = await getDoc(birthdayCountPath);
      const docData = snapshot.data();
      if (docData && docData.count) {
        birthdayCount = Number(docData.count);
      }
      console.log(birthdayCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return birthdayCount;
  };

  const updateBirthdayCount = (value: number) => {
    console.log("updateBirthdayCount");
    const birthdayCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "birthdayCount",
      "eBKXQXQk8uaEsFoOGMb4"
    );
    updateDoc(birthdayCountPath, {
      count: value + 1,
    });
  };

  const fetchGenderCount = async () => {
    var genderCount = 0;
    const genderCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "genderCount",
      "G8ZoE0HqoUqiy0cwSKpL"
    );
    try {
      const snapshot = await getDoc(genderCountPath);
      const docData = snapshot.data();
      if (docData && docData.count) {
        genderCount = Number(docData.count);
      }
      console.log(genderCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return genderCount;
  };

  const updateGenderCount = (value: number) => {
    console.log("updateGenderCount");
    const genderCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "genderCount",
      "G8ZoE0HqoUqiy0cwSKpL"
    );
    updateDoc(genderCountPath, {
      count: value + 1,
    });
  };

  const fetchWorkCount = async () => {
    var workCount = 0;
    const workCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "workCount",
      "C3TK0Cn4KJ25DMSZWTNA"
    );
    try {
      const snapshot = await getDoc(workCountPath);
      const docData = snapshot.data();
      if (docData && docData.count) {
        workCount = Number(docData.count);
      }
      console.log(workCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return workCount;
  };

  const updateWorkCount = (value: number) => {
    console.log("updateWorkCount");
    const workCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "workCount",
      "C3TK0Cn4KJ25DMSZWTNA"
    );
    updateDoc(workCountPath, {
      count: value + 1,
    });
  };

  const fetchHobbyCount = async () => {
    var hobbyCount = 0;
    const hobbyCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "hobbyCount",
      "IxY6rM2BHRzN05duZL3F"
    );
    try {
      const snapshot = await getDoc(hobbyCountPath);
      const docData = snapshot.data();
      if (docData && docData.count) {
        hobbyCount = Number(docData.count);
      }
      console.log(hobbyCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return hobbyCount;
  };

  const updateHobbyCount = (value: number) => {
    console.log("updateHobbyCount");
    const hobbyCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "hobbyCount",
      "IxY6rM2BHRzN05duZL3F"
    );
    updateDoc(hobbyCountPath, {
      count: value + 1,
    });
  };

  const fetchPostCodeCount = async () => {
    var postCodeCount = 0;
    const postCodeCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "postCodeCount",
      "sRv2GOVH1eXioxXRrmnQ"
    );
    try {
      const snapshot = await getDoc(postCodeCountPath);
      const docData = snapshot.data();
      if (docData && docData.count) {
        postCodeCount = Number(docData.count);
      }
      console.log(postCodeCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return postCodeCount;
  };

  const updatePostCodeCount = (value: number) => {
    console.log("updatePostCodeCount");
    const postCodeCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "postCodeCount",
      "sRv2GOVH1eXioxXRrmnQ"
    );
    updateDoc(postCodeCountPath, {
      count: value + 1,
    });
  };

  const fetchAddressCount = async () => {
    var addressCount = 0;
    const addressCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "addressCount",
      "9hc8XpF4sW6HgeqtQQ3M"
    );
    try {
      const snapshot = await getDoc(addressCountPath);
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

  const updateAddressCount = (value: number) => {
    console.log("updateAddressCount");
    const addressCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "addressCount",
      "9hc8XpF4sW6HgeqtQQ3M"
    );
    updateDoc(addressCountPath, {
      count: value + 1,
    });
  };

  const fetchOtherPhoneNumCount = async () => {
    var otherPhoneNumCount = 0;
    const otherPhoneNumCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "otherPhoneNumCount",
      "gXMLhO8H9oPVzGpXMp5Z"
    );
    try {
      const snapshot = await getDoc(otherPhoneNumCountPath);
      const docData = snapshot.data();
      if (docData && docData.count) {
        otherPhoneNumCount = Number(docData.count);
      }
      console.log(otherPhoneNumCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return otherPhoneNumCount;
  };

  const updateOtherPhoneNumCount = (value: number) => {
    console.log("updateOtherPhoneNumCount");
    const otherPhoneNumCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "otherPhoneNumCount",
      "gXMLhO8H9oPVzGpXMp5Z"
    );
    updateDoc(otherPhoneNumCountPath, {
      count: value + 1,
    });
  };

  const fetchOtherNameCount = async () => {
    var otherNameCount = 0;
    const otherNameCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "otherNameCount",
      "y7vfEF76Df6eWtD0DzK8"
    );
    try {
      const snapshot = await getDoc(otherNameCountPath);
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

  const updateOtherNameCount = (value: number) => {
    console.log("updateOtherNameCount");
    const otherNameCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "otherNameCount",
      "y7vfEF76Df6eWtD0DzK8"
    );
    updateDoc(otherNameCountPath, {
      count: value + 1,
    });
  };

  const fetchOtherRelationCount = async () => {
    var otherRelationCount = 0;
    const otherRelationCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "otherRelationCount",
      "OcfnzMK866fYqGLzui85"
    );
    try {
      const snapshot = await getDoc(otherRelationCountPath);
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

  const updateOtherRelationCount = (value: number) => {
    console.log("updateOtherRelationCount");
    const otherRelationCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "otherRelationCount",
      "OcfnzMK866fYqGLzui85"
    );
    updateDoc(otherRelationCountPath, {
      count: value + 1,
    });
  };

  const fetchBloodTypeCount = async () => {
    var bloodTypeCount = 0;
    const bloodTypeCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "bloodTypeCount",
      "yDRKwrimJWMglOnnIiJO"
    );
    try {
      const snapshot = await getDoc(bloodTypeCountPath);
      const docData = snapshot.data();
      if (docData && docData.count) {
        bloodTypeCount = Number(docData.count);
      }
      console.log(bloodTypeCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return bloodTypeCount;
  };

  const updateBloodTypeCount = (value: number) => {
    console.log("updateBloodTypeCount");
    const bloodTypeCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "bloodTypeCount",
      "yDRKwrimJWMglOnnIiJO"
    );
    updateDoc(bloodTypeCountPath, {
      count: value + 1,
    });
  };

  const fetchMotivationCount = async () => {
    var motivationCount = 0;
    const motivationCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "motivationCount",
      "j9fet8D8DNFIOTLseG2Q"
    );
    try {
      const snapshot = await getDoc(motivationCountPath);
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

  const updateMotivationCount = (value: number) => {
    console.log("updateMotivationCount");
    const motivationCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "motivationCount",
      "j9fet8D8DNFIOTLseG2Q"
    );
    updateDoc(motivationCountPath, {
      count: value + 1,
    });
  };

  const fetchSchoolNameCount = async () => {
    var schoolNameCount = 0;
    const schoolNameCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "schoolNameCount",
      "YeWoWyx5qHwWjJHO7gAf"
    );
    try {
      const snapshot = await getDoc(schoolNameCountPath);
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

  const updateSchoolNameCount = (value: number) => {
    console.log("updateSchoolNameCount");
    const schoolNameCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "schoolNameCount",
      "YeWoWyx5qHwWjJHO7gAf"
    );
    updateDoc(schoolNameCountPath, {
      count: value + 1,
    });
  };

  const fetchDepartmentNameCount = async () => {
    var departmentNameCount = 0;
    const departmentNameCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "departmentNameCount",
      "JzseeyI2IAjyPv9xzNt0"
    );
    try {
      const snapshot = await getDoc(departmentNameCountPath);
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

  const updateDepartmentNameCount = (value: number) => {
    console.log("updateDepartmentNameCount");
    const departmentNameCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "departmentNameCount",
      "JzseeyI2IAjyPv9xzNt0"
    );
    updateDoc(departmentNameCountPath, {
      count: value + 1,
    });
  };

  const fetchDegreeCount = async () => {
    var degreeCount = 0;
    const degreeCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "degreeCount",
      "DlyHJQhjuiqNJ7AYS2ox"
    );
    try {
      const snapshot = await getDoc(degreeCountPath);
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

  const updateDegreeCount = (value: number) => {
    console.log("updateDegreeCount");
    const degreeCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "degreeCount",
      "DlyHJQhjuiqNJ7AYS2ox"
    );
    updateDoc(degreeCountPath, {
      count: value + 1,
    });
  };

  const fetchDegreeYearsCount = async () => {
    var degreeYearsCount = 0;
    const degreeYearsCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "degreeYearsCount",
      "a9j3tmlgvGtqFM50e6X7"
    );
    try {
      const snapshot = await getDoc(degreeYearsCountPath);
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

  const updateDegreeYearsCount = (value: number) => {
    console.log("updateDegreeYearsCount");
    const degreeYearsCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "degreeYearsCount",
      "a9j3tmlgvGtqFM50e6X7"
    );
    updateDoc(degreeYearsCountPath, {
      count: value + 1,
    });
  };

  const fetchLiedEmailCount = async () => {
    var emailCount = 0;
    const emailCountPath = doc(db, "finalAssessment", "NsUKNWxMtkuyT6e1phXO");

    try {
      const snapshot = await getDoc(emailCountPath);
      const docData = snapshot.data();
      if (docData && docData.emailLiedCount) {
        emailCount = Number(docData.emailLiedCount);
      }
      console.log(emailCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return emailCount;
  };

  const updateLiedEmailCount = (value: number) => {
    console.log("updateEmailCount");
    const emailCountPath = doc(db, "finalAssessment", "NsUKNWxMtkuyT6e1phXO");

    updateDoc(emailCountPath, {
      emailLiedCount: value + 1,
    });
  };

  const fetchLiedPasswordCount = async () => {
    var passwordCount = 0;
    const passwordCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO"
    );

    try {
      const snapshot = await getDoc(passwordCountPath);
      const docData = snapshot.data();
      if (docData && docData.passwordLiedCount) {
        passwordCount = Number(docData.passwordLiedCount);
      }
      console.log(passwordCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return passwordCount;
  };

  const updateLiedPasswordCount = (value: number) => {
    console.log("updatePasswordCount");
    const passwordCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO"
    );
    updateDoc(passwordCountPath, {
      passwordLiedCount: value + 1,
    });
  };

  const fetchLiedRetypePasswordCount = async () => {
    var retypePasswordCount = 0;
    const retypePasswordCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO"
    );

    try {
      const snapshot = await getDoc(retypePasswordCountPath);
      const docData = snapshot.data();
      if (docData && docData.retypePasswordLiedCount) {
        retypePasswordCount = Number(docData.retypePasswordLiedCount);
      }
      console.log(retypePasswordCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return retypePasswordCount;
  };

  const updateLiedRetypePasswordCount = (value: number) => {
    console.log("updateRetypePasswordCount");
    const retypePasswordCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO"
    );
    updateDoc(retypePasswordCountPath, {
      retypePasswordLiedCount: value + 1,
    });
  };

  const fetchLiedNicknameCount = async () => {
    var nicknameCount = 0;
    const nicknameCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO"
    );
    try {
      const snapshot = await getDoc(nicknameCountPath);
      const docData = snapshot.data();
      if (docData && docData.nicknameLiedCount) {
        nicknameCount = Number(docData.nicknameLiedCount);
      }
      console.log(nicknameCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return nicknameCount;
  };

  const updateLiedNicknameCount = (value: number) => {
    console.log("updateNicknameCount");
    const nicknameCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO"
    );
    updateDoc(nicknameCountPath, {
      nicknameLiedCount: value + 1,
    });
  };

  const fetchLiedPhoneNumCount = async () => {
    var phoneNumCount = 0;
    const phoneNumCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO"
    );
    try {
      const snapshot = await getDoc(phoneNumCountPath);
      const docData = snapshot.data();
      if (docData && docData.phoneNumLiedCount) {
        phoneNumCount = Number(docData.phoneNumLiedCount);
      }
      console.log(phoneNumCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return phoneNumCount;
  };

  const updateLiedPhoneNumCount = (value: number) => {
    console.log("updatePhoneNumCount");
    const phoneNumCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO"
    );
    updateDoc(phoneNumCountPath, {
      phoneNumLiedCount: value + 1,
    });
  };

  const fetchLiedBirthdayCount = async () => {
    var birthdayCount = 0;
    const birthdayCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO"
    );
    try {
      const snapshot = await getDoc(birthdayCountPath);
      const docData = snapshot.data();
      if (docData && docData.birthdayLiedCount) {
        birthdayCount = Number(docData.birthdayLiedCount);
      }
      console.log(birthdayCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return birthdayCount;
  };

  const updateLiedBirthdayCount = (value: number) => {
    console.log("updateBirthdayCount");
    const birthdayCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO"
    );
    updateDoc(birthdayCountPath, {
      birthdayLiedCount: value + 1,
    });
  };

  const fetchLiedGenderCount = async () => {
    var genderCount = 0;
    const genderCountPath = doc(db, "finalAssessment", "NsUKNWxMtkuyT6e1phXO");
    try {
      const snapshot = await getDoc(genderCountPath);
      const docData = snapshot.data();
      if (docData && docData.genderLiedCount) {
        genderCount = Number(docData.genderLiedCount);
      }
      console.log(genderCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return genderCount;
  };

  const updateLiedGenderCount = (value: number) => {
    console.log("updateGenderCount");
    const genderCountPath = doc(db, "finalAssessment", "NsUKNWxMtkuyT6e1phXO");
    updateDoc(genderCountPath, {
      genderLiedCount: value + 1,
    });
  };

  const fetchLiedWorkCount = async () => {
    var workCount = 0;
    const workCountPath = doc(db, "finalAssessment", "NsUKNWxMtkuyT6e1phXO");
    try {
      const snapshot = await getDoc(workCountPath);
      const docData = snapshot.data();
      if (docData && docData.workLiedCount) {
        workCount = Number(docData.workLiedCount);
      }
      console.log(workCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return workCount;
  };

  const updateLiedWorkCount = (value: number) => {
    console.log("updateWorkCount");
    const workCountPath = doc(db, "finalAssessment", "NsUKNWxMtkuyT6e1phXO");
    updateDoc(workCountPath, {
      workLiedCount: value + 1,
    });
  };

  const fetchLiedHobbyCount = async () => {
    var hobbyCount = 0;
    const hobbyCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    try {
      const snapshot = await getDoc(hobbyCountPath);
      const docData = snapshot.data();
      if (docData && docData.hobbyLiedCount) {
        hobbyCount = Number(docData.hobbyLiedCount);
      }
      console.log(hobbyCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return hobbyCount;
  };

  const updateLiedHobbyCount = (value: number) => {
    console.log("updateHobbyCount");
    const hobbyCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    updateDoc(hobbyCountPath, {
      hobbyLiedCount: value + 1,
    });
  };

  const fetchLiedPostCodeCount = async () => {
    var postCodeCount = 0;
    const postCodeCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    try {
      const snapshot = await getDoc(postCodeCountPath);
      const docData = snapshot.data();
      if (docData && docData.postCodeLiedCount) {
        postCodeCount = Number(docData.postCodeLiedCount);
      }
      console.log(postCodeCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return postCodeCount;
  };

  const updateLiedPostCodeCount = (value: number) => {
    console.log("updatePostCodeCount");
    const postCodeCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    updateDoc(postCodeCountPath, {
      postCodeLiedCount: value + 1,
    });
  };

  const fetchLiedAddressCount = async () => {
    var addressCount = 0;
    const addressCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    try {
      const snapshot = await getDoc(addressCountPath);
      const docData = snapshot.data();
      if (docData && docData.addressLiedCount) {
        addressCount = Number(docData.addressLiedCount);
      }
      console.log(addressCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return addressCount;
  };

  const updateLiedAddressCount = (value: number) => {
    console.log("updateAddressCount");
    const addressCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    updateDoc(addressCountPath, {
      addressLiedCount: value + 1,
    });
  };

  const fetchLiedOtherPhoneNumCount = async () => {
    var otherPhoneNumCount = 0;
    const otherPhoneNumCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    try {
      const snapshot = await getDoc(otherPhoneNumCountPath);
      const docData = snapshot.data();
      if (docData && docData.otherPhoneNumLiedCount) {
        otherPhoneNumCount = Number(docData.otherPhoneNumLiedCount);
      }
      console.log(otherPhoneNumCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return otherPhoneNumCount;
  };

  const updateLiedOtherPhoneNumCount = (value: number) => {
    console.log("updateOtherPhoneNumCount");
    const otherPhoneNumCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    updateDoc(otherPhoneNumCountPath, {
      otherPhoneNumLiedCount: value + 1,
    });
  };

  const fetchLiedOtherNameCount = async () => {
    var otherNameCount = 0;
    const otherNameCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    try {
      const snapshot = await getDoc(otherNameCountPath);
      const docData = snapshot.data();
      if (docData && docData.otherNameLiedCount) {
        otherNameCount = Number(docData.otherNameLiedCount);
      }
      console.log(otherNameCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return otherNameCount;
  };

  const updateLiedOtherNameCount = (value: number) => {
    console.log("updateOtherNameCount");
    const otherNameCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    updateDoc(otherNameCountPath, {
      otherNameLiedCount: value + 1,
    });
  };

  const fetchLiedOtherRelationCount = async () => {
    var otherRelationCount = 0;
    const otherRelationCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    try {
      const snapshot = await getDoc(otherRelationCountPath);
      const docData = snapshot.data();
      if (docData && docData.otherRelationLiedCount) {
        otherRelationCount = Number(docData.otherRelationLiedCount);
      }
      console.log(otherRelationCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return otherRelationCount;
  };

  const updateLiedOtherRelationCount = (value: number) => {
    console.log("updateOtherRelationCount");
    const otherRelationCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    updateDoc(otherRelationCountPath, {
      otherRelationLiedCount: value + 1,
    });
  };

  const fetchLiedBloodTypeCount = async () => {
    var bloodTypeCount = 0;
    const bloodTypeCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    try {
      const snapshot = await getDoc(bloodTypeCountPath);
      const docData = snapshot.data();
      if (docData && docData.bloodTypeLiedCount) {
        bloodTypeCount = Number(docData.bloodTypeLiedCount);
      }
      console.log(bloodTypeCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return bloodTypeCount;
  };

  const updateLiedBloodTypeCount = (value: number) => {
    console.log("updateBloodTypeCount");
    const bloodTypeCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    updateDoc(bloodTypeCountPath, {
      bloodTypeLiedCount: value + 1,
    });
  };

  const fetchLiedMotivationCount = async () => {
    var motivationCount = 0;
    const motivationCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    try {
      const snapshot = await getDoc(motivationCountPath);
      const docData = snapshot.data();
      if (docData && docData.motivationLiedCount) {
        motivationCount = Number(docData.motivationLiedCount);
      }
      console.log(motivationCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return motivationCount;
  };

  const updateLiedMotivationCount = (value: number) => {
    console.log("updateMotivationCount");
    const motivationCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    updateDoc(motivationCountPath, {
      motivationLiedCount: value + 1,
    });
  };

  const fetchLiedSchoolNameCount = async () => {
    var schoolNameCount = 0;
    const schoolNameCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    try {
      const snapshot = await getDoc(schoolNameCountPath);
      const docData = snapshot.data();
      if (docData && docData.schoolNameLiedCount) {
        schoolNameCount = Number(docData.schoolNameLiedCount);
      }
      console.log(schoolNameCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return schoolNameCount;
  };

  const updateLiedSchoolNameCount = (value: number) => {
    console.log("updateSchoolNameCount");
    const schoolNameCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    updateDoc(schoolNameCountPath, {
      schoolNameLiedCount: value + 1,
    });
  };

  const fetchLiedDepartmentNameCount = async () => {
    var departmentNameCount = 0;
    const departmentNameCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    try {
      const snapshot = await getDoc(departmentNameCountPath);
      const docData = snapshot.data();
      if (docData && docData.departmentNameLiedCount) {
        departmentNameCount = Number(docData.departmentNameLiedCount);
      }
      console.log(departmentNameCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return departmentNameCount;
  };

  const updateLiedDepartmentNameCount = (value: number) => {
    console.log("updateDepartmentNameCount");
    const departmentNameCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    updateDoc(departmentNameCountPath, {
      departmentNameLiedCount: value + 1,
    });
  };

  const fetchLiedDegreeCount = async () => {
    var degreeCount = 0;
    const degreeCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    try {
      const snapshot = await getDoc(degreeCountPath);
      const docData = snapshot.data();
      if (docData && docData.degreeLiedCount) {
        degreeCount = Number(docData.degreeLiedCount);
      }
      console.log(degreeCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return degreeCount;
  };

  const updateLiedDegreeCount = (value: number) => {
    console.log("updateDegreeCount");
    const degreeCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    updateDoc(degreeCountPath, {
      degreeLiedCount: value + 1,
    });
  };

  const fetchLiedDegreeYearsCount = async () => {
    var degreeYearsCount = 0;
    const degreeYearsCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    try {
      const snapshot = await getDoc(degreeYearsCountPath);
      const docData = snapshot.data();
      if (docData && docData.degreeYearsLiedCount) {
        degreeYearsCount = Number(docData.degreeYearsLiedCount);
      }
      console.log(degreeYearsCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return degreeYearsCount;
  };

  const updateLiedDegreeYearsCount = (value: number) => {
    console.log("updateDegreeYearsCount");
    const degreeYearsCountPath = doc(
      db,
      "finalAssessment",
      "NsUKNWxMtkuyT6e1phXO",
    );
    updateDoc(degreeYearsCountPath, {
      degreeYearsLiedCount: value + 1,
    });
  };

  const addComment = async (props: { inputComment: String }) => {
    addDoc(collection(db, "comments"), {
      comment: props.inputComment,
    });
    if (!isEmailConfirmd) {
      await fetchEmailCount().then((value) => {
        updateEmailCount(value);
      });
    }
    if (!isPasswordConfirmd) {
      await fetchPasswordCount().then((value) => {
        updatePasswordCount(value);
      });
    }
    if (!isRetypePasswordConfirmd) {
      await fetchRetypePasswordCount().then((value) => {
        updateRetypePasswordCount(value);
      });
    }
    if (!isNicknameConfirmd) {
      await fetchNicknameCount().then((value) => {
        updateNicknameCount(value);
      });
    }
    if (!isPhoneNumConfirmd) {
      await fetchPhoneNumCount().then((value) => {
        updatePhoneNumCount(value);
      });
    }
    if (!isBirthdayConfirmd) {
      await fetchBirthdayCount().then((value) => {
        updateBirthdayCount(value);
      });
    }
    if (!isGenderConfirmd) {
      await fetchGenderCount().then((value) => {
        updateGenderCount(value);
      });
    }
    if (!isWorkConfirmd) {
      await fetchWorkCount().then((value) => {
        updateWorkCount(value);
      });
    }
    if (!isHobbyConfirmd) {
      await fetchHobbyCount().then((value) => {
        updateHobbyCount(value);
      });
    }
    if (!isPostCodeConfirmd) {
      await fetchPostCodeCount().then((value) => {
        updatePostCodeCount(value);
      });
    }
    if (!isAddressConfirmd) {
      await fetchAddressCount().then((value) => {
        updateAddressCount(value);
      });
    }
    if (!isOtherPhoneNumConfirmd) {
      await fetchOtherPhoneNumCount().then((value) => {
        updateOtherPhoneNumCount(value);
      });
    }
    if (!isOtherNameConfirmd) {
      await fetchOtherNameCount().then((value) => {
        updateOtherNameCount(value);
      });
    }
    if (!isOtherRelationConfirmd) {
      await fetchOtherRelationCount().then((value) => {
        updateOtherRelationCount(value);
      });
    }
    if (!isBloodTypeConfirmd) {
      await fetchBloodTypeCount().then((value) => {
        updateBloodTypeCount(value);
      });
    }
    if (!isMotivationConfirmd) {
      await fetchMotivationCount().then((value) => {
        updateMotivationCount(value);
      });
    }
    if (!isSchoolNameConfirmd) {
      await fetchSchoolNameCount().then((value) => {
        updateSchoolNameCount(value);
      });
    }
    if (!isDepartmentNameConfirmd) {
      await fetchDepartmentNameCount().then((value) => {
        updateDepartmentNameCount(value);
      });
    }
    if (!isDegreeConfirmd) {
      await fetchDegreeCount().then((value) => {
        updateDegreeCount(value);
      });
    }
    if (!isDegreeYearsConfirmd) {
      await fetchDegreeYearsCount().then((value) => {
        updateDegreeYearsCount(value);
      });
    }


    if (!isLiedEmailConfirmd) {
      await fetchLiedEmailCount().then((value) => {
        updateLiedEmailCount(value);
      });
    }
    if (!isLiedPasswordConfirmd) {
      await fetchLiedPasswordCount().then((value) => {
        updateLiedPasswordCount(value);
      });
    }
    if (!isLiedRetypePasswordConfirmd) {
      await fetchLiedRetypePasswordCount().then((value) => {
        updateLiedRetypePasswordCount(value);
      });
    }
    if (!isLiedNicknameConfirmd) {
      await fetchLiedNicknameCount().then((value) => {
        updateLiedNicknameCount(value);
      });
    }
    if (!isLiedPhoneNumConfirmd) {
      await fetchLiedPhoneNumCount().then((value) => {
        updateLiedPhoneNumCount(value);
      });
    }
    if (!isLiedBirthdayConfirmd) {
      await fetchLiedBirthdayCount().then((value) => {
        updateLiedBirthdayCount(value);
      });
    }
    if (!isLiedGenderConfirmd) {
      await fetchLiedGenderCount().then((value) => {
        updateLiedGenderCount(value);
      });
    }
    if (!isLiedWorkConfirmd) {
      await fetchLiedWorkCount().then((value) => {
        updateLiedWorkCount(value);
      });
    }
    if (!isLiedHobbyConfirmd) {
      await fetchLiedHobbyCount().then((value) => {
        updateLiedHobbyCount(value);
      });
    }
    if (!isLiedPostCodeConfirmd) {
      await fetchLiedPostCodeCount().then((value) => {
        updateLiedPostCodeCount(value);
      });
    }
    if (!isLiedAddressConfirmd) {
      await fetchLiedAddressCount().then((value) => {
        updateLiedAddressCount(value);
      });
    }
    if (!isLiedOtherPhoneNumConfirmd) {
      await fetchLiedOtherPhoneNumCount().then((value) => {
        updateLiedOtherPhoneNumCount(value);
      });
    }
    if (!isLiedOtherNameConfirmd) {
      await fetchLiedOtherNameCount().then((value) => {
        updateLiedOtherNameCount(value);
      });
    }
    if (!isLiedOtherRelationConfirmd) {
      await fetchLiedOtherRelationCount().then((value) => {
        updateLiedOtherRelationCount(value);
      });
    }
    if (!isLiedBloodTypeConfirmd) {
      await fetchLiedBloodTypeCount().then((value) => {
        updateLiedBloodTypeCount(value);
      });
    }
    if (!isLiedMotivationConfirmd) {
      await fetchLiedMotivationCount().then((value) => {
        updateLiedMotivationCount(value);
      });
    }
    if (!isLiedSchoolNameConfirmd) {
      await fetchLiedSchoolNameCount().then((value) => {
        updateLiedSchoolNameCount(value);
      });
    }
    if (!isLiedDepartmentNameConfirmd) {
      await fetchLiedDepartmentNameCount().then((value) => {
        updateLiedDepartmentNameCount(value);
      });
    }
    if (!isLiedDegreeConfirmd) {
      await fetchLiedDegreeCount().then((value) => {
        updateLiedDegreeCount(value);
      });
    }
    if (!isLiedDegreeYearsConfirmd) {
      await fetchLiedDegreeYearsCount().then((value) => {
        updateLiedDegreeYearsCount(value);
      });
    }
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
    })();
  }, [blockBrowserBack]);

  return (
    <div className={classes.root}>
      <CustomParticle />
      <p>今までの入力で面倒だった項目にチェックをしてください</p>
      <div
        style={{ display: "flex", flexDirection: isWide ? "row" : "column" }}
      >
        <div style={{ paddingRight: isWide ? "250px" : "0" }}>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsEmailConfirmedChange} />
            <p>メールアドレス</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsRetypePasswordConfirmedChange} />
            <p>パスワード（確認）</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsPhoneNumConfirmedChange} />
            <p>電話番号</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsGenderConfirmedChange} />
            <p>性別</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsHobbyConfirmedChange} />
            <p>趣味</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsAddressConfirmedChange} />
            <p>住所</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsOtherNameConfirmedChange} />
            <p>緊急連絡先の方の氏名</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsBloodTypeConfirmedChange} />
            <p>血液型</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsSchoolNameConfirmedChange} />
            <p>学校名</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsDegreeConfirmedChange} />
            <p>学位</p>
          </div>
        </div>
        <div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsPasswordConfirmedChange} />
            <p>パスワード</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsNicknameConfirmedChange} />
            <p>ニックネーム</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsBirthdayConfirmedChange} />
            <p>誕生日</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsWorkConfirmedChange} />
            <p>職業</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsPostCodeConfirmedChange} />
            <p>郵便番号</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsOtherPhoneNumConfirmedChange} />
            <p>緊急連絡先</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsOtherRelationConfirmedChange} />
            <p>続柄</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsMotivationConfirmedChange} />
            <p>動機</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsDepartmentNameConfirmedChange} />
            <p>学部・学科</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsDegreeYearsConfirmedChange} />
            <p>在籍期間</p>
          </div>
        </div>
      </div>

      <p>今までの入力で嘘の内容を入力した項目にチェックをしてください</p>
      <div
        style={{ display: "flex", flexDirection: isWide ? "row" : "column" }}
      >
        <div style={{ paddingRight: isWide ? "250px" : "0" }}>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedEmailConfirmedChange} />
            <p>メールアドレス</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedRetypePasswordConfirmedChange} />
            <p>パスワード（確認）</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedPhoneNumConfirmedChange} />
            <p>電話番号</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedGenderConfirmedChange} />
            <p>性別</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedHobbyConfirmedChange} />
            <p>趣味</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedAddressConfirmedChange} />
            <p>住所</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedOtherNameConfirmedChange} />
            <p>緊急連絡先の方の氏名</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedBloodTypeConfirmedChange} />
            <p>血液型</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedSchoolNameConfirmedChange} />
            <p>学校名</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedDegreeConfirmedChange} />
            <p>学位</p>
          </div>
        </div>
        <div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedPasswordConfirmedChange} />
            <p>パスワード</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedNicknameConfirmedChange} />
            <p>ニックネーム</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedBirthdayConfirmedChange} />
            <p>誕生日</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedWorkConfirmedChange} />
            <p>職業</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedPostCodeConfirmedChange} />
            <p>郵便番号</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedOtherPhoneNumConfirmedChange} />
            <p>緊急連絡先</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedOtherRelationConfirmedChange} />
            <p>続柄</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedMotivationConfirmedChange} />
            <p>動機</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedDepartmentNameConfirmedChange} />
            <p>学部・学科</p>
          </div>
          <div className={classes.checkbox}>
            <Checkbox onChange={handleIsLiedDegreeYearsConfirmedChange} />
            <p>在籍期間</p>
          </div>
        </div>
      </div>
      <p>今までの入力で面倒だった部分や感じたことを自由に記述してください</p>
      <TextField
        onChange={(event) => setComment(event.target.value)}
        className={classes.field}
        style={{
          minWidth: isWide ? "700px" : "300px",
        }}
        multiline={true}
        rows={5}
        id="outlined-name"
        variant="outlined"
      ></TextField>
      <Link to="/final_page" style={{ paddingLeft: isWide ? "3%" : "0" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addComment({ inputComment: comment })}
          style={{
            maxWidth: "400px",
            maxHeight: "45px",
            minWidth: "300px",
            minHeight: "45px",
            marginTop: "3%",
          }}
        >
          送信
        </Button>
      </Link>
      <Routes>
        <Route path="/final_page" element={<FinalPage />}></Route>
      </Routes>
    </div>
  );
};
