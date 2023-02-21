import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Email not valid (missing @) 😥")
		}
	}

	return (
		<footer className='phm-footer'>
			<div className='phm-footer-elem'>
				React house plant market🌿🌱🌵
			</div>
			<div className='phm-footer-elem'>Let us your email :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer
