import { Reset } from 'styled-reset';
import './App.css';
import NewsList from './components/board/NewsList';
import Header from './common/layout/Header';
import Footer from './common/layout/Footer';

function App() {
  return (
    <div className='content-wrapper'>
      <Reset />
      <Header />
      <NewsList />
      <Footer />
    </div>
  );
}

export default App;
