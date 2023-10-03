import React from "react";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import EmailAndPasswordPage from "./view/templates/email_and_password_page";
import { Route, Routes } from "react-router-dom";
import { PostAndAddressPage } from "./view/templates/post_and_address_page";
import { SchoolInfoPage } from "./view/templates/school_info_page";
import { NicknameAndPhoneAndBirthPage } from "./view/templates/nickname_and_phone_and_birth_page";
import { FinalPage } from "./view/templates/final_page";
import { BloodTypeAndMotivationPage } from "./view/templates/blood_type_and_motivation_page";
import { OtherPhoneAndNamePage } from "./view/templates/other_phone_and_name_page";
import { ExplanationPage } from "./view/templates/explanation_page";
import { FirstIntroductionPage } from "./view/templates/first_introduction_page";
import { SecondIntroductionPage } from "./view/templates/second_introduction_page";
import { ThirdIntroductionPage } from "./view/templates/third_introduction_page";
import { FourthIntroductionPage } from "./view/templates/fourth_introduction_page";
import { GenderAndWorkAndHobbyPage } from "./view/templates/gender_and_work_and_hobby_page";
import { AskCommentsPage } from "./view/templates/ask_ comments_page";
import { ApologizePage } from "./view/templates/apologize_page";
import { InitialExplanationPage } from "./view/templates/initial_explanation_page";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
}));

// const useBackListener = (callback: unknown) => {
//    const navigator = useContext(UNSAFE_NavigationContext).navigator;

//     useEffect(() => {
//       const listener = ({ location, action }) => {
//         console.log("listener", { location, action });
//         if (action === "POP") {
//           callback({ location, action });
//        }
//      };
//      const unlisten = navigator.listen(listener);
//      return unlisten;
//     }, [callback, navigator]);
//   };

//   const HeaderWithListener = () => {
//     useBackListener(({ location, action }) => {
//       console.log(location, action);
//     });

//     return <Header />;
//   }

function App() {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Routes>
          <Route path="/" element={<InitialExplanationPage />} />
          <Route
            path="/first_introduction_page"
            element={<FirstIntroductionPage />}
          />
          <Route
            path="/second_introduction_page"
            element={<SecondIntroductionPage />}
          />
          <Route
            path="/third_introduction_page"
            element={<ThirdIntroductionPage />}
          />
          <Route
            path="/fourth_introduction_page"
            element={<FourthIntroductionPage />}
          />
          <Route path="/initial_page" element={<EmailAndPasswordPage />} />
          <Route
            path="/second_page"
            element={<NicknameAndPhoneAndBirthPage />}
          />
          <Route path="/third_page" element={<GenderAndWorkAndHobbyPage />} />
          <Route path="/fourth_page" element={<PostAndAddressPage />} />
          <Route path="/fifth_page" element={<OtherPhoneAndNamePage />} />
          <Route path="/sixth_page" element={<BloodTypeAndMotivationPage />} />
          <Route path="/seventh_page" element={<SchoolInfoPage />} />
          <Route path="/explanation_page" element={<ExplanationPage />} />
          <Route path="/apologize_page" element={<ApologizePage />} />
          <Route path="/ask_comments_page" element={<AskCommentsPage />} />
          <Route path="/final_page" element={<FinalPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
