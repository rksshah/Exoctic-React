import imgColorBlendsMerinoWoolRovingA7Wetland from "figma:asset/1d7350f560ff821b3f7713e67264b01307d8e820.png";

function ColorBlendsMerinoWoolRovingA7Wetland() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="COLOR BLENDS MERINO WOOL ROVING A7 WETLAND">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgColorBlendsMerinoWoolRovingA7Wetland} />
    </div>
  );
}

function Link() {
  return (
    <div className="aspect-[223.8000030517578/223.8000030517578] relative shrink-0 w-full" data-name="Link">
      <ColorBlendsMerinoWoolRovingA7Wetland />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="Margin">
      <Container />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">#111 WOOL DRY BALLS -7 CM</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $1.20</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full z-[1]" data-name="Container">
      <Link1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

export default function ProductItem() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" data-name="product-item">
      <Margin />
      <Container1 />
    </div>
  );
}