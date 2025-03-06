import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const VietnamPeaceImpactDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for trade flows
  const tradeData = [
    { year: 2022, russiaImports: 2.5, russiaExports: 0.9, ukraineImports: 0.3, ukraineExports: 0.1 },
    { year: 2023, russiaImports: 1.8, russiaExports: 0.7, ukraineImports: 0.2, ukraineExports: 0.08 },
    { year: 2024, russiaImports: 1.6, russiaExports: 0.6, ukraineImports: 0.15, ukraineExports: 0.07 },
    { year: "Post-Peace (Est.)", russiaImports: 2.2, russiaExports: 1.1, ukraineImports: 0.4, ukraineExports: 0.2 }
  ];

  // Commodity impact data
  const commodityData = [
    { name: "Wheat", priceChange: -8.5, importVolume: 0.8, impact: "Moderate Positive" },
    { name: "Petroleum", priceChange: -5.3, importVolume: 2.7, impact: "Strong Positive" },
    { name: "Fertilizer", priceChange: -12.1, importVolume: 1.4, impact: "Strong Positive" },
    { name: "Steel", priceChange: -3.2, importVolume: 1.1, impact: "Mild Positive" },
    { name: "Sunflower Oil", priceChange: -15.4, importVolume: 0.3, impact: "Moderate Positive" }
  ];

  // Sector impact data
  const sectorImpactData = [
    { name: "Manufacturing", value: 35, impact: "Positive", description: "Lower input costs, increased orders" },
    { name: "Agriculture", value: 25, impact: "Mixed", description: "Lower fertilizer costs, potential export competition" },
    { name: "Energy", value: 15, impact: "Positive", description: "Lower fuel import costs" },
    { name: "Tourism", value: 12, impact: "Positive", description: "Improved global sentiment, potential Russian tourism" },
    { name: "Construction", value: 8, impact: "Positive", description: "Lower material costs" },
    { name: "Other", value: 5, impact: "Neutral", description: "Limited direct impact" }
  ];

  const economicIndicatorsData = [
    { indicator: "GDP Growth", beforePeace: 6.0, afterPeace: 6.4, unit: "%" },
    { indicator: "Inflation", beforePeace: 3.5, afterPeace: 2.8, unit: "%" },
    { indicator: "Trade Balance", beforePeace: 4.2, afterPeace: 5.1, unit: "$ bn" },
    { indicator: "FDI Inflows", beforePeace: 15.8, afterPeace: 17.3, unit: "$ bn" },
    { indicator: "Manufacturing PMI", beforePeace: 52.4, afterPeace: 54.1, unit: "Index" }
  ];

  const opportunityRiskData = [
    { category: "Opportunities", items: [
      { name: "Reduced input costs", score: 8.5 },
      { name: "Increased Russian tourism", score: 6.2 },
      { name: "Agricultural exports to Russia", score: 7.0 },
      { name: "Infrastructure projects", score: 5.8 },
      { name: "Technology partnerships", score: 4.5 }
    ]},
    { category: "Risks", items: [
      { name: "Ukrainian agricultural competition", score: 4.3 },
      { name: "Russian market volatility", score: 5.1 },
      { name: "Sanctions uncertainty", score: 6.7 },
      { name: "Exchange rate fluctuations", score: 5.9 },
      { name: "Geopolitical realignment", score: 4.8 }
    ]}
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  const renderTradeChart = () => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-4">Vietnam's Trade with Russia and Ukraine ($ billions)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={tradeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="russiaImports" name="Imports from Russia" fill="#ef4444" />
          <Bar dataKey="russiaExports" name="Exports to Russia" fill="#f87171" />
          <Bar dataKey="ukraineImports" name="Imports from Ukraine" fill="#3b82f6" />
          <Bar dataKey="ukraineExports" name="Exports to Ukraine" fill="#60a5fa" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const renderCommodityImpact = () => (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-medium mb-4">Impact on Key Imported Commodities (Post-Peace Estimates)</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commodity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Change (%)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Import Volume ($ bn)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall Impact</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {commodityData.map((item) => (
              <tr key={item.name}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">{item.priceChange}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.importVolume} bn</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">{item.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSectorImpact = () => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-4">Sectoral Impact Analysis</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sectorImpactData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {sectorImpactData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="overflow-y-auto max-h-72">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sector</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sectorImpactData.map((item) => (
                <tr key={item.name}>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{item.impact}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderEconomicIndicators = () => (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-medium mb-4">Economic Indicators: Before vs. After Peace Deal</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Indicator</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Before Peace</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">After Peace (Est.)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {economicIndicatorsData.map((item) => {
              const change = item.afterPeace - item.beforePeace;
              const isPositive = 
                (item.indicator === "Inflation" ? change < 0 : change > 0); // For inflation, negative change is good
              
              return (
                <tr key={item.indicator}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.indicator}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.beforePeace} {item.unit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.afterPeace} {item.unit}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {change > 0 ? '+' : ''}{change.toFixed(1)} {item.unit}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderOpportunitiesRisks = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {opportunityRiskData.map((category) => (
        <div key={category.category} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4">
            {category.category === "Opportunities" ? 
              "Key Opportunities for Vietnam" : 
              "Key Risks and Challenges"}
          </h3>
          <div className="space-y-4">
            {category.items.map((item) => (
              <div key={item.name} className="relative pt-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-gray-700">{item.score.toFixed(1)}/10</span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div 
                    style={{ width: `${(item.score / 10) * 100}%` }} 
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                      category.category === "Opportunities" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Impact of Russia-Ukraine Peace Deal on Vietnam's Economy</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-sm text-blue-700">
          While Vietnam's direct trade with Russia and Ukraine is limited, a peace deal would affect Vietnam's economy through global commodity markets, trade flows, and regional stability.
        </p>
      </div>
      
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
          Trade Impact
        </button>
        <button 
          className={`py-2 px-4 font-medium ${activeTab === 'sectors' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('sectors')}
        >
          Sector Analysis
        </button>
      </div>
      
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {renderEconomicIndicators()}
          {renderOpportunitiesRisks()}
        </div>
      )}
      
      {activeTab === 'trade' && (
        <div className="space-y-6">
          {renderTradeChart()}
          {renderCommodityImpact()}
        </div>
      )}
      
      {activeTab === 'sectors' && (
        <div className="space-y-6">
          {renderSectorImpact()}
          <div className="bg-white p-4 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-medium mb-4">Key Findings</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Manufacturing sectors would benefit most from reduced input costs, particularly fertilizers and energy</li>
              <li>Agriculture faces mixed impacts: lower production costs but potential increased competition from Ukrainian exports</li>
              <li>Vietnam's modest but growing trade with Russia could see significant recovery post-peace</li>
              <li>Tourism could see uptick from increased Russian visitors as travel constraints ease</li>
              <li>Overall economic benefit through improved global outlook and reduced inflationary pressures</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default VietnamPeaceImpactDashboard;
