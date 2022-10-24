import React from 'react'
import { Search } from './Search'
import { CurrencyDropdown } from './CurrencyDropdown'

export const TopBar = ({}) => {
	return (
		<div className='top-bar'>
			<CurrencyDropdown />
			<Search />
		</div>
	)
}
