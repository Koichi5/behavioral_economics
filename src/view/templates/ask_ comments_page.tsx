import Checkbox from "@mui/material/Checkbox";
import { Button, TextField, makeStyles } from "@material-ui/core";
import CustomParticle from "../atoms/particle";
import { useEffect, useState } from "react";
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

  const isWide = useMedia("(min-width: 800px)");

  var currentEmailCount = 0;
  var currentPasswordCount = 0;
  var currentRetypePasswordCount = 0;
  var currentNicknameCount = 0;
  var currentPhoneNumCount = 0;
  var currentBirthdayCount = 0;
  var currentGenderCount = 0;
  var currentWorkCount = 0;
  var currentHobbyCount = 0;
  var currentPostCodeCount = 0;
  var currentAddressCount = 0;
  var currentOtherPhoneNumCount = 0;
  var currentOtherNameCount = 0;
  var currentOtherRelationCount = 0;
  var currentBloodTypeCount = 0;
  var currentMotivationCount = 0;
  var currentSchoolNameCount = 0;
  var currentDepartmentNameCount = 0;
  var currentDegreeCount = 0;
  var currentDegreeYearsCount = 0;

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

  const updateEmailCount = () => {
    console.log('updateEmailCount');
    const emailCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "emailCount",
      "U8H2X1bwtVB2ilP10EgY"
    );
    updateDoc(emailCountPath, {
      count: currentEmailCount + 1,
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

  const updatePasswordCount = () => {
    console.log("updatePasswordCount");
    const passwordCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "passwordCount",
      "khbYQLwsrJ5qMxjxLAjx"
    );
    updateDoc(passwordCountPath, {
      count: currentPasswordCount + 1,
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

  const updateRetypePasswordCount = () => {
    console.log('updateRetypePasswordCount');
    const retypePasswordCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "retypePasswordCount",
      "bJztMoQcshMaNqMZ758E"
    );
    updateDoc(retypePasswordCountPath, {
      count: currentRetypePasswordCount + 1,
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

  const updateNicknameCount = () => {
    console.log('updateNicknameCount')
    const nicknameCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "nicknameCount",
      "POyYYIZmmEmBXWBJMd7P"
    );
    updateDoc(nicknameCountPath, {
      count: currentNicknameCount + 1,
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

  const updatePhoneNumCount = () => {
    console.log('updatePhoneNumCount');
    const phoneNumCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "phoneNumCount",
      "fyQLSoKGqHkBDYBVaZaQ"
    );
    updateDoc(phoneNumCountPath, {
      count: currentPhoneNumCount + 1,
    });
  };

  const fetchBirthdayCount = async () => {
    var birthdayCount = 0;
    const birthdayCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "birthdayCount",
      "U8H2X1bwtVB2ilP10EgY"
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

  const updateBirthdayCount = () => {
    console.log('updateBirthdayCount');
    const birthdayCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "birthdayCount",
      "U8H2X1bwtVB2ilP10EgY"
    );
    updateDoc(birthdayCountPath, {
      count: currentBirthdayCount + 1,
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

  const updateGenderCount = () => {
    console.log('updateGenderCount');
    const genderCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "genderCount",
      "G8ZoE0HqoUqiy0cwSKpL"
    );
    updateDoc(genderCountPath, {
      count: currentGenderCount + 1,
    });
  };

  const fetchWorkCount = async () => {
    var workCount = 0;
    const workCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "workCount",
      "U8H2X1bwtVB2ilP10EgY"
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

  const updateWorkCount = () => {
    console.log('updateWorkCount');
    const workCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "workCount",
      "U8H2X1bwtVB2ilP10EgY"
    );
    updateDoc(workCountPath, {
      count: currentWorkCount + 1,
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

  const updateHobbyCount = () => {
    console.log('updateHobbyCount');
    const hobbyCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "hobbyCount",
      "IxY6rM2BHRzN05duZL3F"
    );
    updateDoc(hobbyCountPath, {
      count: currentHobbyCount + 1,
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

  const updatePostCodeCount = () => {
    console.log('updatePostCodeCount');
    const postCodeCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "postCodeCount",
      "sRv2GOVH1eXioxXRrmnQ"
    );
    updateDoc(postCodeCountPath, {
      count: currentPostCodeCount + 1,
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

  const updateAddressCount = () => {
    console.log('updateAddressCount');
    const addressCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "addressCount",
      "9hc8XpF4sW6HgeqtQQ3M"
    );
    updateDoc(addressCountPath, {
      count: currentAddressCount + 1,
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

  const updateOtherPhoneNumCount = () => {
    console.log('updateOtherPhoneNumCount');
    const otherPhoneNumCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "otherPhoneNumCount",
      "gXMLhO8H9oPVzGpXMp5Z"
    );
    updateDoc(otherPhoneNumCountPath, {
      count: currentOtherPhoneNumCount + 1,
    });
  };

  const fetchOtherNameCount = async () => {
    var otherNameCount = 0;
    const otherNameCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "otherNameCount",
      "U8H2X1bwtVB2ilP10EgY"
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

  const updateOtherNameCount = () => {
    console.log('updateOtherNameCount');
    const otherNameCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "otherNameCount",
      "U8H2X1bwtVB2ilP10EgY"
    );
    updateDoc(otherNameCountPath, {
      count: currentOtherNameCount + 1,
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

  const updateOtherRelationCount = () => {
    console.log('updateOtherRelationCount');
    const otherRelationCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "otherRelationCount",
      "OcfnzMK866fYqGLzui85"
    );
    updateDoc(otherRelationCountPath, {
      count: currentOtherRelationCount + 1,
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

  const updateBloodTypeCount = () => {
    console.log('updateBloodTypeCount');
    const bloodTypeCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "bloodTypeCount",
      "yDRKwrimJWMglOnnIiJO"
    );
    updateDoc(bloodTypeCountPath, {
      count: currentBloodTypeCount + 1,
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

  const updateMotivationCount = () => {
    console.log('updateMotivationCount');
    const motivationCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "motivationCount",
      "j9fet8D8DNFIOTLseG2Q"
    );
    updateDoc(motivationCountPath, {
      count: currentMotivationCount + 1,
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

  const updateSchoolNameCount = () => {
    console.log('updateSchoolNameCount')
    const schoolNameCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "schoolNameCount",
      "YeWoWyx5qHwWjJHO7gAf"
    );
    updateDoc(schoolNameCountPath, {
      count: currentSchoolNameCount + 1,
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

  const updateDepartmentNameCount = () => {
    console.log('updateDepartmentNameCount');
    const departmentNameCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "departmentNameCount",
      "JzseeyI2IAjyPv9xzNt0"
    );
    updateDoc(departmentNameCountPath, {
      count: currentDepartmentNameCount + 1,
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

  const updateDegreeCount = () => {
    console.log('updateDegreeCount');
    const degreeCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "degreeCount",
      "DlyHJQhjuiqNJ7AYS2ox"
    );
    updateDoc(degreeCountPath, {
      count: currentDegreeCount + 1,
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

  const updateDegreeYearsCount = () => {
    console.log('updateDegreeYearsCount');
    const degreeYearsCountPath = doc(
      db,
      "finalAssessment",
      "GES0oRlPBfQhkiJbrokI",
      "degreeYearsCount",
      "a9j3tmlgvGtqFM50e6X7"
    );
    updateDoc(degreeYearsCountPath, {
      count: currentDegreeYearsCount + 1,
    });
  };

  const addComment = (props: { inputComment: String }) => {
    addDoc(collection(db, "comments"), {
      comment: props.inputComment,
    });
    if (!isEmailConfirmd) {
      updateEmailCount();
    }
    if (!isPasswordConfirmd) {
      updatePasswordCount();
    }
    if (!isRetypePasswordConfirmd) {
      updateRetypePasswordCount();
    }
    if (!isNicknameConfirmd) {
      updateNicknameCount();
    }
    if (!isPhoneNumConfirmd) {
      updatePhoneNumCount();
    }
    if (!isBirthdayConfirmd) {
      updateBirthdayCount();
    }
    if (!isGenderConfirmd) {
      updateGenderCount();
    }
    if (!isWorkConfirmd) {
      updateWorkCount();
    }
    if (!isHobbyConfirmd) {
      updateHobbyCount();
    }
    if (!isPostCodeConfirmd) {
      updatePostCodeCount();
    }
    if (!isAddressConfirmd) {
      updateAddressCount();
    }
    if (!isOtherPhoneNumConfirmd) {
      updateOtherPhoneNumCount();
    }
    if (!isOtherNameConfirmd) {
      updateOtherNameCount();
    }
    if (!isOtherRelationConfirmd) {
      updateOtherRelationCount();
    }
    if (!isBloodTypeConfirmd) {
      updateBloodTypeCount();
    }
    if (!isMotivationConfirmd) {
      updateMotivationCount();
    }
    if (!isSchoolNameConfirmd) {
      updateSchoolNameCount();
    }
    if (!isDepartmentNameConfirmd) {
      updateDepartmentNameCount();
    }
    if (!isDegreeConfirmd) {
      updateDegreeCount();
    }
    if (!isDegreeYearsConfirmd) {
      updateDegreeYearsCount();
    }
  };

  useEffect(() => {(
    async () => {
      currentEmailCount = await fetchEmailCount();
      currentPasswordCount = await fetchPasswordCount();
      currentRetypePasswordCount = await fetchRetypePasswordCount();
      currentNicknameCount = await fetchNicknameCount();
      currentPhoneNumCount = await fetchPhoneNumCount();
      currentBirthdayCount = await fetchBirthdayCount();
      currentGenderCount = await fetchGenderCount();
      currentWorkCount = await fetchWorkCount();
      currentHobbyCount = await fetchHobbyCount();
      currentPostCodeCount = await fetchPostCodeCount();
      currentAddressCount = await fetchAddressCount();
      currentOtherPhoneNumCount = await fetchOtherPhoneNumCount();
      currentOtherNameCount = await fetchOtherNameCount();
      currentOtherRelationCount = await fetchOtherRelationCount();
      currentBloodTypeCount = await fetchBloodTypeCount();
      currentMotivationCount = await fetchMotivationCount();
      currentSchoolNameCount = await fetchSchoolNameCount();
      currentDepartmentNameCount = await fetchDepartmentNameCount();
      currentDegreeCount = await fetchDegreeCount();
      currentDegreeYearsCount = await fetchDegreeYearsCount();
    })();
  });

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
