import { CultureCard } from "../components/Organisms/card/CultureCard";
import family from "../images/family.png";
import market from "../images/market.png";
import bure from "../images/Bure.png";
import innovation from "../images/innovation.png";
const useHighestCultureCard = (
  family_point: number,
  innovation_point: number,
  market_point: number,
  bure_point: number
) => {
  const determineRandomComponent = () => {
    const max = Math.max(
      family_point,
      innovation_point,
      market_point,
      bure_point
    );
    const indexes: number[] = [];
    if (family_point === max) indexes.push(0);
    if (innovation_point === max) indexes.push(1);
    if (market_point === max) indexes.push(2);
    if (bure_point === max) indexes.push(3);

    const randomIndex = indexes[Math.floor(Math.random() * indexes.length)];
    switch (randomIndex) {
      case 0:
        return (
          <CultureCard
            boxshadow="none"
            imageUrl={family}
            imageAlt="家族文化の画像"
            culture="家族文化"
            descripion="人々が多くのものを共有する非常にフレンドリーな職場。組織は人材が成長することの長期的なメリットを重視し、一体感とやる気を非常に重視する。顧客への心配りと人々への気遣いがあることが組織の成功と定義される。"
          />
        );
      case 1:
        return (
          <CultureCard
            imageUrl={innovation}
            imageAlt="イノベーション文化の画像"
            culture="イノベーション文化"
            descripion="ダイナミックであり、起業家精神にあふれクリエイティブな職場。時代の最先端にいることが重視される。組織が長期的に重視するのは成長と新しい資源の獲得である。ユニークかつ新しい商品やサービスを生みだすことが成功を意味する。"
          />
        );
      case 2:
        return (
          <CultureCard
            imageUrl={market}
            imageAlt="マーケット文化の画像"
            culture="マーケット文化"
            descripion="過程ではなく、結果を重視する組織。競争力のある行動や測定可能なゴール・ 目標を達成することが長期的関心事である。競合他社に勝てるような製品・サービス価格の設定や 市場シェアリーダーシップが組織の成功と定義される。"
          />
        );
      case 3:
        return (
          <CultureCard
            imageUrl={bure}
            imageAlt="官僚文化の画像"
            culture="官僚文化"
            descripion="非常に形式的で構造化された職場。決められた手 順や手続きが人々の活動を規定する。信頼できる製品・サービスの供給、スムーズな日程調整、そして低コストが組織の成功と定義される。"
          />
        );
      default:
        return null;
    }
  };

  return determineRandomComponent();
};

export default useHighestCultureCard;
