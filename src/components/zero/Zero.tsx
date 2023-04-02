import { FC } from 'react';

interface ZeroProps {
  width?: number;
  height?: number;
}

const Zero: FC<ZeroProps> = ({ width, height }) => {
  return (
    <>
      <svg
        style={{ width: width ? width : '100%', height: height ? height : '100%' }}
        viewBox="0 0 512 512"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        stroke="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <title>circle-dot-filled</title>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="drop" fill="#f2b237" transform="translate(42.666667, 42.666667)">
              <path
                d="M213.333333,3.55271368e-14 C331.15408,3.55271368e-14 426.666667,95.5125867 426.666667,213.333333 C426.666667,331.15408 331.15408,426.666667 213.333333,426.666667 C95.5125867,426.666667 3.55271368e-14,331.15408 3.55271368e-14,213.333333 C3.55271368e-14,95.5125867 95.5125867,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,106.666667 C154.42296,106.666667 106.666667,154.42296 106.666667,213.333333 C106.666667,272.243707 154.42296,320 213.333333,320 C272.243707,320 320,272.243707 320,213.333333 C320,154.42296 272.243707,106.666667 213.333333,106.666667 Z"
                id="Combined-Shape"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default Zero;
