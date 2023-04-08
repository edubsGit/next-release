// components/PercentageBar.tsx
import React from 'react';

interface PercentageBarProps {
  greenPercentage: number;
  redPercentage: number;
  grayPercentage: number;
}

const PercentageBar: React.FC<PercentageBarProps> = ({
  greenPercentage,
  redPercentage,
  grayPercentage,
}) => {
  const greenWidth = greenPercentage * 100;
  const redWidth = redPercentage * 100;
  const grayWidth = grayPercentage * 100;

  return (
    <div className="flex w-full h-1.5 rounded">
      <div
        className="bg-green-250 rounded-l"
        style={{ width: `${greenWidth}%` }}
      />
      <div
        className="bg-red-250"
        style={{ width: `${redWidth}%` }}
      />
      <div
        className="bg-slate-250 rounded-r"
        style={{ width: `${grayWidth}%` }}
      />
    </div>
  );
};

export default PercentageBar;
