import React, { useState } from 'react'
import { Badge, Button, Col, Popover } from "antd"
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall, WrapperContentPopup } from './style'
// import Search from 'antd/lib/transfer/search';
import {
	UserOutlined,
	CaretDownOutlined,
	ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slices/userSlide'
import Loading from '../../components/LoadingComponent/Loading'


const HeaderComponent = () => {
	const navigate = useNavigate()
	const user = useSelector((state) => state.user)
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)
	const handleNavigateLogin = () => {
		navigate('/sign-in')
	}
	const handleLogout = async () => {
		setLoading(true)
		await UserService.logoutUser()
		dispatch(resetUser())
		setLoading(false)
	}

	const content = (
		<div>
			<WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
			<WrapperContentPopup>Thông tin người dùng</WrapperContentPopup>
		</div>
	);

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
					<Loading isPending={loading}>
						<WrapperHeaderAccount>
							<UserOutlined style={{ fontSize: '30px' }} />
							{user?.name ? (
								<>
									<Popover placement="bottom" content={content}>
										<div style={{ cursor: 'pointer' }}>{user.name}</div>
									</Popover>
								</>
							) : (
								<div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
									<WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
									<div>
										<WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
										<CaretDownOutlined />
									</div>
								</div>
							)}

						</WrapperHeaderAccount>
					</Loading>
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