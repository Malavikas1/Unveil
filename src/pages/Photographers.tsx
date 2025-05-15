
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar } from "@/components/ui/avatar";

const Photographers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Featured Photographers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div key={idx} className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Avatar className="h-24 w-24 mb-4">
                <img 
                  src={`https://i.pravatar.cc/150?img=${idx + 20}`} 
                  alt="Photographer avatar" 
                />
              </Avatar>
              <h3 className="text-xl font-semibold mb-1">Jane Smith {idx}</h3>
              <p className="text-muted-foreground mb-3 text-center">Wildlife & Nature Photography</p>
              <div className="flex justify-center space-x-2 mt-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Wildlife</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Nature</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Macro</span>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Photographers;
