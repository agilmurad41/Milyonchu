import React from 'react';
import { PRIZE_LADDER } from '../constants';

interface MoneyTreeProps {
  currentLevel: number; // 0 to 9
}

export const MoneyTree: React.FC<MoneyTreeProps> = ({ currentLevel }) => {
  // We display the ladder in reverse order (highest prize at top)
  const reversedLadder = [...PRIZE_LADDER].reverse();
  const totalLevels = PRIZE_LADDER.length;

  return (
    <div className="bg-slate-900/90 border border-yellow-600/30 rounded-lg p-4 w-full md:w-64 max-h-[300px] md:max-h-none overflow-y-auto shadow-xl backdrop-blur-sm">
      <ul className="space-y-1">
        {reversedLadder.map((prize, index) => {
          const levelIndex = totalLevels - 1 - index;
          const isActive = levelIndex === currentLevel;
          const isPassed = levelIndex < currentLevel;
          const isMilestone = prize === "1,000 ₼" || prize === "16,000 ₼" || prize === "1,000,000 ₼";

          return (
            <li 
              key={prize} 
              className={`
                flex justify-between items-center px-3 py-1 rounded 
                ${isActive ? 'bg-yellow-600 text-white font-bold border border-white' : ''}
                ${isPassed ? 'text-yellow-600/60' : 'text-slate-300'}
                ${!isActive && !isPassed && isMilestone ? 'text-white font-semibold' : ''}
                text-sm md:text-base
              `}
            >
              <span className="text-xs opacity-50 mr-2">{levelIndex + 1}</span>
              <span>{prize}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};