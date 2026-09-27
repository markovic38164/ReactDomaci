import logo from './assets/react.svg';
import './style.css';
function App() {
	let name = 'Stefan';
	let color = 'blue';
	let time = new Date().toLocaleTimeString();
	console.log(time);

	let backgroundColor =
		time >= '06:00:00' && time <= '18:00:00' ? 'lightblue' : 'black';

	let textColor = time >= '06:00:00' && time <= '18:00:00' ? 'black' : 'white';
	return (
		<div
			className="App"
			style={{
				backgroundColor: backgroundColor,
				color: textColor,
				height: '100vh',
				width: '100%',
			}}
		>
			<h1>hello world</h1>
			<div className="paragraph">Zdravo, moje ime je {name}.</div>

			<img src="./favicon.svg" className="App-logo" alt="logo" />
			<br />
			<img src={logo} className="App-logo" alt="logo" />
			<p style={{ color: color }}>Ovo je moj prvi React app.</p>
		</div>
	);
}

export default App;
