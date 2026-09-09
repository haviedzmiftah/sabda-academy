// Determine the base URL dynamically, prioritizing environment variables
const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
};

export const siteUrl = getSiteUrl();

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, siteUrl).toString();
}
