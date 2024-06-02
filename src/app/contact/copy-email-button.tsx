"use client";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import React from "react";
import { useToast } from "@/components/ui/use-toast";

function CopyEmailButton() {
  const { toast } = useToast();
  return (
    <Button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText("christian.stamati@gmail.com");
        } catch (e) {
          console.error(e);
        }
        toast({
          title: "Copy email",
          description: "Email copied to the clipboard!",
        });
      }}
      variant="secondary"
      size={"sm"}
    >
      <Copy size={21} className={"mr-2"} />
      <span>Copy email</span>
    </Button>
  );
}
export default CopyEmailButton;
