export function ProgressBar({ completed, background }) {
  return (
    <div className={`rounded-full border h-2 w-full`}>
      <div
        className={`${background} h-full rounded-full w-[${completed}%]`}
      ></div>
    </div>
  );
}
