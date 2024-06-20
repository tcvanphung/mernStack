import React, { useEffect, useState } from 'react'
import { WrapperContentProfile, WrapperHeader, WrapperInpur, WrapperLabel, WrapperUploadFile } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { useDispatch, useSelector } from 'react-redux'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'
import * as message from '../../components/Message/Message'
import { updateUser } from '../../redux/slices/userSlide'
import { Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { getBase64 } from '../../utils'



const ProfilePage = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user)

	const [name, setName] = useState(user.name)
	const [email, setEmail] = useState(user.email)
	const [phone, setPhone] = useState(user.phone)
	const [address, setAddress] = useState(user.address)
	const [avatar, setAvatar] = useState(user.avatar)


	const mutation = useMutationHooks(
		(data) => {
			const { id, ...rests } = data
			UserService.updateUser(id, rests)
		}
	)
	const { isPending, isSuccess, isError } = mutation

	const handleGetDetailsUser = async (id, token) => {
		const res = await UserService.getDetailsUser(id, token)
		dispatch(updateUser({ ...res?.data, access_token: token }))
	}

	useEffect(() => {
		setName(user?.name)
		setEmail(user?.email)
		setPhone(user?.phone)
		setAddress(user?.address)
		setAvatar(user?.avatar)
	}, [user])

	useEffect(() => {
		if (isSuccess) {
			message.success()
			handleGetDetailsUser(user?.id, user?.access_token)
		} else if (isError) {
			message.error()
		}
	}, [isSuccess, isError, user],)



	const handleOnchangeName = (value) => {
		setName(value)
	}
	const handleOnchangeEmail = (value) => {
		setEmail(value)
	}
	const handleOnchangePhone = (value) => {
		setPhone(value)
	}
	const handleOnchangeAddress = (value) => {
		setAddress(value)
	}
	const handleOnchangeAvatar = async ({ fileList }) => {
		const file = fileList[0]
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}
		setAvatar(file.preview)
	}

	const handleUpdate = () => {
		mutation.mutate({ id: user?.id, name, email, phone, address, avatar })
	}


	return (
		<div style={{ width: '1270px', margin: '0 auto', height: '500px' }}>
			<WrapperHeader>
				Thông tin người dùng
			</WrapperHeader>
			<Loading isPending={isPending}>
				<WrapperContentProfile>
					<WrapperInpur>
						<WrapperLabel htmlFor='name'>Name</WrapperLabel>
						<InputForm style={{ width: '300px' }} id="name" value={name} onChange={handleOnchangeName} />
						<ButtonComponent
							onClick={handleUpdate}
							size={40}
							styleButton={{
								height: '30px',
								width: 'fit-content',
								border: '1px solid rgb(26, 148, 255)',
								borderRadius: '4px',
							}}
							textButon={'Cập nhật'}
							styleTextButton={{ color: 'rgb(26, 148, 255)' }}
						/>
					</WrapperInpur>
					<WrapperInpur>
						<WrapperLabel htmlFor='email'>Email</WrapperLabel>
						<InputForm style={{ width: '300px' }} id="email" value={email} onChange={handleOnchangeEmail} />
						<ButtonComponent
							onClick={handleUpdate}
							size={40}
							styleButton={{
								height: '30px',
								width: 'fit-content',
								border: '1px solid rgb(26, 148, 255)',
								borderRadius: '4px',
							}}
							textButon={'Cập nhật'}
							styleTextButton={{ color: 'rgb(26, 148, 255)' }}
						/>
					</WrapperInpur>
					<WrapperInpur>
						<WrapperLabel htmlFor='phone'>Phone</WrapperLabel>
						<InputForm style={{ width: '300px' }} id="phone" value={phone} onChange={handleOnchangePhone} />
						<ButtonComponent
							onClick={handleUpdate}
							size={40}
							styleButton={{
								height: '30px',
								width: 'fit-content',
								border: '1px solid rgb(26, 148, 255)',
								borderRadius: '4px',
							}}
							textButon={'Cập nhật'}
							styleTextButton={{ color: 'rgb(26, 148, 255)' }}
						/>
					</WrapperInpur>
					<WrapperInpur>
						<WrapperLabel htmlFor='address'>address</WrapperLabel>
						<InputForm style={{ width: '300px' }} id="address" value={address} onChange={handleOnchangeAddress} />
						<ButtonComponent
							onClick={handleUpdate}
							size={40}
							styleButton={{
								height: '30px',
								width: 'fit-content',
								border: '1px solid rgb(26, 148, 255)',
								borderRadius: '4px',
							}}
							textButon={'Cập nhật'}
							styleTextButton={{ color: 'rgb(26, 148, 255)' }}
						/>
					</WrapperInpur>
					<WrapperInpur>
						<WrapperLabel htmlFor='avatar'>Avatar</WrapperLabel>
						<WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
							<Button icon={<UploadOutlined />}>Upload</Button>
						</WrapperUploadFile>
						{avatar && <img src={avatar} style={{
							height: "60px",
							width: "60px",
							borderRadius: "50%",
							objectFit: "cover"
						}} alt='avatar'></img>}
						{/* <InputForm style={{ width: '300px' }} id="avatar" value={avatar} onChange={handleOnchangeAvatar} /> */}
						<ButtonComponent
							onClick={handleUpdate}
							size={40}
							styleButton={{
								height: '30px',
								width: 'fit-content',
								border: '1px solid rgb(26, 148, 255)',
								borderRadius: '4px',
							}}
							textButon={'Cập nhật'}
							styleTextButton={{ color: 'rgb(26, 148, 255)' }}
						/>
					</WrapperInpur>

				</WrapperContentProfile>
			</Loading>

		</div>
	)
}

export default ProfilePage