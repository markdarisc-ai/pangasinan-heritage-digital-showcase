import { PageShell } from '../components/templates/PageShell';
import { Hero } from '../components/organisms/Hero';
import { DestinationGrid } from '../components/organisms/DestinationGrid';
import { AboutSection } from '../components/organisms/AboutSection';

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <DestinationGrid />
      <AboutSection />
    </PageShell>
  );
}
