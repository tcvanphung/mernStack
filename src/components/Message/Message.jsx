import { message } from 'antd';

const success = (mes = 'Success') => {
	message.success(mes)
}
const error = (mes) => {
	message.error(mes)
}
const warning = (mes) => {
	message.warning(mes)
}
export { success, error, warning }
