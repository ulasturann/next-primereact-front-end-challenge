import React from 'react';
import { Card } from 'primereact/card';
import ProductCardStarIcon from '../assets/icons/tsx/ProductCardStarIcon';
import Image from 'next/image';
interface ICardComponentProps {
  cardImage: any;
  tagString: string;
  cardTitle: string;
  cardBody: string;
  price: number;
}

function CardComponent(props: ICardComponentProps) {
  return (
    <div className="flex flex-column align-items-center bg-white w-full p-3 mt-3 border-round card card-container shadow-1">
      <div className="relative">
        <Image
          src={props.cardImage}
          className="w-full h-full"
          alt={props.cardTitle}
        />
        <div className="absolute left-0 top-0 m-4 p-2 h-2rem w-auto border-round-xl bg-white text-900">
          {props.tagString}
        </div>
      </div>
      <div className="flex flex-column justify-content-between h-9rem w-full">
        <div className="mt-2 flex flex-row justify-content-between w-full">
          <span className=" text-lg text-900">{props.cardTitle}</span>
          <div className="flex flex-row justify-content-center align-items-center">
            <ProductCardStarIcon className=" w-1rem h-1rem mr-2 text-900 text-base" />
            <span>5.0</span>
          </div>
        </div>
        <p
          className="m-0 overflow-y-hidden text-medium text-base text-600"
          style={{ lineHeight: '1.5' }}
        >
          {props.cardBody}
        </p>
        <p
          className="m-0 overflow-y-hidden text-blue-500 text-lg text-medium"
          style={{ lineHeight: '1.5' }}
        >
          {'$' + props.price}
        </p>
      </div>
    </div>
  );
}

export default CardComponent;
