// CarSalesChart.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CarSalesChart = ({ data }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  // Mapping API data to Chart.js format
  const chartData = {
    labels: data.map(monthData => monthData.mois),
    sales: data.map(monthData => monthData.nombre),
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy previous instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new Chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: chartData.labels,
        datasets: [
          {
            label: 'Car Sales per Month',
            data: chartData.sales,
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            labels: data.labels,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup the Chart instance on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default CarSalesChart;
