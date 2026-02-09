/**
 * Skip to Content link for keyboard accessibility
 * Allows keyboard users to bypass navigation
 */
export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-amber-600 focus:text-white focus:font-bold focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-400"
    >
      Skip to main content
    </a>
  );
}
