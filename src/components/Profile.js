import React from 'react';
import ProfileInfo from './ProfileInfo';

function Profile(profiles){
    return (
        <div>
            <ProfileInfo profile={profiles}/>
        </div>
    )
}

export default Profile;