import ScoreChart from "../../components/graphics/UserScore"
import { useState, useEffect } from "react";
import {useNavigate, useParams } from "react-router";
import { getUserInfos } from "../../services/ApiCalls";

export default function UserScorePage() {
    const navigate = useNavigate()
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
        <ScoreChart data={data}/>
    </div>)

}