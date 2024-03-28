import ExploreAfricaCard from './ExploreAfricaCard';
import Taraba  from '../../assets/nigeria/taraba.jpg';
import Kwara  from '../../assets/nigeria/kwara.jpg';
import Yobe  from '../../assets/nigeria/yobe.jpg';
import Abeokuta  from '../../assets/nigeria/abeokuta.jpg';

function ExploreNigeria() {
  const exploreNigeriaData = [
    {
      image: Yobe,
      state: 'Yobe State',
      location: 'Sand Dunes',
      description: 'Dunes in the heart of Yobe, tour the beautiful place', 
    },
    {
      image: Kwara,
      state: 'Kwara state',
      location: 'culture centre',
      description: 'Peaceful and beautiful with amazing sights',
    },
    {
      image: Abeokuta,
      state: 'Abeokuta State',
      location: 'Train station',
      description: 'lorem ipsum ipsum ipsum', 
    },
  ];
  
  return (
    <div className="py-10 bg-gray-50">
      <div className="container">
        <h1 className="font-bold py-2 pl-2 my-8 text-3xl border-l-8 border-primary/70" data-aos="fade-up">
          Explore Nigeria
        </h1>
        <p className="text-lg mb-8">Explore some of the most breathtaking destinations across Nigeria.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {exploreNigeriaData.map((item, index) => (
            <ExploreAfricaCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExploreNigeria