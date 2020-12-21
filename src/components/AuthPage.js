import React from 'react';
import Login from './Login';
import SignUp from './Signup';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '../store/actions/authModal'

export default function AuthPage() {

	const showModal = useSelector((state) => state.authModalReducer);
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(hideModal())
	};
	return (
		
		(showModal.loginPage ? (
			<Login show={showModal.loginPage && showModal.show}  handleClose={handleClose} />
		) : (
			<SignUp show={!showModal.loginPage && showModal.show} handleClose={handleClose} />
		))
	);
}
