import { useState } from "react";
import { User, Building, Users, Edit, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";

const Profils = () => {
  const [activeTab, setActiveTab] = useState("startup");
  const [userRole] = useState<"FOUNDER" | "INVESTOR" | "ADMIN">("INVESTOR"); // Mock data - sera remplacé par Supabase
  
  const startupProfile = {
    id: "1",
    name: "TechFlow Solutions",
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
  };

  const investorProfile = {
    id: "1",
    name: "Atlas Ventures",
    avatar: "/api/placeholder/80/80",
    thesisSectors: ["SaaS", "FinTech", "HealthTech"],
    thesisStages: ["Seed", "Series A"],
    thesisCountries: ["Maroc", "Tunisie"],
    ticketMin: 50000,
    ticketMax: 500000,
    keywords: ["early-stage", "tech", "MENA"],
    description: "Fonds d'investissement spécialisé dans les technologies émergentes au Maghreb",
    website: "https://atlasventures.ma"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Mes Profils</h1>
          <p className="text-muted-foreground">Gérez vos profils startup et investisseur</p>
        </div>

        <Tabs defaultValue={activeTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="startup" className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              Startup
            </TabsTrigger>
            <TabsTrigger value="investor" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Investisseur
            </TabsTrigger>
          </TabsList>

          <TabsContent value="startup">
            {userRole === "FOUNDER" || userRole === "ADMIN" ? (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Profil Startup
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Modifier
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                      <Building className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{startupProfile.name}</h3>
                      <p className="text-muted-foreground mt-1">{startupProfile.description}</p>
                      {startupProfile.website && (
                        <a href={startupProfile.website} className="text-primary hover:underline text-sm">
                          {startupProfile.website}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Secteurs</h4>
                      <div className="flex flex-wrap gap-2">
                        {startupProfile.sectors.map(sector => (
                          <Badge key={sector} variant="secondary">{sector}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Stage</h4>
                      <Badge variant="outline">{startupProfile.stage}</Badge>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Pays</h4>
                      <span className="text-sm">{startupProfile.country}</span>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Financement recherché</h4>
                      <span className="text-sm">{startupProfile.ticketMin.toLocaleString()} - {startupProfile.ticketMax.toLocaleString()} €</span>
                    </div>

                    <div className="md:col-span-2">
                      <h4 className="font-medium mb-2">Mots-clés</h4>
                      <div className="flex flex-wrap gap-2">
                        {startupProfile.keywords.map(keyword => (
                          <Badge key={keyword} variant="outline">{keyword}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <h4 className="font-medium mb-2">Pitch Deck</h4>
                      {startupProfile.deckUrl ? (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-success">✓ Deck téléchargé</span>
                          <Button variant="outline" size="sm">Remplacer</Button>
                        </div>
                      ) : (
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Ajouter un deck
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Building className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Accès Startup requis</h3>
                  <p className="text-muted-foreground">Seuls les fondateurs peuvent créer un profil startup</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="investor">
            {userRole === "INVESTOR" || userRole === "ADMIN" ? (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Profil Investisseur
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Modifier
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                      <Users className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{investorProfile.name}</h3>
                      <p className="text-muted-foreground mt-1">{investorProfile.description}</p>
                      {investorProfile.website && (
                        <a href={investorProfile.website} className="text-primary hover:underline text-sm">
                          {investorProfile.website}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Secteurs d'intérêt</h4>
                      <div className="flex flex-wrap gap-2">
                        {investorProfile.thesisSectors.map(sector => (
                          <Badge key={sector} variant="secondary">{sector}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Stages d'investissement</h4>
                      <div className="flex flex-wrap gap-2">
                        {investorProfile.thesisStages.map(stage => (
                          <Badge key={stage} variant="outline">{stage}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Pays cibles</h4>
                      <div className="flex flex-wrap gap-2">
                        {investorProfile.thesisCountries.map(country => (
                          <Badge key={country} variant="outline">{country}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Ticket d'investissement</h4>
                      <span className="text-sm">{investorProfile.ticketMin.toLocaleString()} - {investorProfile.ticketMax.toLocaleString()} €</span>
                    </div>

                    <div className="md:col-span-2">
                      <h4 className="font-medium mb-2">Mots-clés</h4>
                      <div className="flex flex-wrap gap-2">
                        {investorProfile.keywords.map(keyword => (
                          <Badge key={keyword} variant="outline">{keyword}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Accès Investisseur requis</h3>
                  <p className="text-muted-foreground">Seuls les investisseurs peuvent créer un profil investisseur</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profils;