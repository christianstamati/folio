import { MapPin } from "lucide-react";

export function LocationPin({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full justify-center">
      <MapPin className="mr-2" />
      <span className="text-[18px] font-medium">{children}</span>
    </div>
  );
}
