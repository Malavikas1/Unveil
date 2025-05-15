
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Collections = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Photography Collections</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden h-64 group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4" 
              alt="Mountain collection" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h2 className="text-white text-xl font-bold">Mountain Majesty</h2>
              <p className="text-white/80">35 photos</p>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-64 group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1519046904884-53103b34b206" 
              alt="Beach collection" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h2 className="text-white text-xl font-bold">Coastal Serenity</h2>
              <p className="text-white/80">28 photos</p>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-64 group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1500622944204-b135684e99fd" 
              alt="Sunset collection" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h2 className="text-white text-xl font-bold">Golden Hour</h2>
              <p className="text-white/80">42 photos</p>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-64 group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1" 
              alt="Wildlife collection" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h2 className="text-white text-xl font-bold">Wildlife Wonders</h2>
              <p className="text-white/80">31 photos</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
