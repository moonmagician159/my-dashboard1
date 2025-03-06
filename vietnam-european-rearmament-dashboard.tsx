import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const VietnamEuropeanRearmamentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for export opportunities
  const exportOpportunitiesData = [
    { category: "Electronics & Components", current: 3.2, potential: 5.8, growth: 81.3 },
    { category: "Textiles (Military-Grade)", current: 1.5, potential: 2.9, growth: 93.3 },
    { category: "Machinery Parts", current: 0.8, potential: 2.1, growth: 162.5 },
    { category: "Rubber & Plastics", current: 0.6, potential: 1.4, growth: 133.3 },
    { category: "Metal Products", current: 0.4, potential: 1.0, growth: 150.0 }
  ];

  // Trade flow projection data
  const tradeFlowData = [
    { year: 2022, exports: 45.8 },
    { year: 2023, exports: 48.2 },
    { year: 2024, exports: 51.7 },
    { year: 2025, exports: 57.4 },
    { year: 2026, exports: 64.3 },
    { year: 2027, exports: 72.8 }
  ];

  // Defense industry participation opportunities
  const defenseParticipationData = [
    { name: "Electronic Systems", value: 38, potential: "High" },
    { name: "Support Equipment", value: 25, potential: "Medium-High" },
    { name: "Textiles & Uniforms", value: 18, potential: "Medium" },
    { name: "Component Manufacturing", value: 12, potential: "Medium" },
    { name: "Software & IT Services", value: 7, potential: "Medium-Low" }
  ];

  // Investment flows data
  const investmentFlowsData = [
    { year: 2022, value: 2.1 },
    { year: 2023, value: 2.3 },
    { year: 2024, value: 2.6 },
    { year: 2025, value: 3.5 },
    { year: 2026, value: 4.7 },
    { year: 2027, value: 6.2 }
  ];

  // Secondary economic benefits data
  const secondaryBenefitsData = [
    { benefit: "Technology Transfer", impact: 8.2, description: "Access to advanced manufacturing technologies" },
    { benefit: "Skills Development", impact: 7.5, description: "Workforce training in high-precision manufacturing" },
    { benefit: "Infrastructure Investment", impact: 6.8, description: "Improved industrial facilities and logistics" },
    { benefit: "R&D Collaboration", impact: 5.9, description: "Joint research projects with European firms" },
    { benefit: "Quality Standards Elevation", impact: 7.3, description: "Adoption of stringent European standards" }
  ];

  // European defense spending increases
  const defenseSpendingData = [
    { country: "Germany", spending2021: 56.1, spending2024: 91.2, target: 100.0 },
    { country: "France", spending2021: 59.3, spending2024: 72.8, target: 75.0 },
    { country: "Poland", spending2021: 13.8, spending2024: 33.6, target: 35.0 },
    { country: "Italy", spending2021: 28.9, spending2024: 35.4, target: 40.0 },
    { country: "Netherlands", spending2021: 14.7, spending2024: 19.8, target: 23.0 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const renderExportOpportunities = () => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-4">Vietnam's Export Opportunities to Europe ($ billions)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={exportOpportunitiesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="current" name="Current Exports" fill="#8884d8" />
          <Bar dataKey="potential" name="Potential by 2027" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current ($bn)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Potential ($bn)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth (%)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {exportOpportunitiesData.map((item) => (
              <tr key={item.category}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.current}bn</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.potential}bn</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">+{item.growth.toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderTradeFlowProjections = () => (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-medium mb-4">Vietnam-EU Trade Flow Projections ($ billions)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={tradeFlowData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="exports" name="Exports to EU" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
        <p className="text-sm text-blue-700">
          Projected 41% increase in exports to the EU by 2027, driven by European rearmament demands and supply chain diversification.
        </p>
      </div>
    </div>
  );

  const renderDefenseParticipation = () => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-4">Defense Industry Participation Opportunities</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={defenseParticipationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {defenseParticipationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="overflow-y-auto max-h-72">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Share (%)</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Potential</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {defenseParticipationData.map((item) => (
                <tr key={item.name}>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{item.value}%</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-blue-500">{item.potential}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderInvestmentFlows = () => (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-medium mb-4">Projected European Defense-Related FDI to Vietnam ($ billions)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={investmentFlowsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" name="FDI from Europe" stroke="#82ca9d" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
        <p className="text-sm text-green-700">
          Projected 195% increase in defense-related FDI from European companies by 2027, as they seek to diversify supply chains and reduce production costs.
        </p>
      </div>
    </div>
  );

  const renderSecondaryBenefits = () => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-4">Secondary Economic Benefits (Impact Scale 1-10)</h3>
      <div className="space-y-4">
        {secondaryBenefitsData.map((item) => (
          <div key={item.benefit} className="relative pt-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-700">{item.benefit}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-gray-700">{item.impact.toFixed(1)}/10</span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
              <div style={{ width: `${(item.impact / 10) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
            </div>
            <p className="text-xs text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEuropeanSpending = () => (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-medium mb-4">European Defense Spending Increases ($ billions)</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">2021 Spending</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">2024 Spending</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">2027 Target</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth (%)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {defenseSpendingData.map((item) => (
              <tr key={item.country}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.country}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.spending2021}bn</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.spending2024}bn</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.target}bn</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">
                  +{((item.target/item.spending2021 - 1) * 100).toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Vietnam's Economic Opportunities from European Rearmament</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-sm text-blue-700">
          Europe's accelerated defense spending creates significant opportunities for Vietnam's export-oriented economy, particularly in electronics, textiles, and component manufacturing.
        </p>
      </div>
      
      <div className="flex mb-6 border-b overflow-x-auto">
        <button 
          className={`py-2 px-4 font-medium ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`py-2 px-4 font-medium ${activeTab === 'exports' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('exports')}
        >
          Export Opportunities
        </button>
        <button 
          className={`py-2 px-4 font-medium ${activeTab === 'investment' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('investment')}
        >
          Investment Benefits
        </button>
      </div>
      
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {renderEuropeanSpending()}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-4">Key Opportunity Areas</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Electronics manufacturing for defense systems</li>
                <li>Military-grade textiles and uniforms</li>
                <li>Component manufacturing for defense equipment</li>
                <li>Machinery parts and metal products</li>
                <li>Logistics and supply chain services</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-4">Vietnam's Competitive Advantages</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Established electronics manufacturing capabilities</li>
                <li>Strong textile manufacturing infrastructure</li>
                <li>Competitive labor costs vs. European production</li>
                <li>Existing EU free trade agreement</li>
                <li>Political stability and growing technical workforce</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'exports' && (
        <div className="space-y-6">
          {renderExportOpportunities()}
          {renderTradeFlowProjections()}
          {renderDefenseParticipation()}
        </div>
      )}
      
      {activeTab === 'investment' && (
        <div className="space-y-6">
          {renderInvestmentFlows()}
          {renderSecondaryBenefits()}
          <div className="bg-white p-4 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-medium mb-4">Strategic Recommendations</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">Specialized industrial zones</span> - Develop facilities specifically for defense-adjacent industries</li>
              <li><span className="font-medium">Technical education</span> - Expand training programs aligned with defense industry needs</li>
              <li><span className="font-medium">Quality certification</span> - Fast-track adoption of European defense industry standards</li>
              <li><span className="font-medium">Digital infrastructure</span> - Enhance capabilities for secure manufacturing</li>
              <li><span className="font-medium">Trade missions</span> - Target European defense contractors and major suppliers</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default VietnamEuropeanRearmamentDashboard;
