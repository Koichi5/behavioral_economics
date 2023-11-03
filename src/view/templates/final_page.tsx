import { makeStyles } from "@material-ui/core";
import CustomParticle from "../atoms/particle";
import { useCallback, useEffect } from "react";

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

  const blockBrowserBack = useCallback(() => {
    window.history.go(1);
  }, []);

  useEffect(() => {
    (() => {
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", blockBrowserBack);
      return () => {
        window.removeEventListener("popstate", blockBrowserBack);
      };
    })();
  }, [blockBrowserBack]);

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

