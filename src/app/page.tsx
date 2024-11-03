// Local Imports
import { FakeDrawer } from "@/elements/components/fake-drawer";
import { GamesList } from "@/elements/components/games-list";
import { LoadingSpinnerButton } from "@/elements/components/loading-spinner-button";

const HomePage = () => {
  return (
    <>
      {/* <LoadingSpinnerButton /> */}
      <GamesList />
      {/* <FakeDrawer /> */}
    </>
  );
};

export default HomePage;
