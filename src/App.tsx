import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <div className="container">
      <div className="flex flex-col gap-xl">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
