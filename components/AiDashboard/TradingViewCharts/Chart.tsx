'use client'

import React, { useEffect, useRef, memo } from 'react'

function TradingViewWidget({ pair }: { pair: string }) {
  const container = useRef<any>()

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${pair}",
          "interval": "D",
          "timezone": "Asia/Kolkata",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": true,
          "gridColor": "rgba(19, 23, 34, 0.8)",
          "backgroundColor": "rgba(19, 23, 34, 0.8)",
          "support_host": "https://www.tradingview.com"
        }`
    container.current?.appendChild(script)
    return () => {
      container.current?.removeChild(script)
    }
  }, [])

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: '100%', width: '100%' }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: 'calc(100% - 32px)', width: '100%' }}
      ></div>
    </div>
  )
}

export default memo(TradingViewWidget)