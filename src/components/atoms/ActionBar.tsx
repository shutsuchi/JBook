import { FC } from 'react';
import { useActions } from '../../hooks/useActions';
import ActionButtonDelete from './ActionButtonDelete';
import ActionButtonDown from './ActionButtonDown';
import ActionButtonUp from './ActionButtonUp';
import './ActionBar.css';

interface ActionBarProps {
  id: string;
}

const ActionBar: FC<ActionBarProps> = (props) => {
  const { id } = props;

  const { moveCell, deleteCell } = useActions();

  return (
    <div className="action-bar">
      <ActionButtonUp handleClick={() => moveCell(id, 'up')} />
      <ActionButtonDown handleClick={() => moveCell(id, 'down')} />
      <ActionButtonDelete handleClick={() => deleteCell(id)} />
    </div>
  );
};

export default ActionBar;
