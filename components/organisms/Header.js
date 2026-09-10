import Link from 'next/link';
import { Mark } from '../atoms/Mark';

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Pangasinan Heritage home">
          <Mark />
          <span>
            <strong>Pangasinan Heritage</strong>
            <small>Digital Showcase</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/#destinations">Destinations</Link>
          <Link href="/#about">About</Link>
        </nav>
      </div>
    </header>
  );
}
