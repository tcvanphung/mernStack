import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({
	size, styleButton, styleTextButton, textButon, ...rest
}) => {
	return (
		<Button
			size={size}
			// icon={<SearchOutlined color={colorButton} />}
			style={styleButton}
			{...rest}
		><span
			style={styleTextButton}
		>{textButon}</span></Button>
	)
}

export default ButtonComponent