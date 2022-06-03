import {useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import UserInfos from "../components/UserInfo";
import { getUserInfos } from "../services/ApiCalls";
import UserActivity from "../components/graphics/UserActivity";
import UserAverageSessions from "../components/graphics/UserAverage";
import UserPerformance from "../components/graphics/UserPerformance";
import ScoreChart from "../components/graphics/UserScore";
import KeyData from "../components/KeyData";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinsIcon from "../assets/protein-icon.svg";
import glucidesIcon from "../assets/carbs-icon.svg";
import lipidesIcon from "../assets/fat-icon.svg";

/**Render the dashboard
 * @return {JSX}
 */
export default function Home() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const request = await getUserInfos(id);
      if (!request) return navigate('/Error');
      setData(request.data);
    };
    getData();
  }, [id]);

    if (data.length === 0) return null;

  return  (
  <div className="main_home">
    <UserInfos name={data.userInfos.firstName} />
    <UserActivity />
    <section className="bottom">
      <UserAverageSessions />
      <UserPerformance />
      <ScoreChart data={data}/>
    </section>
    <aside className="main_keydata">
      <KeyData icon={caloriesIcon} info={`${data.keyData.calorieCount}kCal`} text="Calories" />
      <KeyData icon={proteinsIcon} info={`${data.keyData.proteinCount}g`} text="Proteines" />
      <KeyData icon={glucidesIcon}  info={`${data.keyData.carbohydrateCount}g`} text="Glucides" />
      <KeyData icon={lipidesIcon} info={`${data.keyData.lipidCount}g`} text="Lipides" />
    </aside>
  </div>
  )
}