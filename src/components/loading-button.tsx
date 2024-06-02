import { Button, ButtonProps } from "@/components/ui/button";
import { MoonLoader } from "react-spinners";
import React from "react";

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
  loadingText?: string;
}

function LoadingButton({ loading, loadingText, ...rest }: LoadingButtonProps) {
  return (
    <Button disabled={loading} {...rest}>
      {loading ? (
        <div className="flex gap-x-2">
          <MoonLoader size={14} color="#ffffff" />
          <span>{loadingText ?? "Loading..."}</span>
        </div>
      ) : (
        rest.children
      )}
    </Button>
  );
}
export default LoadingButton;
