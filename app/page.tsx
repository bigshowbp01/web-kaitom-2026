import { Fragment } from 'react';
import Image from 'next/image';
import headerImage from '../image/header.png';
import deliveryImage from '../image/T1.jpg';
import eggSizeImage from '../image/SIZE.png';
import logoImage from '../image/LOGO_2024.png';
import shopfrontImage from '../image/kai-tom-delivery-team.jpg';
import teamImage from '../image/kai-tom-customer-pickup.jpg';
import templeStackImage from '../image/kai-tom-hero-luangpho-sothorn.jpg';
import templeGiftsImage from '../image/kai-tom-promo-gifts.jpg';
import packageDisplayImage from '../image/kai-tom-package-display.jpg';
import brandMockupImage from '../image/brand-mockup-1.jpg';
import review01 from '../image/review-01.jpg';
import review02 from '../image/review-02.jpg';
import review03 from '../image/review-03.jpg';
import review04 from '../image/review-04.jpg';
import review05 from '../image/review-05.jpg';
import review06 from '../image/review-06.jpg';
import review07 from '../image/review-07.jpg';
import review08 from '../image/review-08.jpg';

const navigationItems = ['หน้าแรก', 'สินค้า', 'บริการฝากถวาย', 'วิธีสั่งซื้อ', 'รีวิวลูกค้า', 'เกี่ยวกับเรา', 'สื่อที่นำเสนอ', 'ติดต่อเรา'];

const featurePillars = [
  {
    title: 'ต้มใหม่',
    text: 'ทุกวัน',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path d="M12 3.5c-3.2 0-6 5.4-6 9.4a6 6 0 0 0 12 0c0-4-2.8-9.4-6-9.4Z" />
        <path d="M9.2 12.2c0-1.6.6-3.4 1.5-4.7" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'ทานได้',
    text: 'ทุกฟอง',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M12 3 19 5.8v5.3c0 4.4-2.9 7.8-7 9.9-4.1-2.1-7-5.5-7-9.9V5.8L12 3Z" />
        <path d="m9 11.8 2.2 2.2 4.3-4.4" />
      </svg>
    )
  },
  {
    title: 'คัดแตก',
    text: 'ก่อนส่ง',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="m5 13 4.5 4.5L19 8" />
      </svg>
    )
  },
  {
    title: 'ส่งตรงถึงวัด',
    text: 'หลวงพ่อโสธร',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M12 2.5v3M10.5 5.5h3M8 9.5l4-3.5 4 3.5M8 9.5h8M6.5 13h11M7.5 13v6.5M12 13v6.5M16.5 13v6.5M4.5 19.5h15" />
      </svg>
    )
  },
  {
    title: 'ฝากถวาย',
    text: 'แทนได้',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M12 4.5c1.2 1.9 1.8 3.7 1.8 5.5A4.2 4.2 0 0 1 12 13.5a4.2 4.2 0 0 1-1.8-3.5c0-1.8.6-3.6 1.8-5.5Z" />
        <path d="M5 9.5c2 .6 3.6 1.7 4.7 3.3M19 9.5c-2 .6-3.6 1.7-4.7 3.3M4 14c2.4 3 5.1 4.5 8 4.5s5.6-1.5 8-4.5" />
      </svg>
    )
  }
];

const featuredVideos = [
  { title: 'นับหนึ่งถึงล้าน', label: 'รับชมคลิป', url: 'https://youtu.be/9yOd-2LoMtg?si=DowYRrHGMziuTpTw', id: '9yOd-2LoMtg' },
  { title: 'อายุน้อยร้อยล้าน', label: 'รับชมคลิป', url: 'https://youtu.be/MJ-J0ArphhY?si=QFUHB4gQNFKSpJBZ', id: 'MJ-J0ArphhY' },
  { title: 'โต๊ะนี้มีจอง', label: 'รับชมคลิป', url: 'https://youtu.be/xjP7o1RJpY0?si=eA3JHb6Dm_W_q68N&t=447', id: 'xjP7o1RJpY0' },
  { title: 'ไทยทึ่ง WOW!', label: 'รับชมคลิป', url: 'https://youtu.be/74bfWPSALQ0?si=dxB1PS5jxhWvayHs', id: '74bfWPSALQ0' }
];

 

const trustStats = [
  {
    value: '20,000,000+',
    label: 'ฟองที่ส่งแล้ว',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path d="M12 3.5c-3.2 0-6 5.4-6 9.4a6 6 0 0 0 12 0c0-4-2.8-9.4-6-9.4Z" />
      </svg>
    )
  },
  {
    value: '20,000+',
    label: 'ลูกค้าที่ไว้วางใจ',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M15.5 11.5a2.5 2.5 0 1 0-.8-4.9" />
        <path d="M2.5 19c.8-3 3.2-4.5 6-4.5s5.2 1.5 6 4.5" />
        <path d="M16 15c2.3.3 4.7 1.5 5.5 4" />
      </svg>
    )
  },
  {
    value: '10+',
    label: 'ปีประสบการณ์',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M12 2.5v3M10.5 5.5h3M8 9.5l4-3.5 4 3.5M8 9.5h8M6.5 13h11M7.5 13v6.5M12 13v6.5M16.5 13v6.5M4.5 19.5h15" />
      </svg>
    )
  },
  {
    value: '100,000+',
    label: 'ชุดที่ส่งถึงวัด',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M2.5 6.5H13v9H2.5zM13 9.5h4.2L20.5 13v2.5H13z" />
        <circle cx="6.2" cy="17.6" r="1.7" />
        <circle cx="16.6" cy="17.6" r="1.7" />
      </svg>
    )
  }
];

const testimonials = [
  {
    name: 'คุณแนน',
    location: 'กรุงเทพฯ',
    text: 'ออเดอร์ใหญ่ 5,000 ฟอง บริการดีมาก ส่งถึงวัดเรียบร้อยค่ะ ประทับใจมาก',
    image: deliveryImage
  },
  {
    name: 'คุณลิลลี่',
    location: 'สิงคโปร์',
    text: 'ฝากถวายแทน สะดวกมากค่ะ ทางร้านถ่ายรูปส่งให้ ขอบคุณมากนะคะ',
    image: templeGiftsImage
  },
  {
    name: 'คุณอ๊อด',
    location: 'ชลบุรี',
    text: 'ไข่ต้มอร่อย ทานได้ทุกฟอง ต้มใหม่ทุกวันจริงๆค่ะ',
    image: packageDisplayImage
  }
];

const galleryItems = [
  { image: shopfrontImage, title: 'หน้าร้านเจ้ทุเรียน', text: 'สาขา 2 โทร 082-9595396' },
  { image: templeStackImage, title: 'ชุดถวายถึงวัด', text: 'จัดวาง ณ จุดวางไข่ที่วัด' },
  { image: teamImage, title: 'ทีมงานดูแลถึงวัด', text: 'บริการด้วยใจทุกออเดอร์' },
  { image: deliveryImage, title: 'ส่งออเดอร์ถึงลูกค้า', text: 'จัดเต็มคันรถ ส่งตรงถึงที่' }
];

const reviewGallery = [
  { image: review01, alt: 'ลูกค้ากราบไหว้ขอพรที่วัด' },
  { image: review02, alt: 'ชุดไข่ต้มแก้บนพร้อมถวาย' },
  { image: review03, alt: 'ไข่ต้มแก้บนจัดส่งถึงวัด' },
  { image: review04, alt: 'ลูกค้ารับชุดไข่ต้มแก้บน' },
  { image: review05, alt: 'กองไข่ถวายพร้อมพวงมาลัยที่วัด' },
  { image: review06, alt: 'บรรยากาศถวายไข่ต้มที่วัด' },
  { image: review07, alt: 'ชุดแก้บนพร้อมดอกไม้ธูปเทียน' },
  { image: review08, alt: 'ลูกค้าถวายไข่ต้มแก้บน' }
];

const bottomPillars = [
  { icon: '🥚', title: 'ไข่สดเกรด A', text: 'เปลือกหนา ไข่แดงสวย' },
  { icon: '🍲', title: 'ต้มใหม่ทุกวัน', text: 'ไม่มีกลิ่น' },
  { icon: '🌾', title: 'ทานได้ทุกฟอง', text: 'มีน้ำใจคุณภาพ' },
  { icon: '🚚', title: 'ส่งถึงวัดฟรี', text: '100 ฟองขึ้นไป' },
  { icon: '❤', title: 'บริการด้วยใจ', text: 'ใส่ใจทุกออเดอร์' }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbf7ef] text-[#2b1708]">
      <section className="relative overflow-hidden border-b border-[#ead7b2] bg-[linear-gradient(180deg,#fff8eb_0%,#fbf2e1_60%,#f7ecd7_100%)]">
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src={headerImage}
            alt="ไข่ต้มแก้บน เจ้ทุเรียน หลวงพ่อโสธร"
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff8eb_0%,rgba(255,248,235,0.94)_30%,rgba(255,248,235,0.55)_46%,transparent_62%),linear-gradient(180deg,rgba(255,248,235,0.65)_0%,transparent_22%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-4 lg:px-8">
          <header className="flex items-center justify-between gap-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-[#d9a92c]">
                <Image src={logoImage} alt="โลโก้ไข่ต้มแก้บน เจ้ทุเรียน" fill className="object-cover" sizes="56px" />
              </div>
              <div className="leading-tight">
                <p className="flex items-center gap-1 text-[13px] font-bold text-[#8a5c10]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M2.5 19.5 22 12 2.5 4.5v6L15.5 12 2.5 13.5v6Z" />
                  </svg>
                  ไข่ต้มแก้บน
                </p>
                <h1 className="whitespace-nowrap text-2xl font-black leading-tight text-[#2f1505] sm:text-[1.7rem]">เจ้ทุเรียน</h1>
                <p className="text-sm font-bold leading-none text-[#b8871c]">หลวงพ่อโสธร</p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-[15px] font-semibold text-[#3f2a10] xl:flex" aria-label="Main navigation">
              {navigationItems.map((item, index) => (
                <a key={item} href={index === 0 ? '#home' : `#section-${index}`} className={index === 0 ? 'border-b-2 border-[#b8871c] pb-1 font-bold text-[#3a1d05]' : 'pb-1 hover:text-[#6d4812]'}>
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {/* Desktop: phone number + LINE + cart */}
              <a href="tel:0829595396" className="hidden items-center gap-2 xl:inline-flex">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#bf8712] text-white shadow-md">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                  </svg>
                </span>
                <span className="text-lg font-black text-[#2f1505]">082-9595396</span>
              </a>
              <a
                href="https://line.me"
                target="_blank"
                rel="noreferrer"
                className="hidden h-10 w-10 place-items-center rounded-xl bg-[#06c755] text-[10px] font-black text-white shadow-md xl:grid"
                aria-label="LINE"
              >
                LINE
              </a>
              <button className="relative hidden h-11 w-11 place-items-center text-[#8a5c10] xl:grid" aria-label="ตะกร้าสินค้า">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
                  <circle cx="9" cy="20" r="1.6" />
                  <circle cx="17.5" cy="20" r="1.6" />
                  <path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.76L20.5 8H6" />
                </svg>
                <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-[#bf8712] text-[11px] font-black text-white">
                  0
                </span>
              </button>

              {/* Mobile: phone + LINE + hamburger */}
              <a href="tel:0829595396" className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#bf8712] shadow-md ring-1 ring-[#ead7b2] xl:hidden" aria-label="โทร 082-9595396">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>
              </a>
              <a
                href="https://line.me"
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full bg-white text-[10px] font-black text-[#2b1708] shadow-md ring-1 ring-[#ead7b2] xl:hidden"
                aria-label="LINE"
              >
                LINE
              </a>
              <button className="grid h-11 w-11 place-items-center rounded-2xl bg-[#b8871c] text-white shadow-md xl:hidden" aria-label="เปิดเมนู">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </button>
            </div>
          </header>

          <div id="home" className="relative mt-4 h-[250px] overflow-hidden rounded-[1.4rem] lg:hidden">
            <Image
              src={headerImage}
              alt="ไข่ต้มแก้บน เจ้ทุเรียน หลวงพ่อโสธร"
              fill
              priority
              className="object-cover object-[62%_45%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(59,32,8,0.5)_0%,rgba(59,32,8,0.12)_48%,transparent_68%)]" />
            <div className="absolute left-5 top-4">
              <p className="text-2xl font-black leading-tight text-[#f7ecd2] drop-shadow-[0_1px_3px_rgba(40,20,0,0.5)]">ไข่ต้มแก้บน</p>
              <p className="text-[2.4rem] font-black leading-tight text-[#e5af35] drop-shadow-[0_1px_3px_rgba(40,20,0,0.5)]">หลวงพ่อโสธร</p>
              <p className="mt-1 text-[13px] font-bold text-[#fdf6e3] drop-shadow-[0_1px_2px_rgba(40,20,0,0.6)]">ตั้งจิตอธิษฐาน ขอพรสำเร็จ สมหวังทุกประการ</p>
            </div>
          </div>

          <div className="pt-0 lg:max-w-[600px] lg:pb-6 lg:pt-14">
            <div className="hidden lg:block">
              <h2 className="text-[2.6rem] font-black leading-tight tracking-tight text-[#3b2008]">
                ไข่ต้มแก้บน
                <span className="mt-1 block whitespace-nowrap text-[4.6rem] leading-[1.05] text-[#43250a]">หลวงพ่อโสธร</span>
              </h2>
              <p className="mt-3 text-xl font-bold text-[#3f2a10]">ตั้งจิตอธิษฐาน ขอพรสำเร็จ สมหวังทุกประการ</p>
            </div>

            <div className="mt-4 flex items-center justify-between gap-0.5 rounded-2xl bg-white/95 px-2 py-2.5 shadow-sm ring-1 ring-[#ead7b2] lg:hidden">
              {featurePillars.map((item, index) => (
                <Fragment key={item.title}>
                  {index > 0 && <span className="shrink-0 text-[6px] text-[#c9a24a]">◆</span>}
                  <div className="flex items-center gap-1">
                    <span className="shrink-0 text-[#a8770f] [&>svg]:h-3.5 [&>svg]:w-3.5">{item.icon}</span>
                    <span className="leading-tight">
                      <span className="block whitespace-nowrap text-[10px] font-black text-[#3b2008]">{item.title}</span>
                      <span className="block whitespace-nowrap text-[8px] font-semibold text-[#7a5a2d]">{item.text}</span>
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>

            <div className="mt-8 hidden flex-wrap items-start justify-start gap-x-1 gap-y-6 lg:flex">
              {featurePillars.map((item, index) => (
                <Fragment key={item.title}>
                  {index > 0 && <span className="mt-6 text-[10px] text-[#c9a24a]">◆</span>}
                  <div className="flex w-[100px] flex-col items-center text-center">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-[#a8770f] shadow-sm ring-1 ring-[#e8d3a4]">
                      {item.icon}
                    </div>
                    <p className="mt-2 text-sm font-black leading-tight text-[#3b2008]">{item.title}</p>
                    <p className="mt-0.5 text-xs font-semibold text-[#7a5a2d]">{item.text}</p>
                  </div>
                </Fragment>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 lg:mt-8 lg:gap-4">
              <a
                href="#section-2"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(180deg,#c8961d_0%,#a8770f_100%)] px-9 py-4 text-lg font-black text-white shadow-[0_14px_36px_rgba(168,119,15,0.35)] transition hover:brightness-105"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                  <circle cx="9" cy="20" r="1.6" />
                  <circle cx="17.5" cy="20" r="1.6" />
                  <path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.76L20.5 8H6" />
                </svg>
                สั่งซื้อเลย
              </a>
              <p className="flex items-center justify-center gap-2 text-[15px] font-bold text-[#4f3417] sm:justify-start">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0 text-[#a8770f]" aria-hidden="true">
                  <path d="M2.5 6.5H13v9H2.5zM13 9.5h4.2L20.5 13v2.5H13z" />
                  <circle cx="6.2" cy="17.6" r="1.7" />
                  <circle cx="16.6" cy="17.6" r="1.7" />
                </svg>
                <span>
                  100 ฟองขึ้นไป ส่งถึงจุดวางไข่ที่วัด <span className="text-[#d43425]">ฟรี!</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-7 lg:px-8" aria-labelledby="media-heading" id="section-1">
        <div className="text-center">
          <p id="media-heading" className="mt-2 text-2xl font-black text-[#3a1e07]">ได้รับการนำเสนอโดย</p>
          <h3 className="text-sm font-bold tracking-[0.22em] text-[#a26d10] uppercase">ร้านไข่ต้มแก่นที่ได้ความไว้วางใจจากรายการโทรทัศน์และสื่อชั้นนำ</h3>
          
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-[repeat(4,minmax(0,1fr))_260px]">
          {featuredVideos.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[1.35rem] border border-[#ead8b4] bg-white shadow-sm">
              <a href={item.url} target="_blank" rel="noreferrer" className="group block">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#e8c47c]">
                  <img
                    src={`https://i.ytimg.com/vi/${item.id}/maxresdefault.jpg`}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.28)_100%)]" />
                  {/* <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#9c6810] shadow-sm">
                    ปกตัวอย่าง
                  </div> */}

                </div>
              </a>
              <div className="p-4 text-center">
                <h4 className="text-lg font-bold text-[#3a1e07]">{item.title}</h4>
                <a href={item.url} target="_blank" rel="noreferrer" className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-[#bf8712] px-3 py-0.5 text-xs font-bold text-white">
                  <span className="text-xs">▶</span>
                  {item.label}
                </a>
              </div>
            </article>
          ))}

          <div className="hidden rounded-[1.35rem] bg-[linear-gradient(180deg,#c59016_0%,#b88412_100%)] p-5 text-white shadow-sm xl:flex xl:flex-col xl:justify-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-3xl text-[#c48b11] shadow-sm">▶</div>
            <p className="mt-5 text-2xl font-black leading-tight">ดูคลิปทั้งหมด</p>
            <p className="mt-2 text-sm leading-6 text-[#fff7e6]">รวมทุกคลิปย้อนหลัง จากทุกรายการ</p>
          </div>
        </div>

 

 
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 lg:px-8" id="section-2">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.4fr_1.3fr]">
          <div className="relative flex flex-col overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,#4a2e10_0%,#2e1b07_100%)] p-4 text-white shadow-glow">
            <Image
              src={headerImage}
              alt=""
              fill
              aria-hidden="true"
              className="pointer-events-none select-none object-cover object-[center_30%] opacity-15"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <h3 className="relative rounded-full bg-[linear-gradient(90deg,rgba(229,175,53,0.12)_0%,rgba(229,175,53,0.5)_50%,rgba(229,175,53,0.12)_100%)] px-4 py-2 text-center text-xl font-black text-[#ffeec4]">
              ตัวเลขที่เราใส่ใจในทุกวัน
            </h3>
            <div className="relative mt-5 grid flex-1 grid-cols-2 content-center gap-x-1 gap-y-5 sm:grid-cols-4">
              {trustStats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <span className="text-[#ecb73a]">{stat.icon}</span>
                  <div className="mt-2 whitespace-nowrap text-[15px] font-black tracking-tight text-[#fff6e3] xl:text-[17px]">{stat.value}</div>
                  <div className="mt-0.5 text-xs font-semibold text-[#e3cba0]">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="relative mt-4 text-[11px] text-[#c9ad7d]">*ข้อมูล ณ เดือนพฤษภาคม 2567</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-[1.5rem] bg-[linear-gradient(180deg,#3c2409_0%,#28160a_100%)] p-5 text-center text-white shadow-glow">
            <p className="text-base font-black text-[#fff2d2]">รีวิวจากลูกค้าจริง</p>
            <div className="mt-3 flex items-center gap-2">
              <svg viewBox="0 0 48 48" className="h-10 w-10" aria-label="Google">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              <span className="text-5xl font-black leading-none text-white">4.9</span>
            </div>
            <div className="mt-3 flex gap-1 text-[#f6b820]" aria-label="5 ดาว">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9 2.9-6z" />
                </svg>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-[#e9d4ab]">จาก 1,200+ รีวิว</p>
          </div>

          <div className="relative">
            <div className="grid h-full gap-3 md:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="flex gap-3 rounded-[1.4rem] bg-white p-3 shadow-sm ring-1 ring-[#ead8b4]">
                  <div className="relative w-[42%] shrink-0 self-stretch overflow-hidden rounded-[1rem] bg-[#f6e2b1]">
                    <Image src={item.image} alt={`รีวิวจาก${item.name} ${item.location}`} fill className="object-cover" sizes="200px" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                    <p className="text-[13px] font-semibold leading-5 text-[#3f2a10]">{item.text}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f0d29c] text-xs font-black text-[#7f5110]">
                        {item.name.slice(3, 4)}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-bold text-[#3a1e07]">{item.name}</p>
                        <p className="text-[11px] text-[#7e6747]">{item.location}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <button
              className="absolute -right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-[#c8961d] text-xl font-black text-white shadow-md md:grid"
              aria-label="รีวิวถัดไป"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-5 lg:px-8" id="section-3">
        <div className="rounded-[1.6rem] border border-[#eadbc0] bg-white/85 p-4 shadow-sm">
          <div className="grid gap-4 md:grid-cols-5">
            {bottomPillars.map((item) => (
              <div key={item.title} className="flex items-center gap-4 rounded-[1.2rem] px-2 py-2">
                <div className="shrink-0 text-5xl leading-none text-[#bc8514]">{item.icon}</div>
                <div>
                  <p className="font-bold text-[#3a1e07]">{item.title}</p>
                  <p className="text-sm text-[#6b5232]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sticky bottom-0 z-20 border-t border-[#ead8b4] bg-[#fff7ea]/95 px-3 py-3 backdrop-blur md:hidden" aria-label="Mobile bottom navigation">
        <div className="grid grid-cols-5 gap-2 text-center text-xs font-bold text-[#815713]">
          <a href="#home" className="rounded-[1rem] bg-[#f5e6c0] py-2">หน้าร้าน</a>
          <a href="#section-1" className="rounded-[1rem] py-2">สินค้า</a>
          <a href="#section-2" className="rounded-[1rem] py-2">ฝากถวาย</a>
          <a href="#reviews" className="rounded-[1rem] py-2">รีวิว</a>
          <a href="#section-4" className="rounded-[1rem] py-2">ติดต่อเรา</a>
        </div>
      </section>

      <section className="border-t border-[#ead8b4] bg-[#fff6ea] py-10" id="section-4">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#d69b26_0%,#ba7f14_100%)] p-8 text-white shadow-glow lg:p-10">
              <Image
                src={brandMockupImage}
                alt=""
                fill
                aria-hidden="true"
                className="pointer-events-none select-none object-cover opacity-15"
                sizes="(min-width: 1024px) 700px, 100vw"
              />
              <div className="relative flex h-full flex-col justify-center gap-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#fff2ca]">สั่งซื้อ / ติดต่อ</p>
                  <h3 className="mt-2 text-3xl font-black">พร้อมจัดชุดถวายและส่งถึงคุณ</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-[#fff7e6]">
                    สั่งไข่ต้มแก้บนหรือฝากถวายแทนได้เลย ทีมงานจัดชุดพร้อมพวงมาลัยดาวเรืองสดใหม่
                    และส่งถึงจุดวางไข่ที่วัดหลวงพ่อโสธร พร้อมถ่ายรูปยืนยันให้ทุกออเดอร์
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href="tel:0829595396" className="rounded-full bg-white px-6 py-3 text-center font-black text-[#8f5d11]">
                    โทร 082-9595396
                  </a>
                  <a href="https://line.me" className="rounded-full border border-white/80 px-6 py-3 text-center font-black text-white">
                    LINE / แชตสั่งซื้อ
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#ead8b4] bg-white p-4 shadow-sm">
              <h4 className="text-center text-lg font-black text-[#3a1e07]">เลือกขนาดไข่ได้ทุกเบอร์ (0–6)</h4>
              <div className="relative mt-3 overflow-hidden rounded-[1.4rem]">
                <Image
                  src={eggSizeImage}
                  alt="ตารางเปรียบเทียบขนาดไข่แต่ละเบอร์ ตั้งแต่เบอร์ 0 ถึงเบอร์ 6"
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-6 lg:px-8" id="reviews" aria-labelledby="reviews-heading">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#a26d10]">ภาพจริงจากหน้างาน</p>
          <h3 id="reviews-heading" className="mt-2 text-3xl font-black text-[#3a1e07]">ทุกออเดอร์ส่งถึงมือและถึงวัดจริง</h3>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <figure key={item.title} className="group overflow-hidden rounded-[1.4rem] bg-white shadow-sm ring-1 ring-[#ead8b4]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="p-4 text-center">
                <p className="font-bold text-[#3a1e07]">{item.title}</p>
                <p className="mt-0.5 text-sm text-[#6b5232]">{item.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-[#ead8b4] bg-[#fff8ec] py-12" id="review-gallery" aria-labelledby="review-gallery-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#a26d10]">รูปภาพรีวิว</p>
            <h3 id="review-gallery-heading" className="mt-2 text-3xl font-black text-[#3a1e07]">รวมภาพรีวิวจากลูกค้าและหน้างานถวาย</h3>
            <p className="mt-2 text-sm text-[#6b5232]">ภาพจริงที่ลูกค้าและทีมงานถ่ายจากวัดหลวงพ่อโสธร ส่งตรงเข้ามาทาง LINE</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {reviewGallery.map((item) => (
              <div key={item.alt} className="group relative aspect-square overflow-hidden rounded-[1.2rem] bg-[#f2e3c3] shadow-sm ring-1 ring-[#ead8b4]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.05]"
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
