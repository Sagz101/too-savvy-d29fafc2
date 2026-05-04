import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
  title: string;
  description?: string;
}

export default function PageMeta({ title, description }: PageMetaProps) {
  const fullTitle = title === 'Diminga' || title === 'Renegade'
    ? 'Renegade — Web3 Creator Platform'
    : `${title} | Renegade`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
