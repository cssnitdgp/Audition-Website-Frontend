import "./App.css";
import LandingPage from "./components/LandingPage/landingPage";

function App() {
	console.log(process.env.REACT_APP_CLIENT_TOKEN);
	return (
		<div className="App">
			<LandingPage />
		</div>
	);
}

export default App;
