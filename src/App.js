import Main from './components/main';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';
import Information from './components/InfoPage';
import PhotoPage from './components/PhotoPage';
function App() {
  return (
    <Routes>
      <Route path="*" element={<Main />} />
      <Route path="/information" element={<Information />} />
      <Route path="/photo" element={<PhotoPage />} />
    </Routes>
  );
}

export default App;
