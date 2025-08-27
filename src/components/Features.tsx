import { Target, Users, MessageSquare, Shield, Zap, TrendingUp } from "lucide-react";
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
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Une plateforme pensée pour{" "}
            <span className="text-primary">l'efficacité</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            CRI MATCH simplifie et accélère le processus de matchmaking entre startups et investisseurs 
            grâce à des outils innovants et une approche data-driven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;