import { FC } from 'react';

import Cross from 'components/UI/cross/Cross';
import Zero from 'components/UI/zero/Zero';

import useAppSelector from 'hooks/useAppSelector';

const Header: FC = () => {
  const { doesCrossMove } = useAppSelector((state) => state);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[10px]">
        <Cross width={40} height={40} />
        <Zero width={40} height={40} />
      </div>
      <div className="flex items-center gap-[10px] p-[10px] rounded-[8px] text-center bg-[#1f3540]">
        <div>{doesCrossMove ? <Cross width={30} height={30} /> : <Zero width={30} height={30} />}</div>
        <span className="text-[#a7bdc8] font-bold uppercase text-xl">Turn</span>
      </div>
    </div>
  );
};

export default Header;
