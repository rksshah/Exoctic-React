import svgPaths from "./svg-xnzb8j6ua9";
import imgSpanFlag from "figma:asset/07008a9bdb464c399917cd3c4f371a98d2640aa2.png";
import imgScreenshot20240429At195523Png from "figma:asset/0eafeda559aebdd09a82ad1c0d08b3f4c8e589e7.png";
import imgBannerAa4877DaD65F415196C52E4D61A16539Jpg from "figma:asset/8896067d9010d3e5438ed236e6bff3ead77b2944.png";
import imgWechatImg305Jpg from "figma:asset/7d6ced70973eb6ce387a53217cae884ec1b4417a.png";
import imgAccPng from "figma:asset/162f338d725478249cf133661e6693a0b78a1817.png";
import imgYaPng from "figma:asset/9bc99d87f2e89d64f6519f514f477e4ecdd7c248.png";
import imgMerinoWoolRovingBeige from "figma:asset/ab63802168a53001681f6133b972f2ad9257acbf.png";
import imgMerinoWoolRovingApricot from "figma:asset/b5c06bb0a4cd6223fd6bd8dde124985cd170b41c.png";
import imgMerinoWoolRovingCarrot from "figma:asset/b581765b90f74c9a38322ba5366c0eb322d4ab25.png";
import imgMerinoWoolRovingCameo from "figma:asset/6511036e13a7d83a35b0feecf2bdaeb046088d8a.png";
import imgMerinoWoolRovingHoney from "figma:asset/0e11d5d717e4c571b9e047db3a44b63b36a9513e.png";
import imgMerinoWoolRovingKhaiki from "figma:asset/1f902809b605bba33d74a326023b7f3fee0e8fd7.png";
import imgMerinoWoolRovingPersimmon from "figma:asset/91e6e97fbb8fc15a4739b11f7ced2a9f0ed0fa46.png";
import imgMerinoWoolRovingCandy from "figma:asset/10c9321da7e83170cb6feb3848c3ad6cd5d77a2a.png";
import img20240419102555Jpg from "figma:asset/0b6252a3dc4fda5cb08f14ac8db64a2b50ca5c11.png";
import img20240419102559Jpg from "figma:asset/5e859a6034f7f30550be85ea88f316c5e60edadf.png";
import img85Jpg from "figma:asset/6a7b6778641e3144a7dd88589dbc48a15f1c7891.png";
import img20240422124744Png from "figma:asset/a443089d8bcaa7b3d248c03d005c357d0390385d.png";
import imgDddPng from "figma:asset/9658f4a99c88f30a5b32c787a72cdb4f0a1b16a7.png";

function SpanFlag() {
  return (
    <div className="relative shrink-0 w-full" data-name="span.flag">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[24800%] left-0 max-w-none top-[-9100%] w-[18.82%]" src={imgSpanFlag} />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[40px] relative w-full">
          <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
            <p className="leading-[32px]">English</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivUplinklyLanguageTranslatePopupButton() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[5px] py-[2px] relative rounded-[5px] shrink-0 w-[180px]" data-name="div.uplinkly-language-translate-popup-button">
      <SpanFlag />
    </div>
  );
}

function DivUplinklyLanguageTranslateFloating() {
  return (
    <div className="absolute bottom-[20px] content-stretch flex flex-col items-start p-[5px] right-[20px]" data-name="div.uplinkly-language-translate-floating">
      <DivUplinklyLanguageTranslatePopupButton />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[58px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p2bd89800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanChatNotification() {
  return (
    <div className="absolute bg-[#ee2f53] right-[-6px] rounded-[30px] size-[22px] top-[-7px]" data-name="span.chat-notification">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[22px]">1</p>
        </div>
      </div>
    </div>
  );
}

function ButtonChatToggle() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center p-px relative rounded-[30px] shrink-0 size-[60px]" data-name="button.chat-toggle">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <Frame />
      <SpanChatNotification />
    </div>
  );
}

function InboxOnlineStoreChat() {
  return (
    <div className="absolute bottom-[120px] content-stretch flex flex-col h-[65px] items-start left-[16px] px-[6px]" data-name="inbox-online-store-chat">
      <ButtonChatToggle />
    </div>
  );
}

function DivBottomBarContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.bottom-bar__content">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="leading-[26px] whitespace-pre-wrap">@ 2024 Exotic Fiber all imagines and contents on this website are the copyrights and property of Exotic Fiber. All rights reserved.</p>
      </div>
    </div>
  );
}

function DivBottomBarInner() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.bottom-bar__inner">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[24px] relative w-full">
        <DivBottomBarContent />
      </div>
    </div>
  );
}

function DivBottomBar() {
  return (
    <div className="absolute bg-[#dedac8] content-stretch flex flex-col items-start left-0 pt-px px-[40px] right-0 top-[5627.64px]" data-name="div.bottom-bar">
      <div aria-hidden="true" className="absolute border-[#c9c6b5] border-solid border-t inset-0 pointer-events-none" />
      <DivBottomBarInner />
    </div>
  );
}

function AnnouncementBarItem() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="announcement-bar-item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[13px] text-black text-center whitespace-nowrap">
        <p className="leading-[20px]">{`WE OFFER A 30 DAY LIVE & LOVE OR RETURN GUARANTEE`}</p>
      </div>
    </div>
  );
}

function DivAnnouncementBarList() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[56px] px-[40px] py-[12px] right-[56px] top-1/2" data-name="div.announcement-bar__list">
      <AnnouncementBarItem />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p3c9c1280} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.25" />
        </g>
      </svg>
    </div>
  );
}

function ButtonTapArea() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-912px)] top-1/2" data-name="button.tap-area">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p326df900} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.25" />
        </g>
      </svg>
    </div>
  );
}

function ButtonTapArea1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+912px)] top-1/2" data-name="button.tap-area">
      <Frame2 />
    </div>
  );
}

function SectionsHeaderGroupAnnouncementBar() {
  return (
    <div className="absolute bg-[#dedac8] h-[44px] left-0 right-0 top-0" data-name="sections: header-group → announcement-bar">
      <DivAnnouncementBarList />
      <ButtonTapArea />
      <ButtonTapArea1 />
    </div>
  );
}

function Screenshot20240429At195523Png() {
  return (
    <div className="absolute h-[729.59px] left-0 top-0 w-[1920px]" data-name="Screenshot_2024-04-29_at_19.55.23.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[144.48%] left-0 max-w-none top-[-22.24%] w-full" src={imgScreenshot20240429At195523Png} />
      </div>
    </div>
  );
}

function DivSlideshowImageWrapper() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="div.slideshow__image-wrapper">
      <Screenshot20240429At195523Png />
      <div className="absolute bg-[rgba(0,0,0,0.05)] h-[729.59px] left-0 top-0 w-[1920px]" data-name="::before" />
    </div>
  );
}

function DivContainer() {
  return <div className="h-[284.42px] max-w-[1600px] shrink-0 w-[1600px]" data-name="div.container" />;
}

function SlideShowItem() {
  return (
    <div className="absolute content-stretch flex inset-0 items-end justify-center min-h-[729.5999755859375px] pt-[445.17px] px-[160px]" data-name="slide-show-item">
      <DivSlideshowImageWrapper />
      <DivContainer />
    </div>
  );
}

function ButtonSlideshowProgressBar() {
  return (
    <div className="h-[36px] relative shrink-0 w-[64px]" data-name="button.slideshow__progress-bar">
      <div className="absolute bg-[rgba(255,255,255,0.5)] h-[2px] left-0 right-0 top-[17px]" data-name="::before" />
    </div>
  );
}

function ButtonSlideshowProgressBarMargin() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0" data-name="button.slideshow__progress-bar:margin">
      <ButtonSlideshowProgressBar />
    </div>
  );
}

function ButtonSlideshowProgressBar1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[64px]" data-name="button.slideshow__progress-bar">
      <div className="absolute bg-[rgba(255,255,255,0.5)] h-[2px] left-0 right-0 top-[17px]" data-name="::before" />
    </div>
  );
}

function ButtonSlideshowProgressBarMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0" data-name="button.slideshow__progress-bar:margin">
      <ButtonSlideshowProgressBar1 />
    </div>
  );
}

function ButtonSlideshowProgressBar2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[64px]" data-name="button.slideshow__progress-bar">
      <div className="absolute bg-[rgba(255,255,255,0.5)] h-[2px] left-0 right-0 top-[17px]" data-name="::before" />
    </div>
  );
}

function ButtonSlideshowProgressBarMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0" data-name="button.slideshow__progress-bar:margin">
      <ButtonSlideshowProgressBar2 />
    </div>
  );
}

function PageDots() {
  return (
    <div className="absolute bottom-[23.01px] content-stretch flex items-start justify-center left-[160px] max-w-[1600px] px-[40px] right-[160px]" data-name="page-dots">
      <ButtonSlideshowProgressBarMargin />
      <ButtonSlideshowProgressBarMargin1 />
      <ButtonSlideshowProgressBarMargin2 />
    </div>
  );
}

function SlideShow() {
  return (
    <div className="h-[729.6px] min-h-[729.5999755859375px] relative shrink-0 w-full" data-name="slide-show">
      <SlideShowItem />
      <PageDots />
    </div>
  );
}

function H2Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[200px] right-[200px] top-[-1px]" data-name="h2.heading">
      <div className="flex flex-col font-['Nunito:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[40px] text-black text-right tracking-[-1px] w-[424.326px]">
        <p className="leading-[43.33px] whitespace-pre-wrap">COLOR MERINO WOOL</p>
      </div>
    </div>
  );
}

function DivSectionColorWrapper() {
  return (
    <div className="bg-white h-[43.33px] relative shrink-0 w-full" data-name="div.section__color-wrapper">
      <H2Heading />
    </div>
  );
}

function BannerAa4877DaD65F415196C52E4D61A16539Jpg() {
  return (
    <div className="absolute h-[700px] left-0 top-0 w-[1920px]" data-name="banner_aa4877da-d65f-4151-96c5-2e4d61a16539.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[114.29%] left-0 max-w-none top-[-7.14%] w-full" src={imgBannerAa4877DaD65F415196C52E4D61A16539Jpg} />
      </div>
    </div>
  );
}

function DivImageWithTextBlockImageWrapper() {
  return (
    <div className="absolute bg-[#f4f5f5] inset-0 overflow-clip" data-name="div.image-with-text-block__image-wrapper">
      <BannerAa4877DaD65F415196C52E4D61A16539Jpg />
    </div>
  );
}

function SplitLines() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="split-lines">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[14.77px]">COLOR MERINO WOOL</p>
      </div>
    </div>
  );
}

function SplitLines1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="split-lines">
      <div className="flex flex-col font-['Nunito:ExtraLight',sans-serif] font-extralight justify-center leading-[43.33px] relative shrink-0 text-[40px] text-black text-right tracking-[-1px] whitespace-nowrap">
        <p className="mb-0">Natural, sustainable</p>
        <p>and luxurious yarn</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[26px] relative shrink-0 text-[#555348] text-[15px] text-right whitespace-nowrap">
        <p className="mb-0">High quality natural fiber yarns for your creative projects,</p>
        <p>always in harmony with nature.</p>
      </div>
    </div>
  );
}

function AButton() {
  return (
    <div className="bg-[#555348] content-stretch flex items-start justify-center px-[35px] relative rounded-[8px] shrink-0" data-name="a.button">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#dedac8] text-[13px] text-center tracking-[2px] uppercase whitespace-nowrap">
        <p className="leading-[45px]">Shop Now</p>
      </div>
    </div>
  );
}

function DivButtonWrapper() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.button-wrapper">
      <AButton />
    </div>
  );
}

function DivImageWithTextBlockTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[8.8px] relative shrink-0 w-full" data-name="div.image-with-text-block__text-container">
      <P />
      <DivButtonWrapper />
    </div>
  );
}

function DivImageWithTextBlockContent() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[15.2px] items-start p-[64px] relative rounded-[8px] shrink-0 w-[516.39px]" data-name="div.image-with-text-block__content">
      <SplitLines />
      <SplitLines1 />
      <DivImageWithTextBlockTextContainer />
    </div>
  );
}

function DivContainer1() {
  return (
    <div className="content-stretch flex flex-col items-end max-w-[1600px] pl-[966.42px] pr-[117.19px] py-[56px] relative shrink-0 w-[1600px]" data-name="div.container">
      <DivImageWithTextBlockContent />
    </div>
  );
}

function ImageWithTextBlock() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[700px] pb-[94.8px] pt-[94.78px] relative shrink-0 w-full" data-name="image-with-text-block">
      <DivImageWithTextBlockImageWrapper />
      <DivContainer1 />
    </div>
  );
}

function WechatImg305Jpg() {
  return (
    <div className="absolute aspect-[748/290] left-0 right-0 rounded-[4px] top-0" data-name="WechatIMG305.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute h-[254.38%] left-0 max-w-none top-[-77.19%] w-full" src={imgWechatImg305Jpg} />
      </div>
    </div>
  );
}

function PHeading() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[293.52px] top-[131px]" data-name="p.heading">
      <div className="flex flex-col font-['Nunito:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[24px] text-center text-white tracking-[-0.4px] w-[161.076px]">
        <p className="leading-[28px] whitespace-pre-wrap">FIBER ROVING</p>
      </div>
    </div>
  );
}

function DivMediaGridImageBhfNaR() {
  return (
    <div className="absolute bg-black inset-[0_772px_314px_0] overflow-clip rounded-[4px]" data-name="div#media-grid-image_BHFNaR">
      <WechatImg305Jpg />
      <PHeading />
    </div>
  );
}

function AccPng() {
  return (
    <div className="absolute aspect-[748/604] left-0 right-0 rounded-[4px] top-0" data-name="acc.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute h-[123.84%] left-0 max-w-none top-[-11.92%] w-full" src={imgAccPng} />
      </div>
    </div>
  );
}

function PHeading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[294.64px] top-[288px]" data-name="p.heading">
      <div className="flex flex-col font-['Nunito:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[24px] text-center text-white tracking-[-0.4px] w-[158.844px]">
        <p className="leading-[28px] whitespace-pre-wrap">ACCESSORIES</p>
      </div>
    </div>
  );
}

function DivMediaGridImageXfzfff() {
  return (
    <div className="absolute bg-black inset-[0_0_0_772px] overflow-clip rounded-[4px]" data-name="div#media-grid-image_xfzfff">
      <AccPng />
      <PHeading1 />
    </div>
  );
}

function YaPng() {
  return (
    <div className="absolute aspect-[748/290] left-0 right-0 rounded-[4px] top-0" data-name="ya.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute h-[193.45%] left-0 max-w-none top-[-46.72%] w-full" src={imgYaPng} />
      </div>
    </div>
  );
}

function PHeading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[335.17px] top-[131px]" data-name="p.heading">
      <div className="flex flex-col font-['Nunito:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[24px] text-center text-white tracking-[-0.4px] w-[77.781px]">
        <p className="leading-[28px] whitespace-pre-wrap">YARNS</p>
      </div>
    </div>
  );
}

function DivMediaGridImageG69QHk() {
  return (
    <div className="absolute bg-black inset-[314px_772px_0_0] overflow-clip rounded-[4px]" data-name="div#media-grid-image_G69QHk">
      <YaPng />
      <PHeading2 />
    </div>
  );
}

function MediaGrid() {
  return (
    <div className="h-[604px] relative shrink-0 w-[1520px]" data-name="media-grid">
      <DivMediaGridImageBhfNaR />
      <DivMediaGridImageXfzfff />
      <DivMediaGridImageG69QHk />
    </div>
  );
}

function H2Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.heading">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[14.77px]">COLOR WOOL</p>
      </div>
    </div>
  );
}

function H3Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h3.heading">
      <div className="flex flex-col font-['Nunito:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center tracking-[-1px] w-[225.786px]">
        <p className="leading-[43.33px] whitespace-pre-wrap">New Arrivals</p>
      </div>
    </div>
  );
}

function DivTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full" data-name="div.text-container">
      <H2Heading1 />
      <H3Heading />
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

function AProductItemAspectRatio() {
  return (
    <div className="aspect-[273.5899963378906/273.5899963378906] relative shrink-0 w-full" data-name="a.product-item__aspect-ratio">
      <MerinoWoolRovingBeige />
    </div>
  );
}

function DivProductItemImageWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div.product-item__image-wrapper">
      <AProductItemAspectRatio />
    </div>
  );
}

function DivProductItemImageWrapperMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="div.product-item__image-wrapper:margin">
      <DivProductItemImageWrapper />
    </div>
  );
}

function AProductItemMetaTitle() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="a.product-item-meta__title">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">MERINO WOOL ROVING BEIGE</p>
      </div>
    </div>
  );
}

function DivProductItemMetaPriceListContainer() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.product-item-meta__price-list-container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function PProductItemMetaColorCount() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.product-item-meta__color-count">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function DivProductItemMeta() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="div.product-item-meta">
      <AProductItemMetaTitle />
      <DivProductItemMetaPriceListContainer />
      <PProductItemMetaColorCount />
    </div>
  );
}

function DivProductItemInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full z-[1]" data-name="div.product-item__info">
      <DivProductItemMeta />
    </div>
  );
}

function ProductItem() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_1190.41px_0_0] isolate items-start" data-name="product-item">
      <DivProductItemImageWrapperMargin />
      <DivProductItemInfo />
    </div>
  );
}

function MerinoWoolRovingApricot() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING APRICOT">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingApricot} />
      </div>
    </div>
  );
}

function AProductItemAspectRatio1() {
  return (
    <div className="aspect-[273.5899963378906/273.5899963378906] relative shrink-0 w-full" data-name="a.product-item__aspect-ratio">
      <MerinoWoolRovingApricot />
    </div>
  );
}

function DivProductItemImageWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div.product-item__image-wrapper">
      <AProductItemAspectRatio1 />
    </div>
  );
}

function DivProductItemImageWrapperMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="div.product-item__image-wrapper:margin">
      <DivProductItemImageWrapper1 />
    </div>
  );
}

function AProductItemMetaTitle1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="a.product-item-meta__title">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">MERINO WOOL ROVING APRICOT</p>
      </div>
    </div>
  );
}

function DivProductItemMetaPriceListContainer1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.product-item-meta__price-list-container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function PProductItemMetaColorCount1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.product-item-meta__color-count">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function DivProductItemMeta1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="div.product-item-meta">
      <AProductItemMetaTitle1 />
      <DivProductItemMetaPriceListContainer1 />
      <PProductItemMetaColorCount1 />
    </div>
  );
}

function DivProductItemInfo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full z-[1]" data-name="div.product-item__info">
      <DivProductItemMeta1 />
    </div>
  );
}

function ProductItem1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_892.82px_0_297.59px] isolate items-start" data-name="product-item">
      <DivProductItemImageWrapperMargin1 />
      <DivProductItemInfo1 />
    </div>
  );
}

function MerinoWoolRovingCarrot() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING CARROT">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingCarrot} />
      </div>
    </div>
  );
}

function AProductItemAspectRatio2() {
  return (
    <div className="aspect-[273.5899963378906/273.5899963378906] relative shrink-0 w-full" data-name="a.product-item__aspect-ratio">
      <MerinoWoolRovingCarrot />
    </div>
  );
}

function DivProductItemImageWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div.product-item__image-wrapper">
      <AProductItemAspectRatio2 />
    </div>
  );
}

function DivProductItemImageWrapperMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="div.product-item__image-wrapper:margin">
      <DivProductItemImageWrapper2 />
    </div>
  );
}

function AProductItemMetaTitle2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="a.product-item-meta__title">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">MERINO WOOL ROVING CARROT</p>
      </div>
    </div>
  );
}

function DivProductItemMetaPriceListContainer2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.product-item-meta__price-list-container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function PProductItemMetaColorCount2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.product-item-meta__color-count">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function DivProductItemMeta2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="div.product-item-meta">
      <AProductItemMetaTitle2 />
      <DivProductItemMetaPriceListContainer2 />
      <PProductItemMetaColorCount2 />
    </div>
  );
}

function DivProductItemInfo2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full z-[1]" data-name="div.product-item__info">
      <DivProductItemMeta2 />
    </div>
  );
}

function ProductItem2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_595.22px_0_595.19px] isolate items-start" data-name="product-item">
      <DivProductItemImageWrapperMargin2 />
      <DivProductItemInfo2 />
    </div>
  );
}

function MerinoWoolRovingCameo() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING CAMEO">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingCameo} />
      </div>
    </div>
  );
}

function AProductItemAspectRatio3() {
  return (
    <div className="aspect-[273.5899963378906/273.5899963378906] relative shrink-0 w-full" data-name="a.product-item__aspect-ratio">
      <MerinoWoolRovingCameo />
    </div>
  );
}

function DivProductItemImageWrapper3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div.product-item__image-wrapper">
      <AProductItemAspectRatio3 />
    </div>
  );
}

function DivProductItemImageWrapperMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="div.product-item__image-wrapper:margin">
      <DivProductItemImageWrapper3 />
    </div>
  );
}

function AProductItemMetaTitle3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="a.product-item-meta__title">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">MERINO WOOL ROVING CAMEO</p>
      </div>
    </div>
  );
}

function DivProductItemMetaPriceListContainer3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.product-item-meta__price-list-container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function PProductItemMetaColorCount3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.product-item-meta__color-count">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function DivProductItemMeta3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="div.product-item-meta">
      <AProductItemMetaTitle3 />
      <DivProductItemMetaPriceListContainer3 />
      <PProductItemMetaColorCount3 />
    </div>
  );
}

function DivProductItemInfo3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full z-[1]" data-name="div.product-item__info">
      <DivProductItemMeta3 />
    </div>
  );
}

function ProductItem3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_297.63px_0_892.78px] isolate items-start" data-name="product-item">
      <DivProductItemImageWrapperMargin3 />
      <DivProductItemInfo3 />
    </div>
  );
}

function MerinoWoolRovingHoney() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING HONEY">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingHoney} />
      </div>
    </div>
  );
}

function AProductItemAspectRatio4() {
  return (
    <div className="aspect-[273.5899963378906/273.5899963378906] relative shrink-0 w-full" data-name="a.product-item__aspect-ratio">
      <MerinoWoolRovingHoney />
    </div>
  );
}

function DivProductItemImageWrapper4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div.product-item__image-wrapper">
      <AProductItemAspectRatio4 />
    </div>
  );
}

function DivProductItemImageWrapperMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="div.product-item__image-wrapper:margin">
      <DivProductItemImageWrapper4 />
    </div>
  );
}

function AProductItemMetaTitle4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="a.product-item-meta__title">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">MERINO WOOL ROVING HONEY</p>
      </div>
    </div>
  );
}

function DivProductItemMetaPriceListContainer4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.product-item-meta__price-list-container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function PProductItemMetaColorCount4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.product-item-meta__color-count">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function DivProductItemMeta4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="div.product-item-meta">
      <AProductItemMetaTitle4 />
      <DivProductItemMetaPriceListContainer4 />
      <PProductItemMetaColorCount4 />
    </div>
  );
}

function DivProductItemInfo4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full z-[1]" data-name="div.product-item__info">
      <DivProductItemMeta4 />
    </div>
  );
}

function ProductItem4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0.03px_0_1190.38px] isolate items-start" data-name="product-item">
      <DivProductItemImageWrapperMargin4 />
      <DivProductItemInfo4 />
    </div>
  );
}

function MerinoWoolRovingKhaiki() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING KHAIKI">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingKhaiki} />
      </div>
    </div>
  );
}

function AProductItemAspectRatio5() {
  return (
    <div className="aspect-[273.5899963378906/273.5899963378906] relative shrink-0 w-full" data-name="a.product-item__aspect-ratio">
      <MerinoWoolRovingKhaiki />
    </div>
  );
}

function DivProductItemImageWrapper5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div.product-item__image-wrapper">
      <AProductItemAspectRatio5 />
    </div>
  );
}

function DivProductItemImageWrapperMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="div.product-item__image-wrapper:margin">
      <DivProductItemImageWrapper5 />
    </div>
  );
}

function AProductItemMetaTitle5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="a.product-item-meta__title">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">MERINO WOOL ROVING KHAIKI</p>
      </div>
    </div>
  );
}

function DivProductItemMetaPriceListContainer5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.product-item-meta__price-list-container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function PProductItemMetaColorCount5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.product-item-meta__color-count">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function DivProductItemMeta5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="div.product-item-meta">
      <AProductItemMetaTitle5 />
      <DivProductItemMetaPriceListContainer5 />
      <PProductItemMetaColorCount5 />
    </div>
  );
}

function DivProductItemInfo5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full z-[1]" data-name="div.product-item__info">
      <DivProductItemMeta5 />
    </div>
  );
}

function ProductItem5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-297.56px_0_1487.97px] isolate items-start" data-name="product-item">
      <DivProductItemImageWrapperMargin5 />
      <DivProductItemInfo5 />
    </div>
  );
}

function MerinoWoolRovingPersimmon() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING PERSIMMON">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingPersimmon} />
      </div>
    </div>
  );
}

function AProductItemAspectRatio6() {
  return (
    <div className="aspect-[273.5899963378906/273.5899963378906] relative shrink-0 w-full" data-name="a.product-item__aspect-ratio">
      <MerinoWoolRovingPersimmon />
    </div>
  );
}

function DivProductItemImageWrapper6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div.product-item__image-wrapper">
      <AProductItemAspectRatio6 />
    </div>
  );
}

function DivProductItemImageWrapperMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="div.product-item__image-wrapper:margin">
      <DivProductItemImageWrapper6 />
    </div>
  );
}

function AProductItemMetaTitle6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="a.product-item-meta__title">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">MERINO WOOL ROVING PERSIMMON</p>
      </div>
    </div>
  );
}

function DivProductItemMetaPriceListContainer6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.product-item-meta__price-list-container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function PProductItemMetaColorCount6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.product-item-meta__color-count">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function DivProductItemMeta6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="div.product-item-meta">
      <AProductItemMetaTitle6 />
      <DivProductItemMetaPriceListContainer6 />
      <PProductItemMetaColorCount6 />
    </div>
  );
}

function DivProductItemInfo6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full z-[1]" data-name="div.product-item__info">
      <DivProductItemMeta6 />
    </div>
  );
}

function ProductItem6() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-595.15px_0_1785.56px] isolate items-start" data-name="product-item">
      <DivProductItemImageWrapperMargin6 />
      <DivProductItemInfo6 />
    </div>
  );
}

function MerinoWoolRovingCandy() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="MERINO WOOL ROVING CANDY">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMerinoWoolRovingCandy} />
      </div>
    </div>
  );
}

function AProductItemAspectRatio7() {
  return (
    <div className="aspect-[273.5899963378906/273.5899963378906] relative shrink-0 w-full" data-name="a.product-item__aspect-ratio">
      <MerinoWoolRovingCandy />
    </div>
  );
}

function DivProductItemImageWrapper7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div.product-item__image-wrapper">
      <AProductItemAspectRatio7 />
    </div>
  );
}

function DivProductItemImageWrapperMargin7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full z-[2]" data-name="div.product-item__image-wrapper:margin">
      <DivProductItemImageWrapper7 />
    </div>
  );
}

function AProductItemMetaTitle7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="a.product-item-meta__title">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[22.5px]">MERINO WOOL ROVING CANDY</p>
      </div>
    </div>
  );
}

function DivProductItemMetaPriceListContainer7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.product-item-meta__price-list-container">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px]">From $4.99</p>
      </div>
    </div>
  );
}

function PProductItemMetaColorCount7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.product-item-meta__color-count">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(85,83,72,0.7)] text-center whitespace-nowrap">
        <p className="leading-[24px]">1 color available</p>
      </div>
    </div>
  );
}

function DivProductItemMeta7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="div.product-item-meta">
      <AProductItemMetaTitle7 />
      <DivProductItemMetaPriceListContainer7 />
      <PProductItemMetaColorCount7 />
    </div>
  );
}

function DivProductItemInfo7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full z-[1]" data-name="div.product-item__info">
      <DivProductItemMeta7 />
    </div>
  );
}

function ProductItem7() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-892.75px_0_2083.16px] isolate items-start" data-name="product-item">
      <DivProductItemImageWrapperMargin7 />
      <DivProductItemInfo7 />
    </div>
  );
}

function ProductList() {
  return (
    <div className="h-[378.09px] overflow-x-auto overflow-y-clip relative shrink-0 w-[1464px]" data-name="product-list">
      <ProductItem />
      <ProductItem1 />
      <ProductItem2 />
      <ProductItem3 />
      <ProductItem4 />
      <ProductItem5 />
      <ProductItem6 />
      <ProductItem7 />
    </div>
  );
}

function DivContainer2() {
  return (
    <div className="max-w-[1600px] relative shrink-0 w-full" data-name="div.container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32.01px] items-center max-w-[inherit] px-[40px] relative w-full">
          <DivTextContainer />
          <ProductList />
        </div>
      </div>
    </div>
  );
}

function DivSectionColorWrapper1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="div.section__color-wrapper">
      <div className="content-stretch flex flex-col items-start px-[160px] relative w-full">
        <DivContainer2 />
      </div>
    </div>
  );
}

function SplitLines2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="split-lines">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[1px] uppercase w-full">
        <p className="leading-[14.77px] whitespace-pre-wrap">CASHMERE</p>
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="span">
      <div className="flex flex-col font-['Nunito:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.8px] w-[323.306px]">
        <p className="leading-[31.11px] whitespace-pre-wrap">The “Soft Gold” Of Natural</p>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="span">
      <div className="flex flex-col font-['Nunito:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.8px] w-[73.895px]">
        <p className="leading-[31.11px] whitespace-pre-wrap">Fibers</p>
      </div>
    </div>
  );
}

function SplitLines3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="split-lines">
      <Span />
      <Span1 />
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[26px] relative shrink-0 text-[#555348] text-[15px] w-full whitespace-pre-wrap">
        <p className="mb-0">Cashmere is a type of luxury wool that comes from the</p>
        <p className="mb-0">Cashmere goat. It is known for its softness, warmth, and</p>
        <p className="mb-0">lightweight feel. Cashmere highly sought after and is</p>
        <p className="mb-0">often used in high-end clothing and accessories because</p>
        <p className="mb-0">of its premium quality. It is also very insulating, making it</p>
        <p className="mb-0">ideal for cold weather clothing. Cashmere can be more</p>
        <p className="mb-0">expensive than other types of wool due to its rarity and</p>
        <p className="mb-0">the fact that it takes more time and effort to produce.</p>
        <p className="mb-0">However, many people find that the investment is worth it</p>
        <p className="mb-0">due to the long-lasting quality and comfort of cashmere</p>
        <p>garments and accessories.</p>
      </div>
    </div>
  );
}

function ImageWithTextItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-h-px min-w-px relative self-stretch" data-name="image-with-text-item">
      <SplitLines2 />
      <SplitLines3 />
      <P1 />
    </div>
  );
}

function DivImageWithTextContentList() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-[423.8800048828125px] relative shrink-0 w-full" data-name="div.image-with-text__content-list">
      <ImageWithTextItem />
    </div>
  );
}

function SpanHeading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="span.heading">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[14.77px]">WHAT IS CASHMERE?</p>
      </div>
    </div>
  );
}

function ButtonImageWithTextNavigationItem() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="button.image-with-text__navigation-item">
      <div className="bg-[rgba(85,83,72,0.15)] h-[2px] shrink-0 w-full" data-name="::before" />
      <SpanHeading />
    </div>
  );
}

function SpanHeading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="span.heading">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[14.77px]">WHY UNDYED YARNS</p>
      </div>
    </div>
  );
}

function ButtonImageWithTextNavigationItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="button.image-with-text__navigation-item">
      <div className="bg-[rgba(85,83,72,0.15)] h-[2px] shrink-0 w-full" data-name="::before" />
      <SpanHeading1 />
    </div>
  );
}

function PageDots1() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0" data-name="page-dots">
      <ButtonImageWithTextNavigationItem />
      <ButtonImageWithTextNavigationItem1 />
    </div>
  );
}

function DivImageWithTextContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center pb-[36.23px] pt-[32px] px-[32px] relative shrink-0 w-[456px]" data-name="div.image-with-text__content-wrapper">
      <DivImageWithTextContentList />
      <PageDots1 />
    </div>
  );
}

function DivImageWithTextContentWrapperMargin() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[456px] relative z-[2]" data-name="div.image-with-text__content-wrapper:margin">
      <div className="content-stretch flex flex-col items-start min-w-[inherit] px-[152px] relative w-full">
        <DivImageWithTextContentWrapper />
      </div>
    </div>
  );
}

function Component20240419102555Jpg() {
  return (
    <div className="aspect-[760/760] relative shrink-0 w-full" data-name="20240419102555.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img20240419102555Jpg} />
      </div>
    </div>
  );
}

function DivImageWithTextImageWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative z-[1]" data-name="div.image-with-text__image-wrapper">
      <Component20240419102555Jpg />
    </div>
  );
}

function DivImageWithTextWrapper() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="div.image-with-text__wrapper">
      <DivImageWithTextContentWrapperMargin />
      <DivImageWithTextImageWrapper />
    </div>
  );
}

function ImageWithText() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-[1520px]" data-name="image-with-text">
      <div className="absolute bg-[#e6dfd7] bottom-0 left-0 right-1/2 top-0" data-name="::before" />
      <DivImageWithTextWrapper />
    </div>
  );
}

function Component20240419102559Jpg() {
  return (
    <div className="aspect-[760/760] relative shrink-0 w-full" data-name="20240419102559.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img20240419102559Jpg} />
      </div>
    </div>
  );
}

function DivImageWithTextImageWrapper1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="div.image-with-text__image-wrapper">
      <Component20240419102559Jpg />
    </div>
  );
}

function SplitLines4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="split-lines">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[1px] uppercase w-full">
        <p className="leading-[14.77px] whitespace-pre-wrap">Promotion plan</p>
      </div>
    </div>
  );
}

function SplitLines5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="split-lines">
      <div className="flex flex-col font-['Nunito:ExtraLight',sans-serif] font-extralight justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.8px] w-[202.118px]">
        <p className="leading-[31.11px] whitespace-pre-wrap">How to support?</p>
      </div>
    </div>
  );
}

function P2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[26px] relative shrink-0 text-[#555348] text-[15px] w-full whitespace-pre-wrap">
        <p className="mb-0">By purchasing from our online store or dealer, you will</p>
        <p className="mb-0">automatically support our project.</p>
        <p className="mb-0">{`Let's make a difference together - join, and weave Your`}</p>
        <p className="mb-0">tree is with us!</p>
        <p className="mb-0">When you hang out at home, at the same time, you are</p>
        <p className="mb-0">{`doing good for the environment: today, let's plant trees`}</p>
        <p>together to create a greener tomorrow!</p>
      </div>
    </div>
  );
}

function ImageWithTextItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-h-px min-w-px relative self-stretch" data-name="image-with-text-item">
      <SplitLines4 />
      <SplitLines5 />
      <P2 />
    </div>
  );
}

function DivImageWithTextContentList1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="div.image-with-text__content-list">
      <ImageWithTextItem1 />
    </div>
  );
}

function SpanHeading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="span.heading">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[14.77px]">Plan</p>
      </div>
    </div>
  );
}

function ButtonImageWithTextNavigationItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[102.94999694824219px] relative shrink-0" data-name="button.image-with-text__navigation-item">
      <div className="bg-[rgba(85,83,72,0.15)] h-[2px] shrink-0 w-full" data-name="::before" />
      <SpanHeading2 />
    </div>
  );
}

function SpanHeading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="span.heading">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[14.77px]">Nature fibers</p>
      </div>
    </div>
  );
}

function ButtonImageWithTextNavigationItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="button.image-with-text__navigation-item">
      <div className="bg-[rgba(85,83,72,0.15)] h-[2px] shrink-0 w-full" data-name="::before" />
      <SpanHeading3 />
    </div>
  );
}

function PageDots2() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0" data-name="page-dots">
      <ButtonImageWithTextNavigationItem2 />
      <ButtonImageWithTextNavigationItem3 />
    </div>
  );
}

function DivImageWithTextContentWrapper1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center pb-[36.23px] pt-[32px] px-[32px] relative shrink-0 w-[456px]" data-name="div.image-with-text__content-wrapper">
      <DivImageWithTextContentList1 />
      <PageDots2 />
    </div>
  );
}

function DivImageWithTextContentWrapperMargin1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[456px] relative" data-name="div.image-with-text__content-wrapper:margin">
      <div className="content-stretch flex flex-col items-start min-w-[inherit] px-[152px] relative w-full">
        <DivImageWithTextContentWrapper1 />
      </div>
    </div>
  );
}

function DivImageWithTextWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="div.image-with-text__wrapper">
      <DivImageWithTextImageWrapper1 />
      <DivImageWithTextContentWrapperMargin1 />
    </div>
  );
}

function ImageWithText1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-[1520px]" data-name="image-with-text">
      <div className="absolute bg-[#e6dfd7] bottom-0 left-1/2 right-0 top-0" data-name="::before" />
      <DivImageWithTextWrapper1 />
    </div>
  );
}

function Component85Jpg() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[1920px]" data-name="85.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[153.07%] left-0 max-w-none top-[-26.53%] w-full" src={img85Jpg} />
      </div>
    </div>
  );
}

function DivImageWithTextBlockImageWrapper1() {
  return (
    <div className="absolute bg-[#f4f5f5] inset-0 overflow-clip" data-name="div.image-with-text-block__image-wrapper">
      <Component85Jpg />
    </div>
  );
}

function H2Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.heading">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[1px] uppercase w-full">
        <p className="leading-[14.77px] whitespace-pre-wrap">SUBSCRIBE TO OUR NEWSLETTER!</p>
      </div>
    </div>
  );
}

function P3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[26px] relative shrink-0 text-[#555348] text-[15px] w-full whitespace-pre-wrap">
        <p className="mb-0">Receive promotions, new products, and interesting facts</p>
        <p>directly in your inbox.</p>
      </div>
    </div>
  );
}

function InputInputField() {
  return (
    <div className="h-[45px] relative rounded-[8px] shrink-0 w-full" data-name="input.input__field">
      <div aria-hidden="true" className="absolute border border-[rgba(85,83,72,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LabelInputLabel() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[12px] px-[5px] top-[15px]" data-name="label.input__label">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(85,83,72,0.7)] whitespace-nowrap">
        <p className="leading-[15px]">Your e-mail</p>
      </div>
    </div>
  );
}

function DivInput() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[246.31px]" data-name="div.input">
      <InputInputField />
      <LabelInputLabel />
    </div>
  );
}

function SpanLoaderButtonText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="span.loader-button__text">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#dedac8] text-[13px] text-center tracking-[2px] uppercase whitespace-nowrap">
        <p className="leading-[45px]">Subscribe</p>
      </div>
    </div>
  );
}

function ButtonButton() {
  return (
    <div className="bg-[#555348] relative rounded-[8px] shrink-0 w-full" data-name="button.button">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[35px] relative w-full">
          <SpanLoaderButtonText />
        </div>
      </div>
    </div>
  );
}

function DivInput1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[158.08px]" data-name="div.input">
      <ButtonButton />
    </div>
  );
}

function DivInputRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="div.input-row">
      <DivInput />
      <DivInput1 />
    </div>
  );
}

function DivImageWithTextBlockContent1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[48px] relative rounded-[8px] shrink-0 w-[516.39px]" data-name="div.image-with-text-block__content">
      <H2Heading2 />
      <P3 />
      <DivInputRow />
    </div>
  );
}

function DivContainer3() {
  return (
    <div className="content-stretch flex flex-col items-end max-w-[1600px] pl-[966.42px] pr-[117.19px] py-[56px] relative shrink-0 w-[1600px]" data-name="div.container">
      <DivImageWithTextBlockContent1 />
    </div>
  );
}

function ImageWithTextBlock1() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[400px] pb-[16.12px] pt-[16.11px] relative shrink-0 w-full" data-name="image-with-text-block">
      <DivImageWithTextBlockImageWrapper1 />
      <DivContainer3 />
    </div>
  );
}

function DivMain() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-center left-0 right-0 top-[44px]" data-name="div#main">
      <SlideShow />
      <DivSectionColorWrapper />
      <ImageWithTextBlock />
      <MediaGrid />
      <DivSectionColorWrapper1 />
      <ImageWithText />
      <ImageWithText1 />
      <ImageWithTextBlock1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p9e9bf40} fill="var(--fill-0, #555348)" id="Vector" stroke="var(--stroke-0, #555348)" strokeWidth="0.375" />
        </g>
      </svg>
    </div>
  );
}

function DivTextWithIconsIconWrapper() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.text-with-icons__icon-wrapper">
      <Frame3 />
    </div>
  );
}

function PHeading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.heading">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[14.77px]">CONTACT US BY EMAIL.</p>
      </div>
    </div>
  );
}

function P4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[26px] mb-0">Would you like to contact us? Send us a message</p>
        <p>
          <span className="leading-[26px]">{`via our `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline">contact form</span>
          <span className="leading-[26px]">.</span>
        </p>
      </div>
    </div>
  );
}

function DivTextWithIconsContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="div.text-with-icons__content-wrapper">
      <PHeading3 />
      <P4 />
    </div>
  );
}

function NativeCarouselItem() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="native-carousel-item">
      <DivTextWithIconsIconWrapper />
      <DivTextWithIconsContentWrapper />
    </div>
  );
}

function NativeCarousel() {
  return (
    <div className="relative shrink-0 w-full" data-name="native-carousel">
      <div className="flex flex-col justify-center overflow-x-auto overflow-y-clip size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[1176px] relative w-full">
          <NativeCarouselItem />
        </div>
      </div>
    </div>
  );
}

function DivSectionColorWrapper2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[200px] right-0 top-[5030.11px]" data-name="div.section__color-wrapper">
      <NativeCarousel />
    </div>
  );
}

function PFooterItemTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.footer__item-title">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#555348] text-[12px] tracking-[1px] uppercase w-full">
        <p className="leading-[14.77px] whitespace-pre-wrap">Newsletter</p>
      </div>
    </div>
  );
}

function P5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="leading-[26px] whitespace-pre-wrap">Subscribe to receive updates, and more.</p>
      </div>
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[rgba(85,83,72,0.7)] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Your e-mail</p>
        </div>
      </div>
    </div>
  );
}

function InputInputField1() {
  return (
    <div className="h-[45px] relative rounded-[8px] shrink-0 w-full" data-name="input.input__field">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[14px] pl-[17px] pr-[62px] pt-[13px] relative size-full">
          <DivPlaceholder />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9c6b5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p29c16400} fill="var(--fill-0, #DEDAC8)" id="Vector" stroke="var(--stroke-0, #DEDAC8)" strokeWidth="0.3125" />
        </g>
      </svg>
    </div>
  );
}

function ButtonInputSubmitIcon() {
  return (
    <div className="absolute bg-[#555348] bottom-0 content-stretch flex items-center justify-center py-[12.5px] right-0 rounded-br-[8px] rounded-tr-[8px] top-0 w-[45px]" data-name="button.input__submit-icon">
      <Frame4 />
    </div>
  );
}

function DivInput2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.input">
      <InputInputField1 />
      <ButtonInputSubmitIcon />
    </div>
  );
}

function DivFooterItemContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.footer__item-content">
      <P5 />
      <DivInput2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 24">
        <g id="Frame">
          <path d={svgPaths.p18ed4e00} fill="var(--fill-0, #DEDAC8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FollowUsOnFacebook() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Follow us on Facebook">
      <Frame5 />
    </div>
  );
}

function LiSocialMediaItem() {
  return (
    <div className="bg-[#555348] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[9999px] self-stretch" data-name="li.social-media__item">
      <FollowUsOnFacebook />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 24">
        <g id="Frame">
          <path d={svgPaths.pa7f2840} fill="var(--fill-0, #DEDAC8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FollowUsOnTwitter() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Follow us on Twitter">
      <Frame6 />
    </div>
  );
}

function LiSocialMediaItem1() {
  return (
    <div className="bg-[#555348] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[9999px] self-stretch" data-name="li.social-media__item">
      <FollowUsOnTwitter />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 24">
        <g id="Frame">
          <path d={svgPaths.pa8cb500} fill="var(--fill-0, #DEDAC8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FollowUsOnInstagram() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Follow us on Instagram">
      <Frame7 />
    </div>
  );
}

function LiSocialMediaItem2() {
  return (
    <div className="bg-[#555348] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[9999px] self-stretch" data-name="li.social-media__item">
      <FollowUsOnInstagram />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 24">
        <g id="Frame">
          <path d={svgPaths.p141bde00} fill="var(--fill-0, #DEDAC8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FollowUsOnPinterest() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Follow us on Pinterest">
      <Frame8 />
    </div>
  );
}

function LiSocialMediaItem3() {
  return (
    <div className="bg-[#555348] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[9999px] self-stretch" data-name="li.social-media__item">
      <FollowUsOnPinterest />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 24">
        <g id="Frame">
          <path d={svgPaths.p2221a700} fill="var(--fill-0, #DEDAC8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FollowUsOnYouTube() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Follow us on YouTube">
      <Frame9 />
    </div>
  );
}

function LiSocialMediaItem4() {
  return (
    <div className="bg-[#555348] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[9999px] self-stretch" data-name="li.social-media__item">
      <FollowUsOnYouTube />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 24">
        <g id="Frame">
          <path d={svgPaths.p16ad0a00} fill="var(--fill-0, #DEDAC8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FollowUsOnTikTok() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Follow us on TikTok">
      <Frame10 />
    </div>
  );
}

function LiSocialMediaItem5() {
  return (
    <div className="bg-[#555348] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[9999px] self-stretch" data-name="li.social-media__item">
      <FollowUsOnTikTok />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 24">
        <g id="Frame">
          <path d={svgPaths.p342f1d00} fill="var(--fill-0, #DEDAC8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FollowUsOnWhatsApp() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Follow us on WhatsApp">
      <Frame11 />
    </div>
  );
}

function LiSocialMediaItem6() {
  return (
    <div className="bg-[#555348] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[9999px] self-stretch" data-name="li.social-media__item">
      <FollowUsOnWhatsApp />
    </div>
  );
}

function UlSocialMedia() {
  return (
    <div className="relative shrink-0 w-full" data-name="ul.social-media">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center pr-[41px] pt-[12px] relative w-full">
          <LiSocialMediaItem />
          <LiSocialMediaItem1 />
          <LiSocialMediaItem2 />
          <LiSocialMediaItem3 />
          <LiSocialMediaItem4 />
          <LiSocialMediaItem5 />
          <LiSocialMediaItem6 />
        </div>
      </div>
    </div>
  );
}

function DivFooterItem() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[325px] relative self-stretch shrink-0 w-[325px]" data-name="div.footer__item">
      <PFooterItemTitle />
      <DivFooterItemContent />
      <UlSocialMedia />
    </div>
  );
}

function PFooterItemTitle1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.footer__item-title">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#555348] text-[12px] tracking-[1px] uppercase w-full">
        <p className="leading-[14.77px] whitespace-pre-wrap">COLLECTION</p>
      </div>
    </div>
  );
}

function LiLinklistItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">COLOR WOOL</p>
      </div>
    </div>
  );
}

function LiLinklistItem1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">FIBERS ROVING</p>
      </div>
    </div>
  );
}

function LiLinklistItem2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">YARNS</p>
      </div>
    </div>
  );
}

function LiLinklistItem3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">ACCESSORIES</p>
      </div>
    </div>
  );
}

function UlLinklist() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ul.linklist">
      <LiLinklistItem />
      <LiLinklistItem1 />
      <LiLinklistItem2 />
      <LiLinklistItem3 />
    </div>
  );
}

function DivFooterItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start max-w-[325px] relative self-stretch shrink-0 w-[195.03px]" data-name="div.footer__item">
      <PFooterItemTitle1 />
      <UlLinklist />
    </div>
  );
}

function PFooterItemTitle2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.footer__item-title">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#555348] text-[12px] tracking-[1px] uppercase w-full">
        <p className="leading-[14.77px] whitespace-pre-wrap">EXOTIC FIBER</p>
      </div>
    </div>
  );
}

function LiLinklistItem4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">About Us</p>
      </div>
    </div>
  );
}

function LiLinklistItem5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">{`Refer & Earn`}</p>
      </div>
    </div>
  );
}

function LiLinklistItem6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">Our Material</p>
      </div>
    </div>
  );
}

function LiLinklistItem7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">How it Works</p>
      </div>
    </div>
  );
}

function LiLinklistItem8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">Our Values</p>
      </div>
    </div>
  );
}

function LiLinklistItem9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">Our Factories</p>
      </div>
    </div>
  );
}

function LiLinklistItem10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">Sustainability</p>
      </div>
    </div>
  );
}

function LiLinklistItem11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">Wholesale B2B</p>
      </div>
    </div>
  );
}

function UlLinklist1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ul.linklist">
      <LiLinklistItem4 />
      <LiLinklistItem5 />
      <LiLinklistItem6 />
      <LiLinklistItem7 />
      <LiLinklistItem8 />
      <LiLinklistItem9 />
      <LiLinklistItem10 />
      <LiLinklistItem11 />
    </div>
  );
}

function DivFooterItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start max-w-[325px] relative self-stretch shrink-0 w-[155.32px]" data-name="div.footer__item">
      <PFooterItemTitle2 />
      <UlLinklist1 />
    </div>
  );
}

function PFooterItemTitle3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.footer__item-title">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#555348] text-[12px] tracking-[1px] uppercase w-full">
        <p className="leading-[14.77px] whitespace-pre-wrap">CUSTOMER SERVICE</p>
      </div>
    </div>
  );
}

function LiLinklistItem12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">My Account</p>
      </div>
    </div>
  );
}

function LiLinklistItem13() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">FAQ</p>
      </div>
    </div>
  );
}

function LiLinklistItem14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">My Orders</p>
      </div>
    </div>
  );
}

function LiLinklistItem15() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">Shipping</p>
      </div>
    </div>
  );
}

function LiLinklistItem16() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">{`Return&Exchange`}</p>
      </div>
    </div>
  );
}

function LiLinklistItem17() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">Cookie Policy</p>
      </div>
    </div>
  );
}

function LiLinklistItem18() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">Contact Us</p>
      </div>
    </div>
  );
}

function LiLinklistItem19() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="li.linklist__item">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="decoration-[rgba(85,83,72,0.35)] decoration-solid leading-[26px] underline whitespace-pre-wrap">Blogs</p>
      </div>
    </div>
  );
}

function UlLinklist2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ul.linklist">
      <LiLinklistItem12 />
      <LiLinklistItem13 />
      <LiLinklistItem14 />
      <LiLinklistItem15 />
      <LiLinklistItem16 />
      <LiLinklistItem17 />
      <LiLinklistItem18 />
      <LiLinklistItem19 />
    </div>
  );
}

function DivFooterItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start max-w-[325px] relative self-stretch shrink-0 w-[190.61px]" data-name="div.footer__item">
      <PFooterItemTitle3 />
      <UlLinklist2 />
    </div>
  );
}

function PFooterItemTitle4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.footer__item-title">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#555348] text-[12px] tracking-[1px] uppercase w-full">
        <p className="leading-[14.77px] whitespace-pre-wrap">ABOUT EXOTIC FIBER</p>
      </div>
    </div>
  );
}

function P6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555348] text-[15px] w-full">
        <p className="leading-[26px] whitespace-pre-wrap">A sustainable fiber company</p>
      </div>
    </div>
  );
}

function P7() {
  return (
    <div className="content-stretch flex flex-col font-['Figtree:Regular',sans-serif] font-normal gap-[26px] items-start leading-[26px] pt-[26px] relative shrink-0 text-[#555348] text-[15px] w-full whitespace-nowrap" data-name="p">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="mb-0">We dedicated ourselves to providing and</p>
        <p>creating the best natural fiber craft</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="mb-0">1551 North Tustin Avenue Suite 845</p>
        <p className="mb-0">Santa Ana 92705 CA</p>
        <p className="mb-0">+1 949 621 7806</p>
        <p>info@exoticfiber.com</p>
      </div>
    </div>
  );
}

function DivFooterItemContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full" data-name="div.footer__item-content">
      <P6 />
      <P7 />
    </div>
  );
}

function DivFooterItem4() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start max-w-[325px] relative self-stretch shrink-0 w-[296.71px]" data-name="div.footer__item">
      <PFooterItemTitle4 />
      <DivFooterItemContent1 />
    </div>
  );
}

function DivFooterItemList() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.footer__item-list">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[68.3px] items-start justify-center pr-[84.09px] relative w-full">
          <DivFooterItem />
          <DivFooterItem1 />
          <DivFooterItem2 />
          <DivFooterItem3 />
          <DivFooterItem4 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[38px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      </svg>
      <div className="absolute inset-[4.17%_2.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22">
          <path d={svgPaths.pc76d200} fill="var(--fill-0, #006FCF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.98%_2.63%_16.86%_57.93%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.988 8.439">
          <path d={svgPaths.p37e72a00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[51.84%_24.78%_20.78%_60.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.572 6.57">
          <path d={svgPaths.p348d8c00} fill="var(--fill-0, #006FCF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[51.84%_2.63%_20.78%_75.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.443 6.573">
          <path d={svgPaths.p13325d80} fill="var(--fill-0, #006FCF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[48.08%] left-1/2 right-[2.63%] top-[16.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 8.421">
          <path d={svgPaths.p9847a80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[20.65%_24.71%_52%_53.89%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.13 6.566">
          <path d={svgPaths.p17d0e600} fill="var(--fill-0, #006FCF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[20.64%_2.63%_51.94%_75.21%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.419 6.582">
          <path d={svgPaths.p1c9d5140} fill="var(--fill-0, #006FCF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center overflow-clip relative shrink-0 w-[38px]" data-name="svg">
      <Frame12 />
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start p-[4px] relative shrink-0 w-[46px]" data-name="svg:margin">
      <Svg />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[27.6%_67.09%_34.01%_13.18%]" data-name="Group">
      <div className="absolute inset-[27.6%_72.12%_63.53%_22.96%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.86994 2.12848">
          <path d={svgPaths.p2b995000} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.87%_67.09%_34.01%_13.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49635 6.99084">
          <path d={svgPaths.p2bad9580} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[30.3%_13.42%_24.69%_39.36%]" data-name="Group">
      <div className="absolute inset-[30.3%_44.9%_34.3%_39.36%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.98137 8.49564">
          <path d={svgPaths.p41bf400} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[39.7%_30.17%_34.03%_55.96%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.26906 6.30502">
          <path d={svgPaths.p19bb0100} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[40.02%_13.42%_24.68%_71.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.85793 8.47185">
          <path d={svgPaths.p11bec000} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[27.6%_13.42%_24.69%_13.18%]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[38px]" data-name="Frame">
      <div className="absolute inset-[0_0.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.4888 23.9998">
          <path d={svgPaths.p2deae000} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[3.33%_2.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8889 22.4001">
          <path d={svgPaths.p173addc0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group />
    </div>
  );
}

function Svg1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center overflow-clip relative shrink-0 w-[38px]" data-name="svg">
      <Frame13 />
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start p-[4px] relative shrink-0 w-[46px]" data-name="svg:margin">
      <Svg1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[38px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      </svg>
      <div className="absolute inset-[4.17%_2.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22">
          <path d={svgPaths.pc76d200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[20.83%_26.32%_20.83%_23.65%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0122 14">
          <path d={svgPaths.p231c0a00} fill="var(--fill-0, #3086C8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center overflow-clip relative shrink-0 w-[38px]" data-name="svg">
      <Frame14 />
    </div>
  );
}

function SvgMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start p-[4px] relative shrink-0 w-[46px]" data-name="svg:margin">
      <Svg2 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[38px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      </svg>
      <div className="absolute inset-[4.17%_2.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22">
          <path d={svgPaths.pc76d200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.33%_4.53%_46.58%_5.26%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.28 5.78">
          <path d={svgPaths.p33f46400} fill="var(--fill-0, #231F20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.16%_39.23%_46.42%_45.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.862 5.862">
          <path d={svgPaths.p181f2500} fill="url(#paint0_linear_2_711)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_711" x1="4.428" x2="2.403" y1="5.277" y2="2.106">
              <stop stopColor="#F68D20" />
              <stop offset="0.25" stopColor="#F68D20" />
              <stop offset="0.533" stopColor="#F68D20" />
              <stop offset="0.62" stopColor="#F79E1B" />
              <stop offset="0.723" stopColor="#F79E1B" />
              <stop offset="1" stopColor="#F79E1B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[29.16%_39.23%_46.42%_45.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.862 5.862">
          <path d={svgPaths.p181f2500} fill="url(#paint0_linear_2_703)" id="Vector" opacity="0.65" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_703" x1="4.109" x2="1.149" y1="5.234" y2="-0.552">
              <stop stopColor="#F79E1B" />
              <stop offset="0.359" stopColor="#E16F27" />
              <stop offset="0.703" stopColor="#FF5F00" />
              <stop offset="0.982" stopColor="#FF5F00" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[30.65%_3.61%_67.35%_95.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.400002 0.48">
          <path d={svgPaths.p34bfe440} fill="var(--fill-0, #231F20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.9%_3.08%_66.6%_94.71%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.84 0.84">
          <path d={svgPaths.p2f6aba80} fill="var(--fill-0, #231F20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[54.1%_2.57%_4.17%_23.62%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.047 10.016">
          <path d={svgPaths.p3caedf00} fill="var(--fill-0, #F79E1B)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center overflow-clip relative shrink-0 w-[38px]" data-name="svg">
      <Frame15 />
    </div>
  );
}

function SvgMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start p-[4px] relative shrink-0 w-[46px]" data-name="svg:margin">
      <Svg3 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[38px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      </svg>
      <div className="absolute inset-[4.17%_2.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22">
          <path d={svgPaths.pc76d200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[30.32%_14.27%_26.83%_44.93%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.501 10.2844">
          <path d={svgPaths.p395bd600} fill="var(--fill-0, #5F6368)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.18%_63.19%_39.09%_25.32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.36548 4.254">
          <path d={svgPaths.p2a780f00} fill="var(--fill-0, #4285F4)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[50.18%_66.74%_34.49%_14.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.062 3.67864">
          <path d={svgPaths.p2e4c3400} fill="var(--fill-0, #34A853)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.1%_81.37%_44.92%_13.39%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.98909 4.075">
          <path d={svgPaths.p2f07d100} fill="var(--fill-0, #FF5F00)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.68%_66.66%_57.02%_14.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.092 3.67163">
          <path d={svgPaths.p9cec500} fill="var(--fill-0, #EE2F53)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center overflow-clip relative shrink-0 w-[38px]" data-name="svg">
      <Frame16 />
    </div>
  );
}

function SvgMargin4() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start p-[4px] relative shrink-0 w-[46px]" data-name="svg:margin">
      <Svg4 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[38px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      </svg>
      <div className="absolute inset-[4.17%_2.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22">
          <path d={svgPaths.pc76d200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[20.83%_42.11%_20.83%_21.05%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p3296bc80} fill="var(--fill-0, #EB001B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[20.83%_21.05%_20.83%_42.11%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p3296bc80} fill="var(--fill-0, #F79E1B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[26.25%_42.11%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11.4">
          <path d={svgPaths.p602e00} fill="var(--fill-0, #FF5F00)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center overflow-clip relative shrink-0 w-[38px]" data-name="svg">
      <Frame17 />
    </div>
  );
}

function SvgMargin5() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start p-[4px] relative shrink-0 w-[46px]" data-name="svg:margin">
      <Svg5 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[38px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      </svg>
      <div className="absolute inset-[4.17%_2.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22">
          <path d={svgPaths.pc76d200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[20.83%_36.91%_33.33%_36.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.975 11">
          <path d={svgPaths.p1fd42b00} fill="var(--fill-0, #003087)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.58%_34.48%_24.58%_43.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.29657 9.8">
          <path d={svgPaths.p18139780} fill="var(--fill-0, #3086C8)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.5%_37.11%_46.67%_45.79%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 5">
          <path d={svgPaths.p36a9da00} fill="var(--fill-0, #012169)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center overflow-clip relative shrink-0 w-[38px]" data-name="svg">
      <Frame18 />
    </div>
  );
}

function SvgMargin6() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start p-[4px] relative shrink-0 w-[46px]" data-name="svg:margin">
      <Svg6 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[38px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      </svg>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p7a33700} fill="var(--fill-0, #5A31F4)" id="Vector" />
      </svg>
      <div className="absolute inset-[28.13%_16.66%_28.12%_16.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.335 10.501">
          <path d={svgPaths.p1d779df1} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center overflow-clip relative shrink-0 w-[38px]" data-name="svg">
      <Frame19 />
    </div>
  );
}

function SvgMargin7() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start p-[4px] relative shrink-0 w-[46px]" data-name="svg:margin">
      <Svg7 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[38px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      </svg>
      <div className="absolute inset-[4.17%_2.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22">
          <path d={svgPaths.pc76d200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.33%_17.89%_33.33%_13.16%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2 8">
          <path d={svgPaths.p117d100} fill="var(--fill-0, #142688)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center overflow-clip relative shrink-0 w-[38px]" data-name="svg">
      <Frame20 />
    </div>
  );
}

function SvgMargin8() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start p-[4px] relative shrink-0 w-[46px]" data-name="svg:margin">
      <Svg8 />
    </div>
  );
}

function DivPaymentMethodsList() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start justify-center relative shrink-0" data-name="div.payment-methods-list">
      <SvgMargin />
      <SvgMargin1 />
      <SvgMargin2 />
      <SvgMargin3 />
      <SvgMargin4 />
      <SvgMargin5 />
      <SvgMargin6 />
      <SvgMargin7 />
      <SvgMargin8 />
    </div>
  );
}

function DivFooterPaymentMethods() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="div.footer__payment-methods">
      <DivPaymentMethodsList />
    </div>
  );
}

function DivFooterAside() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.footer__aside">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[1106px] relative w-full">
          <DivFooterPaymentMethods />
        </div>
      </div>
    </div>
  );
}

function DivFooterInner() {
  return (
    <div className="content-stretch flex flex-col gap-[45.99px] items-start relative shrink-0 w-full" data-name="div.footer__inner">
      <DivFooterItemList />
      <DivFooterAside />
    </div>
  );
}

function DivFooter() {
  return (
    <div className="absolute bg-[#dedac8] content-stretch flex flex-col items-start left-0 pb-[36.01px] pt-[48px] px-[200px] right-0 top-[5188.88px]" data-name="div.footer">
      <DivFooterInner />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute left-[106.91px] size-[12px] top-[8.25px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p11746cf0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.1875" />
        </g>
      </svg>
    </div>
  );
}

function AHeaderLinklistLink() {
  return (
    <div className="h-[26px] relative shrink-0 w-[118.91px]" data-name="a.header__linklist-link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[26px] justify-center leading-[0] left-0 text-[15px] text-white top-[13px] w-[104.271px]">
        <p className="leading-[26px] whitespace-pre-wrap">{`COLOR WOOL `}</p>
      </div>
      <Frame21 />
    </div>
  );
}

function LiHeaderLinklistItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="li.header__linklist-item">
      <AHeaderLinklistLink />
    </div>
  );
}

function LiHeaderLinklistItemMargin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[32px] relative self-stretch shrink-0" data-name="li.header__linklist-item:margin">
      <LiHeaderLinklistItem />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute left-[47.51px] size-[12px] top-[8.25px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p11746cf0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.1875" />
        </g>
      </svg>
    </div>
  );
}

function AHeaderLinklistLink1() {
  return (
    <div className="h-[26px] relative shrink-0 w-[59.52px]" data-name="a.header__linklist-link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[26px] justify-center leading-[0] left-0 text-[15px] text-white top-[13px] w-[44.856px]">
        <p className="leading-[26px] whitespace-pre-wrap">{`SHOP `}</p>
      </div>
      <Frame22 />
    </div>
  );
}

function LiHeaderLinklistItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="li.header__linklist-item">
      <AHeaderLinklistLink1 />
    </div>
  );
}

function LiHeaderLinklistItemMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[32px] relative self-stretch shrink-0" data-name="li.header__linklist-item:margin">
      <LiHeaderLinklistItem1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute left-[108.66px] size-[12px] top-[8.25px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p11746cf0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.1875" />
        </g>
      </svg>
    </div>
  );
}

function AHeaderLinklistLink2() {
  return (
    <div className="h-[26px] relative shrink-0 w-[120.66px]" data-name="a.header__linklist-link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[26px] justify-center leading-[0] left-0 text-[15px] text-white top-[13px] w-[106.024px]">
        <p className="leading-[26px] whitespace-pre-wrap">{`ACCESSORIES `}</p>
      </div>
      <Frame23 />
    </div>
  );
}

function LiHeaderLinklistItem2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="li.header__linklist-item">
      <AHeaderLinklistLink2 />
    </div>
  );
}

function LiHeaderLinklistItemMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[32px] relative self-stretch shrink-0" data-name="li.header__linklist-item:margin">
      <LiHeaderLinklistItem2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute left-[76.23px] size-[12px] top-[8.25px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p11746cf0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.1875" />
        </g>
      </svg>
    </div>
  );
}

function SpanHeaderLinklistLink() {
  return (
    <div className="h-[26px] relative shrink-0 w-[88.23px]" data-name="span.header__linklist-link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal h-[26px] justify-center leading-[0] left-0 text-[15px] text-white top-[13px] w-[73.543px]">
        <p className="leading-[26px] whitespace-pre-wrap">ABOUT US</p>
      </div>
      <Frame24 />
    </div>
  );
}

function LiHeaderLinklistItem3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="li.header__linklist-item">
      <SpanHeaderLinklistLink />
    </div>
  );
}

function UlHeaderLinklist() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start relative shrink-0" data-name="ul.header__linklist">
      <LiHeaderLinklistItemMargin />
      <LiHeaderLinklistItemMargin1 />
      <LiHeaderLinklistItemMargin2 />
      <LiHeaderLinklistItem3 />
    </div>
  );
}

function DesktopNavigation() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="desktop-navigation">
      <UlHeaderLinklist />
    </div>
  );
}

function LeftPart() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="LEFT PART">
      <DesktopNavigation />
    </div>
  );
}

function Component20240422124744Png() {
  return (
    <div className="h-[134px] max-w-[185px] opacity-0 relative shrink-0 w-[185px]" data-name="20240422124744.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img20240422124744Png} />
      </div>
    </div>
  );
}

function DddPng() {
  return (
    <div className="absolute h-[134px] left-0 max-w-[185px] top-0 w-[185px]" data-name="ddd.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[2.31%] max-w-none top-0 w-[95.37%]" src={imgDddPng} />
      </div>
    </div>
  );
}

function LogoPart() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="LOGO PART">
      <Component20240422124744Png />
      <DddPng />
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p43bc400} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.3125" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Search">
          <path d={svgPaths.p1783a7f0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.3125" />
        </g>
      </svg>
    </div>
  );
}

function Login() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Login">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Login">
          <path d={svgPaths.p1312d880} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.3125" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3ecb980} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.3125" />
        </g>
      </svg>
    </div>
  );
}

function CartCount() {
  return (
    <div className="absolute bg-black content-stretch flex h-[14px] items-center justify-center min-w-[14px] px-[4.08px] right-[-8.16px] rounded-[21px] top-[-4px]" data-name="cart-count">
      <div className="flex flex-col font-['Figtree:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[9px] text-center text-white whitespace-nowrap">
        <p className="leading-[9px]">0</p>
      </div>
    </div>
  );
}

function AHeaderIconWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="a.header__icon-wrapper">
      <Frame26 />
      <CartCount />
    </div>
  );
}

function DivHeaderIconList() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="div.header__icon-list">
      <Frame25 />
      <Search />
      <Login />
      <AHeaderIconWrapper />
    </div>
  );
}

function SecondaryLinksPart() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="SECONDARY LINKS PART">
      <DivHeaderIconList />
    </div>
  );
}

function StoreHeader() {
  return (
    <div className="absolute content-stretch flex items-center left-[200px] py-[24px] right-[200px] top-[44px]" data-name="store-header">
      <LeftPart />
      <LogoPart />
      <SecondaryLinksPart />
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="bg-white relative size-full" data-name="1920w light">
      <DivUplinklyLanguageTranslateFloating />
      <InboxOnlineStoreChat />
      <div className="absolute bg-[#e6e5e4] h-px left-0 right-0 top-[4973.11px]" data-name="sections: footer-group" />
      <DivBottomBar />
      <SectionsHeaderGroupAnnouncementBar />
      <DivMain />
      <DivSectionColorWrapper2 />
      <DivFooter />
      <StoreHeader />
    </div>
  );
}