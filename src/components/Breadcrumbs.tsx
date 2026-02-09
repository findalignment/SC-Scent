import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb navigation component
 * Shows hierarchical page location
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb navigation" className="mb-6">
      <ol className="flex items-center gap-2 text-sm" role="list">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2" role="listitem">
            {index > 0 && (
              <span className="text-gray-500" aria-hidden="true">/</span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-amber-400 hover:text-amber-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-400" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
