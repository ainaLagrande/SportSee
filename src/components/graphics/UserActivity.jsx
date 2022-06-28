import React from 'react';
import { useState,useEffect } from 'react';
import { getData } from '../../services/getData';
import { useParams } from 'react-router';
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip, ResponsiveContainer} from "recharts";
import ActivityToolType from '../Tools/ToolType';

/**
 * Render a BarChart with user activity Data
 * @return {JSX}
 */
 export default  function UserActivity() {

    const [data, setData] = useState([]);
	const {id} = useParams();

    useEffect(() => {
		const data = async () => {
            const request = await getData("USER_ACTIVITY",id);
			if (!request) return alert('data error');
			
			setData(request.data.sessions);
		};
		data();
	}, [id]);
	if (data.length === 0) return null;
    
	//format data en jour
	for (let i = 0 ; i < data.length ; i ++)
        {data[i].day = i + 1;}
    
    return (  
        <div className='main_activity'>
            <div className='activity_infos'>
                <p>Activité quotidienne</p>
                <div className='activity_txt'>
					<div className='weight'>
						<div className='color red'/>
						<p>Poids (kg)</p>
					</div>
					<div className='calories'>
						<div className='color'/>
						<p>Calories brûlées (kCal)</p>
					</div>
				</div>
            </div>
            <ResponsiveContainer  height={200} >
                <BarChart data={data} barGap={8} barCategoryGap={1}>
                    <CartesianGrid vertical={false} strokeDasharray="1 1"/>
                    <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} stroke="1 1"/>
                    <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15}/>
                    <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']}  hide={true}/>
                    <Tooltip content={<ActivityToolType/>}/>
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

UserActivity.propTypes = {
    sessions: PropTypes.object,
  }
  
  