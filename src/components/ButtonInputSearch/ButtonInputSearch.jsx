import { SearchOutlined } from '@ant-design/icons'
import { Button } from 'antd'
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
				style={{ backgroundColor: backgroundColorInput, border: !bordered && 'none', 'border-radius': 'unset' }}
			/>
			<ButtonComponent
				size={size}
				icon={<SearchOutlined color={colorButton} />}
				styleButton={{ backgroundColor: backgroundColorButton, border: !bordered && 'none', 'border-radius': 'unset' }}
				textButon={textButon}
				styleTextButton={{ color: colorButton }}
			/>

		</div>
	)
}

export default ButtonInputSearch