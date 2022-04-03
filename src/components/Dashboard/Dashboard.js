import React from 'react';

import { Area, AreaChart, Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts';
import useDashboard from '../../Hooks/useDashboard';

const Dashboard = () => {
    const [values, setValues] = useDashboard([]);
    console.log(values)
    return (
        <div className='row row-cols-1 row-cols-md-3 g-4 mt-5'>
            
            <div className="line-chart col">
                <LineChart width={400} height={400} data={values}>
                   
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" /> 
                    <Line type="monotone" dataKey="investment" stroke="red" />  
                     
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis dataKey={'investment'}></YAxis>

                    
                </LineChart>
            </div>
            <div className="area-chart col">
            <AreaChart width={400} height={400} data={values}>
                   
                   
                   <Area type="monotone" dataKey="investment" stroke="red" />  
                   <Area type="monotone" dataKey="revenue" stroke="black" />  
                    
                   <XAxis dataKey={'sell'}></XAxis>
                   <YAxis dataKey={'investment'}></YAxis>

                   
               </AreaChart>
            </div>
            <div className="bar-chart col">
                <BarChart width={400} height={400} data={values}>
                    <Bar type="monotone" dataKey="investment" stroke="black"></Bar>
                    <Bar type="monotone" dataKey="revenue" stroke="red"></Bar>
                    <XAxis dataKey={'month'}></XAxis>
                   <YAxis dataKey={'investment'}></YAxis>
                   </BarChart>
                
            </div>

        </div>
    );
};

export default Dashboard;