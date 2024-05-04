export default function DevPage() {
  return (
    <div className="h-screen">
      <div className={"grid grid-cols-[1fr_min-content_1fr]"}>
        <div className={"bg-red-500"}>ITEM1</div>
        <div className={"whitespace-nowrap bg-green-300 p-4"}>
          FLEXIBLE CONTENT SSSSSSSSSSSSSSSSSSS
        </div>
        <div className={"bg-amber-200"}>ITEM3</div>
      </div>
    </div>
  );
}
