"use client";
import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadFile } from "@/lib/utils";

function DownloadCvButton() {
  return (
    <Button
      onClick={() => {
        downloadFile("christian_stamati_cv_en", "/static/cv/cv_en.pdf");
      }}
      variant="secondary"
      size={"lg"}
    >
      <Download size={21} className={"mr-2"} />
      <span>Download CV</span>
    </Button>
  );
}

export default DownloadCvButton;
