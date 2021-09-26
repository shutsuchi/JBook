import { FC } from 'react';

interface ActionBarProps {
  handleClick: () => void;
}

const ActionButton: FC<ActionBarProps> = (props) => {
  const { handleClick, children } = props;

  return (
    <button className="button is-primary is-small" onClick={handleClick}>
      {children}
    </button>
  );
};

export default ActionButton;
