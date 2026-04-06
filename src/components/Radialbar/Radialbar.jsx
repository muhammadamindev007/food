import React from 'react'
import Chart from 'react-apexcharts'

function RadialChart() {
  const series = [78, 50, 70]

  const chartOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    colors: ['#65B0F6', '#FFB572', '#FF7CA3'],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
            color:'#fff',
          },
          total: {
            show: true,
            label: 'Total',
            color:'#fff',
            formatter: function () {
                return 586
            }
          }
        }
      }
    },
    labels: ['Delivery', 'To Go', 'Dine In',],
  }

  return (
    <div id="chart">
      <Chart
        options={chartOptions}
        series={series}
        type="radialBar"
        height={350}
      />
    </div>
  )
}

export default RadialChart