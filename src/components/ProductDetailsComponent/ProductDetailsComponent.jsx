import { Col, Image, InputNumber, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/test.jpg'
import imageProductSmall from '../../assets/images/imgsmall.jpg'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { MinusOutlined, PlusOutlined, StarFilled, StarOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'



const ProductDetailsComponent = () => {
	const onChange = () => { }
	var num = 3;

	function handleClick() {
		num = num++
	}
	return (
		<div>
			<Row style={{ padding: '16px', background: '#fff' }}>
				<Col span={10}>
					<Image src={imageProduct} alt='image product' preview={false}></Image>
					<Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
						<WrapperStyleColImage span={4}>
							<WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview={false} />
						</WrapperStyleColImage>

						<WrapperStyleColImage span={4}>
							<WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview={false} />
						</WrapperStyleColImage>

						<WrapperStyleColImage span={4}>
							<WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview={false} />
						</WrapperStyleColImage>

						<WrapperStyleColImage span={4}>
							<WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview={false} />
						</WrapperStyleColImage>

						<WrapperStyleColImage span={4}>
							<WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview={false} />
						</WrapperStyleColImage>

						<WrapperStyleColImage span={4}>
							<WrapperStyleImageSmall src={imageProductSmall} alt='image product' preview={false} />
						</WrapperStyleColImage>
					</Row>
				</Col>
				<Col span={12}>
					<WrapperStyleNameProduct>
						Nồi áp suất Elmich PCE-1805 dung tích 2.5L - Hàng Chính Hãng
					</WrapperStyleNameProduct>
					<div>
						<StarFilled style={{ fontSize: '12px', color: 'rgb(255, 196, 0)' }} />
						<StarFilled style={{ fontSize: '12px', color: 'rgb(255, 196, 0)' }} />
						<StarFilled style={{ fontSize: '12px', color: 'rgb(255, 196, 0)' }} />
						<WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
					</div>
					<WrapperPriceProduct>
						<WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
					</WrapperPriceProduct>

					<WrapperAddressProduct>
						<span>Giao đến </span>
						<span className='address'>TP. Tam Kỳ, P. Tân Thạnh, Quảng Nam</span>-
						<span className='change-address'>Đổi địa chỉ </span>

					</WrapperAddressProduct>
					<div>
						<div>số lượng</div>
						<WrapperQualityProduct style={{ margin: '10px 0' }}>
							<button style={{ border: 'none', background: 'transparent' }}  >
								<MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
							</button>

							<WrapperInputNumber defaultValue={num} size="small" onChange={onChange} />

							<button style={{ border: 'none', background: 'transparent' }}>
								<PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
							</button>

						</WrapperQualityProduct>
					</div>
					<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
						<ButtonComponent
							bordered={false}
							size={40}
							styleButton={{
								background: 'rgb(255, 66, 78)',
								height: '48px',
								width: '220px',
								border: 'none',
								borderRadius: '4px'
							}}
							textButon={'Chọn mua'}
							styleTextButton={{ color: '#fff' }}
						/>
						<ButtonComponent
							bordered={false}
							size={40}
							styleButton={{
								border: '1px solid rgb(10, 104, 255)',
								height: '48px',
								width: '220px',
								border: '1px solid rgb(10, 104, 255)',
								borderRadius: '4px'
							}}
							textButon={'Mua trước trả sau'}
							styleTextButton={{ color: 'rgb(10, 104, 255)' }}
						/>
					</div>
				</Col>
			</Row>
		</div >
	)
}

export default ProductDetailsComponent