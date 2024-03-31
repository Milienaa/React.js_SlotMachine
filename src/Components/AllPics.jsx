import { useSelector } from 'react-redux';
import PicItem from './PicItem';

export default function AllPics() {
  const pics = useSelector(state => state.pics);

  return (
    <div className='slot__pics'>
      {pics.map((pic, index) => <PicItem key={index} picId={pic} />)}
    </div>
  )
}
