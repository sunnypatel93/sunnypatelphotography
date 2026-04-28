type CardProps = {
  title: string;
  duration: string;
  photos: string;
  price: string;
  delivery: string;
};

export default function Card({
  title,
  price,
  duration,
  photos,
  delivery,
}: CardProps) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition">

      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="text-3xl font-bold text-gray-900 mt-2 mb-6">
        {price}
      </p>

      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-medium text-gray-900">
            Duration:
          </span>{" "}
          {duration}
        </p>

        <p>
          <span className="font-medium text-gray-900">
            Photos:
          </span>{" "}
          {photos}
        </p>

        <p>
          <span className="font-medium text-gray-900">
            Delivery:
          </span>{" "}
          {delivery}
        </p>
      </div>

    </div>
  );
}