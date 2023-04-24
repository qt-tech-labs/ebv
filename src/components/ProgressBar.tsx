type ProgressBarProps = {
  completed: number,
  background: string
}
export function ProgressBar({ completed, background }: ProgressBarProps) {
  const compete = `w-[${completed}%]`;
  return (
    <div className={`rounded-full border h-2 w-full`}>
      <div className={`${background} h-full rounded-full ${compete}`}></div>
    </div>
  );
}
