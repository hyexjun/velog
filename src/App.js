import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Detail from './pages/Detail';
import MyVelog from './pages/MyVelog';
import Lists from './pages/Lists';
import Write from './pages/Write';
import Setting from './pages/Setting'
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/myvelog" element={<MyVelog />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/write" element={<Write />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
