import { Select } from 'antd'
import React from 'react'
const { Option } = Select
export const DropDown = ({}) => {
	return (
		<div className='drop-down container'>
			<handleChange />{' '}
		</div>
	)
}
const handleChange = (value) => {
	console.log(value) // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

const App = () => (
	<Select
		labelInValue
		defaultValue={{
			value: 'lucy',
			label: 'Lucy (101)',
		}}
		style={{
			width: 80,
		}}
		onChange={handleChange}
	>
		<Option value='jack'>Jack (100)</Option>
		<Option value='lucy'>Lucy (101)</Option>
	</Select>
)

export default App
