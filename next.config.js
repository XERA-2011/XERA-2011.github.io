/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'XERA-2011.github.io';
module.exports = {
  output: 'export',                  // 启用静态导出
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: { unoptimized: true },     // 关闭 Next.js 默认图片优化
};
