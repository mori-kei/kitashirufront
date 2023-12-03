import React from "react";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
type Props = {
  resultFam: number;
  resultInno: number;
  resultMar: number;
  resultBure: number;
  userFam: number;
  userInno: number;
  userMar: number;
  userBure: number;
};

export const CultureCompareChart = ({
  resultFam,
  resultInno,
  resultMar,
  resultBure,
  userFam,
  userInno,
  userMar,
  userBure,
}: Props) => {
  const items = [
    { culture: "家族文化", company: resultFam, you: userFam },
    { culture: "イノベーション文化", company: resultInno, you: userInno },
    { culture: "マーケット文化", company: resultMar, you: userMar },
    { culture: "官僚文化", company: resultBure, you: userBure },
  ];
  return (
    <>
      <div id="content">
        <RadarChart // レーダーチャート全体の設定を記述
          cx={250} // 要素の左端とチャートの中心点との距離(0にするとチャートの左半分が隠れる)
          cy={250} // 要素の上部とチャートの中心点との距離(0にするとチャートの上半分が隠れる)
          outerRadius={195} // レーダーチャート全体の大きさ
          width={700} // レーダーチャートが記載される幅(この幅よりチャートが大きい場合、はみ出た箇所は表示されない)
          height={500} // レーダーチャートが記載される高さ
          data={items} // 表示対象のデータ
        >
          {/* レーダーチャートの蜘蛛の巣のような線 */}
          <PolarGrid />
          {/* 項目を決めるデータのキー(サンプルでいう数学や歴史) */}
          <PolarAngleAxis dataKey="culture" />

          {/* 目安となる数値が表示される線を指定  */}
          <PolarRadiusAxis
            angle={30} // 中心点から水平を0°とした時の角度 垂直にしたいなら90を指定
            domain={[0, 50]} // リストの１番目の要素が最小値、2番目の要素が最大値
          />

          {/* レーダーを表示 */}
          <Radar
            name="company" // そのチャートが誰のデータか指定(チャート下にここで指定した値が表示される)
            dataKey="company" // 表示する値と対応するdata内のキー
            stroke="#82ca9d" // レーダーの外枠の色
            fill="#82ca9d" // レーダー内の色
            fillOpacity={0.6} // レーダー内の色の濃さ(1にすると濃さMAX)
          />
          <Radar
            name="you" // そのチャートが誰のデータか指定(チャート下にここで指定した値が表示される)
            dataKey="you" // 表示する値と対応するdata内のキー
            stroke=" #8884d8" // レーダーの外枠の色
            fill=" #8884d8" // レーダー内の色
            fillOpacity={0.6} // レーダー内の色の濃さ(1にすると濃さMAX)
          />
        </RadarChart>
      </div>
    </>
  );
};
