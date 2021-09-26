import { FC } from 'react';

interface AddCellButtonProps {
  label: string;
  handleClick: () => void;
}

const AddCellButton: FC<AddCellButtonProps> = (props) => {
  const { label, handleClick } = props;

  return (
    <button
      className="button is-rounded is-primary is-small"
      onClick={handleClick}
    >
      <span className="icon is-small">
        <i className="fas fa-plus" />
      </span>
      <span>{label}</span>
    </button>
  );
};

export default AddCellButton;
