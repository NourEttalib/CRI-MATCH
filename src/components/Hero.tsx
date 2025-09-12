import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Hero = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background with Moving Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-card/50 via-transparent to-card/30"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.15) 0%, transparent 50%), 
              radial-gradient(circle at 80% 70%, hsl(var(--success) / 0.12) 0%, transparent 50%),
              radial-gradient(circle at 60% 20%, hsl(var(--primary) / 0.08) 0%, transparent 60%)
            `
          }}
        />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-success/8 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Badge with glow effect */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-success/10 via-success/5 to-success/10 text-success border border-success/30 mb-8 shadow-success hover:shadow-glow transition-all duration-500 animate-fade-in backdrop-blur-sm">
            <Zap className="w-5 h-5 mr-2 animate-pulse" />
            <span className="text-sm font-semibold">Plateforme de Matchmaking Intelligente</span>
          </div>

          {/* Enhanced Headline with text animations */}
          <h1 className="text-4xl lg:text-7xl font-bold text-foreground mb-8 leading-tight animate-slide-up">
            Connectez votre{" "}
            <span className="text-primary animate-glow">startup</span>{" "}
            aux bons{" "}
            <span className="text-success animate-glow" style={{animationDelay: '0.5s'}}>investisseurs</span>,{" "}
            <span className="text-primary animate-glow" style={{animationDelay: '1s'}}>opérateurs</span>{" "}
            et{" "}
            <span className="text-success animate-glow" style={{animationDelay: '1.5s'}}>accélérateurs</span>
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            Des investisseurs qui comprennent votre thèse. Des startups qui correspondent à la vôtre. 
            <br />
            <span className="text-foreground font-medium">Avec CRI MATCH, trouvez votre partenaire idéal en quelques clics.</span>
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-slide-up" style={{animationDelay: '0.6s'}}>
            {isAuthenticated ? (
              <>
                <Link to="/explorer">
                  <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-elegant hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg font-semibold">
                    <span className="relative z-10 flex items-center">
                      Trouver mes investisseurs
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Button>
                </Link>
                <Link to="/posts">
                  <Button variant="success" size="lg" className="group relative overflow-hidden bg-gradient-to-r from-success to-success-hover hover:from-success-hover hover:to-success shadow-success hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg font-semibold">
                    <span className="relative z-10 flex items-center">
                      Découvrir des startups
                      <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Button>
                </Link>
              </>
            ) : (
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-elegant hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg font-semibold">
                <span className="relative z-10 flex items-center">
                  Commencer maintenant
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            )}
          </div>

          {/* Enhanced Stats with animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: '500+', label: 'Startups inscrites', color: 'primary' },
              { value: '200+', label: 'Investisseurs actifs', color: 'success' },
              { value: '85%', label: 'Taux de matching', color: 'foreground' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover-lift animate-fade-in shadow-card"
                style={{animationDelay: `${0.8 + index * 0.2}s`}}
              >
                <div className={`text-4xl lg:text-5xl font-bold mb-3 ${
                  stat.color === 'primary' ? 'text-primary' : 
                  stat.color === 'success' ? 'text-success' : 
                  'text-foreground'
                } animate-glow`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;