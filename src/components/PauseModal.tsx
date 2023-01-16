import Card from "./Card";
import Button from "./Button";

function PauseModal() {
  return (
    <Card
      className="mx-5 bg-purple w-[30rem] tablet:px-10 tablet:py-12 rounded-[40px] px-5 py-8"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-hl uppercase text-center text-white mb-11 ">pause</h2>
      <Button bgColor="white">Continue Game</Button>
      <Button bgColor="white" className="my-8">
        Restart
      </Button>
      <Button bgColor="red">quit</Button>
    </Card>
  );
}

export default PauseModal;
