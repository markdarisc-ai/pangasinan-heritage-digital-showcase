import { Container } from '../atoms/Container';
import { SiteCard } from '../molecules/SiteCard';
import { sites } from '../../lib/sites';

export function DestinationGrid() {
  return (
    <section id="destinations" className="section" aria-labelledby="destinations-title">
      <Container>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured places</p>
            <h2 id="destinations-title">Three stories to start with</h2>
          </div>
          <p>Explore nature, heritage, and wellness destinations through a lightweight mobile-first experience.</p>
        </div>
        <div className="cards-grid">
          {sites.map((site) => <SiteCard key={site.slug} site={site} />)}
        </div>
      </Container>
    </section>
  );
}
