import { useState } from "react";
import { User, Building, Users, Edit, Plus, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

const Profils = () => {
  const [activeTab, setActiveTab] = useState("startup");
  const [isEditingStartup, setIsEditingStartup] = useState(false);
  const [isEditingInvestor, setIsEditingInvestor] = useState(false);

  // Mock data - sera remplacé par Supabase
  const [userRole, setUserRole] = useState<"FOUNDER" | "INVESTOR" | "ADMIN">("INVESTOR");
  
  const [startupProfile, setStartupProfile] = useState({
    id: "1",
    name: "TechFlow Solutions",
    email: "contact@techflow.ma",
    logo: "/api/placeholder/80/80",
    sectors: ["SaaS", "FinTech"],
    stage: "SEED",
    country: "Maroc",
    ticketMin: 100000,
    ticketMax: 500000,
    keywords: ["AI", "B2B", "automation"],
    description: "Plateforme SaaS d'automatisation des processus financiers pour PME",
    website: "https://techflow.ma",
    deckUrl: null
  });

  const [investorProfile, setInvestorProfile] = useState({
    id: "1",
    name: "Atlas Ventures",
    email: "contact@atlasventures.ma",
    avatar: "/api/placeholder/80/80",
    thesisSectors: ["SaaS", "FinTech", "HealthTech"],
    thesisStages: ["Seed", "Series A"],
    thesisCountries: ["Maroc", "Tunisie"],
    ticketMin: 50000,
    ticketMax: 500000,
    keywords: ["early-stage", "tech", "MENA"],
    description: "Fonds d'investissement spécialisé dans les technologies émergentes au Maghreb",
    website: "https://atlasventures.ma"
  });

  const [editStartupForm, setEditStartupForm] = useState(startupProfile);
  const [editInvestorForm, setEditInvestorForm] = useState(investorProfile);

  const handleEditStartup = () => {
    setEditStartupForm(startupProfile);
    setIsEditingStartup(true);
  };

  const handleSaveStartup = () => {
    setStartupProfile(editStartupForm);
    setIsEditingStartup(false);
    toast.success("Profil startup mis à jour avec succès !");
  };

  const handleEditInvestor = () => {
    setEditInvestorForm(investorProfile);
    setIsEditingInvestor(true);
  };

  const handleSaveInvestor = () => {
    setInvestorProfile(editInvestorForm);
    setIsEditingInvestor(false);
    toast.success("Profil investisseur mis à jour avec succès !");
  };

  return (
    <div className="min-h-screen bg-gradient-profile relative overflow-hidden">
      <Navbar />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-success/[0.02]"></div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.03) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(var(--success) / 0.03) 0%, transparent 50%)`
          }}
        ></div>
      </div>
      
      <main className="container mx-auto px-4 py-8 relative">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            Mes Profils
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Gérez vos profils startup et investisseur avec une interface moderne et intuitive
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-success mx-auto mt-4 rounded-full"></div>
        </div>

        <Tabs defaultValue={activeTab} className="w-full animate-slide-up">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-card/50 backdrop-blur-sm p-2 rounded-2xl border border-border/50 shadow-card">
            <TabsTrigger 
              value="startup" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary-hover data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow transition-all duration-300"
            >
              <Building className="w-4 h-4" />
              <span className="font-medium">Startup</span>
            </TabsTrigger>
            <TabsTrigger 
              value="investor" 
              className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-success data-[state=active]:to-success-hover data-[state=active]:text-success-foreground data-[state=active]:shadow-success transition-all duration-300"
            >
              <Users className="w-4 h-4" />
              <span className="font-medium">Investisseur</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="startup">
            {userRole === "FOUNDER" || userRole === "ADMIN" ? (
              <Card className="border-0 shadow-elegant bg-gradient-to-br from-card to-card/80 backdrop-blur-sm overflow-hidden hover-lift animate-fade-in">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-hover to-success"></div>
                <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-primary/5 to-transparent pb-6">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-primary/10 animate-float">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Profil Startup</h2>
                      <p className="text-sm text-muted-foreground mt-1">Votre identité entrepreneuriale</p>
                    </div>
                  </CardTitle>
                  <Button 
                    onClick={handleEditStartup}
                    variant="outline" 
                    size="sm" 
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-inner"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Modifier
                  </Button>
                </CardHeader>
                <CardContent className="space-y-8 p-8">
                  <div className="flex items-start gap-6">
                    <div className="relative group">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-success/20 rounded-2xl flex items-center justify-center shadow-inner border border-primary/20 overflow-hidden shimmer">
                        <Building className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-success rounded-full border-2 border-card flex items-center justify-center">
                        <div className="w-2 h-2 bg-success-foreground rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{startupProfile.name}</h3>
                      <p className="text-muted-foreground leading-relaxed text-base mb-3">{startupProfile.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">Email:</span>
                          <a href={`mailto:${startupProfile.email}`} className="text-primary hover:text-primary-hover font-medium">
                            {startupProfile.email}
                          </a>
                        </div>
                        {startupProfile.website && (
                          <a 
                            href={startupProfile.website} 
                            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover text-sm font-medium group"
                          >
                            <span className="border-b border-transparent group-hover:border-primary transition-colors">
                              {startupProfile.website}
                            </span>
                            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Secteurs
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {startupProfile.sectors.map((sector, index) => (
                          <Badge 
                            key={sector} 
                            variant="secondary" 
                            className="bg-gradient-to-r from-primary/10 to-success/10 border border-primary/20 text-foreground hover:shadow-card transition-all duration-300 animate-fade-in"
                            style={{animationDelay: `${index * 0.1}s`}}
                          >
                            {sector}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        Stage
                      </h4>
                      <Badge variant="outline" className="bg-gradient-to-r from-success/10 to-success/5 border-success/30 text-success font-medium px-4 py-2">
                        {startupProfile.stage}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Pays
                      </h4>
                      <div className="p-3 bg-gradient-to-r from-card to-muted/20 rounded-xl border border-border/50">
                        <span className="text-foreground font-medium">{startupProfile.country}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        Financement recherché
                      </h4>
                      <div className="p-4 bg-gradient-to-br from-success/5 to-success/10 rounded-xl border border-success/20">
                        <span className="text-lg font-bold text-success">
                          {startupProfile.ticketMin.toLocaleString()} - {startupProfile.ticketMax.toLocaleString()} €
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Mots-clés
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {startupProfile.keywords.map((keyword, index) => (
                          <Badge 
                            key={keyword} 
                            variant="outline" 
                            className="border-dashed border-muted-foreground/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 animate-fade-in"
                            style={{animationDelay: `${index * 0.1}s`}}
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Pitch Deck
                      </h4>
                      {startupProfile.deckUrl ? (
                        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-success/5 to-success/10 rounded-xl border border-success/20">
                          <div className="flex items-center gap-2 flex-1">
                            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                            <span className="text-success font-medium">✓ Deck téléchargé</span>
                          </div>
                          <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            Remplacer
                          </Button>
                        </div>
                      ) : (
                        <div className="p-4 border-2 border-dashed border-muted-foreground/30 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer">
                          <Button variant="outline" size="sm" className="w-full justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <Plus className="w-4 h-4 mr-2" />
                            Ajouter un deck
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-elegant bg-gradient-to-br from-card to-card/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="text-center py-16">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-muted/20 to-muted/40 rounded-2xl flex items-center justify-center mx-auto animate-float">
                      <Building className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-destructive/20 rounded-full border-2 border-card flex items-center justify-center">
                      <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Accès Startup requis</h3>
                  <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Seuls les fondateurs peuvent créer un profil startup. Contactez l'administration pour obtenir les droits d'accès.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="investor">
            {userRole === "INVESTOR" || userRole === "ADMIN" ? (
              <Card className="border-0 shadow-elegant bg-gradient-to-br from-card to-card/80 backdrop-blur-sm overflow-hidden hover-lift animate-fade-in">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-success via-success-hover to-primary"></div>
                <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-success/5 to-transparent pb-6">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-success/10 animate-float">
                      <Users className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Profil Investisseur</h2>
                      <p className="text-sm text-muted-foreground mt-1">Votre expertise financière</p>
                    </div>
                  </CardTitle>
                  <Button 
                    onClick={handleEditInvestor}
                    variant="outline" 
                    size="sm" 
                    className="hover:bg-success hover:text-success-foreground transition-all duration-300 hover:scale-105 shadow-inner"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Modifier
                  </Button>
                </CardHeader>
                <CardContent className="space-y-8 p-8">
                  <div className="flex items-start gap-6">
                    <div className="relative group">
                      <div className="w-24 h-24 bg-gradient-to-br from-success/20 to-primary/20 rounded-2xl flex items-center justify-center shadow-inner border border-success/20 overflow-hidden shimmer">
                        <Users className="w-10 h-10 text-success group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full border-2 border-card flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{investorProfile.name}</h3>
                      <p className="text-muted-foreground leading-relaxed text-base mb-3">{investorProfile.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">Email:</span>
                          <a href={`mailto:${investorProfile.email}`} className="text-success hover:text-success-hover font-medium">
                            {investorProfile.email}
                          </a>
                        </div>
                        {investorProfile.website && (
                          <a 
                            href={investorProfile.website} 
                            className="inline-flex items-center gap-2 text-success hover:text-success-hover text-sm font-medium group"
                          >
                            <span className="border-b border-transparent group-hover:border-success transition-colors">
                              {investorProfile.website}
                            </span>
                            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        Secteurs d'intérêt
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {investorProfile.thesisSectors.map((sector, index) => (
                          <Badge 
                            key={sector} 
                            variant="secondary" 
                            className="bg-gradient-to-r from-success/10 to-primary/10 border border-success/20 text-foreground hover:shadow-card transition-all duration-300 animate-fade-in"
                            style={{animationDelay: `${index * 0.1}s`}}
                          >
                            {sector}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Stages d'investissement
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {investorProfile.thesisStages.map((stage, index) => (
                          <Badge 
                            key={stage} 
                            variant="outline" 
                            className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30 text-primary font-medium px-3 py-1 animate-fade-in"
                            style={{animationDelay: `${index * 0.1}s`}}
                          >
                            {stage}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        Pays cibles
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {investorProfile.thesisCountries.map((country, index) => (
                          <Badge 
                            key={country} 
                            variant="outline" 
                            className="border-dashed border-muted-foreground/30 hover:border-success hover:bg-success/5 transition-all duration-300 animate-fade-in"
                            style={{animationDelay: `${index * 0.1}s`}}
                          >
                            {country}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Ticket d'investissement
                      </h4>
                      <div className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                        <span className="text-lg font-bold text-primary">
                          {investorProfile.ticketMin.toLocaleString()} - {investorProfile.ticketMax.toLocaleString()} €
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        Mots-clés
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {investorProfile.keywords.map((keyword, index) => (
                          <Badge 
                            key={keyword} 
                            variant="outline" 
                            className="border-dashed border-muted-foreground/30 hover:border-success hover:bg-success/5 transition-all duration-300 animate-fade-in"
                            style={{animationDelay: `${index * 0.1}s`}}
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-elegant bg-gradient-to-br from-card to-card/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="text-center py-16">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-muted/20 to-muted/40 rounded-2xl flex items-center justify-center mx-auto animate-float">
                      <Users className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-destructive/20 rounded-full border-2 border-card flex items-center justify-center">
                      <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Accès Investisseur requis</h3>
                  <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Seuls les investisseurs peuvent créer un profil investisseur. Contactez l'administration pour obtenir les droits d'accès.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        {/* Startup Edit Dialog */}
        <Dialog open={isEditingStartup} onOpenChange={setIsEditingStartup}>
          <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Modifier le profil startup</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Nom de la startup</label>
                  <Input
                    value={editStartupForm.name}
                    onChange={(e) => setEditStartupForm(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    value={editStartupForm.email}
                    onChange={(e) => setEditStartupForm(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={editStartupForm.description}
                  onChange={(e) => setEditStartupForm(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Website</label>
                  <Input
                    value={editStartupForm.website}
                    onChange={(e) => setEditStartupForm(prev => ({ ...prev, website: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Pays</label>
                  <Input
                    value={editStartupForm.country}
                    onChange={(e) => setEditStartupForm(prev => ({ ...prev, country: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Secteurs (séparés par des virgules)</label>
                <Input
                  value={editStartupForm.sectors.join(", ")}
                  onChange={(e) => setEditStartupForm(prev => ({ 
                    ...prev, 
                    sectors: e.target.value.split(",").map(s => s.trim()).filter(Boolean) 
                  }))}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Mots-clés (séparés par des virgules)</label>
                <Input
                  value={editStartupForm.keywords.join(", ")}
                  onChange={(e) => setEditStartupForm(prev => ({ 
                    ...prev, 
                    keywords: e.target.value.split(",").map(s => s.trim()).filter(Boolean) 
                  }))}
                />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsEditingStartup(false)}>
                  <X className="w-4 h-4 mr-2" />
                  Annuler
                </Button>
                <Button onClick={handleSaveStartup}>
                  <Save className="w-4 h-4 mr-2" />
                  Sauvegarder
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Investor Edit Dialog */}
        <Dialog open={isEditingInvestor} onOpenChange={setIsEditingInvestor}>
          <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Modifier le profil investisseur</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Nom du fonds</label>
                  <Input
                    value={editInvestorForm.name}
                    onChange={(e) => setEditInvestorForm(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    value={editInvestorForm.email}
                    onChange={(e) => setEditInvestorForm(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={editInvestorForm.description}
                  onChange={(e) => setEditInvestorForm(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Website</label>
                <Input
                  value={editInvestorForm.website}
                  onChange={(e) => setEditInvestorForm(prev => ({ ...prev, website: e.target.value }))}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Secteurs d'intérêt (séparés par des virgules)</label>
                <Input
                  value={editInvestorForm.thesisSectors.join(", ")}
                  onChange={(e) => setEditInvestorForm(prev => ({ 
                    ...prev, 
                    thesisSectors: e.target.value.split(",").map(s => s.trim()).filter(Boolean) 
                  }))}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Stades d'investissement (séparés par des virgules)</label>
                <Input
                  value={editInvestorForm.thesisStages.join(", ")}
                  onChange={(e) => setEditInvestorForm(prev => ({ 
                    ...prev, 
                    thesisStages: e.target.value.split(",").map(s => s.trim()).filter(Boolean) 
                  }))}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Pays d'investissement (séparés par des virgules)</label>
                <Input
                  value={editInvestorForm.thesisCountries.join(", ")}
                  onChange={(e) => setEditInvestorForm(prev => ({ 
                    ...prev, 
                    thesisCountries: e.target.value.split(",").map(s => s.trim()).filter(Boolean) 
                  }))}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Mots-clés (séparés par des virgules)</label>
                <Input
                  value={editInvestorForm.keywords.join(", ")}
                  onChange={(e) => setEditInvestorForm(prev => ({ 
                    ...prev, 
                    keywords: e.target.value.split(",").map(s => s.trim()).filter(Boolean) 
                  }))}
                />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsEditingInvestor(false)}>
                  <X className="w-4 h-4 mr-2" />
                  Annuler
                </Button>
                <Button onClick={handleSaveInvestor}>
                  <Save className="w-4 h-4 mr-2" />
                  Sauvegarder
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Profils;