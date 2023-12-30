import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics を初期化する（一度だけ実行）
    ReactGA.initialize("G-EHVS14B8ME");
  }, []);

  useEffect(() => {
    // ページトラッキングを送信する
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);
};

export { usePageTracking };
