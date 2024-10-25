import React, { useEffect, useRef } from 'react'
import Chart, { ChartConfiguration } from 'chart.js/auto'

const LineChart = ({ color }: { color: string }) => {
  const chartRef = useRef<any>(null)

  useEffect(() => {
    const chartConfig: ChartConfiguration = {
      type: 'line',
      data: {
        labels: [
          'Label 1',
          'Label 2',
          'Label 3',
          'Label 4',
          'Label 5',
          'Label 6',
          'Label 7',
          'Label 8',
          'Label 9',
          'Label 10',
        ],
        datasets: [
          {
            data: [65, 90, 84, 120, 56, 180, 40, 57, 10, 90],
            fill: false,
            borderColor: `${color}`,
            tension: 0.2,
            pointRadius: 0, // Set point radius to zero
            //   pointHoverRadius: 0, // Set point hover radius to zero
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    }

    const chartInstance = new Chart(chartRef.current, chartConfig)

    return () => {
      chartInstance.destroy()
    }
  }, [])

  return <canvas ref={chartRef} />
}

export default LineChart
