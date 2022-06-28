import React from 'react';

/**Render the userName
* @param {string} name
* @return {JSX}
*/
export default function UserInfos({name}) {
    return (  
    <div className='main_user_infos'>
      <h1>Bonjour <span>{name}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
    );
}
UserInfos.propTypes = {
	name: PropTypes.string,
};
