import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ไข่ต้มแก่น เจ๊ทุเรียน หลวงพ่อโสธร',
    short_name: 'ไข่ต้มแก่น',
    description: 'เว็บไซต์สั่งซื้อไข่ต้มแก่นและชุดถวาย',
    start_url: '/',
    display: 'standalone',
    background_color: '#fbf4e6',
    theme_color: '#c98a16',
    icons: []
  };
}
