
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageSquare, Share, BookmarkPlus } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for photos
const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=600",
    title: "Mountain Sunset",
    photographer: "Alex Morgan",
    photographerUsername: "alexmorgan",
    likes: 1243,
    comments: 42,
    category: "landscape"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=600",
    title: "Natural Light Portrait",
    photographer: "Jordan Lee",
    photographerUsername: "jordanlee",
    likes: 892,
    comments: 31,
    category: "portrait"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=600",
    title: "Vibrant Flora",
    photographer: "Mia Chen",
    photographerUsername: "miachen",
    likes: 1051,
    comments: 27,
    category: "nature"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&q=80&w=600",
    title: "City Skyline",
    photographer: "Carlos Rodriguez",
    photographerUsername: "carlosrod",
    likes: 748,
    comments: 19,
    category: "architecture"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1551626741-3a15251b4e66?auto=format&fit=crop&q=80&w=600",
    title: "Street Photography",
    photographer: "Jordan Lee",
    photographerUsername: "jordanlee",
    likes: 634,
    comments: 15,
    category: "street"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80&w=600",
    title: "Modern Architecture",
    photographer: "Carlos Rodriguez",
    photographerUsername: "carlosrod",
    likes: 912,
    comments: 24,
    category: "architecture"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?auto=format&fit=crop&q=80&w=600",
    title: "Wildlife Photography",
    photographer: "Alex Morgan",
    photographerUsername: "alexmorgan",
    likes: 1532,
    comments: 53,
    category: "nature"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80&w=600",
    title: "Fashion Portrait",
    photographer: "Mia Chen",
    photographerUsername: "miachen",
    likes: 862,
    comments: 21,
    category: "portrait"
  }
];

// Filter categories
const categories = ["All", "Portrait", "Landscape", "Architecture", "Nature", "Street"];

const PhotoGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPhotos = activeFilter === "All" 
    ? photos 
    : photos.filter(photo => photo.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Discover Photography</h2>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Badge 
                key={category}
                variant={activeFilter === category ? "default" : "outline"} 
                className={cn(
                  "cursor-pointer text-sm py-1 px-4",
                  activeFilter === category ? "" : "hover:bg-secondary"
                )}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="photo-grid">
          {filteredPhotos.map(photo => (
            <div key={photo.id} className="photo-grid-item">
              <img 
                src={photo.url} 
                alt={photo.title} 
                loading="lazy" 
              />
              <div className="photo-grid-item-overlay">
                <h3 className="font-medium">{photo.title}</h3>
                <p className="text-sm text-gray-200">by {photo.photographer}</p>
                <div className="flex items-center gap-3 mt-2">
                  <button className="flex items-center gap-1 text-sm">
                    <Heart size={16} />
                    <span>{photo.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-sm">
                    <MessageSquare size={16} />
                    <span>{photo.comments}</span>
                  </button>
                  <div className="ml-auto flex gap-2">
                    <button>
                      <BookmarkPlus size={18} />
                    </button>
                    <button>
                      <Share size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
