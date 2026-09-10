import { notFound } from 'next/navigation';
import { sites, getSiteBySlug } from '../../../lib/sites';
import { PageShell } from '../../../components/templates/PageShell';
import { SiteDetailTemplate } from '../../../components/templates/SiteDetailTemplate';

export function generateStaticParams() {
  return sites.map((site) => ({ slug: site.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const site = getSiteBySlug(slug);
  return site
    ? { title: `${site.name} | Pangasinan Heritage` }
    : { title: 'Destination | Pangasinan Heritage' };
}

export default async function SitePage({ params }) {
  const { slug } = await params;
  const site = getSiteBySlug(slug);
  if (!site) notFound();

  return (
    <PageShell>
      <SiteDetailTemplate site={site} />
    </PageShell>
  );
}
