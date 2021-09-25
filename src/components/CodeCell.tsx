import { FC, useEffect } from 'react';
import { Cell } from '../state';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import CodeEditor from './CodeEditor';
import Preview from './Preview';
import Resizable from './Resizable';
import './CodeCell.css';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: FC<CodeCellProps> = (props) => {
  const { cell } = props;

  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles![cell.id]);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cell.content);
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cell.content);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cell.id, cell.content, createBundle]);

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
