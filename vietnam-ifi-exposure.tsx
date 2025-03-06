import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line, CartesianGrid, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const VietnamIFIDashboard = () => {
  // Sample data representing Vietnam's exposure to international financial institutions
  const fundingByInstitution = [
    { name: 'World Bank', amount: 2430, projects: 42 },
    { name: 'ADB', amount: 1860, projects: 35 },
    { name: 'IMF', amount: 720, projects: 4 },
    { name: 'AIIB', amount: 510, projects: 8 },
    { name: 'NDB', amount: 280, projects: 3 },
  ];

  const historicalFunding = [
    { year: 2015, WB: 1250, ADB: 980, IMF: 480, AIIB: 0, NDB: 0 },
    { year: 2016, WB: 1420, ADB: 1050, IMF: 510, AIIB: 120, NDB: 0 },
    { year: 2017, WB: 1680, ADB: 1180, IMF: 550, AIIB: 210, NDB: 0 },
    { year: 2018, WB: 1820, ADB: 1340, IMF: 620, AIIB: 280, NDB: 60 },
    { year: 2019, WB: 2010, ADB: 1520, IMF: 680, AIIB: 350, NDB: 120 },
    { year: 2020, WB: 2250, ADB: 1670, IMF: 750, AIIB: 420, NDB: 180 },
    { year: 2021, WB: 2320, ADB: 1740, IMF: 740, AIIB: 460, NDB: 220 },
    { year: 2022, WB: 2380, ADB: 1790, IMF: 730, AIIB: 480, NDB: 240 },
    { year: 2023, WB: 2430, ADB: 1860, IMF: 720, AIIB: 510, NDB: 280 },
  ];

  const sectorDistribution = [
    { name: 'Infrastructure', value: 38 },
    { name: 'Energy', value: 22 },
    { name: 'Health', value: 14 },
    { name: 'Education', value: 10 },
    { name: 'Agriculture', value: 8 },
    { name: 'Financial Sector', value: 5 },
    { name: 'Other', value: 3 },
  ];

  const economicIndicators = [
    { year: 2015, gdp: 193.24, debt: 57.4, ifiDependency: 4.2 },
    { year: 2016, gdp: 205.28, debt: 59.8, ifiDependency: 4.5 },
    { year: 2017, gdp: 223.78, debt: 61.3, ifiDependency: 4.8 },
    { year: 2018, gdp: 245.21, debt: 55.6, ifiDependency: 5.1 },
    { year: 2019, gdp: 261.92, debt: 54.3, ifiDependency: 5.3 },
    { year: 2020, gdp: 271.16, debt: 56.8, ifiDependency: 5.9 },
    { year: 2021, gdp: 282.54, debt: 58.4, ifiDependency: 5.7 },
    { year: 2022, gdp: 308.67, debt: 57.2, ifiDependency: 5.5 },
    { year: 2023, gdp: 327.45, debt: 56.6, ifiDependency: 5.8 },
  ];

  const loanTerms = [
    { institution: 'World Bank', averageInterest: 1.8, averageTerm: 25, averageGracePeriod: 5 },
    { institution: 'ADB', averageInterest: 2.1, averageTerm: 22, averageGracePeriod: 4 },
    { institution: 'IMF', averageInterest: 1.6, averageTerm: 10, averageGracePeriod: 3 },
    { institution: 'AIIB', averageInterest: 2.3, averageTerm: 20, averageGracePeriod: 4 },
    { institution: 'NDB', averageInterest: 2.5, averageTerm: 18, averageGracePeriod: 3 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];

  return (
    <div className="flex flex-col w-full space-y-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Vietnam's Economic Exposure to International Financial Institutions</CardTitle>
          <CardDescription>
            Analysis of Vietnam's dependency on funding from major global financial institutions
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Current Funding by Institution (Million USD)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fundingByInstitution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sector Distribution of IFI Funding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {sectorDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="historical">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="historical">Historical Funding</TabsTrigger>
          <TabsTrigger value="economic">Economic Indicators</TabsTrigger>
          <TabsTrigger value="terms">Loan Terms</TabsTrigger>
        </TabsList>

        <TabsContent value="historical">
          <Card>
            <CardHeader>
              <CardTitle>Historical Funding Trends (2015-2023, Million USD)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={historicalFunding}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="WB" stackId="1" stroke="#0088FE" fill="#0088FE" name="World Bank" />
                    <Area type="monotone" dataKey="ADB" stackId="1" stroke="#00C49F" fill="#00C49F" name="ADB" />
                    <Area type="monotone" dataKey="IMF" stackId="1" stroke="#FFBB28" fill="#FFBB28" name="IMF" />
                    <Area type="monotone" dataKey="AIIB" stackId="1" stroke="#FF8042" fill="#FF8042" name="AIIB" />
                    <Area type="monotone" dataKey="NDB" stackId="1" stroke="#8884d8" fill="#8884d8" name="NDB" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="economic">
          <Card>
            <CardHeader>
              <CardTitle>Economic Indicators & IFI Dependency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={economicIndicators}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" domain={[0, 10]} />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="gdp" stroke="#0088FE" name="GDP (Billion USD)" />
                    <Line yAxisId="left" type="monotone" dataKey="debt" stroke="#00C49F" name="Public Debt (% of GDP)" />
                    <Line yAxisId="right" type="monotone" dataKey="ifiDependency" stroke="#FF8042" name="IFI Dependency (% of Budget)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="terms">
          <Card>
            <CardHeader>
              <CardTitle>Loan Terms by Institution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={loanTerms} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="institution" type="category" width={50} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="averageInterest" fill="#0088FE" name="Interest Rate (%)" />
                    <Bar dataKey="averageTerm" fill="#00C49F" name="Term (Years)" />
                    <Bar dataKey="averageGracePeriod" fill="#FFBB28" name="Grace Period (Years)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total IFI Funding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5.80B</div>
            <p className="text-xs text-gray-500">Active portfolio across all institutions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">% of Public Investment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.4%</div>
            <p className="text-xs text-gray-500">Of annual public investment budget</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92</div>
            <p className="text-xs text-gray-500">Across all international financial institutions</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VietnamIFIDashboard;
