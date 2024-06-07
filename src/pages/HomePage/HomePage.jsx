import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'

const HomePage = () => {
	const arr = ['TV', 'Tu lanh', 'Lap top']
	return (
		<div style={{ padding: '0 120px', background: '#f5f5fa', height: "1000px" }}>
			<WrapperTypeProduct>

				{arr.map((item) => {
					return (
						<TypeProduct name={item} key={item} />
					)
				})}
			</WrapperTypeProduct>
			<SliderComponent arrImages={[slider1, slider2, slider3]} />
			<WrapperProducts>
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />


			</WrapperProducts>
			<WrapperButtonMore textButon="Xem thêm" type="outline" styleButton={{
				border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
				width: '240px', height: '38px', borderRadius: '4px'
			}}
				styleTextButton={{ fontWeight: 500 }}
			/>

			{/* <NavBarComponent></NavBarComponent> */}
		</div>
	)
}

export default HomePage