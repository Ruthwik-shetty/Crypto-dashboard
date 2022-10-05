import { DropDown } from './DropDown'
import { Search } from './Search'

export const TopBar = ({}) => {
	return (
		<div className='top-bar'>
			<DropDown />
			<Search />
		</div>
	)
}
