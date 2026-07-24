import Image from "next/image";

const assets = [
  "/asset1.webp",
  "/asset2.webp",
  "/asset3.webp",
];

export default function AssetLibrary() {
  return (
    <div>
      <p className="mb-3 text-xs uppercase text-white/70">
        Asset Library
      </p>

      <div className="flex gap-3">
        {assets.map((img) => (
          <div
            key={img}
            className="h-16 w-16 rounded-lg overflow-hidden"
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