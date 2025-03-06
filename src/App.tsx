import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, AlertTriangle, DollarSign, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Colors
  const colors = {
    primary: "#2563eb",
    secondary: "#475569",
    danger: "#ef4444",
    warning: "#f59e0b",
    success: "#10b981",
    info: "#0ea5e9",
    caution: '#ffff00',       
    neutral: '#808080',       
    default: '#000000',
  };

  // Vietnam-US Trade Data
  const exportData = [
    { year: '2019', value: 61.3 },
    { year: '2020', value: 76.4 },
    { year: '2021', value: 96.3 },
    { year: '2022', value: 109.1 },
    { year: '2023', value: 124.5 },
    { year: '2024', value: 131.2 }
  ];

  // Export Categories
  const exportCategories = [
    { name: 'Electronics', value: 34.2, vulnerability: 'High', tariffImpact: 9.2 },
    { name: 'Textiles & Apparel', value: 22.8, vulnerability: 'Very High', tariffImpact: 12.5 },
    { name: 'Furniture', value: 14.3, vulnerability: 'Medium', tariffImpact: 5.7 },
    { name: 'Footwear', value: 13.5, vulnerability: 'High', tariffImpact: 8.1 },
    { name: 'Machinery', value: 8.7, vulnerability: 'Medium', tariffImpact: 4.3 },
    { name: 'Agricultural Products', value: 6.5, vulnerability: 'Low', tariffImpact: 2.1 }
  ];

  // GDP Dependence
  const gdpDependenceData = [
    { name: 'US Exports', value: 28.4 },
    { name: 'Other Exports', value: 32.6 },
    { name: 'Domestic Economy', value: 39.0 }
  ];

  // Tariff Scenarios
  const tariffScenarios = [
    { scenario: 'Baseline (Current)', gdpImpact: 0, jobsImpact: 0, exportDrop: 0 },
    { scenario: 'Mild Tariffs (5-10%)', gdpImpact: -1.2, jobsImpact: -120000, exportDrop: -8.4 },
    { scenario: 'Moderate Tariffs (15-25%)', gdpImpact: -3.5, jobsImpact: -345000, exportDrop: -19.7 },
    { scenario: 'Severe Tariffs (30-45%)', gdpImpact: -7.8, jobsImpact: -780000, exportDrop: -31.5 }
  ];

  // Vulnerability Index by Province
  const provinceVulnerability = [
    { name: 'Ho Chi Minh City', index: 8.7, jobs: 820000 },
    { name: 'Binh Duong', index: 8.5, jobs: 640000 },
    { name: 'Dong Nai', index: 8.3, jobs: 530000 },
    { name: 'Hanoi', index: 7.2, jobs: 410000 },
    { name: 'Bac Ninh', index: 7.0, jobs: 390000 },
    { name: 'Hai Phong', index: 6.8, jobs: 320000 }
  ];

  // Alternative Market Growth
  const alternativeMarkets = [
    { name: 'EU', current: 14.2, potential: 19.5, timeframe: 'Medium' },
    { name: 'Japan', current: 8.7, potential: 12.3, timeframe: 'Short' },
    { name: 'South Korea', current: 7.8, potential: 10.6, timeframe: 'Short' },
    { name: 'ASEAN', current: 9.5, potential: 16.2, timeframe: 'Medium' },
    { name: 'China', current: 15.6, potential: 21.3, timeframe: 'Long' }
  ];

  const getVulnerabilityColor = (vulnerability: string) => {
    switch (vulnerability) {
      case 'Very High': return colors.danger;
      case 'High': return colors.warning;
      case 'Medium': return colors.caution; // Add more cases as needed
      case 'Low': return colors.success;
      case 'None': return colors.neutral;
      default: return colors.default; // Optional: handle unexpected values
    }
  };

  const COLORS = [colors.primary, colors.info, colors.success, colors.warning, colors.danger, colors.secondary, colors.caution, colors.neutral, colors.default];

  return (
    <div className="w-full bg-gray-50 p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Vietnam-US Trade Vulnerability Dashboard</h1>
          <p className="text-gray-500">Analysis of potential US tariff impacts on Vietnam's economy</p>
        </div>
        <div className="flex space-x-2">
          <button 
            className={`px-3 py-1 rounded text-sm ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-3 py-1 rounded text-sm ${activeTab === 'sectors' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('sectors')}
          >
            Sector Analysis
          </button>
          <button 
            className={`px-3 py-1 rounded text-sm ${activeTab === 'scenarios' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('scenarios')}
          >
            Tariff Scenarios
          </button>
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Key Metrics */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow flex items-center">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">US Exports (2024)</p>
                <p className="text-xl font-bold">${exportData[exportData.length-1].value}B</p>
                <p className="text-green-500 text-xs flex items-center">
                  <ArrowUpRight className="w-3 h-3 mr-1" />5.4% vs 2023
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow flex items-center">
              <div className="rounded-full bg-amber-100 p-3 mr-4">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">GDP Vulnerability</p>
                <p className="text-xl font-bold">28.4%</p>
                <p className="text-amber-500 text-xs">% of GDP exposed to US market</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow flex items-center">
              <div className="rounded-full bg-red-100 p-3 mr-4">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">High-Risk Exports</p>
                <p className="text-xl font-bold">70.5%</p>
                <p className="text-red-500 text-xs">% of US exports in vulnerable sectors</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow flex items-center">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Alternative Markets</p>
                <p className="text-xl font-bold">79.8%</p>
                <p className="text-green-500 text-xs">Potential export redirection capacity</p>
              </div>
            </div>
          </div>
          
          {/* Export Trend */}
          <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Vietnam's Exports to US ($ Billions)</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={exportData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke={colors.primary} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          {/* GDP Dependence */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Vietnam's GDP Composition</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={gdpDependenceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {gdpDependenceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {activeTab === 'sectors' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Export Categories */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Export Categories to US (% of Total)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={exportCategories} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="value" fill={colors.primary} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Vulnerability Table */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Sector Vulnerability Analysis</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sector</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value ($B)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vulnerability</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tariff Impact ($B)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {exportCategories.map((category, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{category.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${category.value.toFixed(1)}B</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span 
                          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                          style={{
                            backgroundColor: `${getVulnerabilityColor(category.vulnerability)}20`,
                            color: getVulnerabilityColor(category.vulnerability)
                          }}
                        >
                          {category.vulnerability}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${category.tariffImpact.toFixed(1)}B</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Provincial Vulnerability */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Regional Vulnerability Index (1-10)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={provinceVulnerability} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Bar dataKey="index" fill={colors.warning}>
                  {provinceVulnerability.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.index > 8 ? colors.danger : entry.index > 7 ? colors.warning : colors.info} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Alternative Markets */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Alternative Markets Potential</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current ($B)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Potential ($B)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeframe</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {alternativeMarkets.map((market, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{market.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${market.current.toFixed(1)}B</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${market.potential.toFixed(1)}B</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span 
                          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                          style={{
                            backgroundColor: market.timeframe === 'Short' ? `${colors.success}20` : 
                                          market.timeframe === 'Medium' ? `${colors.info}20` : `${colors.warning}20`,
                            color: market.timeframe === 'Short' ? colors.success : 
                                market.timeframe === 'Medium' ? colors.info : colors.warning
                          }}
                        >
                          {market.timeframe}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'scenarios' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tariff Scenarios */}
          <div className="bg-white p-4 rounded-lg shadow col-span-1 md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Potential Tariff Scenarios Impact</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scenario</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GDP Impact (%)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jobs Impact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Export Drop (%)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tariffScenarios.map((scenario, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{scenario.scenario}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: scenario.gdpImpact < 0 ? colors.danger : colors.success }}>
                        {scenario.gdpImpact.toFixed(1)}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: scenario.jobsImpact < 0 ? colors.danger : colors.success }}>
                        {scenario.jobsImpact.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: scenario.exportDrop < 0 ? colors.danger : colors.success }}>
                        {scenario.exportDrop.toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* GDP Impact */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">GDP Impact by Tariff Scenario</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tariffScenarios} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="scenario" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="gdpImpact" fill={colors.primary}>
                  {tariffScenarios.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.gdpImpact === 0 ? colors.info : entry.gdpImpact > -2 ? colors.warning : colors.danger} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Employment Impact */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Jobs Impact by Tariff Scenario</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tariffScenarios} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="scenario" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="jobsImpact" fill={colors.primary}>
                  {tariffScenarios.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.jobsImpact === 0 ? colors.info : entry.jobsImpact > -200000 ? colors.warning : colors.danger} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
