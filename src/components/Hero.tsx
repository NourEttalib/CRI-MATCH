import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(348 83% 47%) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(152 100% 19%) 0%, transparent 50%)`
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success border border-success/20 mb-8">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Plateforme de Matchmaking Intelligente</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Connectez votre{" "}
            <span className="text-primary">startup</span>{" "}
            aux bons{" "}
            <span className="text-success">investisseurs</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Des investisseurs qui comprennent votre thèse. Des startups qui correspondent à la vôtre. 
            Avec CRI MATCH, trouvez votre partenaire idéal en quelques clics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="group">
              Trouver mes investisseurs
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="success" size="lg" className="group">
              Découvrir des startups
              <Users className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Startups inscrites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">200+</div>
              <div className="text-muted-foreground">Investisseurs actifs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">85%</div>
              <div className="text-muted-foreground">Taux de matching</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;