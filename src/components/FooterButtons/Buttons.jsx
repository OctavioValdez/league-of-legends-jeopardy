import AddPlayerButton from "./AddPlayerButton";
import DeletePlayerButton from "./DeletePlayerButton";
const Buttons = () => {
  return (
    <>
      <div className="flex justify-center mt-5">
        <AddPlayerButton></AddPlayerButton>
        <DeletePlayerButton></DeletePlayerButton>
      </div>
    </>
  );
};

export default Buttons;
