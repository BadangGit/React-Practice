import "./App.css";

import Testing from "./testComponent";

function App() {
    const mapTest = [24, 35, 62];
    const MapComponent = mapTest.map((number) => <Testing name={number} />);

    return (
        <>
            <div className="App">
                <Testing name="test" />
                {MapComponent}
            </div>
        </>
    );
}

export default App;

