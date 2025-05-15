
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Mock data for featured photographers
const featuredPhotographers = [
  {
    id: 1,
    name: "Alex Morgan",
    username: "alexmorgan",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    specialty: "Landscape",
    photoCount: 253,
    followers: 12500
  },
  {
    id: 2,
    name: "Jordan Lee",
    username: "jordanlee",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    specialty: "Portrait",
    photoCount: 189,
    followers: 9800
  },
  {
    id: 3,
    name: "Mia Chen",
    username: "miachen",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    specialty: "Street",
    photoCount: 312,
    followers: 15200
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    username: "carlosrod",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    specialty: "Architecture",
    photoCount: 178,
    followers: 8700
  }
];

const FeaturedPhotographers = () => {
  return (
    <section className="py-12 bg-accent">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Photographers</h2>
          <Link to="/photographers" className="text-sm font-medium hover:underline">
            View all photographers
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPhotographers.map((photographer) => (
            <Link to={`/photographers/${photographer.username}`} key={photographer.id}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-muted relative">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + photographer.id * 10000}?auto=format&fit=crop&q=80&w=500&h=375`} 
                      alt={`${photographer.name}'s work`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="border-2 border-white">
                        <AvatarImage src={photographer.avatar} alt={photographer.name} />
                        <AvatarFallback>{photographer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{photographer.name}</h3>
                        <p className="text-sm text-muted-foreground">@{photographer.username}</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{photographer.specialty} Photography</span>
                      <span>{photographer.followers.toLocaleString()} followers</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhotographers;
