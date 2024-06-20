import { Upload } from "antd"
import styled from "styled-components"

export const WrapperHeader = styled.h1`
	color: #000;
	font-size:18px;
	margin: 4px 0;
`

export const WrapperContentProfile = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    width: 600px;
	margin: 0 auto;
	padding: 30px;
	border-radius:20px;
	gap: 30px;
`

export const WrapperLabel = styled.label`
	color: #000;
	font-size: 12px;
	line-height: 30px;
	font-weight: 600;
	width: 60px;
`

export const WrapperInpur = styled.div`
	display: flex;
	align-items: center;
	gap:10px
`
export const WrapperUploadFile = styled(Upload)`
	& .ant-upload-list-item-info{
	display: none
	}
`
