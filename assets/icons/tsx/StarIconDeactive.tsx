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
      d="M10.663 3.845a.431.431 0 0 0-.35-.298l-3.162-.46L5.734.221a.455.455 0 0 0-.782 0L3.535 3.086l-3.162.461a.432.432 0 0 0-.35.298.438.438 0 0 0 .105.449l2.298 2.228-.542 3.15a.443.443 0 0 0 .175.432.437.437 0 0 0 .46.029l2.824-1.488 2.83 1.488a.426.426 0 0 0 .203.052.461.461 0 0 0 .257-.081.443.443 0 0 0 .175-.432l-.548-3.15 2.292-2.228a.438.438 0 0 0 .111-.45Z"
      fill="#BDBDBD"
    />
  </svg>
);

export default SvgComponent;
