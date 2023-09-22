export function getAbsoluteUrl(): string {
  const defaultUrl = 'http://localhost:3000';

  if (process.env.APP_URL != null) return process.env.APP_URL;

  return process.env.APP_URL == null ? defaultUrl : `https://web.ikankoi.my
  id}`;
}
