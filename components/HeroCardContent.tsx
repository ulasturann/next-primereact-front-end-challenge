import React, { Fragment, useEffect } from 'react';
import StarIconSVGActive from '../assets/icons/tsx/StarIconActive';
import StarIconSVGDeactive from '../assets/icons/tsx/StarIconDeactive';
import Image from 'next/image';
interface ICardContentProps {
  productImage: any;
  productName: string;
  productBrand: string;
  productPriceTag: IProductTagsProps[];
  totalValues: ITotalValuesProps;
  numberOfActiveStars: any;
}

interface IProductTagsProps {
  tagName: string;
  tagContainerColor: string;
  tagColor: string;
}

interface ITotalValuesProps {
  price: string;
  viewersBaseOfK: string;
}

function CardContent(props: ICardContentProps) {
  return (
    <div className="flex flex-row justify-content-between align-items-center mb-3">
      <div className="w-full flex gap-3">
        <Image
          style={{ objectFit: 'cover' }}
          src={props.productImage}
          className="border-round lg:w-5rem lg:h-5rem bg-contain lg:bg-contain h-10rem w-5rem"
          alt=""
        />
        <div className="flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between lg:w-full gap-4">
          <div className="flex flex-column justify-content-between gap-2">
            <span className="text-lg text-900">{props.productName}</span>
            <div className="flex flex-row flex-wrap align-items-center">
              <span className="text-base text-600 mr-2">
                {props.productBrand}
              </span>
              {props.productPriceTag.map((productTag) => {
                return (
                  <span
                    key={productTag.tagName}
                    className={
                      'text-sm px-1 py-2 border-round-md mr-1' +
                      ' ' +
                      productTag.tagContainerColor +
                      ' ' +
                      productTag.tagColor
                    }
                  >
                    {productTag.tagName}
                  </span>
                );
              })}
            </div>
            <div className="flex flex-row flex-wrap align-items-center">
            {props.numberOfActiveStars}
            </div>
          </div>

          <div className="flex flex-column justify-content-center lg:align-items-end gap-2">
            <span className="text-lg text-900 mb-1">
              {'$' + props.totalValues.price}
            </span>
            <span className="text-600" style={{ fontSize: '.70rem' }}>
              {props.totalValues.viewersBaseOfK + 'K Reviewers'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContent;
