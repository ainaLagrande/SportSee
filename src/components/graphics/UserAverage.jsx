import React, { useState, useEffect } from "react";
import { getData } from "../../services/getData";
import { useParams } from "react-router";
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip} from "recharts";
import SessionsToolType from "../Tools/SessionToolType.jsx";

export default function UserAverageSessions() { 
     
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_AVERAGE_SESSIONS",id);
      if (!request) return alert("data error");
      const formatData = request.data.sessions.map((data) => {
        switch (data.day) {
          case 1:
            return { ...data, day: "L" };
          case 2:
            return { ...data, day: "M" };
          case 3:
            return { ...data, day: "M" };
          case 4:
            return { ...data, day: "J" };
          case 5:
            return { ...data, day: "V" };
          case 6:
            return { ...data, day: "S" };
          case 7:
            return { ...data, day: "D" };
          default:
            return { ...data };
        }
      });
      setData(formatData);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;
  
  return (
    <div className="main_average">
      <p className="title">Durée moyenne des sessions</p>
      <ResponsiveContainer  width='100%' height='100%'>
        <LineChart data={data} >
          <XAxis type="category" dataKey="day" tickLine={true} stroke="red" padding={{right:5, left:5}} tick={{ fontSize: 13, stroke: "white", opacity: 0.8}}/>
          <YAxis dataKey="sessionLength" domain={[0, 'dataMax + 30']} hide={true}/>
          <Tooltip content={<SessionsToolType/>} cursor={{  height: 0, stroke: 'rgba(0, 0, 0, 0.1)', strokeWidth: 0 }}/>
          <Line type="monotone" padding={{ left: 10 }} dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.7)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke:'white' }}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
UserAverageSessions.propTypes = {
  averageSessions: PropTypes.array.isRequired
}