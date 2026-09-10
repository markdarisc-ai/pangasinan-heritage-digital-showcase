import Link from 'next/link';
import { PageShell } from '../components/templates/PageShell';

export default function NotFound() {
  return (
    <PageShell>
      <section className="section empty-state">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>Destination not found.</h1>
          <p>The page you requested is not part of this showcase.</p>
          <Link className="button button-primary" href="/">Return home</Link>
        </div>
      </section>
    </PageShell>
  );
}
