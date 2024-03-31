import AllPics from './Components/AllPics';
import BtnCount from './Components/BtnCount';
import BtnPlay from './Components/BtnPlay';
import Tokens from './Components/Tokens';
import './app.scss';

function App() {
  return (
    <div className='wrapper'>
      <h1 className='slot__title'>слот-машина</h1>
      <AllPics />
      <Tokens />
      <BtnPlay />
      <BtnCount />
    </div>
  );
}

export default App;
