import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText, Presentation, Newspaper, Award } from "lucide-react";

const mediaItems = [
  {
    title: "Newspaper Article - Finserve / Jenga / mKey",
    icon: Newspaper,
    link: "http://finserve.africa/media/finserve-suppliment.pdf",
    category: "Article",
  },
  {
    title: "Press Release - Finserve / Jenga",
    icon: FileText,
    link: "http://finserve.africa/media/Press-release-Equity-group-holdings-Plc-launches-Finserve-its-fintech-subsidiary.pdf",
    category: "Press",
  },
  {
    title: "Press Release - mKey",
    icon: FileText,
    link: "http://finserve.africa/media/Press-Release-mKey-Launch.pdf",
    category: "Press",
  },
  {
    title: "Launch Presentation - Equity Group launches Finserve",
    icon: Presentation,
    link: "http://finserve.africa/media/Equity-Group-Plc-launches-fintech-subsidiary-Finserve.pdf",
    category: "Launch",
  },
  {
    title: "Launch Presentation - Finserve / Jenga",
    icon: Presentation,
    link: "http://finserve.africa/media/Finserve-Launch-Presentation.pdf",
    category: "Launch",
  },
  {
    title: "Launch Presentation - mKey",
    icon: Presentation,
    link: "http://finserve.africa/media/mkey-Launch-Presentation.pdf",
    category: "Launch",
  },
  {
    title: "4G SIM cards roll out - Equitel",
    icon: Newspaper,
    link: "http://finserve.africa/media/Press-release-Equitel-rolls-out-4G-SIM-card.pdf",
    category: "News",
  },
  {
    title: "Finserve Africa Bags 2021 Best in E-Commerce Category",
    icon: Award,
    link: "http://finserve.africa/media/Press%20Release-%20Finserve%20Africa%20Bags%202021%20Best%20in%20E-Commerce%20Category%20at%20the%203rd%20Edition%20of%20the%20Kenya%20E-Commerce%20Awards.pdf",
    category: "Award",
  },
];

const Media = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border-2 border-primary rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-primary rounded-full"></div>
            <div className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-primary rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Media Centre
              </h1>
              <div className="flex justify-center items-center mb-6">
                <span className="w-24 h-1 bg-primary rounded-full"></span>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest news, press releases, and announcements from Finserve Africa
              </p>
            </div>
          </div>
        </section>

        {/* Media Grid Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {mediaItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
                      <CardContent className="p-8 flex items-center justify-between h-full min-h-[120px]">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">
                              {item.category}
                            </div>
                            <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need More Information?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              For media inquiries, press kits, or additional resources, please contact our communications team.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Media;
