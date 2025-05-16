/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  basePath: '',
  assetPrefix: '',
  output: "export",
  images: { unoptimized: true }, // 关闭默认图片优化
};

if (isGithubActions) {
  // 去掉 `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  nextConfig.assetPrefix = `/${repo}/`;
  nextConfig.basePath = `/${repo}`;
} else {
    delete nextConfig.assetPrefix;
    delete nextConfig.basePath;
}



module.exports = nextConfig;

