interface Props {
  current: number;
  total: number;
  onSelect: (index: number) => void;
}

export default function ShowcaseNavigation({
  current,
  total,
  onSelect,
}: Props) {
  return (
    <div className="mt-16 flex justify-center gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`h-3 w-3 rounded-full transition ${
            current === index
              ? "bg-black"
              : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}