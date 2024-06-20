import { StarFilled } from '@ant-design/icons'
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReportText } from './style'
import logo from '../../assets/images/logo_chinhhang.png'

const CardComponent = (props) => {
	const { name, image, type, price, countInStock, rating, description, discount, selled } = props
	return (
		<WrapperCardStyle
			hoverable
			headStyle={{ with: '200px', height: '200px' }}
			bodyStyle={{ padding: "10px" }}
			cover={< img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
		>
			<WrapperImageStyle src={logo} alt='logo' />
			<StyleNameProduct>{name}</StyleNameProduct>
			<WrapperReportText>
				<span style={{ marginRight: '4px' }}>
					<span>{rating}</span>
					<StarFilled style={{ fontSize: '12px', color: 'rgb(255, 196, 0)' }} />
				</span>
				<span> | Đã bán {selled || 1000}+</span>
			</WrapperReportText>
			<WrapperPriceText>
				<span style={{ marginRight: '8px' }}>{price}đ</span>
				<WrapperDiscountText>
					{discount || 5}%
				</WrapperDiscountText>
			</WrapperPriceText>
		</WrapperCardStyle >
	)
}

export default CardComponent