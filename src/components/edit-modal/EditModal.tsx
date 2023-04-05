import { FC, ChangeEvent, useState } from 'react';

import Modal from 'components/UI/modal/Modal';
import NameInput from 'components/UI/name-input/NameInput';
import Cross from 'components/UI/cross/Cross';
import Zero from 'components/UI/zero/Zero';
import Button from 'components/UI/button/Button';

import useAppDispatch from 'hooks/useAppDispatch';
import { changeFirstPlayerName, changeSecondPlayerName, resetScores, setShowEditModal } from 'store/slices/gameSlice';

const EditModal: FC = () => {
  const dispatch = useAppDispatch();

  const [resetPoints, setResetPoints] = useState<boolean>(false);
  const [firstPlayerName, setFirstPlayerName] = useState<string>('');
  const [secondPlayerName, setSecondPlayerName] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setResetPoints(event.currentTarget.checked);

  const updatePlayersData = () => {
    dispatch(changeFirstPlayerName(firstPlayerName));
    dispatch(changeSecondPlayerName(secondPlayerName));
    dispatch(resetScores(resetPoints));
    dispatch(setShowEditModal(false));
  };

  const closeModal = () => dispatch(setShowEditModal(false));

  return (
    <Modal>
      <h3 className="mb-[30px] text-center text-[#a7bdc8] text-2xl">Edit</h3>
      <button className="absolute top-[20px] right-[20px] cursor-pointer" onClick={closeModal}>
        <svg width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M19 5L5 19M5.00001 5L19 19"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </button>
      <NameInput
        Label={Cross}
        placeholder="Enter name for X"
        onChange={setFirstPlayerName}
        style={{ marginBottom: '15px' }}
      />
      <NameInput
        Label={Zero}
        placeholder="Enter name for O"
        onChange={setSecondPlayerName}
        style={{ marginBottom: '30px' }}
      />
      <div className="flex items-center gap-[10px] mb-[30px]">
        <input
          className="w-[30px] h-[15px] cursor-pointer"
          type="checkbox"
          checked={resetPoints}
          onChange={handleChange}
        />
        <div className="text-[#a7bdc8]">Reset scores</div>
      </div>
      <Button text="Apply" onClick={updatePlayersData} style={{ margin: '0 auto' }} />
    </Modal>
  );
};

export default EditModal;
