import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({
	size, styleButton, styleTextButton, textButon, disabled, ...rest
}) => {
	return (
		<Button
			style={{
				...styleButton,
				background: disabled ? '#ccc' : styleButton.background
			}}
			size={size}
			{...rest}
		><span
			style={styleTextButton}
		>{textButon}</span></Button>
	)
}

export default ButtonComponent