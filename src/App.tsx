import './App.css';
import { useToggle } from './hooks/useToggle2';

export function App() {
	const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);
	//const [value, toggle] = useToggle(['light', 'dark']);
	//const [value, toggle] = useToggle();

	return (
		<div>
			<div>Current value: {value}</div>
			<button onClick={() => toggle()}>Toggle</button>
			<button onClick={() => toggle('darkRed')}>Set to darkRed</button>
		</div>
	);
}
