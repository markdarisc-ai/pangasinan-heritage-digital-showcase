import { Container } from '../atoms/Container';
import { StatCard } from '../molecules/StatCard';

export function AboutSection() {
  return (
    <section id="about" className="section section-soft" aria-labelledby="about-title">
      <Container>
        <div className="about-grid">
          <div>
            <p className="eyebrow">Built for the activity</p>
            <h2 id="about-title">Fast. Mobile-first. Accessible.</h2>
            <p>This implementation uses a modular Atomic Design structure in Next.js and exports the site as static pages for GitHub Pages.</p>
            <p>Semantic HTML, keyboard-friendly focus states, responsive layouts, concise copy, and lightweight CSS-based illustrations keep the experience usable on slower mobile connections.</p>
          </div>
          <div className="stats-grid" aria-label="Project features">
            <StatCard value="SSG" label="Static export" />
            <StatCard value="AA" label="Accessibility target" />
            <StatCard value="3G/4G" label="Performance mindset" />
            <StatCard value="3" label="Featured sites" />
          </div>
        </div>
      </Container>
    </section>
  );
}
