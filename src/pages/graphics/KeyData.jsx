import KeyData from "../../components/KeyData"
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getUserInfos } from "../../services/ApiCalls";
// Icons 
import caloriesIcon from "../../assets/calories-icon.svg";
import proteinsIcon from "../../assets/protein-icon.svg";
import glucidesIcon from "../../assets/carbs-icon.svg";
import lipidesIcon from "../../assets/fat-icon.svg";

export default function UserKeyDataPage() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
        const request = await getUserInfos(id);
        setData(request.data);
        };
        getData();
    }, [id]);

    return (<div className="graphics_page">
        <KeyData icon={caloriesIcon} info={data.keyData ?`${data.keyData.calorieCount}kCal`: ''} text="Calories" />
        <KeyData icon={proteinsIcon} info={data.keyData ?`${data.keyData.proteinCount}g`: ''} text="Proteines" />
        <KeyData icon={glucidesIcon} info={data.keyData ?`${data.keyData.carbohydrateCount}g`: ''} text="Glucides" />
        <KeyData icon={lipidesIcon} info={data.keyData ?`${data.keyData.lipidCount}g`: ''} text="Lipides" />
    </div>)
}