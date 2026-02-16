import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export const TypesPieChart = ({ data }) => {
  const COLORS = ['#1E3A8A', '#3B82F6', '#06B6D4', '#0EA5E9', '#38BDF8'];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="font-bold text-hudson-dark text-lg mb-6">
        🥧 Tipos de Alvarás
      </h3>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            labelLine={false}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={60} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};