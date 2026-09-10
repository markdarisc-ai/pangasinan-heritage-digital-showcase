import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';

export function PageShell({ children }) {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
