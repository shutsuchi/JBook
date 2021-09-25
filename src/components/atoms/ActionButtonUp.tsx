import { FC } from 'react';
import ActionButton from './ActionButton';

interface ActionButtonUpProps {
  handleClick: () => void;
}

const ActionButtonUp: FC<ActionButtonUpProps> = (props) => {
  const { handleClick } = props;

  return (
    <ActionButton handleClick={handleClick}>
      <span className="icon">
        <i className="fas fa-arrow-up" />
      </span>
    </ActionButton>
  );
};

export default ActionButtonUp;
