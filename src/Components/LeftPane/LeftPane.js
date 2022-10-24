import { Chart } from './Chart'
import { CoinExchange } from './CoinExchange'
import { Portfolio } from './Portfolio'
import { TopBar } from './TopBar'

export const LeftPane = ({}) => {
	return (
		<div>
			<TopBar />
			<Chart />
			<div className='bottom-section'>
				<Portfolio />
				<CoinExchange />
			</div>
		</div>
	)
}
