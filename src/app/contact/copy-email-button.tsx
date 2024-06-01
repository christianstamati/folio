import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import React from "react";

function CopyEmailButton() {
  return (
    <Button variant="secondary" size={"sm"}>
      <Copy size={21} className={"mr-2"} />
      <span>Copy email</span>
    </Button>
  );
}
export default CopyEmailButton;
