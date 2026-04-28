import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image?: string;
  comingSoon?: boolean;
  slug?: string;
};

export default function GalleryCard({ title, image, comingSoon, slug }: Props) {
  return (
    <Link
      href={comingSoon ? "#" : `/gallery/${slug}`}
      className={comingSoon ? "pointer-events-none opacity-70" : ""}
    >

      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-200 group">

        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold bg-black/40">
            Coming Soon
          </div>
        )}

        <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
          {title}
        </div>

      </div>
    </Link>
  );
}