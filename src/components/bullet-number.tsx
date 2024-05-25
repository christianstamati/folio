import React from "react";

function BulletNumber({
  num,
  description,
}: {
  num: number;
  description: string;
}) {
  return (
    <div className="flex gap-x-4">
      <div
        className={
          "flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-red-200 text-lg font-semibold text-red-500"
        }
      >
        <span>{num}</span>
      </div>
      <p>{description}</p>
    </div>
  );
}
export default BulletNumber;
