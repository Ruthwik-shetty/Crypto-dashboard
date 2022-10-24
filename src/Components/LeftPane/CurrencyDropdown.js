import React from 'react'
import { Select } from 'antd'

export const CurrencyDropdown = ({}) => {
	return (
		<div className='drop-down container'>
			<Select style={{ width: '10em' }} defaultValue={'inr'}>
				<Select.Option value='usd'>USD ($)</Select.Option>
				<Select.Option value='inr'>INR (@)</Select.Option>
			</Select>
		</div>
	)
}
