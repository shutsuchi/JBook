import { FC } from 'react';
import { useActions } from '../../hooks/useActions';
import AddCellButton from './AddCellButton';
import './AddCell.css';

interface AddCellProps {
  previousCellId: string | null;
  isForceVisible?: boolean;
}

const AddCell: FC<AddCellProps> = (props) => {
  const { previousCellId, isForceVisible } = props;

  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${isForceVisible && 'force-visible'}`}>
      <div className="add-buttons">
        <AddCellButton
          label="Code"
          handleClick={() => insertCellAfter(previousCellId, 'code')}
        />
        <AddCellButton
          label="Text"
          handleClick={() => insertCellAfter(previousCellId, 'text')}
        />
      </div>
      <div className="divider" />
    </div>
  );
};

export default AddCell;
