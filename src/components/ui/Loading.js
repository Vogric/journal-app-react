import PulseLoader from "react-spinners/PulseLoader";

export const Loading = (checking) => {
  return (
    <div className="loading__main">
      <PulseLoader color={"#d8d8d8"} loading={checking} size={"2vw"} />
    </div>
  );
};
