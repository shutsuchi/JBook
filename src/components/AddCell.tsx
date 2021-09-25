import { FC } from 'react';
import { useActions } from '../hooks/useActions';
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
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(previousCellId, 'code')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(previousCellId, 'text')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider" />
    </div>
  );
};

export default AddCell;
