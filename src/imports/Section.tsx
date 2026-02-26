import svgPaths from "./svg-pjxiwgtu3s";
import imgImageMerinoWool from "figma:asset/d10a273a857ec1f0b26cda6a28e448e822ec0d50.png";
import imgImageCashmere from "figma:asset/2a9267edb44feead5dfa72e57cb80a0a545ef3a6.png";
import imgImageAlpaca from "figma:asset/55563daa0dcd2f41e160160fa50729130f375700.png";
import imgImageSilk from "figma:asset/100cc717353c83301b4635529624b6c2880ef593.png";
import imgImageMohair from "figma:asset/a50b7145945202c18167a519c4b444f5bac25444.png";
import imgImageYak from "figma:asset/1e8c59875c71221835495d9b81e9d2931811d922.png";
import imgImageCamel from "figma:asset/befc214794a55b5084a7be7a895b2e3f5dae5734.png";
import imgImageAngora from "figma:asset/2982e5a63ca8a0fc5d0641096a62892e90930241.png";

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#8c8a7b] text-[12px] top-0 tracking-[2.4px] uppercase">Our Palette</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Playfair_Display:Medium',sans-serif] font-medium leading-[48px] left-0 text-[48px] text-black top-0">Shop by Material</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[72px] relative shrink-0 w-[365.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Text />
        <Heading />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[185.22px] size-[16px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[16px] relative shrink-0 w-[201.219px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#0a0a0a] text-[12px] top-0 tracking-[2.4px] uppercase">{`View Material Guide `}</p>
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[72px] items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Link />
    </div>
  );
}

function ImageMerinoWool() {
  return (
    <div className="absolute h-[472.656px] left-0 top-0 w-[354.5px]" data-name="Image (Merino Wool)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMerinoWool} />
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[472.656px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[354.5px]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[24px] top-[396.66px] w-[306.5px]" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[32px] min-h-px min-w-px relative text-[24px] text-white whitespace-pre-wrap">Sheep Wool</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-white h-[472.656px] left-0 overflow-clip top-0 w-[354.5px]" data-name="Link">
      <ImageMerinoWool />
      <Container3 />
      <Heading1 />
    </div>
  );
}

function ImageCashmere() {
  return (
    <div className="absolute h-[472.656px] left-0 top-0 w-[354.5px]" data-name="Image (Cashmere)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCashmere} />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[472.656px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[354.5px]" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[24px] top-[396.66px] w-[306.5px]" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[32px] min-h-px min-w-px relative text-[24px] text-white whitespace-pre-wrap">Cashmere</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bg-white h-[472.656px] left-[370.5px] overflow-clip top-0 w-[354.5px]" data-name="Link">
      <ImageCashmere />
      <Container4 />
      <Heading2 />
    </div>
  );
}

function ImageAlpaca() {
  return (
    <div className="absolute h-[472.656px] left-0 top-0 w-[354.5px]" data-name="Image (Alpaca)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAlpaca} />
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[472.656px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[354.5px]" data-name="Container" />;
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[24px] top-[396.66px] w-[306.5px]" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[32px] min-h-px min-w-px relative text-[24px] text-white whitespace-pre-wrap">Alpaca</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-white h-[472.656px] left-[741px] overflow-clip top-0 w-[354.5px]" data-name="Link">
      <ImageAlpaca />
      <Container5 />
      <Heading3 />
    </div>
  );
}

function ImageSilk() {
  return (
    <div className="absolute h-[472.656px] left-0 top-0 w-[354.5px]" data-name="Image (Silk)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSilk} />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[472.656px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[354.5px]" data-name="Container" />;
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[24px] top-[396.66px] w-[306.5px]" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[32px] min-h-px min-w-px relative text-[24px] text-white whitespace-pre-wrap">Silk</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute bg-white h-[472.656px] left-[1111.5px] overflow-clip top-0 w-[354.5px]" data-name="Link">
      <ImageSilk />
      <Container6 />
      <Heading4 />
    </div>
  );
}

function ImageMohair() {
  return (
    <div className="absolute h-[472.656px] left-0 top-0 w-[354.5px]" data-name="Image (Mohair)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMohair} />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[472.656px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[354.5px]" data-name="Container" />;
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[24px] top-[396.66px] w-[306.5px]" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[32px] min-h-px min-w-px relative text-[24px] text-white whitespace-pre-wrap">Mohair</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute bg-white h-[472.656px] left-0 overflow-clip top-[488.66px] w-[354.5px]" data-name="Link">
      <ImageMohair />
      <Container7 />
      <Heading5 />
    </div>
  );
}

function ImageYak() {
  return (
    <div className="absolute h-[472.656px] left-0 top-0 w-[354.5px]" data-name="Image (Yak)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageYak} />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[472.656px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[354.5px]" data-name="Container" />;
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[24px] top-[396.66px] w-[306.5px]" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[32px] min-h-px min-w-px relative text-[24px] text-white whitespace-pre-wrap">Yak</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute bg-white h-[472.656px] left-[370.5px] overflow-clip top-[488.66px] w-[354.5px]" data-name="Link">
      <ImageYak />
      <Container8 />
      <Heading6 />
    </div>
  );
}

function ImageCamel() {
  return (
    <div className="absolute h-[472.656px] left-0 top-0 w-[354.5px]" data-name="Image (Camel)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCamel} />
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[472.656px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[354.5px]" data-name="Container" />;
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[24px] top-[396.66px] w-[306.5px]" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[32px] min-h-px min-w-px relative text-[24px] text-white whitespace-pre-wrap">Camel</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute bg-white h-[472.656px] left-[741px] overflow-clip top-[488.66px] w-[354.5px]" data-name="Link">
      <ImageCamel />
      <Container9 />
      <Heading7 />
    </div>
  );
}

function ImageAngora() {
  return (
    <div className="absolute h-[472.656px] left-0 top-0 w-[354.5px]" data-name="Image (Angora)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAngora} />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[472.656px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[354.5px]" data-name="Container" />;
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[24px] top-[396.66px] w-[306.5px]" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[32px] min-h-px min-w-px relative text-[24px] text-white whitespace-pre-wrap">Angora Rabbit</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute bg-white h-[472.656px] left-[1111.5px] overflow-clip top-[488.66px] w-[354.5px]" data-name="Link">
      <ImageAngora />
      <Container10 />
      <Heading8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[961.313px] relative shrink-0 w-full" data-name="Container">
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#f9f8f6] content-stretch flex flex-col gap-[48px] items-start pt-[96px] px-[48px] relative size-full" data-name="Section">
      <Container />
      <Container2 />
    </div>
  );
}