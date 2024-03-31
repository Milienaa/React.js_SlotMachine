import allPics from '../allPics';

export default function PicItem({ picId }) {

  const pic = allPics.find(pic => pic.id === picId);

  return (
    <img src={pic.src} alt={pic.alt} />
  );
}
