import { StarFilled } from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReportText } from './style'
import logo from '../../assets/images/logo_chinhhang.png'

const CardComponent = () => {
	return (
		<WrapperCardStyle
			hoverable
			headStyle={{ with: '200px', height: '200px' }}
			bodyStyle={{ padding: "10px" }}
			cover={< img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
		>
			<WrapperImageStyle src={logo} alt='logo' />
			<StyleNameProduct>Iphone</StyleNameProduct>
			<WrapperReportText>
				<span style={{ marginRight: '4px' }}>
					<span>4.96</span>
					<StarFilled style={{ fontSize: '12px', color: 'rgb(255, 196, 0)' }} />
				</span>
				<span> | Đã bán 1000+</span>
			</WrapperReportText>
			<WrapperPriceText>1.000.000đ
				<WrapperDiscountText>
					-5%
				</WrapperDiscountText>
			</WrapperPriceText>
		</WrapperCardStyle >
	)
}

export default CardComponent