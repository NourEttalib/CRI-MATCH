import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-profile relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-success/[0.02] animate-pulse"></div>
        <div 
          className="absolute inset-0 animate-float"
          style={{
            backgroundImage: `radial-gradient(circle at 15% 30%, hsl(var(--primary) / 0.08) 0%, transparent 40%), radial-gradient(circle at 85% 70%, hsl(var(--success) / 0.06) 0%, transparent 40%)`
          }}
        ></div>
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-success/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default Index;
