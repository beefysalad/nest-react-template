import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../components/LandingPage';
import { Message } from '../components/Message';
export const AppRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/messageTest' element={<Message />} />
    </Routes>
  );
};
