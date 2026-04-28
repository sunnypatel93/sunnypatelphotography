type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

export default function ImageCard({ imageSrc, title, description }: CardProps) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md border bg-white">

      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

    </div>
  );
}