
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-6">About Unveil</h1>
          <p className="text-lg mb-4">
            Unveil is a photography showcase platform revolutionizing the way photographers exhibit their work and connect with enthusiasts.
          </p>
          <p className="mb-4">
            Our mission is to empower photographers with a robust, user-friendly platform that showcases their creativity 
            and engages with a wider audience. We believe in the power of visual storytelling and strive to create 
            a community where photographers of all levels can gain recognition, receive feedback, and grow their skills.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="mb-4">
            We envision a world where every photographer has the opportunity to showcase their unique perspective 
            and connect with like-minded individuals who appreciate their art. Through Unveil, we aim to bridge 
            the gap between photographers and their audience, creating meaningful interactions and fostering a 
            supportive community.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-card rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">For Photographers</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Professional portfolio showcase</li>
                <li>Engagement analytics and insights</li>
                <li>Networking opportunities</li>
                <li>Exposure to a global audience</li>
                <li>Feedback from the community</li>
              </ul>
            </div>

            <div className="p-6 bg-card rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">For Enthusiasts</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Discover talented photographers</li>
                <li>Explore diverse photography styles</li>
                <li>Engage with creators</li>
                <li>Join photography discussions</li>
                <li>Find inspiration for your own work</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6">
            Whether you're a professional photographer, an amateur enthusiast, or simply someone who appreciates 
            the art of photography, Unveil welcomes you to join our growing community. Together, let's celebrate 
            the beauty of visual storytelling and the creative minds behind the lens.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
