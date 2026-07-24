interface PanelProps {
  title: string;
  children: React.ReactNode;
}

export default function Panel({ title, children }: PanelProps) {
  return (
    <div className="rounded-3xl bg-[#5B4F56]/70 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
      <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-xs tracking-wider uppercase text-white">
        {title}
      </div>

      <div className="mt-6">
        {children}
      </div>
    </div>
  );
}