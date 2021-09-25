import { FC } from 'react';
import { Cell } from '../../state';
import ActionBar from '../atoms/ActionBar';
import CodeCell from './CodeCell';
import TextEditor from '../atoms/TextEditor';
import './CellListItem.css';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: FC<CellListItemProps> = (props) => {
  const { cell } = props;

  let child: JSX.Element;
  if (cell.type === 'code') {
    child = (
      <>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    );
  } else {
    child = (
      <>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </>
    );
  }

  return <div className="cell-list-item">{child}</div>;
};

export default CellListItem;
