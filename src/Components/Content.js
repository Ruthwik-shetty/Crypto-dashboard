import { LeftPane } from './LeftPane/LeftPane'
import { RightPane } from './RightPane'

export const Content = ({}) => {
	return (
		<div className='content'>
			<LeftPane />
			<RightPane />
		</div>
	)
}
