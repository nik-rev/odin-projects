import { twMerge } from 'tailwind-merge';

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge('animate-pulse rounded-md bg-zinc-200', className)}
      {...props}
    />
  );
}
