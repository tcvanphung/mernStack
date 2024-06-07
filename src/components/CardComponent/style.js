import { Card } from "antd"
import styled from "styled-components"

export const WrapperCardStyle = styled(Card)`
	with:200px;
	& img{
		height:200px;
		width:200px;
	},
	position: relative;
`

export const WrapperImageStyle = styled.img`
	top:-1px;
	left:-1px;
	border-top-left-radius: 3px;
	position: absolute;
	width: 68px !important;
	height: 14px !important;
`

export const StyleNameProduct = styled.div`
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #27272a;
`
export const WrapperReportText = styled.div`
	font-size: 11px;
	font-weight: 400;
	color: rgb(128, 128, 137);
	align-items:center;
`
export const WrapperPriceText = styled.div`
	color: rgb(255, 66, 78);
	font-size: 16px;
	font-weight: 500;
	margin: 6px 0;
`
export const WrapperDiscountText = styled.span`
	color: rgb(255, 66, 78);
	font-size: 12px;
	font-weight: 500;
`