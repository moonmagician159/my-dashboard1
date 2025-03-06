import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const VietnamTradeWarDashboard = () => {
  // Sample data - in a real application, this would come from an API or database
  const exportData = [
    { year: 2018, toUS: 47.5, toChina: 41.3, total: 243.5 },
    { year: 2019, toUS: 61.3, toChina: 41.4, total: 264.2 },
    { year: 2020, toUS: 76.4, toChina: 48.9, total: 281.5 },
    { year: 2021, toUS: 96.3, toChina: 55.9, total: 336.3 },
    { year: 2022, toUS: 109.1, toChina: 57.7, total: 371.9 },
    { year: 2023, toUS: 112.4, toChina: 60.2, total: 392.8 },
    { year: 2024, toUS: 118.6, toChina: 63.1, total: 413.5 },
  ];

  const fdiData = [
    { year: 2018, value: 19.1, growth: 9.1 },
    { year: 2019, value: 20.4, growth: 6.8 },
    { year: 2020, value: 15.8, growth: -22.5 },
    { year: 2021, value: 19.7, growth: 24.7 },
    { year: 2022, value: 22.4, growth: 13.7 },
    { year: 2023, value: 25.8, growth: 15.2 },
    { year: 2024, value: 27.1, growth: 5.0 },
  ];

  const industryShiftData = [
    { name: "Electronics", value: 32, change: "+15%" },
    { name: "Textiles", value: 24, change: "+10%" },
    { name: "Furniture", value: 18, change: "+22%" },
    { name: "Machinery", value: 14, change: "+8%" },
    { name: "Footwear", value: 12, change: "+5%" },
  ];

  const economicIndicators = [
    { name: "GDP Growth (%)", value: 6.5 },
    { name: "Manufacturing PMI", value: 53.2 },
    { name: "Trade Balance ($ bn)", value: 4.8 },
    { name: "Inflation (%)", value: 3.2 },
    { name: "FDI as % of GDP", value: 6.8 },
  ];

  const riskFactors = [
    { factor: "Supply Chain Dependence on China", risk: 7.8 },
    { factor: "Tariff Vulnerability", risk: 6.2 },
    { factor: "US-Vietnam Trade Friction", risk: 4.5 },
    { factor: "Exchange Rate Volatility", risk: 5.3 },
    { factor: "Labor Cost Increases", risk: 6.7 },
  ];

  const [activeTab, setActiveTab] = useState('overview');

  const renderExportChart = () => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-4">Vietnam's Exports ($ billions)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={exportData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="toUS" name="Exports to US" fill="#3b82f6" />
          <Bar dataKey="toChina" name="Exports to China" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const renderFDIChart = () => (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-medium mb-4">Foreign Direct Investment ($ billions)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={fdiData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" name="FDI" stroke="#10b981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const renderIndustryShift = () => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-4">Manufacturing Relocation to Vietnam</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Share (%)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">YoY Change</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {industryShiftData.map((item) => (
              <tr key={item.name}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.value}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">{item.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderEconomicIndicators = () => (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-medium mb-4">Key Economic Indicators</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {economicIndicators.map((indicator) => (
          <div key={indicator.name} className="border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">{indicator.name}</p>
            <p className="text-2xl font-bold mt-2">{indicator.value}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRiskFactors = () => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-4">Trade War Risk Factors (1-10 scale)</h3>
      <div className="space-y-4">
        {riskFactors.map((item) => (
          <div key={item.factor} className="relative pt-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-700">{item.factor}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-gray-700">{item.risk}</span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div style={{ width: `${(item.risk / 10) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Vietnam's Position in the US-China Trade War</h1>
      
      <div className="flex mb-6 border-b">
        <button 
          className={`py-2 px-4 font-medium ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`py-2 px-4 font-medium ${activeTab === 'trade' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('trade')}
        >
          Trade Data
        </button>
        <button 
          className={`py-2 px-4 font-medium ${activeTab === 'risks' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('risks')}
        >
          Risks
        </button>
      </div>
      
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-sm text-blue-700">
              Vietnam has emerged as one of the biggest beneficiaries of the US-China trade tensions, with significant manufacturing relocation from China and increased exports to both countries.
            </p>
          </div>
          {renderExportChart()}
          {renderEconomicIndicators()}
        </div>
      )}
      
      {activeTab === 'trade' && (
        <div className="space-y-6">
          {renderExportChart()}
          {renderFDIChart()}
          {renderIndustryShift()}
        </div>
      )}
      
      {activeTab === 'risks' && (
        <div className="space-y-6">
          {renderRiskFactors()}
          <div className="bg-white p-4 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-medium mb-4">Key Vulnerabilities</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Heavy dependence on imported raw materials and components from China</li>
              <li>US concerns about currency manipulation and trade surplus</li>
              <li>Limited infrastructure capacity for rapid industrial expansion</li>
              <li>Rising labor costs eroding competitive advantage</li>
              <li>Potential for "transshipment" accusations (Chinese goods routed through Vietnam)</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default VietnamTradeWarDashboard;
