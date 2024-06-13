import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import imgLogo from '../../assets/images/logo_signin.png'
import { useNavigate } from 'react-router-dom'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'
import * as message from '../../components/Message/Message'

const SignUpPage = () => {
	const mutation = useMutationHooks(
		data => UserService.signupUser(data)
	)
	const { data, isPending, isSuccess, isError } = mutation

	useEffect(() => {
		if (isSuccess) {
			message.success()
			handleNavigateSignIn()
		} else if (isError) {
			message.error()
		}
	}, [isSuccess, isError])


	const [isShowPassword, setIsShowPassword] = useState(false)
	const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, serConfirmPassword] = useState('')


	const handleOnchangeEmail = (value) => {
		setEmail(value)
	}

	const handleOnchangePassword = (value) => {
		setPassword(value)
	}

	const handleOnchangeConfirmPassword = (value) => {
		serConfirmPassword(value)
	}


	const navigate = useNavigate()
	const handleNavigateSignIn = () => {
		navigate('/sign-in')
	}

	const handleSignUp = async () => {
		await mutation.mutate({ email, password, confirmPassword })
	}

	return (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>

			<div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
				<WrapperContainerLeft>
					<h1>Xin chào,</h1>
					<p>Đăng nhập hoặc Tạo tài khoản</p>
					<InputForm placeholder="abc@gmmail.com" value={email} onChange={handleOnchangeEmail} />
					<div style={{ position: 'relative' }}>
						<span
							onClick={() => setIsShowPassword(!isShowPassword)}
							style={{
								zIndex: 10,
								position: 'absolute',
								top: '10px',
								right: '8px'
							}}>{
								isShowPassword ? (
									<EyeFilled />
								) : (
									<EyeInvisibleFilled />
								)
							}

						</span>
						<InputForm placeholder="password" type={isShowPassword ? "text" : "password"} value={password} onChange={handleOnchangePassword} />
					</div>
					<div style={{ position: 'relative' }}>
						<span
							onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
							style={{
								zIndex: 10,
								position: 'absolute',
								top: '10px',
								right: '8px'
							}}>{
								isShowPassword ? (
									<EyeFilled />
								) : (
									<EyeInvisibleFilled />
								)
							}

						</span>
						<InputForm placeholder="confirm password" type={isShowConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={handleOnchangeConfirmPassword} />
					</div>
					<Loading isPending={isPending}>
						<ButtonComponent
							disabled={!email.length || !password.length || !confirmPassword.length}
							onClick={handleSignUp}
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
					</Loading>
					{data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}

					<p >Bạn đã có tài khoản?<WrapperTextLight onClick={handleNavigateSignIn}>Đăng nhập</WrapperTextLight></p>

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