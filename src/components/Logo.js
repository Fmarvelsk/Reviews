import React from 'react';
import '../styles/logo.css'

export default function Logo() {
	return (
		<div className="c-logo">
			<div className="c-logo-image"></div>
			<div className="c-logo-container">
				<div className="c-logo-top">
					Consumer<span>R</span>
				</div>
				<div className="c-logo-bottom">reviews you can trust</div>
			</div>
		</div>
	);
}
