import Image from "next/image";
import Link from "next/link";
import type { FeaturedArtwork } from "../content/types";

interface FeaturedArtworkProps {
  artwork: FeaturedArtwork;
  detailUrl?: string;
  variant: "homepage" | "article";
}

function ArtworkCredit({ artwork }: { artwork: FeaturedArtwork }) {
  return (
    <figcaption>
      <cite>{artwork.title}</cite>, {artwork.artist}, {artwork.date}
      <span>
        {artwork.medium} · {artwork.institution} · {artwork.accessionNumber}
      </span>
      <span>
        {artwork.creditLine} · {artwork.rights.designation}
      </span>
    </figcaption>
  );
}

export function FeaturedArtworkBlock({
  artwork,
  detailUrl,
  variant,
}: FeaturedArtworkProps) {
  if (variant === "homepage") {
    return (
      <aside className="home-artwork" aria-labelledby={`art-${artwork.id}`}>
        <figure>
          <Image
            src={artwork.imagePath}
            alt={artwork.alt}
            width={artwork.imageWidth}
            height={artwork.imageHeight}
            sizes="(max-width: 860px) calc(100vw - 76px), 56vw"
          />
          <ArtworkCredit artwork={artwork} />
        </figure>
        <div className="home-artwork-copy">
          <p className="section-label">Saints in sacred art</p>
          <h3 id={`art-${artwork.id}`}>{artwork.title}</h3>
          <p>{artwork.interpretation.homepageNote}</p>
          {detailUrl ? (
            <Link href={`${detailUrl}#featured-artwork`}>
              Look more closely <span>→</span>
            </Link>
          ) : null}
        </div>
      </aside>
    );
  }

  return (
    <section className="featured-art-section" id="featured-artwork">
      <p className="section-label">Saints in sacred art</p>
      <h2>{artwork.interpretation.heading}</h2>
      <figure>
        <a href={artwork.objectUrl} target="_blank" rel="noreferrer">
          <Image
            src={artwork.imagePath}
            alt={artwork.alt}
            width={artwork.imageWidth}
            height={artwork.imageHeight}
            sizes="(max-width: 580px) calc(100vw - 36px), 664px"
          />
        </a>
        <ArtworkCredit artwork={artwork} />
      </figure>
      <div className="artwork-reading">
        {artwork.interpretation.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <a
        className="museum-link"
        href={artwork.objectUrl}
        target="_blank"
        rel="noreferrer"
      >
        View the museum record <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
