import Link from 'next/link';
import { Badge } from '../atoms/Badge';

function SiteIllustration({ icon }) {
  if (icon === 'lighthouse') {
    return (
      <div className="illustration illustration-lighthouse" aria-hidden="true">
        <div className="sun" />
        <div className="sea sea-a" />
        <div className="sea sea-b" />
        <div className="lighthouse-tower"><span /></div>
      </div>
    );
  }
  if (icon === 'spring') {
    return (
      <div className="illustration illustration-spring" aria-hidden="true">
        <div className="hill hill-back" />
        <div className="hill hill-front" />
        <div className="pool" />
        <div className="steam s1" /><div className="steam s2" /><div className="steam s3" />
      </div>
    );
  }
  return (
    <div className="illustration illustration-islands" aria-hidden="true">
      <div className="sky-sun" />
      <div className="water" />
      <div className="island i1" /><div className="island i2" /><div className="island i3" />
      <div className="boat" />
    </div>
  );
}

export function SiteCard({ site }) {
  return (
    <article className="site-card">
      <SiteIllustration icon={site.icon} />
      <div className="site-card-body">
        <Badge>{site.category}</Badge>
        <h3>{site.name}</h3>
        <p className="site-location">{site.location}</p>
        <p>{site.intro}</p>
        <Link className="text-link" href={`/sites/${site.slug}`} aria-label={`Explore ${site.name}`}>
          Explore destination <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
