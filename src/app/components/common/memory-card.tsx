interface MemoryCardProps {
  id: string;
  title: string;
  author: string;
  hashtag: string;
  imageUrl: string;
  imageAlt: string;
}

export function MemoryCard({ title, author, hashtag, imageUrl, imageAlt }: MemoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-[1.02] break-inside-avoid mb-2">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            e.currentTarget.src = `https://picsum.photos/400/400?random=${Math.floor(Math.random() * 1000)}`;
          }}
        />
      </div>
      
      {/* Content */}
      <div className="p-2 sm:p-3">
        <h3 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span className="text-xs">by {author}</span>
          <span className="text-blue-600 font-medium text-xs">#{hashtag}</span>
        </div>
      </div>
    </div>
  );
}
