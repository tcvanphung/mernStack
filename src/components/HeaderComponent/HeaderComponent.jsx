import React from 'react'
import { Badge, Col } from "antd"
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from './style'
// import Search from 'antd/lib/transfer/search';
import {
	UserOutlined,
	CaretDownOutlined,
	ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
	return (
		<div>
			<WrapperHeader gutter={16}>
				<Col span={6}>
					<WrapperTextHeader>LAPTRINHTHATDE</WrapperTextHeader>
				</Col>
				<Col span={12}>
					<ButtonInputSearch
						size="large"
						placeholder="input search text"
						textButon="tìm kiếm"
					/>
				</Col>
				<Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
					<WrapperHeaderAccount>
						<UserOutlined style={{ fontSize: '30px' }} />
						<div>
							<WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
							<div>
								<WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
								<CaretDownOutlined />
							</div>
						</div>
					</WrapperHeaderAccount>
					<div>
						<Badge count={4} size='small' />
						<ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
						<WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
					</div>
				</Col>
			</WrapperHeader>
		</div >
	)
}

export default HeaderComponent