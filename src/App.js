import Main from './components/main';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';
import Information from './components/InfoPage';
import Photo from './components/PhotoPage';
function App() {
  return (
    <Routes>
      <Route path="*" element={<Main />} />
      <Route path="/information" element={<Information />} />
      <Route path="/photo" element={<Photo />} />
    </Routes>
  );
}

export default App;
