// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const container = useRef();
  
    useEffect(() => {
      // Remove existing script to avoid duplicates
      const existingScript = container.current.querySelector('script');
      if (existingScript) {
        container.current.removeChild(existingScript);
      }
  
      // Create a new script element
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "gridColor": "rgba(255, 255, 255, 1)",
          "hide_top_toolbar": true,
          "allow_symbol_change": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
  
      // Append the new script to the container
      container.current.appendChild(script);
  
      // Cleanup: remove the script when the component is unmounted
      return () => {
        container.current.removeChild(script);
      };
    }, []);
  
    return (
      <div className="tradingview-widget-container h-[569px] w-[892px]" ref={container} >
        <div className="tradingview-widget-container__widget" style={{ height: "1000px", width: "1000px" }}></div>
      </div>
    );
  }
  
  export default memo(TradingViewWidget);
