// components/SkillCard.tsx
import React from "react";

interface SkillCardProps {
  title: string;
  items: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, items }) => {
  return (
    <div className=" p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-gray-600 mb-2">{title}</h3>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
