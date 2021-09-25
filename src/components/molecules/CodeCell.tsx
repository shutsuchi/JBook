import { FC, useEffect } from 'react';
import { Cell } from '../../state';
import { useActions } from '../../hooks/useActions';
import { useCumulativeCode } from '../../hooks/useCumulativeCode';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CodeEditor from '../atoms/CodeEditor';
import Preview from '../atoms/Preview';
import Resizable from '../atoms/Resizable';
import './CodeCell.css';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: FC<CodeCellProps> = (props) => {
  const { cell } = props;

  const { updateCell, createBundle } = useActions();
  const cumulativeCode = useCumulativeCode(cell.id);
  const bundle = useTypedSelector((state) => state.bundles![cell.id]);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode);
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cell.id, cumulativeCode, createBundle]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        <div className="progress-wrapper">
          {!bundle || bundle.isLoading ? (
            <div className="progress-cover">
              <progress className="progress is-small is-primary" max="100">
                Loading
              </progress>
            </div>
          ) : (
            <Preview code={bundle.code} bundlingStatus={bundle.err} />
          )}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeCell;
