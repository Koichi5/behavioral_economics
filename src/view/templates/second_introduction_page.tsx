// import { Button,  makeStyles } from "@material-ui/core";
// import { Link, Routes, Route } from "react-router-dom";
// import CustomParticle from "../atoms/particle";
// import Lottie from "lottie-react";
// import animationData from "/Users/koichi/WebProjects/behavioral_economics/src/assets/intro_slider1.json";
// import { ThirdIntroductionPage } from "./third_introduction_page";

// const useStyles = makeStyles(() => ({
//   root: {
//     position: "relative",
//     top: "10%",
//   },

//   lottieView: {
//     margin: "0 auto",
//     width: "20%",
//     height: "20%"
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

// export const SecondIntroductionPage = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CustomParticle />
//       <h2>高校情報レベルの単語を出題</h2>
//       <div className={classes.lottieView}>
//         <Lottie
//           animationData={animationData}
//           loop={true}
//           height={"200px"}
//           width={"200px"}
//         />
//       </div>
//       <p>IQ でこれからの時代の知識を身につけよう！</p>
//       <Link to="/third_introduction_page">
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => {}}
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
//         <Route path="/third_introduction_page" element={<ThirdIntroductionPage />}></Route>
//       </Routes>
//     </div>
//   );
// };
