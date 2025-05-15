
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Discover = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Discover Photography</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" 
              alt="Breakfast table" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">Morning Light</h2>
              <p className="text-muted-foreground">By Anna Johnson</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
              alt="Mountain landscape" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">Misty Mountains</h2>
              <p className="text-muted-foreground">By Robert Chen</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" 
              alt="Forest" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">Forest Dreams</h2>
              <p className="text-muted-foreground">By Michael Torres</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Discover;
