import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.995 5.767a.648.648 0 0 0-.525-.446l-4.743-.692L8.601.333a.683.683 0 0 0-1.173 0L5.302 4.629l-4.743.692a.647.647 0 0 0-.525.446.656.656 0 0 0 .158.674l3.447 3.342-.813 4.725a.665.665 0 0 0 .262.648.655.655 0 0 0 .691.043l4.235-2.231 4.244 2.231c.094.052.2.079.307.079a.69.69 0 0 0 .385-.123.664.664 0 0 0 .262-.647l-.822-4.725 3.438-3.342a.657.657 0 0 0 .167-.674Z"
      fill="#FBC02D"
    />
  </svg>
);

export default SvgComponent;
