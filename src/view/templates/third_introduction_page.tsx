// import { Button,  makeStyles } from "@material-ui/core";
// import { Link, Routes, Route } from "react-router-dom";
// import CustomParticle from "../atoms/particle";
// import Lottie from "lottie-react";
// import animationData from "/Users/koichi/WebProjects/behavioral_economics/src/assets/intro_slider2.json";
// import { FourthIntroductionPage } from "./fourth_introduction_page";

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

// export const ThirdIntroductionPage = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CustomParticle />
//       <h2>自分の問題を作成しよう！</h2>
//       <div className={classes.lottieView}>
//         <Lottie
//           animationData={animationData}
//           loop={true}
//           height={"200px"}
//           width={"200px"}
//         />
//       </div>
//       <p>問題を作成して効率的に学習しよう！</p>
//       <Link to="/fourth_introduction_page">
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
//         <Route path="/fourth_introduction_page" element={<FourthIntroductionPage />}></Route>
//       </Routes>
//     </div>
//   );
// };
