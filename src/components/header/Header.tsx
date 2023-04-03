import { FC } from 'react';

import Cross from 'components/cross/Cross';
import Zero from 'components/zero/Zero';
import Button from 'components/button/Button';

import restart from 'assets/restart.svg';

const Header: FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[10px]">
        <Cross width={40} height={40} />
        <Zero width={40} height={40} />
      </div>
      <Button text="Restart" icon={restart} />
    </div>
  );
};

export default Header;
