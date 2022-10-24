import logo from './logo.svg';

import './App.css'
import { Header } from './Components/Header'
import { Content } from './Components/Content'
import 'antd/dist/antd.css'

function App() {
	return (
		<div className='page-layout'>
			<Header />
			<Content />
		</div>
	)
}

export default App;
