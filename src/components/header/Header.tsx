import { FC } from 'react';

import Cross from 'components/cross/Cross';
import Zero from 'components/zero/Zero';

const Header: FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[10px]">
        <Cross width={40} height={40} />
        <Zero width={40} height={40} />
      </div>
      <button className="p-[15px] flex items-center gap-[10px] rounded-[8px] shadow-shadow-bottom shadow-[#708995] bg-[#a7bdc8]">
        <span className="font-bold uppercase text-[#212d33]">Restart</span>
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12 2.99988C16.9706 2.99988 21 7.02931 21 11.9999C21 16.9704 16.9706 20.9999 12 20.9999C7.02944 20.9999 3 16.9704 3 11.9999C3 9.17261 4.30367 6.64983 6.34267 4.99988"
              stroke="#212d33"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M3 4.49988H7V8.49988"
              stroke="#212d33"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Header;
