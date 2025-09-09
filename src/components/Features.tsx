import { Target, Users, MessageSquare, Shield, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Matching Intelligent",
      description: "Notre algorithme analyse les secteurs, stades, géographies et tickets pour vous proposer les partenaires les plus pertinents."
    },
    {
      icon: Users,
      title: "Profils Vérifiés",
      description: "Tous les investisseurs et startups sont vérifiés pour garantir la qualité des connexions et la sérieux des échanges."
    },
    {
      icon: MessageSquare,
      title: "Messagerie Sécurisée",
      description: "Échangez directement avec vos matchs via notre messagerie intégrée, conçue pour les discussions d'investissement."
    },
    {
      icon: Shield,
      title: "Data Room Protégée",
      description: "Partagez vos pitch decks et documents sensibles uniquement avec les investisseurs qui ont accepté votre demande."
    },
    {
      icon: Zap,
      title: "Processus Rapide",
      description: "Réduisez le temps entre votre recherche d'investissement et vos premiers contacts qualifiés à moins de 7 jours."
    },
    {
      icon: TrendingUp,
      title: "Suivi des Performances",
      description: "Analysez vos taux de réponse, optimisez votre profil et suivez l'évolution de vos démarches de levée."
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Enhanced background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/30"></div>
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-float"
          style={{animationDelay: '2s'}}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-success/8 to-transparent rounded-full blur-3xl animate-float"
          style={{animationDelay: '3s'}}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-success/10 text-primary border border-primary/20 mb-6">
            <Target className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Fonctionnalités Avancées</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Une plateforme pensée pour{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">l'efficacité</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            CRI MATCH simplifie et accélère le processus de matchmaking entre startups et investisseurs 
            grâce à des outils innovants et une approche data-driven.
          </p>
          
          {/* Decorative line */}
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-success to-primary mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-slide-up"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
        
        {/* Bottom CTA section */}
        <div className="text-center mt-20 animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto shadow-elegant">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Prêt à accélérer votre croissance ?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez des centaines d'entrepreneurs et investisseurs qui font confiance à CRI MATCH pour leurs projets de financement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-gradient-to-r from-primary to-primary-hover hover:shadow-glow transition-all duration-300">
                Commencer maintenant
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-success hover:text-success-foreground transition-all duration-300 hover:border-success">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;