import React from 'react';
import HeroCard from './HeroCard';
import CardComponent from './CardComponent';
import cardImage1 from '../assets/images/photo1md.png';
import cardImage2 from '../assets/images/photo2md.png';
import cardImage3 from '../assets/images/photo3md.png';

const cards = [
  {
    cardImage: cardImage1,
    tagString: 'Winter',
    cardTitle: 'Natoque penatibu',
    cardBody:
      'Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse.',
    price: 123,
  },
  {
    cardImage: cardImage2,
    tagString: 'Accessories',
    cardTitle: 'Ipsum a arcu',
    cardBody: 'Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.',
    price: 123,
  },
  {
    cardImage: cardImage3,
    tagString: 'Bags',
    cardTitle: 'Vulputate eu',
    cardBody:
      'Justo laoreet sit amet cursus. Semper viverra nam libero justo laoreet.',
    price: 123,
  },
];

function Content() {
  return (
    <div className="col-12 p-4 flex flex-column">
      <span className="text-3xl text-900 font-medium mb-1">
        Popular Products
      </span>
      <span className="text-2xl text-500 font-light mb-4">
        Selected Exclusively
      </span>
      <HeroCard />
      <div className="grid justify-content-between">
        {cards.map((card) => {
          return (
            <div key={card.cardTitle} className="col-12 md:col-6 lg:col-4">
              <CardComponent {...card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
