import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import TForm from './components/Form/Form';

const tg = window.Telegram.WebApp;

function App() {

  const {tg, onToggleButton} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route index element={ <ProductList /> } />
        <Route path='/form' element={ <TForm />} />

      </Routes>
      
    </div>
  );
}

export default App;
