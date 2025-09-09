import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group p-8 rounded-2xl bg-gradient-to-br from-card to-card/60 border border-border/50 hover:border-primary/30 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-success/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-success/20 to-success/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-success/30 group-hover:to-success/20 transition-all duration-500 group-hover:scale-110 shadow-inner">
          <Icon className="w-8 h-8 text-success group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>
        
        {/* Decorative bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
    </div>
  );
};

export default FeatureCard;