import { FC, PropsWithChildren } from 'react';

const Modal: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-[#00000064]">
      <div className="absolute top-1/2 left-1/2 p-[20px] rounded-[8px] bg-[#1a3340] -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
};

export default Modal;
