import { useState } from "react";
import { Heart, MessageSquare, Share2, Plus, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";

// Mock data for posts
const mockPosts = [
  {
    id: 1,
    author: {
      name: "Sarah El Amrani",
      role: "Founder @ TechStart",
      avatar: "SE"
    },
    title: "Recherche d'investisseurs pour révolutionner l'EdTech au Maroc",
    body: "Nous développons une plateforme d'apprentissage adaptatif basée sur l'IA qui personnalise l'enseignement selon le profil de chaque étudiant. Après 18 mois de développement et des tests pilotes dans 5 établissements, nous recherchons 500K€ pour notre expansion nationale...",
    tags: ["EdTech", "IA", "Series A", "Maroc"],
    likes: 24,
    liked: false,
    comments: 8,
    createdAt: "2h",
    fullBody: "Nous développons une plateforme d'apprentissage adaptatif basée sur l'IA qui personnalise l'enseignement selon le profil de chaque étudiant. Après 18 mois de développement et des tests pilotes dans 5 établissements, nous recherchons 500K€ pour notre expansion nationale. Notre solution augmente les résultats d'apprentissage de 40% en moyenne et réduit le décrochage scolaire de 25%. Nous avons déjà des partenariats avec des écoles privées et publiques, et un pipeline de 50+ établissements intéressés."
  },
  {
    id: 2,
    author: {
      name: "Ahmed Benali",
      role: "Investor @ Maroc Ventures",
      avatar: "AB"
    },
    title: "Tendances d'investissement 2024 : Focus sur la FinTech africaine",
    body: "L'écosystème FinTech africain connaît une croissance exceptionnelle avec +300% d'investissements en 2023. Les domaines les plus prometteurs incluent les paiements mobiles, le crédit digital et l'assurance parametrique...",
    tags: ["FinTech", "Afrique", "Tendances", "2024"],
    likes: 18,
    liked: true,
    comments: 12,
    createdAt: "4h",
    fullBody: "L'écosystème FinTech africain connaît une croissance exceptionnelle avec +300% d'investissements en 2023. Les domaines les plus prometteurs incluent les paiements mobiles, le crédit digital et l'assurance parametrique. Nous observons une maturité croissante des startups et une meilleure compréhension des besoins locaux. Les opportunités d'investissement sont particulièrement attractives dans les solutions B2B2C qui s'appuient sur les infrastructures existantes."
  },
  {
    id: 3,
    author: {
      name: "Fatima Zahra",
      role: "Founder @ GreenTech Solutions",
      avatar: "FZ"
    },
    title: "Comment nous avons atteint la rentabilité en 12 mois",
    body: "Retour d'expérience sur notre parcours de startup dans l'AgriTech. De l'idée initiale à la rentabilité, voici les leçons apprises et les erreurs à éviter...",
    tags: ["AgriTech", "Rentabilité", "Retour d'expérience"],
    likes: 31,
    liked: false,
    comments: 15,
    createdAt: "1j",
    fullBody: "Retour d'expérience sur notre parcours de startup dans l'AgriTech. De l'idée initiale à la rentabilité, voici les leçons apprises et les erreurs à éviter. Notre focus sur un MVP simple, l'écoute client constante et une approche lean nous ont permis d'atteindre l'équilibre financier plus rapidement que prévu. L'erreur la plus coûteuse fut de sur-engineer notre première version au lieu de valider rapidement nos hypothèses sur le terrain."
  }
];

const Posts = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    tags: ""
  });
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const toggleLike = (postId: number) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const handleCreatePost = () => {
    if (!newPost.title || !newPost.body) return;

    const post = {
      id: posts.length + 1,
      author: {
        name: "Votre Nom",
        role: "Votre Rôle",
        avatar: "VN"
      },
      title: newPost.title,
      body: newPost.body,
      fullBody: newPost.body,
      tags: newPost.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      likes: 0,
      liked: false,
      comments: 0,
      createdAt: "maintenant"
    };

    setPosts(prev => [post, ...prev]);
    setNewPost({ title: "", body: "", tags: "" });
    setIsCreateDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Posts</h1>
            <p className="text-muted-foreground">Partagez vos idées et découvertes</p>
          </div>
          
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="group">
                <Plus className="w-4 h-4 mr-2" />
                Nouveau Post
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Créer un nouveau post</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <Input
                  placeholder="Titre de votre post..."
                  value={newPost.title}
                  onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))}
                />
                <Textarea
                  placeholder="Partagez votre idée, expérience ou question..."
                  value={newPost.body}
                  onChange={(e) => setNewPost(prev => ({ ...prev, body: e.target.value }))}
                  rows={6}
                />
                <Input
                  placeholder="Tags (séparés par des virgules)"
                  value={newPost.tags}
                  onChange={(e) => setNewPost(prev => ({ ...prev, tags: e.target.value }))}
                />
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Annuler
                  </Button>
                  <Button onClick={handleCreatePost}>
                    Publier
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map(post => (
            <Card key={post.id} className="hover:shadow-card transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-medium text-sm">{post.author.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-foreground">{post.author.name}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.author.role}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{post.createdAt}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{post.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.body.length > 240 ? `${post.body.substring(0, 240)}...` : post.body}
                  </p>
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <Heart className={`w-4 h-4 transition-all ${post.liked ? 'fill-primary text-primary' : 'group-hover:scale-110'}`} />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                  </div>
                  
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <User className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Aucun post pour l'instant</h3>
            <p className="text-muted-foreground mb-4">Soyez le premier à partager une idée</p>
            <Button onClick={() => setIsCreateDialogOpen(true)}>
              Créer le premier post
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Posts;