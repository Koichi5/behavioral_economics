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
import { GenderAndWorkAndHobbyPage } from "./view/templates/gender_and_work_and_hobby_page";
import { FinalPage } from "./view/templates/final_page";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
}));

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
          <Route path="/" element={<EmailAndPasswordPage />} />
          <Route
            path="/second_page"
            element={<NicknameAndPhoneAndBirthPage />}
          />
          <Route path="/third_page" element={<GenderAndWorkAndHobbyPage />} />
          <Route path="/fourth_page" element={<PostAndAddressPage />} />
          <Route path="/fifth_page" element={<SchoolInfoPage />} />
          <Route path="/final_page" element={<FinalPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
