import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import MyPage from './pages/MyPage';
import Write from './pages/Write';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
