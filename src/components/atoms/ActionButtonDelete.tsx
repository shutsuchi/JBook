import { FC } from 'react';
import ActionButton from './ActionButton';

interface ActionButtonDeleteProps {
  handleClick: () => void;
}

const ActionButtonDelete: FC<ActionButtonDeleteProps> = (props) => {
  const { handleClick } = props;

  return (
    <ActionButton handleClick={handleClick}>
      <span className="icon">
        <i className="fas fa-times" />
      </span>
    </ActionButton>
  );
};

export default ActionButtonDelete;
