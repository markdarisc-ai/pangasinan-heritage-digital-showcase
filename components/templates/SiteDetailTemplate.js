import Link from 'next/link';
import { Container } from '../atoms/Container';
import { Badge } from '../atoms/Badge';

export function SiteDetailTemplate({ site }) {
  return (
    <section className="detail-page">
      <Container>
        <Link className="back-link" href="/#destinations">← Back to destinations</Link>
        <div className={`detail-visual detail-${site.accent}`} aria-hidden="true">
          <div className="detail-orb" />
          <div className="detail-line line-one" />
          <div className="detail-line line-two" />
          <div className="detail-shape shape-one" />
          <div className="detail-shape shape-two" />
        </div>
        <div className="detail-copy">
          <Badge>{site.category}</Badge>
          <p className="eyebrow">{site.location}</p>
          <h1>{site.name}</h1>
          <p className="detail-intro">{site.intro}</p>
          <div className="detail-columns">
            <div>
              <h2>Highlights</h2>
              <ul>
                {site.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h2>Showcase note</h2>
              <p>{site.fact}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
