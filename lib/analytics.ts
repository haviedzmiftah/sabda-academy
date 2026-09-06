type AnalyticsParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (gtag) {
    gtag("event", name, params);
  }
}
