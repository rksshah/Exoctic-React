import svgPaths from "./svg-h3tflxnn50";
import imgMerinoWoolBlack from "figma:asset/a81da9669e80d20ac402a8ee66f4e3674669b5b5.png";
import imgMerinoWoolRovingIvory from "figma:asset/ee10c47720329bb68997a69fe66ad9873b7637e7.png";
import imgMerinoWoolRovingFrost from "figma:asset/d81bcb00f4b394915e0aadebca5f17b49ca3b80b.png";
import imgMerinoWoolRovingNickel from "figma:asset/3cc32d63049cb2034cfb6c936b4992504fd15e6b.png";
import imgMerinoWoolRovingChiffon from "figma:asset/d0c7724e55d3d800ed91c627b21ee3c6b4963f4f.png";
import imgMerinoWoolRovingGrey from "figma:asset/64aff51ac4a2ccf01614c3f6b4958289fba702dd.png";
import imgMerinoWoolRovingMink from "figma:asset/39bbf00bec50e6fedf2a0ca865147eef38811617.png";
import imgMerinoWoolRovingCelesthBlue from "figma:asset/d0af81c9f73996e4f787247efa05521ec6d9e174.png";
import imgMerinoWoolRovingBeige from "figma:asset/ab63802168a53001681f6133b972f2ad9257acbf.png";
import imgMerinoWoolRovingGainsboro from "figma:asset/e06c18e6277c19316bca73853ec52b1aadac0ed5.png";
import imgMerinoWoolRovingNevada from "figma:asset/45f64871def322dd34fecb5dc8c0a6d4ef4b6e7a.png";
import imgMerinoWoolRovingCloud from "figma:asset/f9a98f0672782fce5719efd05ffbf6b9a320acd9.png";

function Status() {
  return (
    <div className="content-stretch flex items-center mr-[-0.001px] relative shrink-0" data-name="Status">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] whitespace-nowrap">
        <p className="leading-[26px]">12 products</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[7px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(85,83,72,0.7)] whitespace-nowrap">
        <p className="leading-[26px]">Sort by</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] whitespace-nowrap">
        <p className="leading-[26px]">Best selling</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3cfe5200} fill="var(--fill-0, #555348)" id="Vector" stroke="var(--stroke-2, #555348)" strokeWidth="0.25" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Button">
      <Container4 />
      <Svg />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Button />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[151px] mr-[-0.001px] relative" data-name="Margin">
      <div className="content-stretch flex flex-col items-start min-w-[inherit] pl-[985.141px] relative w-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start pr-[0.001px] relative shrink-0 w-full" data-name="Container">
      <Status />
      <Margin />
    </div>
  );
}

function MerinoWoolBlack() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL BLACK">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolBlack} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="aspect-[223.8000030517578/223.8000030517578] relative shrink-0 w-full" data-name="Link">
      <MerinoWoolBlack />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="Margin">
      <Container5 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">MERINO WOOL BLACK</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Link1 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[22.5px] relative shrink-0 w-full z-[1]" data-name="Container">
      <Container7 />
    </div>
  );
}

function ProductItem() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-0 right-[991.2px] top-0" data-name="product-item">
      <Margin1 />
      <Container6 />
    </div>
  );
}

function MerinoWoolRovingIvory() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING IVORY">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingIvory} />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="aspect-[223.8000030517578/223.8000030517578] relative shrink-0 w-full" data-name="Link">
      <MerinoWoolRovingIvory />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link2 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">MERINO WOOL ROVING IVORY</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[22.5px] relative shrink-0 w-full z-[1]" data-name="Container">
      <Container12 />
    </div>
  );
}

function ProductItem1() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-[247.8px] right-[743.4px] top-0" data-name="product-item">
      <Margin2 />
      <Container11 />
    </div>
  );
}

function MerinoWoolRovingFrost() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING FROST">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingFrost} />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="aspect-[223.8000030517578/223.8000030517578] relative shrink-0 w-full" data-name="Link">
      <MerinoWoolRovingFrost />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link4 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="Margin">
      <Container15 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">MERINO WOOL ROVING FROST</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Link5 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[22.5px] relative shrink-0 w-full z-[1]" data-name="Container">
      <Container17 />
    </div>
  );
}

function ProductItem2() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-[495.59px] right-[495.61px] top-0" data-name="product-item">
      <Margin3 />
      <Container16 />
    </div>
  );
}

function MerinoWoolRovingNickel() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING NICKEL">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingNickel} />
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="aspect-[223.8000030517578/223.8000030517578] relative shrink-0 w-full" data-name="Link">
      <MerinoWoolRovingNickel />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link6 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="Margin">
      <Container20 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[22.5px] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">MERINO WOOL ROVING</p>
        <p>NICKEL</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full z-[1]" data-name="Container">
      <Link7 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function ProductItem3() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-[743.39px] right-[247.81px] top-0" data-name="product-item">
      <Margin4 />
      <Container21 />
    </div>
  );
}

function MerinoWoolRovingChiffon() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING CHIFFON">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingChiffon} />
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="aspect-[223.8000030517578/223.8000030517578] relative shrink-0 w-full" data-name="Link">
      <MerinoWoolRovingChiffon />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link8 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="Margin">
      <Container24 />
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[22.5px] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">MERINO WOOL ROVING</p>
        <p>CHIFFON</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full z-[1]" data-name="Container">
      <Link9 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function ProductItem4() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-[991.19px] right-[0.01px] top-0" data-name="product-item">
      <Margin5 />
      <Container25 />
    </div>
  );
}

function MerinoWoolRovingGrey() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING GREY">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingGrey} />
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="aspect-[223.8000030517578/223.8000030517578] relative shrink-0 w-full" data-name="Link">
      <MerinoWoolRovingGrey />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link10 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] pb-[24px] relative shrink-0 w-full z-[2]" data-name="Margin">
      <Container28 />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">MERINO WOOL ROVING GREY</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Link11 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] pb-[22.5px] relative shrink-0 w-full z-[1]" data-name="Container">
      <Container30 />
    </div>
  );
}

function ProductItem5() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-0 pb-[0.01px] right-[991.2px] top-[398.8px]" data-name="product-item">
      <Margin6 />
      <Container29 />
    </div>
  );
}

function MerinoWoolRovingMink() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING MINK">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingMink} />
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="aspect-[223.8000030517578/223.8000030517578] relative shrink-0 w-full" data-name="Link">
      <MerinoWoolRovingMink />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link12 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] pb-[24px] relative shrink-0 w-full z-[2]" data-name="Margin">
      <Container33 />
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">MERINO WOOL ROVING MINK</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Link13 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] pb-[22.5px] relative shrink-0 w-full z-[1]" data-name="Container">
      <Container35 />
    </div>
  );
}

function ProductItem6() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-[247.8px] pb-[0.01px] right-[743.4px] top-[398.8px]" data-name="product-item">
      <Margin7 />
      <Container34 />
    </div>
  );
}

function MerinoWoolRovingCelesthBlue() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING CELESTH BLUE">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingCelesthBlue} />
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="aspect-[223.8000030517578/223.8000030517578] relative shrink-0 w-full" data-name="Link">
      <MerinoWoolRovingCelesthBlue />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link14 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] pb-[24px] relative shrink-0 w-full z-[2]" data-name="Margin">
      <Container38 />
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[22.5px] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">MERINO WOOL ROVING</p>
        <p>CELESTH BLUE</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start mb-[-0.01px] relative shrink-0 w-full z-[1]" data-name="Container">
      <Link15 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function ProductItem7() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-[495.59px] pb-[0.01px] right-[495.61px] top-[398.8px]" data-name="product-item">
      <Margin8 />
      <Container39 />
    </div>
  );
}

function MerinoWoolRovingBeige() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING BEIGE">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingBeige} />
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="aspect-[223.8000030517578/223.8000030517578] relative shrink-0 w-full" data-name="Link">
      <MerinoWoolRovingBeige />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link16 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] pb-[24px] relative shrink-0 w-full z-[2]" data-name="Margin">
      <Container42 />
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">MERINO WOOL ROVING BEIGE</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Link17 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] pb-[22.5px] relative shrink-0 w-full z-[1]" data-name="Container">
      <Container44 />
    </div>
  );
}

function ProductItem8() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-[743.39px] pb-[0.01px] right-[247.81px] top-[398.8px]" data-name="product-item">
      <Margin9 />
      <Container43 />
    </div>
  );
}

function MerinoWoolRovingGainsboro() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING GAINSBORO">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingGainsboro} />
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="aspect-[223.8000030517578/223.8000030517578] relative shrink-0 w-full" data-name="Link">
      <MerinoWoolRovingGainsboro />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link18 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] pb-[24px] relative shrink-0 w-full z-[2]" data-name="Margin">
      <Container47 />
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[22.5px] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">MERINO WOOL ROVING</p>
        <p>GAINSBORO</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start mb-[-0.01px] relative shrink-0 w-full z-[1]" data-name="Container">
      <Link19 />
      <Container49 />
      <Container50 />
    </div>
  );
}

function ProductItem9() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-[991.19px] pb-[0.01px] right-[0.01px] top-[398.8px]" data-name="product-item">
      <Margin10 />
      <Container48 />
    </div>
  );
}

function MerinoWoolRovingNevada() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING NEVADA">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingNevada} />
      </div>
    </div>
  );
}

function Link20() {
  return (
    <div className="aspect-[223.8000030517578/223.8000030517578] relative shrink-0 w-full" data-name="Link">
      <MerinoWoolRovingNevada />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link20 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="Margin">
      <Container51 />
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[22.5px] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">MERINO WOOL ROVING</p>
        <p>NEVADA</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full z-[1]" data-name="Container">
      <Link21 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function ProductItem10() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-0 right-[991.2px] top-[797.59px]" data-name="product-item">
      <Margin11 />
      <Container52 />
    </div>
  );
}

function MerinoWoolRovingCloud() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING CLOUD">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingCloud} />
      </div>
    </div>
  );
}

function Link22() {
  return (
    <div className="aspect-[223.8000030517578/223.8000030517578] relative shrink-0 w-full" data-name="Link">
      <MerinoWoolRovingCloud />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Link22 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="Margin">
      <Container55 />
    </div>
  );
}

function Link23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[22.5px] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="mb-0">MERINO WOOL ROVING</p>
        <p>CLOUD</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full z-[1]" data-name="Container">
      <Link23 />
      <Container57 />
      <Container58 />
    </div>
  );
}

function ProductItem11() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-[247.8px] right-[743.4px] top-[797.59px]" data-name="product-item">
      <Margin12 />
      <Container56 />
    </div>
  );
}

function ProductList() {
  return (
    <div className="h-[1148.39px] overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="product-list">
      <ProductItem />
      <ProductItem1 />
      <ProductItem2 />
      <ProductItem3 />
      <ProductItem4 />
      <ProductItem5 />
      <ProductItem6 />
      <ProductItem7 />
      <ProductItem8 />
      <ProductItem9 />
      <ProductItem10 />
      <ProductItem11 />
    </div>
  );
}

export default function Region() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Region">
      <Container />
      <ProductList />
    </div>
  );
}