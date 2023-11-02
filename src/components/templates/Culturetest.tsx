import { Flex, Box } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

import QuestionCard from "../organisms/card/QuestionCard";

const Culturetest = () => {
  // Q1
  const [q01Fam, setQ01Fam] = useState<string>("0");
  const [q01Inno, setQ01Inno] = useState<string>("0");
  const [q01Mar, setQ01Mar] = useState<string>("0");
  const [q01Bure, setQ01Bure] = useState<string>("0");
  const [q01BorderColor, setQ01BorderColor] = useState("red");
  const [q02Fam, setq02Fam] = useState<string>("0");
  const [q02Inno, setq02Inno] = useState<string>("0");
  const [q02Mar, setq02Mar] = useState<string>("0");
  const [q02Bure, setq02Bure] = useState<string>("0");
  const [q02BorderColor, setq02BorderColor] = useState("red");
  const [q03Fam, setq03Fam] = useState<string>("0");
  const [q03Inno, setq03Inno] = useState<string>("0");
  const [q03Mar, setq03Mar] = useState<string>("0");
  const [q03Bure, setq03Bure] = useState<string>("0");
  const [q03BorderColor, setq03BorderColor] = useState("red");
  const [q04Fam, setq04Fam] = useState<string>("0");
  const [q04Inno, setq04Inno] = useState<string>("0");
  const [q04Mar, setq04Mar] = useState<string>("0");
  const [q04Bure, setq04Bure] = useState<string>("0");
  const [q04BorderColor, setq04BorderColor] = useState("red");
  const [q05Fam, setq05Fam] = useState<string>("0");
  const [q05Inno, setq05Inno] = useState<string>("0");
  const [q05Mar, setq05Mar] = useState<string>("0");
  const [q05Bure, setq05Bure] = useState<string>("0");
  const [q05BorderColor, setq05BorderColor] = useState("red");
  const [q06Fam, setq06Fam] = useState<string>("0");
  const [q06Inno, setq06Inno] = useState<string>("0");
  const [q06Mar, setq06Mar] = useState<string>("0");
  const [q06Bure, setq06Bure] = useState<string>("0");
  const [q06BorderColor, setq06BorderColor] = useState("red");
  // 合計値の計算 100であるかのチェック
  //Q1
  useEffect(() => {
    const sum =
      parseInt(q01Fam) +
      parseInt(q01Inno) +
      parseInt(q01Mar) +
      parseInt(q01Bure);

    if (sum === 100) {
      setQ01BorderColor("green");
    } else {
      setQ01BorderColor("red");
    }
  }, [q01Fam, q01Inno, q01Mar, q01Bure]);
  //Q2
  useEffect(() => {
    const sum =
      parseInt(q02Fam) +
      parseInt(q02Inno) +
      parseInt(q02Mar) +
      parseInt(q02Bure);

    if (sum === 100) {
      setq02BorderColor("green");
    } else {
      setq02BorderColor("red");
    }
  }, [q02Fam, q02Inno, q02Mar, q02Bure]);
  //q3
  useEffect(() => {
    const sum =
      parseInt(q03Fam) +
      parseInt(q03Inno) +
      parseInt(q03Mar) +
      parseInt(q03Bure);

    if (sum === 100) {
      setq03BorderColor("green");
    } else {
      setq03BorderColor("red");
    }
  }, [q03Fam, q03Inno, q03Mar, q03Bure]);
  //q4
  useEffect(() => {
    const sum =
      parseInt(q04Fam) +
      parseInt(q04Inno) +
      parseInt(q04Mar) +
      parseInt(q04Bure);

    if (sum === 100) {
      setq04BorderColor("green");
    } else {
      setq04BorderColor("red");
    }
  }, [q04Fam, q04Inno, q04Mar, q04Bure]);
  //q5
  useEffect(() => {
    const sum =
      parseInt(q05Fam) +
      parseInt(q05Inno) +
      parseInt(q05Mar) +
      parseInt(q05Bure);

    if (sum === 100) {
      setq05BorderColor("green");
    } else {
      setq05BorderColor("red");
    }
  }, [q05Fam, q05Inno, q05Mar, q05Bure]);
  useEffect(() => {
    const sum =
      parseInt(q06Fam) +
      parseInt(q06Inno) +
      parseInt(q06Mar) +
      parseInt(q06Bure);

    if (sum === 100) {
      setq06BorderColor("green");
    } else {
      setq06BorderColor("red");
    }
  }, [q06Fam, q06Inno, q06Mar, q06Bure]);
  return (
    <Flex justifyContent="center">
      <Box width="80%">
        <QuestionCard
          questionText="1.顕著にみられる特徴"
          borderColor={q01BorderColor}
          setFam={setQ01Fam}
          setInno={setQ01Inno}
          setMar={setQ01Mar}
          setBure={setQ01Bure}
          fam={q01Fam}
          inno={q01Inno}
          mar={q01Mar}
          bure={q01Bure}
          label1="指示系統によるしっかりとした上下関係重視というよりは、上司や先輩、または（将来）部下や後輩などともゆるやかで、フレンドリーな関係性が構築されている職場がいい。同僚や上司・部下は家族の延長のような存在であってほしいし、価値観や考えはお互いしっかり共有しておきたいと思う。"
          label2="  新しいことに積極的で、起業家精神にあふれるクリエイティブな職場がいい。同僚や上司・部下はリスクを恐れず進んで革新的な選択をしていく人たちがいい。"
          label3=" プロセスや過程での努力などではなく、結果や成果、アウトプットで評価をしてくれるような職場がいい。仕事をする上では、達成すべき目標や目的を明確に示してほしい。"
          label4=" 仕事の役割分担が明確になされていて、自分が何をすべきかをしっかり指示してくれるような職場がいい。自分個人の発想やオリジナリティに基づいて臨機応変に仕事をするというよりは、どうすればよいのかという方法や手続きをきちんと具体的に示してほしい。"
        />
        <QuestionCard
          questionText="2.リーダーシップスタイル"
          borderColor={q02BorderColor}
          setFam={setq02Fam}
          setInno={setq02Inno}
          setMar={setq02Mar}
          setBure={setq02Bure}
          fam={q02Fam}
          inno={q02Inno}
          mar={q02Mar}
          bure={q02Bure}
          label1=" 職場でリーダーシップをとる人には、部下を育て、人々を助けることを期待する。"
          label2="  職場でリーダーシップをとる人には、新しいことに挑戦する起業家精神や、画期的なアイディアを重視する革新的な発想、リスクを恐れない挑戦的な姿勢を期待する。"
          label3=" 職場でリーダーシップをとる人には、理想より現実を直視し、フットワーク軽く行動的で、プロセスよりも結果重視であることを期待する。"
          label4=" 職場でリーダーシップをとる人には、人間関係に配慮しつつ人々をうまくまとめ、ムリ・ムダなくスムーズに仕事を進めようとする姿勢を期待する。"
        />
        <QuestionCard
          questionText="3.従業員管理"
          borderColor={q03BorderColor}
          setFam={setq03Fam}
          setInno={setq03Inno}
          setMar={setq03Mar}
          setBure={setq03Bure}
          fam={q03Fam}
          inno={q03Inno}
          mar={q03Mar}
          bure={q03Bure}
          label1=" 仲間同士のチームワークや、全員で意志が一致すること、みんながしっかり組織や取り組みに参加することを大切にするような職場が望ましい。"
          label2=" 独自の発想を持ち、新しく画期的なアイディアを生み出すことが重視され、自由であることを重んじる職場。リスクを恐れず自ら行動を起こすことを奨励してくれるような職場が望ましい。"
          label3=" 組織が顧客のニーズに応えたり、ライバル企業などとの競争を勝ち抜くために、自分にハイレベルな仕事と高い成果が期待されるような実力重視の職場が望ましい。"
          label4=" 簡単にはクビ（解雇）にならないことや、将来にわたって安定して働ける保証を得られる職場。仕事の内容ややり方、配置などに劇的な変化が少なく、明確なルールに基づく管理が行き届いている職場が望ましい。"
        />
        <QuestionCard
          questionText="4.組織を団結させるもの"
          borderColor={q04BorderColor}
          setFam={setq04Fam}
          setInno={setq04Inno}
          setMar={setq04Mar}
          setBure={setq04Bure}
          fam={q04Fam}
          inno={q04Inno}
          mar={q04Mar}
          bure={q04Bure}
          label1=" 会社への入れ込みが強く、皆が会社を信頼することによって一致団結しているような会社がいいと思う。組織のために尽くそうとするような献身的な人が多い職場が望ましい。"
          label2=" 革新を起こすことを目標に、新しいものを生み出そうと全力を注ぐことで皆が一致団結している会社がいいと思う。業界の最先端を走っていることを重視する職場が望ましい。"
          label3=" 目標の達成や成功に向かって頑張ることによって皆が一致団結している会社がいいと思う。対外的な評価を高め、自社へのプライドを大切にする職場が望ましい。"
          label4=" ルールを重視し、進むべき方向性を皆が共有することで一致団結している会社がいいと思う。仕事を円滑に、効率よく進めようとするような職場が望ましい。"
        />
        <QuestionCard
          questionText="5.戦略的に重視するもの"
          borderColor={q05BorderColor}
          setFam={setq05Fam}
          setInno={setq05Inno}
          setMar={setq05Mar}
          setBure={setq05Bure}
          fam={q05Fam}
          inno={q05Inno}
          mar={q05Mar}
          bure={q05Bure}
          label1=" 人材育成や教育、従業員の能力向上に重きを置く会社が望ましい。また、信頼関係やオープンなコミュニケーション、組織レベルでの取り組みに対する積極的な参加を重視する職場がいいと思う。"
          label2=" 新しいビジネスチャンスを開拓したり、次に向けたチャレンジ、何か新しいものを生み出すことに重きを置く会社が望ましい。また、新しいことへの挑戦や、そのような機会を探すことを重視する職場がいいと思う。"
          label3=" ライバルとの競争に勝ち抜き、目標を達成することに重きを置く会社が望ましい。また、高い目標を達成し、自社がその分野のリーダーになることを重視する職場がいいと思う。"
          label4=" 永続的にビジネスが続くことや商売が安定していることに重きを置く会社が望ましい。また、効率的に仕事を行うこと、組織がきちんと統制されていること、円滑に業務が進むことを重要視する職場がいいと思う。"
        />
        <QuestionCard
          questionText="6.成功の基準"
          borderColor={q06BorderColor}
          setFam={setq06Fam}
          setInno={setq06Inno}
          setMar={setq06Mar}
          setBure={setq06Bure}
          fam={q06Fam}
          inno={q06Inno}
          mar={q06Mar}
          bure={q06Bure}
          label1=" 人材育成や教育がうまくいっていること、チームワークが成立していること、従業員が組織に尽くしてくれていることこそが、とても重要な成功だと考える会社が望ましい。"
          label2=" 自社が独創的または最新の製品を持っていることこそが、とても重要な成功だと考える会社が望ましい。"
          label3="  顧客に評価されたり、ライバル企業に勝ち抜くことこそが、とても重要な成功だと考える会社が望ましい。"
          label4="  効率的に仕事が回っていること、安定した品質を持つ商品や安くてよいものを提供できていることこそが、とても重要な成功だと考える会社が望ましい。"
        />
        ;
      </Box>
    </Flex>
  );
};

export default Culturetest;