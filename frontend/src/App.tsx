import { axiosInstance } from './axios';

function App() {
    return (
        <div className="App">
            <button onClick={() => axiosInstance.get('')} type="button">
                testApi
            </button>
        </div>
    );
}

export default App;
