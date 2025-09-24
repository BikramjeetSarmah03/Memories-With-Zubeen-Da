interface MemoryCardProps {
  id: string;
  title: string;
  author: string;
  hashtag: string;
  imageUrl: string;
  imageAlt: string;
  onOpen: (id: string) => void;
}

export function MemoryCard({
  id,
  title,
  author,
  hashtag,
  imageUrl,
  imageAlt,
  onOpen,
}: MemoryCardProps) {
  return (
    <div className="group relative bg-white hover:shadow-md mb-2 border border-gray-200 rounded-lg overflow-hidden break-inside-avoid hover:scale-[1.02] transition-all duration-300">
      {/* Overlay */}
      <button
        onClick={() => onOpen(id)}
        className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
      >
        <h1 className="font-semibold text-white text-xl">Open</h1>
      </button>

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = `https://picsum.photos/400/400?random=${Math.floor(
              Math.random() * 1000
            )}`;
          }}
        />
      </div>

      {/* Content */}
      <div className="p-2 sm:p-3">
        <h3 className="mb-1 font-semibold text-gray-900 text-xs sm:text-sm line-clamp-2">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-600 text-xs">
          <span className="text-xs">by {author}</span>
          <span className="font-medium text-blue-600 text-xs">#{hashtag}</span>
        </div>
      </div>
    </div>
  );
}
