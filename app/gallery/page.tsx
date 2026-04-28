// app/gallery/page.tsx

import GalleryCard from "@/components/GalleryCard";

export default function GalleryPage() {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-8">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
        <GalleryCard comingSoon title="Portraits & Headshots" slug="portraits" />
        <GalleryCard comingSoon title="Couples & Engagements" slug="couples" />
        <GalleryCard comingSoon title="Families" slug="families" />
        <GalleryCard comingSoon title="Events" slug="events" />
        <GalleryCard comingSoon title="Graduation" slug="graduation" />
      </div>
    </div>
  );
}