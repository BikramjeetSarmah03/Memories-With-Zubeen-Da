import { useState } from "react";
import { MemoryCard } from "./memory-card";
import { Button } from "@/app/components/ui/button";
import { MEMORY_GRID } from "@/app/constants/app";

import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/app/components/ui/dialog";

// Sample data with different heights
const generateMemoryData = (startId: number, count: number) => {
  const titles = [
    "Front row vibes in Guwahati",
    "Hostel jam to his classics",
    "Spinning old vinyls on Sunday",
    "That Shillong encore!",
    "Monochrome magic",
    "Day festival memories",
    "Acoustic night tribute",
    "First concert with fam",
    "Backstage moments",
    "Crowd singing along",
    "Guitar solo moment",
    "Light show was incredible",
    "Memories from college days",
    "Concert in the rain",
    "Late night jam session",
    "Festival vibes with friends",
    "Acoustic performance",
    "Stage setup before show",
    "Crowd going wild",
    "Soundcheck memories",
  ];

  const authors = [
    "Priyanka",
    "Rahul",
    "Maya",
    "Ankit",
    "Ria",
    "Neel",
    "Isha",
    "Ayan",
    "Sara",
    "Vikram",
    "Arjun",
    "Priya",
    "Karan",
    "Sneha",
    "Rohit",
    "Divya",
  ];

  const hashtags = [
    "concert",
    "nostalgia",
    "throwback",
    "live",
    "art",
    "festival",
    "tribute",
    "firsttime",
    "behindthescenes",
    "singalong",
    "guitar",
    "lights",
    "college",
    "rain",
    "jam",
    "friends",
    "acoustic",
    "stage",
  ];

  return Array.from({ length: count }, (_, index) => {
    const id = startId + index;
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    const randomHashtag = hashtags[Math.floor(Math.random() * hashtags.length)];

    // Different image URLs with varied dimensions for natural sizing
    const imageVariations = [
      "https://picsum.photos/400/400?random=1",
      "https://picsum.photos/400/300?random=2",
      "https://picsum.photos/400/500?random=3",
      "https://picsum.photos/400/600?random=4",
      "https://picsum.photos/400/250?random=5",
      "https://picsum.photos/400/700?random=6",
      "https://picsum.photos/400/350?random=7",
      "https://picsum.photos/400/450?random=8",
      "https://picsum.photos/400/550?random=9",
      "https://picsum.photos/400/320?random=10",
      "https://picsum.photos/400/480?random=11",
      "https://picsum.photos/400/380?random=12",
      "https://picsum.photos/400/520?random=13",
      "https://picsum.photos/400/280?random=14",
      "https://picsum.photos/400/620?random=15",
    ];

    return {
      id: id.toString(),
      title: randomTitle,
      author: randomAuthor,
      hashtag: randomHashtag,
      imageUrl:
        imageVariations[Math.floor(Math.random() * imageVariations.length)],
      imageAlt: `${randomTitle} by ${randomAuthor}`,
    };
  });
};

export function MemoryGrid() {
  const [memories, setMemories] = useState(() =>
    generateMemoryData(1, MEMORY_GRID.INITIAL_LOAD)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<null | string>(null);

  const loadMoreMemories = () => {
    setIsLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      const newMemories = generateMemoryData(
        memories.length + 1,
        MEMORY_GRID.LOAD_MORE
      );
      setMemories((prev) => [...prev, ...newMemories]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className="masonry-grid">
        {memories.map((memory) => (
          <MemoryCard
            key={memory.id}
            id={memory.id}
            title={memory.title}
            author={memory.author}
            hashtag={memory.hashtag}
            imageUrl={memory.imageUrl}
            imageAlt={memory.imageAlt}
            onOpen={(id) => setSelectedPostId(id)}
          />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <Button
          onClick={loadMoreMemories}
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium text-white transition-colors"
        >
          {isLoading ? "Loading..." : "Show More"}
        </Button>
      </div>

      <OpenImageSwiper
        selectedId={selectedPostId}
        memories={memories}
        onClose={() => setSelectedPostId(null)}
      />
    </div>
  );
}

// ---------- Swiper Modal ----------

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function OpenImageSwiper({
  selectedId,
  memories,
  onClose,
}: {
  selectedId: string | null;
  memories: {
    id: string;
    title: string;
    author: string;
    hashtag: string;
    imageUrl: string;
    imageAlt: string;
  }[];
  onClose: () => void;
}) {
  if (!selectedId) return null;

  const startIndex = memories.findIndex((m) => m.id === selectedId);

  return (
    <Dialog open={!!selectedId} onOpenChange={onClose}>
      <DialogContent className="max-w-[calc(100%-2rem)]! h-full max-h-[calc(100%-2rem)]!">
        <DialogHeader className="hidden" /> {/* hide default header */}
        <Swiper
          initialSlide={startIndex >= 0 ? startIndex : 0}
          navigation
          pagination={{ clickable: true }}
          keyboard
          modules={[Navigation, Pagination, Keyboard]}
          className="w-full h-[80vh]"
        >
          {memories.map((memory) => (
            <SwiperSlide key={memory.id}>
              <div className="flex flex-col justify-center items-center h-full">
                <img
                  src={memory.imageUrl}
                  alt={memory.imageAlt}
                  className="rounded-lg max-h-[70vh] object-contain"
                />
                <p className="mt-4 text-sm text-center">
                  <span className="font-semibold">{memory.title}</span> — by{" "}
                  {memory.author} #{memory.hashtag}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </DialogContent>
    </Dialog>
  );
}
