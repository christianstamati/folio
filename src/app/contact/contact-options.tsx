"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

function ContactOptions() {
  const { toast } = useToast();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <EllipsisVertical size={21} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(
                "christian.stamati@gmail.com",
              );
            } catch (e) {
              console.error(e);
            }
            toast({
              title: "Copy email",
              description: "Email copied to the clipboard!",
            });
          }}
        >
          Copy Email
        </DropdownMenuItem>
        <Link
          target={"_blank"}
          href={"https://www.linkedin.com/in/christianstamati/"}
        >
          <DropdownMenuItem>Linkedin</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ContactOptions;
