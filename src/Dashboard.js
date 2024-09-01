/* eslint-disable */
// import React, { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart,  LabelList } from 'recharts';
// import { Smartphone, Users, Globe, Shield, BookOpen, UserPlus, DollarSign, Zap, MessageCircle } from 'lucide-react';

import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart, LabelList 
} from 'recharts';
import { 
  Smartphone, Users, Globe, Shield, BookOpen, UserPlus, DollarSign 
} from 'lucide-react';


const AlertBox = ({ title, content }) => (
    <div style={{
      backgroundColor: '#FFEBEE',
      border: '1px solid #FFCDD2',
      borderRadius: '4px',
      padding: '1rem',
      marginTop: '1rem'
    }}>
      <h3 style={{ color: '#B71C1C', marginBottom: '0.5rem' }}>{title}</h3>
      <p>{content}</p>
    </div>
);



const marketShareData = [
  { name: 'Orange Jordan', value: 35, color: '#FFA500' },
  { name: 'Zain Jordan', value: 45, color: '#4CAF50' },
  { name: 'Umniah', value: 20, color: '#2196F3' },
];

const revenueGrowthData = [
  { year: 2020, Orange: 1, Zain: 3 },
  { year: 2021, Orange: 1.5, Zain: 3.5 },
  { year: 2022, Orange: 2, Zain: 4 },
];

const arpuData = [
  { year: 2018, arpu: 7.0 },
  { year: 2019, arpu: 6.8 },
  { year: 2020, arpu: 6.7 },
  { year: 2021, arpu: 6.6 },
  { year: 2022, arpu: 6.5 },
];

const networkCoverageData = [
  { provider: 'Orange Jordan', coverage: 95 },
  { provider: 'Zain Jordan', coverage: 97 },
  { provider: 'Umniah', coverage: 93 },
];

const talentData = [
  { skill: 'AI', demand: 80, supply: 40 },
  { skill: 'Data Science', demand: 75, supply: 45 },
  { skill: 'Cybersecurity', demand: 85, supply: 50 },
];

const cybersecurityData = [
    { category: 'Global Cyberattacks Increase', value: 100, unit: '%', color: '#FF6384' },
    { category: 'Jordan Ransomware Increase', value: 250, unit: '%', color: '#36A2EB' },
    { category: 'Avg. Data Breach Cost', value: 4.35, unit: '$M', color: '#FFCE56' },
    { category: 'Max Fine for Non-compliance', value: 20, unit: 'JOD K', color: '#4BC0C0' },
  ];

const regulatoryChallengesData = [
    { challenge: 'Data Localization', impact: 80, color: '#FF6384' },
    { challenge: 'Licensing Fees', impact: 75, color: '#36A2EB' },
    { challenge: 'Spectrum Auctions', impact: 85, color: '#FFCE56' },
    { challenge: 'Interconnect & Roaming Rates', impact: 70, color: '#4BC0C0' },
  ];

const customerSatisfactionData = [
  {name: 'Orange Jordan', score: 7.5},
  {name: 'Zain Jordan', score: 8.2},
  {name: 'Umniah', score: 7.8}
];

const digitalAdoptionData = [
  {year: 2020, adoption: 30},
  {year: 2021, adoption: 35},
  {year: 2022, adoption: 42},
  {year: 2023, adoption: 50}
];

const Dashboard = () => {
  const [selectedPainPoint, setSelectedPainPoint] = useState('Market Share');

  const painPoints = [
    { name: 'Market Share', icon: Users },
    { name: 'Revenue Growth', icon: DollarSign },
    { name: 'ARPU Decline', icon: Smartphone },
    { name: 'Network Coverage', icon: Globe },
    { name: 'Cybersecurity', icon: Shield },
    { name: 'Regulatory Compliance', icon: BookOpen },
    { name: 'Talent Acquisition', icon: UserPlus },
  ];

  const PainPointCard = ({ painPoint, isSelected, onClick }) => (
    <div 
      className={`p-4 rounded-lg shadow-md cursor-pointer transition-all ${isSelected ? 'bg-orange-500 text-white' : 'bg-white hover:bg-orange-100'}`}
      onClick={() => onClick(painPoint.name)}
    >
      <div className="flex items-center mb-2">
        {React.createElement(painPoint.icon, { size: 24, className: "mr-2" })}
        <h3 className="text-lg font-semibold">{painPoint.name}</h3>
      </div>
    </div>
  );

  const renderChart = () => {
    switch(selectedPainPoint) {
        case 'Market Share':
            return (
              <ResponsiveContainer width="100%" height={500}>
                <PieChart>
                  <Pie
                    data={marketShareData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    innerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value, percent }) => `${name}: (${(percent * 100).toFixed(0)}%)`}
                  >
                    {marketShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            );
      case 'Revenue Growth':
        return (
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={revenueGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: 'Growth (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Orange" fill="#FFA500" name="Orange Jordan" />
              <Bar dataKey="Zain" fill="#4CAF50" name="Zain Jordan" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'ARPU Decline':
        return (
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={arpuData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[6, 7.5]} label={{ value: 'ARPU (JOD)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="arpu" stroke="#FFA500" strokeWidth={4} name="ARPU (JOD)" />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'Network Coverage':
        return (
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={networkCoverageData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[90, 100]} />
              <YAxis dataKey="provider" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="coverage" name="4G Coverage (%)">
                {networkCoverageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={marketShareData[index].color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
      case 'Talent Acquisition':
        return (
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={talentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="skill" />
              <YAxis label={{ value: 'Percentage', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="demand" fill="#FFA500" name="Demand" />
              <Bar dataKey="supply" fill="#4CAF50" name="Supply" />
            </BarChart>
          </ResponsiveContainer>
        );
        case 'Cybersecurity':
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={cybersecurityData} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="category" type="category" width={150} />
        <Tooltip 
          formatter={(value, name, props) => {
            const dataPoint = cybersecurityData.find(item => item.value === value);
            return dataPoint ? [`${value}${dataPoint.unit}`, name] : [value, name];
          }}
        />
        <Legend />
        <Bar dataKey="value" name="Value">
          {cybersecurityData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          <LabelList 
            dataKey="value" 
            position="right" 
            formatter={(value) => {
              const dataPoint = cybersecurityData.find(item => item.value === value);
              return dataPoint ? `${value}${dataPoint.unit}` : value;
            }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
        case 'Regulatory Compliance':
                return (
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={regulatoryChallengesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="challenge" />
                      <YAxis label={{ value: 'Impact Score', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="impact" name="Impact Score">
                        {regulatoryChallengesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                );


      default:
        return <p>Select a pain point to view detailed data.</p>;
    }
  };

  return (
    <div className="p-6 bg-gray-100 font-sans">
      <h1 className="text-3xl font-bold mb-6">Orange Jordan: Strategic Market Analysis & Key Challenges</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="col-span-1 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Key Pain Points</h2>
          <div className="grid grid-cols-1 gap-4">
            {painPoints.map((point) => (
              <PainPointCard 
                key={point.name} 
                painPoint={point} 
                isSelected={selectedPainPoint === point.name}
                onClick={setSelectedPainPoint}
              />
            ))}
          </div>
        </div>
        
        <div className="col-span-2 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">{selectedPainPoint}</h2>
          {renderChart()}
    {selectedPainPoint === 'Cybersecurity' && (
  <AlertBox 
    title="Critical Cybersecurity Risks"
    content="Orange Jordan faces increasing threats from cyberattacks, potential data breaches, and vulnerabilities in emerging technologies like 5G and IoT. Robust security measures and compliance with data protection laws are crucial to mitigate financial and reputational risks."
  />

)}

{selectedPainPoint === 'Regulatory Compliance' && (
  <AlertBox 
    title="Key Regulatory Challenges"
    content="Orange Jordan must navigate complex regulatory landscapes including data localization requirements, high licensing fees, competitive spectrum auctions, and regulated interconnect and roaming rates. These challenges impact operational costs, profitability, and market competitiveness."
  />
)}
          <p className="mt-4">{getDescription(selectedPainPoint)}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Customer Satisfaction Comparison</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={customerSatisfactionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 10]} label={{ value: 'Score', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Bar dataKey="score">
                {customerSatisfactionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={marketShareData[index].color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-2">Orange Jordan's customer satisfaction score (7.5) lags behind Zain Jordan (8.2) and Umniah (7.8), indicating room for improvement in service quality and customer experience.</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Digital Service Adoption</h2>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={digitalAdoptionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: 'Adoption (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Area type="monotone" dataKey="adoption" stroke="#FFA500" fill="#FFA500" />
            </AreaChart>
          </ResponsiveContainer>
          <p className="mt-2">Digital service adoption has grown from 30% in 2020 to 50% in 2023, but still lags behind regional averages, presenting opportunities for new value-added services.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Key Performance Indicators</h2>
          <div className="grid grid-cols-2 gap-4">
            <KPICard icon={Users} title="Market Share" value="35%" change={-2} />
            <KPICard icon={DollarSign} title="Revenue Growth" value="2%" change={0.5} />
            <KPICard icon={Smartphone} title="ARPU" value="JOD 6.5" change={-0.1} />
            <KPICard icon={Globe} title="4G Coverage" value="95%" change={1} />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Competitive Landscape</h2>
          <ul className="list-disc pl-5">
            <li>Zain Jordan leads with 45% market share and 3-4% annual revenue growth</li>
            <li>Umniah holds 20% market share but is gaining ground in data services</li>
            <li>Orange Jordan faces pressure on pricing and customer acquisition costs</li>
            <li>All operators are investing heavily in 5G infrastructure and digital services</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Analytica's AI Solutions for Orange Jordan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SolutionCard 
            icon={Users} 
            title="Customer Segmentation & Retention" 
            description="AI-powered segmentation to improve targeted marketing and increase market share" 
          />
          <SolutionCard 
            icon={DollarSign} 
            title="Revenue Optimization" 
            description="Predictive models to optimize pricing strategies and combat ARPU decline" 
          />
          <SolutionCard 
            icon={Globe} 
            title="Network Optimization" 
            description="Machine learning for network optimization to improve coverage and quality of service" 
          />
          <SolutionCard 
            icon={Shield} 
            title="Advanced Cybersecurity" 
            description="AI-driven threat detection, real-time monitoring, and predictive analytics to enhance network security, protect customer data, and ensure compliance with data protection regulations."
    />
          <SolutionCard 
            icon={UserPlus} 
            title="Talent Acquisition & Retention" 
            description="AI-driven strategies to address skill gaps and retain top talent" 
          />
          <SolutionCard 
            icon={BookOpen} 
            title="Regulatory Compliance Support" 
            description="AI-driven compliance monitoring, automated reporting, and predictive analytics to navigate complex regulatory landscapes, ensure adherence to data localization requirements, and optimize responses to changing interconnect and roaming rates."
          />
        </div>
      </div>
    </div>
  );
};

const KPICard = ({ icon, title, value, change }) => (
  <div className="bg-gray-100 p-4 rounded-lg">
    {React.createElement(icon, { size: 24, className: "mb-2" })}
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
    <p className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      {change >= 0 ? '↑' : '↓'} {Math.abs(change)}
    </p>
  </div>
);

const SolutionCard = ({ icon, title, description }) => (
  <div className="bg-gray-100 p-4 rounded-lg">
    {React.createElement(icon, { size: 24, className: "mb-2 text-orange-500" })}
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

function getDescription(painPoint) {
  switch (painPoint) {
    case 'Market Share':
      return "Orange Jordan holds 35% market share, trailing behind Zain (45%) and ahead of Umniah (20%). A 1% market share loss could represent millions of dollars in lost revenue annually.";
    case 'Revenue Growth':
      return "Orange Jordan's revenue growth (1-2% annually) lags behind Zain (3-4% growth). This slower growth rate impacts long-term competitiveness and profitability.";
    case 'ARPU Decline':
      return "ARPU has declined from JOD 7 in 2018 to JOD 6.5 in 2022. This JOD 0.5 decrease across millions of subscribers translates to a significant reduction in overall revenue.";
    case 'Network Coverage':
      return "While Orange Jordan has 95% 4G coverage, it slightly trails Zain (97%) and leads Umniah (93%). Network congestion and speed issues in certain areas affect customer experience.";
    case 'Cybersecurity':
        return `The telecom industry faces significant cybersecurity challenges. In 2022, there was a 100% increase in cyberattacks globally, with Jordan experiencing a 250% increase in ransomware attacks in 2021. The average cost of a data breach globally is $4.35 million. Orange Jordan must protect vast amounts of sensitive customer data, with potential fines up to JOD 20,000 for non-compliance with data privacy regulations. As 5G and IoT networks expand, new vulnerabilities emerge, requiring robust security measures to prevent disruptions and protect customer data.`;
    case 'Regulatory Compliance':
        return `Orange Jordan faces significant regulatory challenges. Data localization requirements under the Jordanian Data Protection Law mandate storing sensitive data within Jordan's borders, increasing operational costs. High licensing fees and competitive spectrum auctions for 5G deployment impact profitability and investment capacity. The Telecommunications Regulatory Commission (TRC) regulates interconnect and roaming rates, which can affect revenue streams and competitiveness. These regulatory challenges require careful navigation and strategic planning.`;    
    case 'Talent Acquisition':
      return "There's a significant gap between demand and supply for critical skills like AI, data science, and cybersecurity. This skills gap can hinder innovation and digital transformation efforts.";
    default:
      return "Select a pain point to view detailed information.";
  }
}

export default Dashboard;