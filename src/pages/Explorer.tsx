import { useState } from "react";
import { Search, Filter, MapPin, DollarSign, Building, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

// Mock data for investors
const mockInvestors = [
  {
    id: 1,
    name: "Atlas Ventures",
    logo: "AV",
    sectors: ["SaaS", "FinTech", "HealthTech"],
    stages: ["Seed", "Series A"],
    country: "Maroc",
    ticketRange: "50K - 500K €",
    description: "Fonds d'investissement spécialisé dans les technologies émergentes au Maghreb.",
    verified: true,
    active: true,
    matchScore: 92
  },
  {
    id: 2,
    name: "Maroc Digital Fund",
    logo: "MDF",
    sectors: ["E-commerce", "EdTech", "AI"],
    stages: ["Pre-seed", "Seed"],
    country: "Maroc",
    ticketRange: "25K - 250K €",
    description: "Accélérateur et fonds d'investissement pour les startups digitales marocaines.",
    verified: true,
    active: true,
    matchScore: 88
  },
  {
    id: 3,
    name: "Sawari Ventures",
    logo: "SV",
    sectors: ["FinTech", "Mobility", "SaaS"],
    stages: ["Seed", "Series A", "Series B"],
    country: "Egypte",
    ticketRange: "100K - 1M €",
    description: "Premier fonds de capital-risque au Moyen-Orient et en Afrique du Nord.",
    verified: true,
    active: false,
    matchScore: 85
  },
];

const Explorer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);

  const allSectors = ["SaaS", "FinTech", "HealthTech", "E-commerce", "EdTech", "AI", "Mobility"];

  const filteredInvestors = mockInvestors.filter(investor => {
    const matchesSearch = investor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         investor.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSectors = selectedSectors.length === 0 || 
                          selectedSectors.some(sector => investor.sectors.includes(sector));
    return matchesSearch && matchesSectors;
  });

  const toggleSector = (sector: string) => {
    setSelectedSectors(prev => 
      prev.includes(sector) 
        ? prev.filter(s => s !== sector)
        : [...prev, sector]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Explorer les Investisseurs</h1>
          <p className="text-muted-foreground">Découvrez les investisseurs qui correspondent à votre profil</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Rechercher par nom ou description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Sector Filters */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-muted-foreground flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Secteurs:
            </span>
            {allSectors.map(sector => (
              <Badge
                key={sector}
                variant={selectedSectors.includes(sector) ? "default" : "secondary"}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => toggleSector(sector)}
              >
                {sector}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInvestors.map(investor => (
            <Card key={investor.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">{investor.logo}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {investor.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        {investor.verified && (
                          <Badge variant="secondary" className="text-xs bg-success/10 text-success">
                            ✓ Vérifié
                          </Badge>
                        )}
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${investor.active ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'}`}
                        >
                          {investor.active ? 'Actif' : 'Inactif'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-primary">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{investor.matchScore}%</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{investor.description}</p>
                
                {/* Sectors */}
                <div>
                  <div className="text-xs text-muted-foreground mb-2">Secteurs</div>
                  <div className="flex flex-wrap gap-1">
                    {investor.sectors.map(sector => (
                      <Badge key={sector} variant="outline" className="text-xs">
                        {sector}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stages */}
                <div>
                  <div className="text-xs text-muted-foreground mb-2">Stades</div>
                  <div className="flex flex-wrap gap-1">
                    {investor.stages.map(stage => (
                      <Badge key={stage} variant="outline" className="text-xs">
                        {stage}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Info Row */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {investor.country}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-3 h-3 mr-1" />
                    {investor.ticketRange}
                  </div>
                </div>

                <Button className="w-full" size="sm">
                  Proposer un match
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredInvestors.length === 0 && (
          <div className="text-center py-12">
            <Building className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Aucun investisseur trouvé</h3>
            <p className="text-muted-foreground">Essayez de modifier vos critères de recherche</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Explorer;