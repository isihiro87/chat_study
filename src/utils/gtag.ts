export const GA_MEASUREMENT_ID = 'G-5QPYB27572';

export function pageview(url: string): void {
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: url });
}
