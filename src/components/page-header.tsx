import { Headphones, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex item-center justify-between border-b px-4 py-4",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="font-lg font-semibold tracking-tight">{title}</h1>
      </div>
      <div className="flex item-center gap-3">
        <Button variant={"outline"} size={"sm"} asChild>
          <Link href={"mailto:changsu.pabin337@gmail.com"}>
            <ThumbsUp />
            <span className="hidden lg:block">Feedback</span>
          </Link>
        </Button>
        <Button variant={"outline"} size={"sm"} asChild>
          <Link href={"mailto:changsu.pabin337@gmail.com"}>
            <Headphones />
            <span className="hidden lg:block">Need Help</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
