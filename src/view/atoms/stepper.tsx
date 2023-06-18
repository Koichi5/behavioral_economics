import { Stepper, Step, StepLabel, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "5%",
  },

  stepper: {
    marginLeft: "15%",
    marginRight: "15%",
  },
}));

export const CustomStepper = (props: { arg1: number }) => {
  const classes = useStyles();
  function getSteps() {
    return ["フォーム　1", "フォーム　2", "フォーム　3", "フォーム　4"];
  }

  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={props.arg1}
        alternativeLabel
        className={classes.stepper}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
