import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";

/** create a PieChart with score value
 * @param  {object} {data}
 * @return {JSX}
 */
 export default function ScoreChart({ data }) {
     
  const score = [
    { value: data.todayScore || data.score },
    { value: 1 - data.todayScore || data.score },
  ];

  return (
    <div className="main_score">
      <p>Score</p>
      <ResponsiveContainer height={270} width={220}>
        <PieChart>
          <Pie data={score} dataKey="value" innerRadius={70} outerRadius={85} startAngle={90} >
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${entry}`} fill="#FBFBFB" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="txt">
        <span>
          {score[0].value * 100}%<br />
        </span> de votre <br /> objectif
      </div>
    </div>
  );
}


ScoreChart.propTypes = {
  data: PropTypes.object,
};
