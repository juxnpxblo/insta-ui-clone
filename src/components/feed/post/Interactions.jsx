import LeftInteractionsList from './LeftInteractionsList';
import SaveIcon from './SaveIcon';

const Interactions = () => {
  return (
    <div className="flex justify-between pb-3.5">
      <LeftInteractionsList />
      <SaveIcon />
    </div>
  );
};

export default Interactions;
