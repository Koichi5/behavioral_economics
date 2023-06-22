import { makeStyles } from "@material-ui/core";
import CustomParticle from "../atoms/particle";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    top: "10%",
  },
}));

export const FinalPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CustomParticle />
      <p>関西大学経済学部岡野ゼミです。</p>
      <br></br>
      <p>ここまで情報を入力していただきありがとうございます。</p>
      <p>このWebサイトは、今までの登録の流れで「どのくらいの割合の人が登録を断念するか」</p>
      <p>ということをゼミ内の実験として検証するために作成されたものであり、</p>
      <p>より現実的な結果を得るためにあえて新規登録という形を取らせていただきました。</p>
      <br></br>
      <p>最後まで入力して頂いたのにも関わらず、申し訳ありません。</p>
      <p>入力して頂いた情報の取り扱いに関しましては、こちらからはデータを</p>
      <p>記録、確認できない仕組みとなっておりますので、ご安心ください。</p>
      <p>ご協力いただきありがとうございました。このままタブを閉じて終了してください。</p>
      <br></br>
      <p>その他不明点がございましたら以下のメールアドレスへご連絡いただけると幸いです。</p>
      <p>メールアドレス : koichi20021217@gmail.com</p>
    </div>
  );
};
