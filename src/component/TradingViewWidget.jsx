import React, { useEffect, useRef, memo } from 'react';
import { useLocation } from 'react-router-dom';

function TradingViewWidget() {
  const container = useRef();
  const location = useLocation();
  const path = location.pathname.split('/');
  let defaultSymbol = path[1] === '' ? 'CRYPTO:BTCUSD' : 'FOREXCOM:ETHUSD';

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${defaultSymbol}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
      return () => {
        container.current.removeChild(script);
      };
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    
    </div>
  );
}

export default memo(TradingViewWidget);
