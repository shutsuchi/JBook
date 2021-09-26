import { FC, Fragment, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CellListItem from './CellListItem';
import AddCell from '../atoms/AddCell';
import './CellList.css';

const CellList: FC = () => {
  const cells = useTypedSelector((state) =>
    state.cells?.order.map((id) => state.cells?.data[id])
  );

  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);

  const renderedCells = cells?.map((cell) => (
    <Fragment key={cell!.id}>
      <CellListItem key={cell!.id} cell={cell!} />
      <AddCell previousCellId={cell!.id} />
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <AddCell previousCellId={null} isForceVisible={cells!.length === 0} />
      {renderedCells}
    </div>
  );
};

export default CellList;
