import React from 'react';

export const StatCard = ({ 
  title, 
  value, 
  subtitle, 
  bgColor = 'bg-white', 
  textColor = 'text-hudson-dark',
  icon 
}) => {
  return (
    <div className={`${bgColor} ${textColor} rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-1">
            {title}
          </p>
          {subtitle && (
            <p className="text-xs opacity-60 mb-2">{subtitle}</p>
          )}
          <p className="text-3xl font-bold mt-2">
            {value}
          </p>
        </div>
        {icon && (
          <div className="ml-2">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};