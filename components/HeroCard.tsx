import React from 'react';
import product1 from '../assets/images/product1sm.png';
import product2 from '../assets/images/product2sm.png';
import product3 from '../assets/images/product3sm.png';
import product4 from '../assets/images/product4sm.png';
import product5 from '../assets/images/product5sm.png';
import CardContent from './HeroCardContent';
import StarIconSVGActive from '../assets/icons/tsx/StarIconActive';
import StarIconSVGDeactive from '../assets/icons/tsx/StarIconDeactive';

interface IStarCreator {
  value: number
}

const StarCreator =(props: IStarCreator) => {
  const NUMBER_OF_STARS = 5;
  let stars: React.ReactElement[] = [];
  let starProps: React.SVGAttributes<SVGSVGElement> = {
    className: "mr-1"
  }
  for (let i = 0; i < NUMBER_OF_STARS; i++) {
    if(props.value !<= i){
      stars.push(<StarIconSVGDeactive key={i} {...starProps}/>)
    }
    else {
      stars.push(<StarIconSVGActive key={i + "de"} {...starProps}/>)
    }
  }


  return(
    <>{stars}</>
  )
}

const products = [
  {
    id: 1,
    productImage: product1,
    productName: 'Dui id ornare arcu',
    productBrand: 'Zara',
    productPriceTag: [
      {
        tagName: '$12.34',
        tagColor: 'text-green-600',
        tagContainerColor: 'bg-green-100',
      },
    ],
    numberOfActiveStarts: [StarCreator({value: 4})],
    totalValues: {
      price: '12345.00',
      viewersBaseOfK: '123',
    },
  },
  {
    id: 2,
    productImage: product2,
    productName: 'Nulla pellentesque',
    productBrand: 'H&M',
    productPriceTag: [
      {
        tagName: '$12.34',
        tagColor: 'text-green-600',
        tagContainerColor: 'bg-green-100',
      },
    ],
    numberOfActiveStarts: [StarCreator({value: 5})],
    totalValues: {
      price: '12345.00',
      viewersBaseOfK: '123',
    },
  },
  {
    id: 3,
    productImage: product3,
    productName: 'Semper eget',
    productBrand: 'Zara',
    productPriceTag: [
      {
        tagName: '$12.34',
        tagColor: 'text-green-600',
        tagContainerColor: 'bg-green-100',
      },
    ],
    numberOfActiveStarts: [StarCreator({value: 3})],
    totalValues: {
      price: '12345.00',
      viewersBaseOfK: '123',
    },
  },
  {
    id: 4,
    productImage: product4,
    productName: 'Vulputate eu',
    productBrand: 'Nike',
    productPriceTag: [
      {
        tagName: 'Sale',
        tagColor: 'text-purple-600',
        tagContainerColor: 'bg-purple-100',
      },
      {
        tagName: '$12.34',
        tagColor: 'text-green-600',
        tagContainerColor: 'bg-green-100',
      },
    ],
    numberOfActiveStarts: [StarCreator({value: 2})],
    totalValues: {
      price: '12345.00',
      viewersBaseOfK: '123',
    },
  },
  {
    id: 5,
    productImage: product5,
    productName: 'Dui id ornare arcu',
    productBrand: 'Zara',
    productPriceTag: [
      {
        tagName: '$12.34',
        tagColor: 'text-green-600',
        tagContainerColor: 'bg-green-100',
      },
    ],
    numberOfActiveStarts: [StarCreator({value: 4})],
    totalValues: {
      price: '12345.00',
      viewersBaseOfK: '123',
    },
  },
];

function HeroCard() {
  return (
    <div className="flex w-full flex-column flex-wrap card-container shadow-1">
      <div className="flex flex-column align-items-between p-3 w-full h-full justify-content-center font-bold bg-white border-round">
        <div className="flex flex-wrap align-items-between justify-content-between mt-1 mb-4">
          <span className="text-lg text-900">Top Sales</span>
          <i className="pi pi-ellipsis-v mr-1"></i>
        </div>
        {products.map((product) => {
          return (
            <CardContent
              key={product.id}
              {...product}
              numberOfActiveStars={product.numberOfActiveStarts}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HeroCard;
