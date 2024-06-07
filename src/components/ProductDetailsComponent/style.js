import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
	height: 64px;
	weight: 64px	
`
export const WrapperStyleColImage = styled(Col)`
	flex-basis: unset;
	display: flex;
`
export const WrapperStyleNameProduct = styled.h1`
	margin: 0px;
	color: rgb(39, 39, 42);
	font-size: 20px;
	font-weight: 500;
	line-height: 150%;
	word-break: break-word;
	white-space: break-spaces;
`

export const WrapperStyleTextSell = styled.span`
	font-size: 14px;
	line-height: 24px;
	color: rgb(120, 120, 120);
`

export const WrapperPriceProduct = styled.div`
	background:  rgb(250, 250, 250);
	border-radius:4px
`

export const WrapperPriceTextProduct = styled.h1`
	font-size: 24px;
	font-weight: 600;
	line-height: 150%;
	color: rgb(255, 66, 78);
	padding: 10px;
`
export const WrapperAddressProduct = styled.div`
	span.address{
		color: rgb(39, 39, 42);
		width: 100%;
		font-weight:600
	}
	span.change-address{
		color: #fce879;
	}
`

export const WrapperQualityProduct = styled.div`
	display: flex;
	gap: 4px;
	align-items: center;
	border: 1px solid #ccc;
	width: 150px;
	border-radius: 4px;

`

export const WrapperInputNumber = styled(InputNumber)`
	&.ant-input-number.ant-input-number-sm{
		width: 60px ;
		border-top: none;
		border-bottom: none;
		input {
			text-align: center;
		}
		.ant-input-number-handler-wrap{
			display: none;
		}
	}
`
