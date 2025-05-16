/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',                  // 启用静态导出
  images: { unoptimized: true },     // 关闭 Next.js 默认图片优化
};
