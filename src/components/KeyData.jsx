/** display icon with user infos 
 * @param  {string} icon
 * @param  {string} info
 * @param  {string} text
 * @return {JSX}
 */
export default function KeyData({icon,info,text}) {
    return (  
    <div className='keyData_item'>
        <img src={icon} alt="calories icon"/>
        <div className='keyData_info'>
            <div className='keyData_number'>{info}</div>
            <div className='keyData_txt'>{text}</div>
        </div>
    </div> );
}

KeyData.propTypes = {
    icon: PropTypes.any,
    info: PropTypes.string,
    text: PropTypes.string,
  }
  