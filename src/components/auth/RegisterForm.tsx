import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState<'startup' | 'investor'>('startup');
  
  // Common fields
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState('');
  const [ticketMin, setTicketMin] = useState('');
  const [ticketMax, setTicketMax] = useState('');
  
  // Startup specific fields
  const [sectors, setSectors] = useState<string[]>([]);
  const [sectorInput, setSectorInput] = useState('');
  const [stage, setStage] = useState('');
  const [country, setCountry] = useState('');
  
  // Investor specific fields
  const [thesisSectors, setThesisSectors] = useState<string[]>([]);
  const [thesisSectorInput, setThesisSectorInput] = useState('');
  const [thesisStages, setThesisStages] = useState<string[]>([]);
  const [thesisCountries, setThesisCountries] = useState<string[]>([]);
  const [thesisCountryInput, setThesisCountryInput] = useState('');
  const { register } = useAuth();
  const { toast } = useToast();

  const addKeyword = () => {
    if (keywordInput.trim() && !keywords.includes(keywordInput.trim())) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput('');
    }
  };

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter(k => k !== keyword));
  };

  const addSector = () => {
    if (sectorInput.trim() && !sectors.includes(sectorInput.trim())) {
      setSectors([...sectors, sectorInput.trim()]);
      setSectorInput('');
    }
  };

  const removeSector = (sector: string) => {
    setSectors(sectors.filter(s => s !== sector));
  };

  const addThesisSector = () => {
    if (thesisSectorInput.trim() && !thesisSectors.includes(thesisSectorInput.trim())) {
      setThesisSectors([...thesisSectors, thesisSectorInput.trim()]);
      setThesisSectorInput('');
    }
  };

  const removeThesisSector = (sector: string) => {
    setThesisSectors(thesisSectors.filter(s => s !== sector));
  };

  const addThesisCountry = () => {
    if (thesisCountryInput.trim() && !thesisCountries.includes(thesisCountryInput.trim())) {
      setThesisCountries([...thesisCountries, thesisCountryInput.trim()]);
      setThesisCountryInput('');
    }
  };

  const removeThesisCountry = (country: string) => {
    setThesisCountries(thesisCountries.filter(c => c !== country));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const profileData = {
        name,
        email,
        description,
        website,
        keywords,
        ticketMin: ticketMin ? parseInt(ticketMin) : 0,
        ticketMax: ticketMax ? parseInt(ticketMax) : 0,
        ...(userType === 'startup' ? {
          sectors,
          stage,
          country,
        } : {
          thesisSectors,
          thesisStages,
          thesisCountries,
        })
      };
      
      await register(name, email, password, userType, profileData);
      toast({
        title: "Inscription réussie",
        description: "Bienvenue sur CRI MATCH !",
      });
    } catch (error) {
      toast({
        title: "Erreur d'inscription",
        description: "Une erreur est survenue lors de l'inscription.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-elegant">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-primary">
          Inscription
        </CardTitle>
        <CardDescription className="text-center">
          Créez votre compte CRI MATCH
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Type Selection */}
          <div className="space-y-2">
            <Label>Type de profil</Label>
            <Tabs value={userType} onValueChange={(value) => setUserType(value as 'startup' | 'investor')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="startup">Startup</TabsTrigger>
                <TabsTrigger value="investor">Investisseur</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{userType === 'startup' ? 'Nom de la startup' : 'Nom de l\'investisseur'}</Label>
              <Input
                id="name"
                type="text"
                placeholder={userType === 'startup' ? 'TechFlow Solutions' : 'Atlas Ventures'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="contact@entreprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder={userType === 'startup' ? 'Décrivez votre startup et sa mission...' : 'Décrivez votre fonds et votre stratégie d\'investissement...'}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          {/* Website */}
          <div className="space-y-2">
            <Label htmlFor="website">Site web (optionnel)</Label>
            <Input
              id="website"
              type="url"
              placeholder="https://votre-site.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <Tabs value={userType}>
            <TabsContent value="startup">
              {/* Startup Specific Fields */}
              <div className="space-y-4">
                {/* Sectors */}
                <div className="space-y-2">
                  <Label>Secteurs d'activité</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ex: SaaS, FinTech, HealthTech"
                      value={sectorInput}
                      onChange={(e) => setSectorInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSector())}
                    />
                    <Button type="button" onClick={addSector} variant="outline">Ajouter</Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {sectors.map((sector) => (
                      <Badge key={sector} variant="secondary" className="cursor-pointer" onClick={() => removeSector(sector)}>
                        {sector} ×
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stage and Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Stage de développement</Label>
                    <Select value={stage} onValueChange={setStage}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un stage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="IDEA">Idée</SelectItem>
                        <SelectItem value="MVP">MVP</SelectItem>
                        <SelectItem value="SEED">Seed</SelectItem>
                        <SelectItem value="SERIES_A">Série A</SelectItem>
                        <SelectItem value="SERIES_B">Série B</SelectItem>
                        <SelectItem value="SERIES_C">Série C+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Pays</Label>
                    <Input
                      id="country"
                      placeholder="Ex: Maroc, France, Tunisie"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>

                {/* Funding Range */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ticketMin">Financement minimum recherché (€)</Label>
                    <Input
                      id="ticketMin"
                      type="number"
                      placeholder="100000"
                      value={ticketMin}
                      onChange={(e) => setTicketMin(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ticketMax">Financement maximum recherché (€)</Label>
                    <Input
                      id="ticketMax"
                      type="number"
                      placeholder="500000"
                      value={ticketMax}
                      onChange={(e) => setTicketMax(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="investor">
              {/* Investor Specific Fields */}
              <div className="space-y-4">
                {/* Thesis Sectors */}
                <div className="space-y-2">
                  <Label>Secteurs d'investissement</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ex: SaaS, FinTech, HealthTech"
                      value={thesisSectorInput}
                      onChange={(e) => setThesisSectorInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addThesisSector())}
                    />
                    <Button type="button" onClick={addThesisSector} variant="outline">Ajouter</Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {thesisSectors.map((sector) => (
                      <Badge key={sector} variant="secondary" className="cursor-pointer" onClick={() => removeThesisSector(sector)}>
                        {sector} ×
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Thesis Stages */}
                <div className="space-y-2">
                  <Label>Stages d'investissement</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {['Idée', 'MVP', 'Seed', 'Série A', 'Série B', 'Série C+'].map((stageOption) => (
                      <label key={stageOption} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={thesisStages.includes(stageOption)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setThesisStages([...thesisStages, stageOption]);
                            } else {
                              setThesisStages(thesisStages.filter(s => s !== stageOption));
                            }
                          }}
                        />
                        <span className="text-sm">{stageOption}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Thesis Countries */}
                <div className="space-y-2">
                  <Label>Pays d'investissement</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ex: Maroc, France, Tunisie"
                      value={thesisCountryInput}
                      onChange={(e) => setThesisCountryInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addThesisCountry())}
                    />
                    <Button type="button" onClick={addThesisCountry} variant="outline">Ajouter</Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {thesisCountries.map((country) => (
                      <Badge key={country} variant="secondary" className="cursor-pointer" onClick={() => removeThesisCountry(country)}>
                        {country} ×
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Investment Range */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ticketMin">Ticket minimum (€)</Label>
                    <Input
                      id="ticketMin"
                      type="number"
                      placeholder="50000"
                      value={ticketMin}
                      onChange={(e) => setTicketMin(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ticketMax">Ticket maximum (€)</Label>
                    <Input
                      id="ticketMax"
                      type="number"
                      placeholder="500000"
                      value={ticketMax}
                      onChange={(e) => setTicketMax(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Keywords */}
          <div className="space-y-2">
            <Label>Mots-clés</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Ex: AI, B2B, automation"
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
              />
              <Button type="button" onClick={addKeyword} variant="outline">Ajouter</Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {keywords.map((keyword) => (
                <Badge key={keyword} variant="outline" className="cursor-pointer" onClick={() => removeKeyword(keyword)}>
                  {keyword} ×
                </Badge>
              ))}
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? "Inscription..." : "S'inscrire"}
          </Button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Déjà un compte ?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-primary hover:underline font-medium"
            >
              Se connecter
            </button>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;