import { FC } from 'react';
import ActionButton from './ActionButton';

interface ActionButtonDownProps {
  handleClick: () => void;
}

const ActionButtonDown: FC<ActionButtonDownProps> = (props) => {
  const { handleClick } = props;

  return (
    <ActionButton handleClick={handleClick}>
      <span className="icon">
        <i className="fas fa-arrow-down" />
      </span>
    </ActionButton>
  );
};

export default ActionButtonDown;
