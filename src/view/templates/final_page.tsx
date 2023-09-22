import { makeStyles } from "@material-ui/core";
import CustomParticle from "../atoms/particle";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

export const FinalPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CustomParticle />
      <div>
        <p>
          ご協力いただきありがとうございました。このままタブを閉じて終了してください。
        </p>
        <br></br>
        <p>
          その他不明点がございましたら以下のメールアドレスへご連絡いただけると幸いです。
        </p>
        <p>メールアドレス : koichi20021217@gmail.com</p>
      </div>
    </div>
  );
};

