export default function GalleryCategoryPage({
  params,
}: {
  params: { slug?: string };
}) {
  const slug = params?.slug ?? "gallery";

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold capitalize mb-6">
        {slug
          .replace("-", " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())}
      </h1>

      <p>Gallery coming soon...</p>
    </div>
  );
}