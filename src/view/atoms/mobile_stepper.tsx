import { makeStyles } from "@material-ui/core";
import MobileStepper from "@mui/material/MobileStepper";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "5%",
    alignContent: "center"
  },

  mobileStepper: {
    marginLeft: "15%",
    marginRight: "15%",
    backgroundColor: "transparent",
  },
}));

export const CustomMobileStepper = (props: { arg1: number }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MobileStepper
        sx={{ bgcolor: 'transparent' }}
        variant="progress"
        steps={7}
        position="static"
        activeStep={props.arg1}
        className={classes.mobileStepper} 
        backButton={undefined} 
        nextButton={undefined}        
      />
    </div>
  );
};
