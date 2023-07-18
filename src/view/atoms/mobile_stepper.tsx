import { LinearProgress } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "5%",
    margin: "0 auto",
    paddingBottom: "5%",
    width: "80%"
  },
}));

export const CustomMobileStepper = (props: { arg1: number }) => {
  const classes = useStyles();
  const steps = 7;
  const progress = props.arg1 / steps * 100;
  
  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
};
