
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to showcase your photography?</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Join thousands of photographers who are sharing their work, getting feedback, and connecting with a community of creative minds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto">
                Create Your Portfolio
              </Button>
            </Link>
            <Link to="/discover">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20 w-full sm:w-auto">
                Explore Photographers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
