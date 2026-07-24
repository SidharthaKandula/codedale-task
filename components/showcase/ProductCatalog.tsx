import Image from "next/image";

const products = [
  "/bag1.webp",
  "/bag2.webp",
  "/bag3.webp",
];

export default function ProductCatalog() {
  return (
    <div>
      <p className="mb-3 text-xs uppercase text-white/70">
        Product Catalog
      </p>

      <div className="flex gap-3">
        {products.map((img) => (
          <div
            key={img}
            className="h-16 w-16 rounded-lg bg-white overflow-hidden"
          >
            <Image
              src={img}
              alt=""
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}