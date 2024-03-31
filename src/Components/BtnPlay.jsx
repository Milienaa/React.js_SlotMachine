import { useDispatch, useSelector } from 'react-redux';
import { decreaseTokens, setPics, setWin, addWinTokens } from '../Reducer';

export default function BtnPlay() {
  const dispatch = useDispatch();
  const tokens = useSelector(state => state.tokens);

  const handlePlay = () => {
    if (tokens >= 20) {
      const pics = Array.from({ length: 4 }, () => Math.floor(Math.random() * 4) + 1);
      dispatch(setPics(pics));
      dispatch(decreaseTokens());
        
      if (pics.every(pic => pic === pics[0])) {
        dispatch(setWin(true));
        dispatch(addWinTokens());
      }

    }
  };

  return (
    <button className={`slot__play ${tokens < 20 ? 'slot__play--disabled' : ''}`} onClick={handlePlay}>
      грати
    </button>
  )
}
