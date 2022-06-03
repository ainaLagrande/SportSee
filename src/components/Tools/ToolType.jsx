/** create a custom tooltype for the user activity 
 * @param  {bool} active
 * @param  {array} payload
 * @return {JSX}
 */
export default function ActivityToolType({active, payload}) {
    if (active){
    return (
        <div className="too_type_box">
            <p>{payload[0].value}kg</p>
            <p>{payload[1].value}Kcal</p>
        </div>
     );
    }
    return null
}