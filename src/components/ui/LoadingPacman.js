import PacmanLoader from "react-spinners/PacmanLoader";

export const Loading = (checking) => {
  return (
    <div className="loading__main">
      <div className="loading__waiting">
        <PacmanLoader color={"#d8d8d8"} loading={checking} size={"2.5vw"} />
        <h1 className="loading__title-1">Loading</h1>
      </div>
    </div>
  );
};
