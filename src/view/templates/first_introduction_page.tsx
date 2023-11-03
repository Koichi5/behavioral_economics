// import { Button, makeStyles } from "@material-ui/core";
// import { Link, Routes, Route } from "react-router-dom";
// import CustomParticle from "../atoms/particle";
// import { SecondIntroductionPage } from "./second_introduction_page";


// const useStyles = makeStyles(() => ({
//   root: {
//     position: "relative",
//     top: "10%",
//   },

//   imgView: {
//     margin: "0 auto",
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

// export const FirstIntroductionPage = () => {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <CustomParticle />
//       <h2>ようこそ Tech Journey へ！</h2>
//       <div className={classes.imgView}>
//         <img src="src/assets/tech-journey-log.png" width={"20%"} height={"20%"}/>
//       </div>
//       <p></p>
//       <Link to="/second_introduction_page">
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
//         <Route path="/second_introduction_page" element={<SecondIntroductionPage />}></Route>
//       </Routes>
//     </div>
//   );
// };
