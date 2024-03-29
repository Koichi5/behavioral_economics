import { Button, makeStyles } from "@material-ui/core";
import { Link, Routes, Route } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "../../firebase";
import CustomParticle from "../atoms/particle";
import Checkbox from "@mui/material/Checkbox";
import { ApologizePage } from "./apologize_page";

const useStyles = makeStyles(() => ({
  root: {
    alignContent: "center",
    position: "relative",
    top: "10%",
  },

  body: {
    width: "80%",
    margin: "0 auto",
  },

  ruleName: {
    textAlign: "left",
  },

  confirm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const ExplanationPage = () => {
  const classes = useStyles();
  // const { state } = useLocation();
  const [isConfirmd, setIsConfirmed] = useState(false);

  const handleIsConfirmedChange = () => {
    setIsConfirmed(!isConfirmd);
    console.log(isConfirmd);
  };

  // const fetchAndUpdateTotalGender = async () => {
  //   const interruptedGenderRef = doc(
  //     db,
  //     "interruptedUserGender",
  //     "KFwuzSDtYDtpszPF4amu"
  //   );
  //   if (state.state == "10") {
  //     var interruptedMaleCount = 0;
  //     try {
  //       const snapshot = await getDoc(interruptedGenderRef);
  //       const docData = snapshot.data();
  //       if (docData && docData.male) {
  //         interruptedMaleCount = Number(docData.male);
  //       }
  //       console.log(interruptedMaleCount);
  //     } catch (error) {
  //       console.error("Firestoreの更新処理に失敗しました", error);
  //     }
  //     await updateDoc(interruptedGenderRef, {
  //       male: interruptedMaleCount + 1,
  //     });
  //   } else if (state.state == "20") {
  //     var interruptedFemaleCount = 0;
  //     try {
  //       const snapshot = await getDoc(interruptedGenderRef);
  //       const docData = snapshot.data();
  //       if (docData && docData.female) {
  //         interruptedFemaleCount = Number(docData.female);
  //       }
  //       console.log(interruptedFemaleCount);
  //     } catch (error) {
  //       console.error("Firestoreの更新処理に失敗しました", error);
  //     }
  //     await updateDoc(interruptedGenderRef, {
  //       female: interruptedFemaleCount + 1,
  //     });
  //   } else if (state.state == "30") {
  //     var interruptedOtherCount = 0;
  //     try {
  //       const snapshot = await getDoc(interruptedGenderRef);
  //       const docData = snapshot.data();
  //       if (docData && docData.other) {
  //         interruptedOtherCount = Number(docData.other);
  //       }
  //       console.log(interruptedOtherCount);
  //     } catch (error) {
  //       console.error("Firestoreの更新処理に失敗しました", error);
  //     }
  //     await updateDoc(interruptedGenderRef, {
  //       other: interruptedOtherCount + 1,
  //     });
  //   } else if (state.state == "40") {
  //     var interruptedNotSelectedCount = 0;
  //     try {
  //       const snapshot = await getDoc(interruptedGenderRef);
  //       const docData = snapshot.data();
  //       if (docData && docData.notSelected) {
  //         interruptedNotSelectedCount = Number(docData.notSelected);
  //       }
  //       console.log(interruptedNotSelectedCount);
  //     } catch (error) {
  //       console.error("Firestoreの更新処理に失敗しました", error);
  //     }
  //     await updateDoc(interruptedGenderRef, {
  //       notSelected: interruptedNotSelectedCount + 1,
  //     });
  //   } else {
  //     console.error("Firestoreの更新処理に失敗しました");
  //   }
  // };

  const _onPressed = async () => {
    await fetchExplanationSubmissionCount().then(async (value) => {
      const explanationSubmitDoc = doc(
        db,
        "explanationSubmission",
        "36ux8s9JsMTbswlQzGYN"
      );
      await updateDoc(explanationSubmitDoc, {
        count: value + 1,
      });
    });
  };

  const fetchExplanationSubmissionCount = async () => {
    var explanationSubmissionCount = 0;
    const explanationSubmitRef = doc(
      db,
      "explanationSubmission",
      "36ux8s9JsMTbswlQzGYN"
    );

    try {
      const snapshot = await getDoc(explanationSubmitRef);
      const docData = snapshot.data();
      if (docData && docData.count) {
        explanationSubmissionCount = Number(docData.count);
      }
      console.log(explanationSubmissionCount);
    } catch (error) {
      console.error("Firestoreの更新処理に失敗しました", error);
    }
    return explanationSubmissionCount;
  };

  const blockBrowserBack = useCallback(() => {
    window.history.go(1);
  }, []);

  useEffect(() => {
    (() => {
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", blockBrowserBack);
      return () => {
        window.removeEventListener("popstate", blockBrowserBack);
      };      // const initialCount = await fetchExplanationSubmissionCount();
      // setCurrentCount(initialCount);
    })();
  }, [blockBrowserBack]);

  return (
    <div className={classes.root}>
      <CustomParticle />
      <div className={classes.body}>
        <h1 className="main-title">利用規約</h1>
        <p>
          この利用規約（以下，「本規約」といいます。）はTech
          Journey（以下，「当社」といいます。）がこのアプリケーションで提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。ご利用にあたっては、本規約をお読みいただき、内容をご承諾の上でご利用ください。
        </p>
        <br />
        <p className={classes.ruleName}>第1条（適用）</p>
        <p className={classes.ruleName}>
          1.本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
          <br />
          2.当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
          <br />
          3.本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
          <br />
        </p>
        <br />

        <p className={classes.ruleName}>第2条（利用登録）</p>
        <p className={classes.ruleName}>
          1.本サービスにおいては，登録希望者が本規約に同意の上，当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。
          <br />
          2.当社は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
          <br />
          1.利用登録の申請に際して虚偽の事項を届け出た場合
          <br />
          2.本規約に違反したことがある者からの申請である場合
          <br />
          3.その他，当社が利用登録を相当でないと判断した場合
          <br />
        </p>
        <br />

        <p className={classes.ruleName}>
          第3条（ユーザーIDおよびパスワードの管理）
        </p>
        <p className={classes.ruleName}>
          1.ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
          <br />
          2.ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。当社は，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。
          <br />
          3.ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は，当社に故意又は重大な過失がある場合を除き，当社は一切の責任を負わないものとします。
          <br />
        </p>
        <br />

        <p className={classes.ruleName}>第4条（利用料金および支払方法）</p>
        <p className={classes.ruleName}>
          1.ユーザーは，本サービスの有料部分の対価として，当社が別途定め，本アプリケーションに表示する利用料金を，当社が指定する方法により支払うものとします。
          <br />
          2.ユーザーが利用料金の支払を遅滞した場合には，ユーザーは年14．6％の割合による遅延損害金を支払うものとします。
          <br />
        </p>
        <br />

        <p className={classes.ruleName}>第5条（禁止事項）</p>
        <p className={classes.ruleName}>
          ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
          <br />
          <br />
          1.法令または公序良俗に違反する行為
          <br />
          2.犯罪行為に関連する行為
          <br />
          3.本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為
          <br />
          4.当社，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為
          <br />
          5.本サービスによって得られた情報を商業的に利用する行為
          <br />
          6.当社のサービスの運営を妨害するおそれのある行為
          <br />
          7.不正アクセスをし，またはこれを試みる行為
          <br />
          8.他のユーザーに関する個人情報等を収集または蓄積する行為
          <br />
          9.不正な目的を持って本サービスを利用する行為
          <br />
          10.本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為
          <br />
          11.他のユーザーに成りすます行為
          <br />
          12.当社が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為
          <br />
          13.面識のない異性との出会いを目的とした行為
          <br />
          14.当社のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為
          <br />
          15.その他，当社が不適切と判断する行為
          <br />
        </p>
        <br />

        <p className={classes.ruleName}>第6条（本サービスの提供の停止等）</p>
        <p className={classes.ruleName}>
          1.当社は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
          <br />
          1.本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
          <br />
          2.地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合
          <br />
          3.コンピュータまたは通信回線等が事故により停止した場合
          <br />
          4.その他，当社が本サービスの提供が困難と判断した場合
          <br />
          2.当社は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
        </p>
        <br />

        <p className={classes.ruleName}>第7条（利用制限および登録抹消）</p>
        <p className={classes.ruleName}>
          1.当社は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします。
          <br />
          1.本規約のいずれかの条項に違反した場合
          <br />
          2.登録事項に虚偽の事実があることが判明した場合
          <br />
          3.料金等の支払債務の不履行があった場合
          <br />
          4.当社からの連絡に対し，一定期間返答がない場合
          <br />
          5.本サービスについて，最終の利用から一定期間利用がない場合
          <br />
          6.その他，当社が本サービスの利用を適当でないと判断した場合
          <br />
          2.当社は，本条に基づき当社が行った行為によりユーザーに生じた損害について，一切の責任を負いません。
          <br />
        </p>
        <br />

        <p className={classes.ruleName}>第8条（退会）</p>
        <p className={classes.ruleName}>
          ユーザーは，当社の定める退会手続により，本サービスから退会できるものとします。
        </p>
        <br />

        <p className={classes.ruleName}>第9条（保証の否認および免責事項）</p>
        <p className={classes.ruleName}>
          1.当社は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
          <br />
          2.当社は，本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。ただし，本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
          <br />
          3.前項ただし書に定める場合であっても，当社は，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
          <br />
          4.当社は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
          <br />
        </p>
        <br />

        <p className={classes.ruleName}>第10条（サービス内容の変更等）</p>
        <p className={classes.ruleName}>
          当社は，ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
        </p>
        <br />

        <p className={classes.ruleName}>第11条（利用規約の変更）</p>
        <p className={classes.ruleName}>
          1.当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
          <br />
          1.本規約の変更がユーザーの一般の利益に適合するとき。
          <br />
          2.本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。
          <br />
          2.当社はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。
          <br />
        </p>
        <br />

        <p className={classes.ruleName}>第12条（個人情報の取扱い）</p>
        <p className={classes.ruleName}>
          当社は，本サービスの利用によって取得する個人情報については，当社「プライバシーポリシー」に従い適切に取り扱うものとします。
        </p>
        <br />

        <p className={classes.ruleName}>第13条（通知または連絡）</p>
        <p>
          ユーザーと当社との間の通知または連絡は，当社の定める方法によって行うものとします。当社は,ユーザーから,当社が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。
        </p>
        <br />

        <p className={classes.ruleName}>第14条（権利義務の譲渡の禁止）</p>
        <p className={classes.ruleName}>
          ユーザーは，当社の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。
        </p>
        <br />

        <p className={classes.ruleName}>第15条（反社会的勢力の排除）</p>
        <p className={classes.ruleName}>
          1.利用者は、当社に対し、次の事項を確約します。
          <br />
          1.自らが、暴力団、暴力団関係企業、総会屋若しくはこれらに準ずる者又はその構成員（以下総称して「反社会的勢力」といいます。）ではないこと。
          <br />
          2.自らの役員（業務を執行する社員、取締役、執行役又はこれらに準ずる者をいいます。）が反社会的勢力ではないこと。
          <br />
          3.反社会的勢力に自己の名義を利用させ、本契約を締結するものでないこと。
          <br />
          4.自ら又は第三者を利用して、次の行為をしないこと。
          <br />
          1.相手方に対する脅迫的な言動又は暴力を用いる行為
          <br />
          2.法的な責任を超えた不当な要求行為
          <br />
          3.偽計又は威力を用いて相手方の業務を妨害し、又は信用を毀損する行為
          <br />
        </p>
        <br />

        <p className={classes.ruleName}>第16条（免責事項）</p>
        <p className={classes.ruleName}>
          1.天災地変、戦争、テロ行為、暴動、労働争議、伝染病、法令の制定改廃、政府機関の介入その他不可抗力により、本サービスの全部又は一部の停止、中断、遅延が発生した場合、当社は、利用者に生じた損害又は不利益について一切責任を負いません。
          <br />
          2.利用者は、通信回線やコンピュータの障害、システムメンテナンスその他の事由による本サービスの全部又は一部の停止、中断、遅延が起こり得ることを理解しているものとし、当社は、これらにより利用者に生じた損害又は不利益について一切責任を負いません。また、利用者の利用環境によって生じた損害又は不利益について、当社は一切責任を負いません。
          <br />
          3.当社は、以下の掲げる事項について、明示的にも黙示的にも保証しません。
          <br />
          1.本サービスの内容及び本サービスを通じて提供される情報の、有用性、完全性、正確性、最新性、信頼性、特定目的への適合性。
          <br />
          2.本サービスで提供される情報が第三者の権利を侵害しないものであること。
          <br />
          3.本サービスが将来にわたって存続し続けること
          <br />
          4.当社は、利用者による本サービスの利用に関連して、利用者に対して責任を負う場合には、該当の商品等の価額を超えて賠償する責任を負わないものとし、また、付随的損害、間接損害、特別損害、将来の損害および逸失利益にかかる損害については、賠償する責任を負わないものとします。
          <br />
        </p>
        <br />

        <p className={classes.ruleName}>第17条（秘密保持）</p>
        <p className={classes.ruleName}>
          本利用者は、本サービスの利用にあたり、当事務所より開示を受け、又は知り得た一切の情報について、第三者に開示又は漏えいしてはならず、本サービスの利用以外の目的に使用してはなりません。
        </p>
        <br />

        <p className={classes.ruleName}>第18条（第三者との紛争）</p>
        <p className={classes.ruleName}>
          1.本サービスに関連して利用者と第三者間で発生した紛争については、利用者は自らの費用と責任で解決するものとし、当社は一切の責任を負わないものとします。
          <br />
          2.前項に関し、当社が損害（弁護士費用を含みます。）を被った場合、利用者は当該損害を賠償するものとします。
          <br />
        </p>
        <br />

        <p className={classes.ruleName}>第19条（権利義務の譲渡禁止）</p>
        <p className={classes.ruleName}>
          利用者は、本規約に基づく契約上の地位及びこれにより生じる権利義務の全部または一部について、当社の書面による事前の承諾なく、第三者に対し、譲渡、移転、担保権の設定その他の処分をすることができません。
        </p>
        <br />

        <p className={classes.ruleName}>第20条（分離可能性）</p>
        <p className={classes.ruleName}>
          本規約のいずれかの条項が利用者との本規約に基づく契約に適用される法令に違反し、無効とされる場合、当該条項は、その違反とされる限りにおいて、当該利用者との契約には適用されないものとします。この場合でも、本規約の他の条項の効力には影響しません。
        </p>
        <br />

        <p className={classes.ruleName}>第21条（準拠法、裁判管轄）</p>
        <p className={classes.ruleName}>
          1.本規約は、日本法に準拠して解釈されます。
          <br />
          2.当社及び利用者は、本サービスに関し、当社と利用者との間で生じた紛争の解決について、東京地方裁判所を第一審の専属的合意管轄裁判所とすることにあらかじめ合意します。
        </p>
      </div>
      <div className={classes.confirm}>
        <Checkbox onChange={handleIsConfirmedChange} />
        <p>利用規約に同意します。</p>
      </div>
      <Link to="/apologize_page">
        <Button
          disabled={!isConfirmd}
          variant="contained"
          color="primary"
          onClick={_onPressed}
          style={{
            maxWidth: "400px",
            maxHeight: "45px",
            minWidth: "300px",
            minHeight: "45px",
            marginTop: "3%",
            marginBottom: "10%",
          }}
        >
          次　　へ
        </Button>
      </Link>
      <Routes>
        <Route path="/apologize_page" element={<ApologizePage />}></Route>
      </Routes>
    </div>
  );
};
