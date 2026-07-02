import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ไข่ต้มแก่น เจ๊ทุเรียน หลวงพ่อโสธร';
export const size = {
  width: 1200,
  height: 630
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background: 'linear-gradient(135deg, #fff8e7 0%, #f3d38a 55%, #ba7f16 100%)',
          color: '#2d1806',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700 }}>ไข่ต้มแก่น เจ๊ทุเรียน หลวงพ่อโสธร</div>
        <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05 }}>ไข่ต้มถวายคุณภาพดี</div>
        <div style={{ fontSize: 28, maxWidth: 820 }}>SEO-first landing page สำหรับการสั่งซื้อของถวาย งานบุญ และของฝากทั่วไทย</div>
      </div>
    ),
    size
  );
}
