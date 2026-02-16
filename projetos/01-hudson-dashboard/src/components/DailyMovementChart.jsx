import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const DailyMovementChart = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="font-bold text-hudson-dark text-lg mb-4">
        📈 Movimentação Diária
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};