import ChartBar from './ChartBar'

const CHART_DATA = [
  {
    tag: 'L1',
    height: 100,
    value: 7,
  },
  {
    tag: 'L2',
    height: 90,
    value: 3,
  },
  {
    tag: 'L3',
    height: 80,
    value: 2,
  },
  {
    tag: 'L4',
    height: 70,
    value: 1.5,
  },
  {
    tag: 'L5',
    height: 60,
    value: 0.75,
  },
  {
    tag: 'L6',
    height: 50,
    value: 0.5,
  },
  {
    tag: 'L7',
    height: 40,
    value: 0.25,
  },
]

export default function SystemChart() {
  return (
    <div className="relative flex h-[400px] scale-[0.55] items-end justify-center gap-8 md:scale-100">
      {CHART_DATA.map((chart) => (
        <ChartBar
          key={chart.value}
          value={chart.value}
          height={chart.height}
          tag={chart.tag}
        />
      ))}
    </div>
  )
}
