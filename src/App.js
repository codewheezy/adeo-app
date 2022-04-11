// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Welcome from './screens/wecome';
import Quiz from './screens/quiz';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Welcome />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
