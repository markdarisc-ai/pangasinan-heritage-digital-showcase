import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Discover Pangasinan</p>
          <h1 id="hero-title">Heritage stories, made easier to explore.</h1>
          <p className="hero-lede">A fast, accessible digital showcase for iconic destinations across Pangasinan—designed for mobile visitors and curious travelers.</p>
          <div className="hero-actions">
            <Button href="#destinations">Explore destinations</Button>
            <Button href="#about" variant="secondary">About the project</Button>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-sun" />
          <div className="hero-mountain mountain-one" />
          <div className="hero-mountain mountain-two" />
          <div className="hero-water" />
          <div className="hero-road" />
          <div className="hero-post post-a" />
          <div className="hero-post post-b" />
        </div>
      </Container>
    </section>
  );
}
