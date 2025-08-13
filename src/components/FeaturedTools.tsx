import ToolCard from "./ToolCard";
import sunoHero from "@/assets/suno-hero.jpg";

const FeaturedTools = () => {
  const tools = [
    {
      title: "Suno AI Pro 4.5",
      description: "Create professional-quality music with AI. Generate songs, beats, and melodies in any style with the latest Suno AI Pro 4.5 model. Perfect for musicians, content creators, and music enthusiasts.",
      category: "Music Generation",
      image: sunoHero,
      link: "https://kie.ai/id/playground/suno",
      featured: true,
      rating: 4.9,
      users: "50K+"
    }
  ];

  return (
    <section id="tools" className="py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-tech-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-tech-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured AI Tools
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most powerful and popular AI tools, carefully curated for creators, 
            developers, and innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
          
          {/* Placeholder cards for coming soon */}
          <div className="bg-card/30 backdrop-blur-sm border-2 border-dashed border-tech-primary/30 rounded-lg p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
            <div className="w-16 h-16 bg-tech-primary/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-lg font-semibold text-muted-foreground">Image Generation</h3>
            <p className="text-sm text-muted-foreground">Coming Soon</p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm border-2 border-dashed border-tech-primary/30 rounded-lg p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
            <div className="w-16 h-16 bg-tech-primary/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-lg font-semibold text-muted-foreground">Text Generation</h3>
            <p className="text-sm text-muted-foreground">Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;