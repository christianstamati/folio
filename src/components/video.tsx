import { cn } from "@/lib/utils";

interface VideoPlayerProps
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {}

// playsInline
// autoPlay
// muted
// loop
export function Video({ className, ...rest }: VideoPlayerProps) {
  return (
    <video
      className={cn("w-full min-w-0 rounded-xl shadow-xl", className)}
      {...rest}
    />
  );
}
