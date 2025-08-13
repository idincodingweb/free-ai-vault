import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Tentang Free AI Vault
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Platform terdepan untuk mengakses tools AI terbaik secara gratis
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Misi Kami</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Free AI Vault hadir untuk mendemokratisasi akses ke teknologi AI terdepan. Kami percaya bahwa setiap orang berhak menggunakan tools AI canggih tanpa batasan finansial.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Apa yang Kami Tawarkan</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-tech-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Akses gratis ke Suno AI Pro 4.5 untuk generasi musik berkualitas tinggi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-tech-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Midjourney Pro untuk kreasi gambar dan artwork professional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-tech-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Runway Pro untuk video generation dan editing canggih</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-tech-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>ChatGPT 4.0 Image dan Flux Pro untuk generasi gambar AI</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Statistik Platform</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tech-primary">365K+</div>
                    <div className="text-sm text-muted-foreground">Total Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tech-primary">5</div>
                    <div className="text-sm text-muted-foreground">AI Tools</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tech-primary">4.8</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tech-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Access</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-tech-primary/10 to-tech-secondary/10 border border-tech-primary/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Visi Masa Depan</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kami terus berinovasi untuk menambahkan lebih banyak tools AI revolusioner, menciptakan ekosistem lengkap untuk kreativitas dan produktivitas digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-16 px-6 bg-card/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Meet the Developer</h2>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">II</span>
                </div>
                
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Idin Iskandar</h3>
                  <p className="text-tech-primary font-semibold">Lead Web Developer</p>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    Passionate full-stack developer with expertise in modern web technologies and AI integration. 
                    Committed to making AI tools accessible for everyone.
                  </p>
                </div>

                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="hover:bg-tech-primary/20">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-tech-primary/20">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-tech-primary/20">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;