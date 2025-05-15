
import { Camera, Users, Image, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Showcase Your Work",
    description: "Create beautiful portfolio galleries with high-resolution images to highlight your photography skills and style."
  },
  {
    icon: Users,
    title: "Connect with Community",
    description: "Join a vibrant community of photographers and enthusiasts. Network, collaborate, and grow together."
  },
  {
    icon: Image,
    title: "Discover Inspiration",
    description: "Browse through diverse collections of photography across various genres, styles, and themes."
  },
  {
    icon: MessageSquare,
    title: "Receive Feedback",
    description: "Get constructive feedback on your work through comments, ratings, and discussions with fellow photographers."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Unveil?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides the tools and community you need to grow as a photographer and showcase your talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-accent rounded-lg">
              <div className="bg-primary text-primary-foreground p-3 rounded-full mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
