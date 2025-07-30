import { ArrowUpRight } from 'lucide-react';

export default function LinkIcon() {
  return (
    <div className="w-4 h-4 grid place-items-center overflow-hidden">
      <ArrowUpRight className="w-4 h-4 text-foreground link-svg" />
      <ArrowUpRight className="w-4 h-4 text-foreground link-svg" />
    </div>
  );
}
