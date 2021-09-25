import { FC, Fragment } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import CellListItem from './CellListItem';
import AddCell from './AddCell';

const CellList: FC = () => {
  const cells = useTypedSelector((state) =>
    state.cells?.order.map((id) => state.cells?.data[id])
  );

  const renderedCells = cells?.map((cell) => (
    <Fragment key={cell!.id}>
      <CellListItem key={cell!.id} cell={cell!} />
      <AddCell previousCellId={cell!.id} />
    </Fragment>
  ));

  return (
    <div>
      <AddCell previousCellId={null} isForceVisible={cells!.length === 0} />
      {renderedCells}
    </div>
  );
};

export default CellList;
