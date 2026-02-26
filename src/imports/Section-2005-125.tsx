import imgImageSpeckledHandDye from "figma:asset/a951dca75aa10b86f397dda1498b683f7f2e5236.png";
import imgImageNaturalAlpaca from "figma:asset/4932aa51eed576810e36c9f68b24dc5f2e6661d1.png";
import imgImageBambooNeedles from "figma:asset/288a47e0ab89e51890589360ff3f521b0f9bc28c.png";
import imgImageMerinoSilkBlend from "figma:asset/e3b5f4e50662343c3144e10f4769c63df542b33c.png";
import imgImageSilkMohair from "figma:asset/89b3dd6026a2ac25fb7ed4604fd8989f167caa42.png";
import imgImageAndeanChunky from "figma:asset/b24faae795bb4f7b23f8a07b51b76f4115e94261.png";
import imgImageArtisanSock from "figma:asset/815e1e9e86ec985f06fb2684e0c277805dfc707f.png";
import imgImageMidnightMerino from "figma:asset/a35977bcff57de02cf2eef519fda664cd4642683.png";
import imgImageSilkMohair1 from "figma:asset/8d6159a7ba8fa766309aeb72ce9da89e2679fdef.png";
import imgImageAndeanChunky1 from "figma:asset/7560c6ea329c37a3a698f11909ba9a69acc8da84.png";

function Heading() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center px-[633px] relative shrink-0 w-[1514px]" data-name="Heading 2">
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#1a1a1a] text-[36px] text-center">FIBER ROVING</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center px-[688px] relative shrink-0 w-[1514px]" data-name="Paragraph">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#555348] text-[14px] text-center tracking-[1.4px] uppercase">Made By Nature</p>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] relative w-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function ImageSpeckledHandDye() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Image (Speckled Hand-Dye)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSpeckledHandDye} />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageSpeckledHandDye />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] left-[128.73px] text-[#1a1a1a] text-[18px] text-center top-0">WHITE ROVING</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[123.69px] text-[#555348] text-[14px] text-center top-[-1px]">$4.99</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[332px] items-start left-[376px] top-0 w-[256px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function ImageNaturalAlpaca() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Image (Natural Alpaca)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageNaturalAlpaca} />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageNaturalAlpaca />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] left-[128.42px] text-[#1a1a1a] text-[18px] text-center top-0">A7 WETLAND</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[128.33px] text-[#555348] text-[14px] text-center top-[-1px]">$4.99</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[332px] items-start left-[712px] top-0 w-[256px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function ImageBambooNeedles() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Image (Bamboo Needles)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageBambooNeedles} />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageBambooNeedles />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] left-[128.06px] text-[#1a1a1a] text-[18px] text-center top-0">A8 PEAR GREEN</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[128.03px] text-[#555348] text-[14px] text-center top-[-1px]">$4.99</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[332px] items-start left-[1048px] top-0 w-[256px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function ImageMerinoSilkBlend() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Image (Merino Silk Blend)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMerinoSilkBlend} />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageMerinoSilkBlend />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] left-[128.75px] text-[#1a1a1a] text-[18px] text-center top-0">A11 MOCHA</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[128.86px] text-[#555348] text-[14px] text-center top-[-1px]">$4.99</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Paragraph4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[332px] items-start left-[1384px] top-0 w-[256px]" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function ImageSilkMohair() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Image (Silk Mohair)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.29%] left-0 max-w-none top-[-21.82%] w-full" src={imgImageSilkMohair} />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageSilkMohair />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] left-[128.56px] text-[#1a1a1a] text-[18px] text-center top-0">A9 SPACE</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[128.48px] text-[#555348] text-[14px] text-center top-[-1px]">$4.99</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Paragraph5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[332px] items-start left-[1720px] top-0 w-[256px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function ImageAndeanChunky() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Image (Andean Chunky)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAndeanChunky} />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageAndeanChunky />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] left-[127.83px] text-[#1a1a1a] text-[18px] text-center top-0">A6 BOYSENBERRY</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[128.7px] text-[#555348] text-[14px] text-center top-[-1px]">$4.99</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph6 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[332px] items-start left-[2056px] top-0 w-[256px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function ImageArtisanSock() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Image (Artisan Sock)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageArtisanSock} />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageArtisanSock />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] left-[127.59px] text-[#1a1a1a] text-[18px] text-center top-0">A25 VOLCANO</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[128.69px] text-[#555348] text-[14px] text-center top-[-1px]">$4.99</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Paragraph7 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[332px] items-start left-[2392px] top-0 w-[256px]" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[332px] relative shrink-0 w-[2688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
        <Container6 />
        <Container9 />
        <Container12 />
        <Container15 />
        <Container18 />
        <Container21 />
      </div>
    </div>
  );
}

function ImageMerinoSilkBlend1() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Image (Merino Silk Blend)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMerinoSilkBlend} />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageMerinoSilkBlend1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] left-[128.75px] text-[#1a1a1a] text-[18px] text-center top-0">A11 MOCHA</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[128.86px] text-[#555348] text-[14px] text-center top-[-1px]">$4.99</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Paragraph8 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[332px] items-start left-[39.97px] top-0 w-[256px]" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function ImageBambooNeedles1() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Image (Bamboo Needles)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageBambooNeedles} />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageBambooNeedles1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] left-[128.06px] text-[#1a1a1a] text-[18px] text-center top-0">A8 PEAR GREEN</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[128.03px] text-[#555348] text-[14px] text-center top-[-1px]">$4.99</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Paragraph9 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[332px] items-start left-[375.97px] top-0 w-[256px]" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function ImageNaturalAlpaca1() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Image (Natural Alpaca)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageNaturalAlpaca} />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageNaturalAlpaca1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] left-[128.42px] text-[#1a1a1a] text-[18px] text-center top-0">A7 WETLAND</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[128.33px] text-[#555348] text-[14px] text-center top-[-1px]">$4.99</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Paragraph10 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[332px] items-start left-[711.97px] top-0 w-[256px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function ImageSpeckledHandDye1() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Image (Speckled Hand-Dye)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSpeckledHandDye} />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageSpeckledHandDye1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] left-[128.73px] text-[#1a1a1a] text-[18px] text-center top-0">WHITE ROVING</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[123.69px] text-[#555348] text-[14px] text-center top-[-1px]">$4.99</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Paragraph11 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[332px] items-start left-[1047.97px] top-0 w-[256px]" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function ImageMidnightMerino() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Image (Midnight Merino)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMidnightMerino} />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageMidnightMerino />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] left-[128.39px] text-[#1a1a1a] text-[18px] text-center top-0">Midnight Merino</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[128.47px] text-[#555348] text-[14px] text-center top-[-1px]">$4.99</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <Paragraph12 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[332px] items-start left-[1383.97px] top-0 w-[256px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function ImageSilkMohair1() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Image (Silk Mohair)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSilkMohair1} />
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageSilkMohair1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] left-[128.06px] text-[#1a1a1a] text-[18px] text-center top-0">Silk Mohair</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[128.48px] text-[#555348] text-[14px] text-center top-[-1px]">$4.99</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <Heading13 />
      <Paragraph13 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[332px] items-start left-[1719.97px] top-0 w-[256px]" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function ImageAndeanChunky1() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Image (Andean Chunky)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAndeanChunky1} />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] relative rounded-[33554400px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageAndeanChunky1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] left-[128.33px] text-[#1a1a1a] text-[18px] text-center top-0">Andean Chunky</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Figtree:Bold',sans-serif] font-bold leading-[20px] left-[128.7px] text-[#555348] text-[14px] text-center top-[-1px]">$4.99</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <Heading14 />
      <Paragraph14 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[332px] items-start left-[2055.97px] top-0 w-[256px]" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[332px] relative shrink-0 w-[2312px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container25 />
        <Container28 />
        <Container31 />
        <Container34 />
        <Container37 />
        <Container40 />
        <Container43 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[332px] items-start overflow-clip pl-[-1486.029px] relative shrink-0 w-[1562px]" data-name="Container">
      <Container2 />
      <Container24 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#f9f8f6] relative size-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[48px] items-start pb-px pt-[81px] relative size-full">
        <Container />
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(222,218,200,0.3)] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}