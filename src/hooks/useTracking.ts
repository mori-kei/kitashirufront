import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    
    const trackingID = process.env.REACT_APP_GA_TRACKING_ID;
    if (trackingID) {
      // Google Analytics を初期化する（一度だけ実行）
      ReactGA.initialize(trackingID);
    } else {
      // trackingIDが存在しない場合の処理をここに記述する（例: エラーログ、代替の処理）
      console.error("Google AnalyticsのトラッキングIDが見つかりません。");
      // 代替の処理を行うなど、必要に応じて適切な処理を追加することができます
    }
  }, []);

  useEffect(() => {
    const trackingTimer = setTimeout(() => {
      // ページビュートラッキングを送信する
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
      });
    }, 1000); // 500ms の遅延を設ける（適宜調整可能）

    // クリーンアップ
    return () => {
      clearTimeout(trackingTimer);
    };
  }, [location]);
};

export { usePageTracking };
