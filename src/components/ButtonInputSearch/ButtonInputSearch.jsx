import { SearchOutlined } from '@ant-design/icons'
import React from 'react'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
	const {
		size, placeholder, textButon, bordered,
		backgroundColorInput = '#fff',
		backgroundColorButton = 'rgb(13, 92, 182)',
		colorButton = '#fff'
	}
		= props
	return (
		<div style={{ display: 'flex' }}>
			<InputComponent
				size={size}
				placeholder={placeholder}
				style={{ backgroundColor: backgroundColorInput, border: !bordered && 'none' }}
			/>
			<ButtonComponent
				size={size}
				icon={<SearchOutlined color={colorButton} />}
				styleButton={{ backgroundColor: backgroundColorButton, border: !bordered && 'none' }}
				textButon={textButon}
				styleTextButton={{ color: colorButton }}
			/>

		</div>
	)
}

export default ButtonInputSearch