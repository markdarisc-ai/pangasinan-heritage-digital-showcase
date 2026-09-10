# Pangasinan Heritage Digital Showcase

## Activity 2 – Static Site Generation, GitHub Pages, and Lighthouse Preparation

### Project Title
Pangasinan Heritage Digital Showcase

### Student Name
**Abulencia, Mark G.**

### Selected Framework
Next.js (App Router) with Static Site Generation / static export

### Project Scope
This project showcases three Pangasinan destinations:
- Alaminos' Hundred Islands
- Bolinao Lighthouse
- Balungao Hot Spring

### Atomic Design Structure
- **Atoms:** `components/atoms/` — Container, Badge, Button, Mark
- **Molecules:** `components/molecules/` — SiteCard, StatCard
- **Organisms:** `components/organisms/` — Header, Hero, DestinationGrid, AboutSection, Footer
- **Templates:** `components/templates/` — PageShell, SiteDetailTemplate
- **Pages:** `app/` — Home and generated destination detail pages

### Static Site Generation
The project uses Next.js static export via `output: 'export'`. Destination pages use `generateStaticParams()` so the three destination routes are generated at build time.

### Run Locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

### Production Build
```bash
npm run build
```
The generated static files are written to the `out/` directory.

### GitHub Pages
The included GitHub Actions workflow builds and publishes `out/` to GitHub Pages. For project repositories, the workflow sets the Next.js base path to the repository name automatically.

### Live Website
**https://[github-username].github.io/[repository-name]/**

### Lighthouse Target Scores
| Category | Target |
|---|---:|
| Performance | ≥ 80 |
| Accessibility | ≥ 85 |
| Best Practices | ≥ 85 |
| SEO | ≥ 90 |

### Submission Checklist
- [ ] Public GitHub repository link
- [ ] GitHub Pages live link
- [ ] Lighthouse screenshot/PDF
- [ ] Update Student Name above
- [ ] Confirm all routes, links, assets, and responsive layouts
