import ToolCard from "./ToolCard";
import sunoHero from "@/assets/suno-hero.jpg";
import midjourneyHero from "@/assets/midjourney-hero.jpg";
import runwayHero from "@/assets/runway-hero.jpg";
import chatgptHero from "@/assets/chatgpt-hero.jpg";
import fluxHero from "@/assets/flux-hero.jpg";

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
    },
    {
      title: "Midjourney Pro",
      description: "Generate stunning, high-quality images with Midjourney AI. Create professional artwork, concept designs, and digital art with advanced AI models. Free access to premium features.",
      category: "Image Generation",
      image: midjourneyHero,
      link: "https://kie.ai/id/playground/mj",
      featured: true,
      rating: 4.8,
      users: "100K+"
    },
    {
      title: "Runway Pro",
      description: "Revolutionary AI video generation platform. Create cinematic videos, edit footage, and generate motion graphics with cutting-edge AI technology. Professional video creation made simple.",
      category: "Video Generation",
      image: runwayHero,
      link: "https://kie.ai/id/playground/runway",
      featured: true,
      rating: 4.7,
      users: "75K+"
    },
    {
      title: "ChatGPT 4.0 Image Pro",
      description: "Advanced image generation powered by ChatGPT 4.0. Create detailed, contextual images through conversational AI. Perfect for creative projects and professional design work.",
      category: "Image Generation",
      image: chatgptHero,
      link: "https://kie.ai/id/playground/4o-image",
      featured: false,
      rating: 4.6,
      users: "80K+"
    },
    {
      title: "Flux Pro",
      description: "High-performance AI image generator with exceptional quality and speed. Create photorealistic images, artistic illustrations, and professional graphics with state-of-the-art Flux models.",
      category: "Image Generation",
      image: fluxHero,
      link: "https://kie.ai/id/playground/flux",
      featured: false,
      rating: 4.8,
      users: "60K+"
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
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;