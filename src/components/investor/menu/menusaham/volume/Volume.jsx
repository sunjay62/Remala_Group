import React, { useEffect, useRef } from 'react';
import './volume.scss';
import { useTranslation } from 'react-i18next';

let tvScriptLoadingPromise;

export default function Volume() {
  const onLoadScriptRef = useRef();
  const [t] = useTranslation('global');

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (document.getElementById('tradingview_4fbee') && 'TradingView' in window) {
        new window.TradingView.widget({
          autosize: true,
          symbol: 'IDX:LINK',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'light',
          style: '1',
          locale: 'en',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview_4fbee',
        });
      }
    }
  }, []);

  return (
    <div className="containerVolume">
      <h3>{t('translation.text-investor.btn-share.price')}</h3>
      <div className="tradingview-widget-container " style={{ width: '100%' }}>
        <div id="tradingview_4fbee" style={{ height: '60vh', width: '100%' }} />
        <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  );
}
