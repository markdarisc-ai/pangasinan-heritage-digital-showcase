import Link from 'next/link';

export function Button({ href, children, variant = 'primary' }) {
  return (
    <Link className={`button button-${variant}`} href={href}>
      {children}
    </Link>
  );
}
