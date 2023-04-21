export function ProgressBar({ completed, background }) {
  const compete = `w-[${completed}%]`;
  return (
    <div className={`rounded-full border h-2 w-full`}>
      <div className={`${background} h-full rounded-full ${compete}`}></div>
    </div>
  );
}
