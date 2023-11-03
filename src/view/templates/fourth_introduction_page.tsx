// import { Button, makeStyles } from "@material-ui/core";
// import { Link, Routes, Route } from "react-router-dom";
// import CustomParticle from "../atoms/particle";
// import Lottie from "lottie-react";
// import animationData from "/Users/koichi/WebProjects/behavioral_economics/src/assets/intro_slider3.json";
// import EmailAndPasswordPage from "./email_and_password_page";

// const useStyles = makeStyles(() => ({
//   root: {
//     position: "relative",
//     top: "10%",
//   },

//   lottieView: {
//     margin: "0 auto",
//     width: "25%",
//     height: "25%"
//   },

//   fieldWrapper: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "baseline",
//     paddingLeft: "20%",
//     paddingRight: "20%",
//   },

//   field: {
//     paddingBottom: "50px",
//     maxWidth: "400px",
//     maxHeight: "45px",
//     minWidth: "400px",
//     minHeight: "45px",
//     marginTop: "2%",
//   },

//   input: {
//     background: "GhostWhite",
//   },
// }));

// export const FourthIntroductionPage = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CustomParticle />
//       <h2>苦手な問題を登録しよう！</h2>
//       <div className={classes.lottieView}>
//         <Lottie
//           animationData={animationData}
//           loop={true}
//           height={"200px"}
//           width={"200px"}
//         />
//       </div>
//       <p>問題を登録して繰り返し復習しよう！</p>
//       <Link to="/initial_page">
//         <Button
//           variant="contained"
//           color="primary"
//           style={{
//             maxWidth: "400px",
//             maxHeight: "45px",
//             minWidth: "300px",
//             minHeight: "45px",
//             marginTop: "3%",
//           }}
//         >
//           次　　へ
//         </Button>
//       </Link>
//       <Routes>
//         <Route path="/initial_page" element={<EmailAndPasswordPage />}></Route>
//       </Routes>
//     </div>
//   );
// };
