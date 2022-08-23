import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={11}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.659 3.846a.432.432 0 0 0-.35-.297l-3.16-.461L5.73.222a.455.455 0 0 0-.78 0L3.532 3.088l-3.16.46a.431.431 0 0 0-.35.298.438.438 0 0 0 .105.45l2.297 2.229-.542 3.151a.444.444 0 0 0 .175.432.437.437 0 0 0 .46.03l2.823-1.489 2.828 1.489a.426.426 0 0 0 .204.052.46.46 0 0 0 .256-.082.444.444 0 0 0 .175-.432l-.548-3.151 2.292-2.23a.438.438 0 0 0 .11-.449Z"
      fill="#FBC02D"
    />
  </svg>
);

export default SvgComponent;
