import React from 'react';
import { FileText, FileCheck, Clock, XCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { StatCard } from '../components/StatCard';
import { DailyMovementChart } from '../components/DailyMovementChart';
import { StatusBarChart } from '../components/StatusBarChart';
import { TypesPieChart } from '../components/TypesPieChart';

export const Home = () => {
  const chartData = [
    { date: '01/10', value: 530 },
    { date: '02/10', value: 630 },
    { date: '03/10', value: 580 },
    { date: '04/10', value: 720 },
    { date: '05/10', value: 650 },
    { date: '06/10', value: 780 },
    { date: '07/10', value: 700 }
  ];

  const statusData = [
    { name: 'Cancelado', value: 9983, color: '#1E3A8A' },
    { name: 'Executado', value: 14350, color: '#3B82F6' },
    { name: 'Finalizado', value: 45464, color: '#06B6D4' },
    { name: 'Pendente', value: 14250, color: '#38BDF8' }
  ];

  const typesData = [
    { name: 'Levantamento', value: 2436 },
    { name: 'Prorrogação', value: 1263 },
    { name: 'Transferência', value: 2436 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-hudson-blue via-hudson-light-blue to-hudson-cyan">
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard title="Alvarás Assinados" value="9.983" icon={<FileCheck size={32} className="text-green-500" />} />
          <StatCard title="Alvarás Executados" value="83.636.983" icon={<FileCheck size={32} className="text-blue-500" />} />
          <StatCard title="Alvarás Pendentes" value="665.983" bgColor="bg-hudson-light-blue" textColor="text-white" icon={<Clock size={32} className="text-white" />} />
          <StatCard title="Pendentes Assinatura" value="11.235" bgColor="bg-hudson-cyan" textColor="text-white" icon={<FileText size={32} className="text-white" />} />
        </div>

        <div className="bg-gradient-to-r from-hudson-blue to-hudson-light-blue rounded-2xl p-8 mb-6 shadow-2xl">
          <p className="text-white/80 text-sm mb-2">💰 Total Pago</p>
          <p className="text-white text-4xl font-bold">R$ 11.983.389.539,67</p>
        </div>

        <div className="mb-6"><DailyMovementChart data={chartData} /></div>
        <div className="mb-6"><StatusBarChart data={statusData} /></div>
        <div className="mb-6"><TypesPieChart data={typesData} /></div>

      </main>
    </div>
  );
};