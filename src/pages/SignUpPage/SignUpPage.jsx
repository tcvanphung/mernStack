import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import imgLogo from '../../assets/images/logo_signin.png'

const SignUpPage = () => {
	return (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>

			<div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
				<WrapperContainerLeft>
					<h1>Xin chào,</h1>
					<p>Đăng nhập hoặc Tạo tài khoản</p>
					<InputForm placeholder="abc@gmmail.com" />
					<InputForm placeholder="password" />
					<InputForm placeholder="confirm password" />
					<ButtonComponent
						bordered={false}
						size={40}
						styleButton={{
							background: 'rgb(255, 66, 78)',
							height: '48px',
							width: '220px',
							border: 'none',
							borderRadius: '4px',
							margin: '30px 0px 10px',
						}}
						textButon={'Đăng kí'}
						styleTextButton={{ color: '#fff' }}
					/>
					<p >Bạn đã có tài khoản?<WrapperTextLight>Đăng nhập</WrapperTextLight></p>

				</WrapperContainerLeft >
				<WrapperContainerRight>
					<Image src={imgLogo} preview={false} alt='image-logo' height={203} width={203}></Image>
					<h4>Mua sắm tại Tiki</h4>
					<span>Siêu ưu đãi mỗi ngày</span>
				</WrapperContainerRight>
			</div>
		</div>
	)
}

export default SignUpPage