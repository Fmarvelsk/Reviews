import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';
import Profileuser from './ProfileUser';

function Profile(props){
    const userProfile = useSelector( state => state.authModalReducer)
    useEffect( () => {
        document.body.style.backgroundColor = '#EFEFEF'
      return () => {
        document.body.style.backgroundColor = ''
      }
    }, [userProfile.user])
    return (
        <>
        { 
        <Profileuser/>
        /*userProfile.user ? (<ProfileInfo profile={userProfile.user}/>) : (<Redirect to={
            {pathname: '/unathorized',
              state: {
                from: props.location
              }}
           }
              />
        
          ) */}     
        </>
    )
}

export default Profile;