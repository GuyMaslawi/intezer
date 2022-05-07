import Header from './components/header/Header.js';
import Routes from './routes/index.js';
import { Content } from './App.style.js';

const App = () => {
  return (
    <div>
      <Header />
      <Content>
        <Routes />
      </Content>
    </div>
  );
}

export default App;
