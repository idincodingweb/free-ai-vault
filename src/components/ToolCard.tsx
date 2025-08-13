import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Users, Zap } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  featured?: boolean;
  rating?: number;
  users?: string;
}

const ToolCard = ({ 
  title, 
  description, 
  category, 
  image, 
  link, 
  featured = false,
  rating,
  users 
}: ToolCardProps) => {
  return (
    <Card className={`group hover:scale-105 transition-all duration-300 border-2 bg-card/50 backdrop-blur-sm ${
      featured 
        ? 'border-tech-primary shadow-lg shadow-tech-primary/20 hover:shadow-xl hover:shadow-tech-primary/30' 
        : 'border-border hover:border-tech-primary/50'
    }`}>
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-tech-primary text-white">
                <Star className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {category}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        <div>
          <CardTitle className="text-xl mb-2 group-hover:text-tech-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </div>

        {(rating || users) && (
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            {rating && (
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-tech-secondary text-tech-secondary" />
                <span>{rating}</span>
              </div>
            )}
            {users && (
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{users}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          variant={featured ? "tech" : "outline"} 
          className="w-full group"
          onClick={() => window.open(link, '_blank')}
        >
          <Zap className="h-4 w-4 mr-2" />
          Try {title}
          <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;