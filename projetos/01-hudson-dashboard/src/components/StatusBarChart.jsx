import React from 'react';

export const StatusBarChart = ({ data }) => {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="font-bold text-hudson-dark text-lg mb-6">
        📊 Status dos Alvarás
      </h3>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700 w-48 truncate">
              {item.name}
            </span>
            <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 flex items-center justify-end pr-3"
                style={{
                  width: `${Math.max((item.value / maxValue) * 100, 5)}%`,
                  backgroundColor: item.color
                }}
              >
                <span className="text-xs font-bold text-white">
                  {item.value.toLocaleString('pt-BR')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};