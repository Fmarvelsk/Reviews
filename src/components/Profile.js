import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Profileuser from './ProfileUser';

function Profile(props){
    const { user, authenticated } = useSelector( state => state.authModalReducer)

    useEffect( () => {
        document.body.style.backgroundColor = '#EFEFEF'
      return () => {
        document.body.style.backgroundColor = ''
      }
    }, [user])
    return (
        <>
        {console.log(authenticated)}
        
            
        { authenticated ? (<Profileuser profile={user}/>) : (<Redirect to={
            {pathname: '/unathorized',
              state: {
                from: props.location
              }}
           }
              />
        
          )}     
        </>
    )
}

export default Profile;