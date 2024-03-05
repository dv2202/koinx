import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const DonutChartMirror = () => {
  const data = [
    { value: 80, color: '#0082FF' },
    { value: 20, color: '#FAA002' },
  ];

  return (
    <div>
      <PieChart
        data={data}
        lineWidth={30} 
      />
    </div>
  );
};

export default DonutChartMirror;
