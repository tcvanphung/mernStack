import { Spin } from 'antd';
import React from 'react';

const Loading = ({ children, isPending, delay_ = 1 }) => (
	<Spin spinning={isPending} delay={delay_}>
		{children}
	</Spin>
);
export default Loading;
