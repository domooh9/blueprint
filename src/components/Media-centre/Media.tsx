import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import YouTubeEmbed from "@/components/ui/youtube-embed";
import { FileText, Presentation, Newspaper, Award, Shield, Lock, MessageSquare, Download, Eye, ChevronRight, Play, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Testimonials from "./Testemonials";
import Blogs from "./Blogs";
import Picturer from "@/assets/Andreas.jpg";
import mediaPhoto1 from "@/assets/Picture.jpg";
import mediaPhoto2 from "@/assets/Picture2.jpg";
import mediaPhoto3 from "@/assets/Picture22.jpg";
import mediaPhoto4 from "@/assets/imageC.png";
import legalPhoto1 from "@/assets/backgroundI.png";
import legalPhoto2 from "@/assets/gem.png";
import legalPhoto3 from "@/assets/Cha.png";

// Livestream Component - Shows embedded YouTube video
const Livestream = () => {
  const videoId = "FhRCxCFzN3g";

  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5 rounded-3xl overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-4 border-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 border-4 border-primary/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm tracking-wider">
                Featured Video
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Finserve Official Launch
            </h2>
            
            <div className="flex justify-center items-center mb-6">
              <span className="w-16 h-1 bg-primary rounded-full"></span>
              <span className="w-3 h-3 bg-primary rounded-full mx-4"></span>
              <span className="w-16 h-1 bg-primary rounded-full"></span>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Watch our official launch event and learn about Finserve's innovative fintech solutions.
            </p>
          </div>
          
          {/* YouTube Video Embed */}
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed
              videoId={videoId}
              title="Finserve Official Launch"
              className="shadow-2xl"
              showControls={true}
              showInfo={false}
              enablePrivacyMode={true}
              lazyLoad={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mediaItems = [
  {
    title: "Newspaper Article - Finserve / Jenga / mKey",
    icon: Newspaper,
    link: "http://finserve.africa/media/finserve-suppliment.pdf",
    category: "Article",
    date: "2023",
  },
  {
    title: "Press Release - Finserve / Jenga",
    icon: FileText,
    link: "http://finserve.africa/media/Press-release-Equity-group-holdings-Plc-launches-Finserve-its-fintech-subsidiary.pdf",
    category: "Press",
    date: "2023",
  },
  {
    title: "Press Release - mKey",
    icon: FileText,
    link: "http://finserve.africa/media/Press-Release-mKey-Launch.pdf",
    category: "Press",
    date: "2023",
  },
  {
    title: "Launch Presentation - Equity Group launches Finserve",
    icon: Presentation,
    link: "http://finserve.africa/media/Equity-Group-Plc-launches-fintech-subsidiary-Finserve.pdf",
    category: "Launch",
    date: "2023",
  },
  {
    title: "Launch Presentation - Finserve / Jenga",
    icon: Presentation,
    link: "http://finserve.africa/media/Finserve-Launch-Presentation.pdf",
    category: "Launch",
    date: "2023",
  },
  {
    title: "Launch Presentation - mKey",
    icon: Presentation,
    link: "http://finserve.africa/media/mkey-Launch-Presentation.pdf",
    category: "Launch",
    date: "2023",
  },
  {
    title: "4G SIM cards roll out - Equitel",
    icon: Newspaper,
    link: "http://finserve.africa/media/Press-release-Equitel-rolls-out-4G-SIM-card.pdf",
    category: "News",
    date: "2023",
  },
  {
    title: "Finserve Africa Bags 2021 Best in E-Commerce Category",
    icon: Award,
    link: "http://finserve.africa/media/Press%20Release-%20Finserve%20Africa%20Bags%202021%20Best%20in%20E-Commerce%20Category%20at%20the%203rd%20Edition%20of%20the%20Kenya%20E-Commerce%20Awards.pdf",
    category: "Award",
    date: "2021",
  },
];

const policies = [
  {
    name: "Data Protection Policy",
    link: "https://www.finserve.africa/finserve-privacy-policy.php/",
    description: "Outlines how we collect, use, and safeguard personal data in compliance with global standards.",
    icon: Shield,
    category: "Privacy",
  },
  {
    name: "EGHL Information Security Policy",
    link: "https://www.finserve.africa/media/EGHL_INFORMATION_SECURITY_POLICY.pdf/",
    description: "Defines our approach to information security, ensuring robust protection for all clients and systems.",
    icon: Lock,
    category: "Security",
  },
  {
    name: "Finserve SMS Summary Policy",
    link: "https://www.finserve.africa/media/FINSERVE_SMS_POLICY_SUMMARY.pdf/",
    description: "Summarizes our SMS communications policy, highlighting transparency and customer control.",
    icon: MessageSquare,
    category: "Communication",
  },
];

const Media = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"media" | "policies" | "blogs" | "testimonials">("media");
  const [shouldScrollToSection, setShouldScrollToSection] = useState(false);

  const mediaCardImages = [mediaPhoto1, mediaPhoto2, mediaPhoto3, mediaPhoto4];
  const legalCardImages = [legalPhoto1, legalPhoto2, legalPhoto3];

  const handleTabChange = (tab: "media" | "policies" | "blogs" | "testimonials") => {
    setActiveTab(tab);
    setShouldScrollToSection(true);
  };

  useEffect(() => {
    const hash = location.hash.toLowerCase();
    const hashToTabMap: Record<string, "media" | "policies" | "blogs" | "testimonials"> = {
      "#media": "media",
      "#media-section": "media",
      "#policies": "policies",
      "#policies-section": "policies",
      "#testimonials": "testimonials",
      "#testimonials-section": "testimonials",
      "#blogs": "blogs",
      "#blogs-section": "blogs",
    };

    const tabFromHash = hashToTabMap[hash];
    if (!tabFromHash) return;

    setActiveTab(tabFromHash);
    setShouldScrollToSection(true);
  }, [location.hash]);

  useEffect(() => {
    if (!shouldScrollToSection) return;

    const section = document.getElementById(`${activeTab}-section`);
    if (section) {
      requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    setShouldScrollToSection(false);
  }, [activeTab, shouldScrollToSection]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section - natural size */}
       <section 
  className="relative min-h-[100vh] md:min-h-[90vh] lg:min-h-[100vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${Picturer})` }}
>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/40 rounded-full"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white/40 rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-white/40 rounded-full"></div>
            <div className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-white/40 rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm mb-6">
                <span className="text-primary font-semibold text-sm tracking-wider">
                  Resources & Compliance
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
                Media Centre  <span className="text-white/90"> & Privacy </span>
              </h1>
              
              <div className="flex justify-center items-center mb-6">
                <span className="w-24 h-1 bg-white rounded-full"></span>
                <span className="w-3 h-3 bg-white rounded-full mx-4"></span>
                <span className="w-24 h-1 bg-white rounded-full"></span>
              </div>
              
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                Stay updated with the latest news, explore our commitment to transparency, and hear from our customers.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              <Button
                variant={activeTab === "media" ? "default" : "outline"}
                onClick={() => handleTabChange("media")}
                className="rounded-full px-6 py-2 transition-all duration-300 flex items-center gap-2"
              >
                <Newspaper className="w-4 h-4" />
                <span>Media Centre</span>
                <ChevronRight className={`w-4 h-4 ${activeTab === "media" ? "text-white" : "text-muted-foreground"}`} />
              </Button>

              <Button
                variant={activeTab === "policies" ? "default" : "outline"}
                onClick={() => handleTabChange("policies")}
                className="rounded-full px-6 py-2 transition-all duration-300 flex items-center gap-2"
              >
                <Shield className="w-4 h-4" />
                <span>Legal & Privacy</span>
                <ChevronRight className={`w-4 h-4 ${activeTab === "policies" ? "text-white" : "text-muted-foreground"}`} />
              </Button>

              <Button
                variant={activeTab === "testimonials" ? "default" : "outline"}
                onClick={() => handleTabChange("testimonials")}
                className="rounded-full px-6 py-2 transition-all duration-300 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Testimonials</span>
                <ChevronRight className={`w-4 h-4 ${activeTab === "testimonials" ? "text-white" : "text-muted-foreground"}`} />
              </Button>

              <Button
                variant={activeTab === "blogs" ? "default" : "outline"}
                onClick={() => handleTabChange("blogs")}
                className="rounded-full px-6 py-2 transition-all duration-300 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Blogs</span>
                <ChevronRight className={`w-4 h-4 ${activeTab === "blogs" ? "text-white" : "text-muted-foreground"}`} />
              </Button>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'media' && (
              <div id="media-section">
                <div className="mb-16">
                  <Livestream />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {mediaItems.map((item, index) => {
                    const IconComponent = item.icon;
                    const cardImage = mediaCardImages[index % mediaCardImages.length];
                    return (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Card className="h-full border border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white overflow-hidden">
                          <div className="h-40 overflow-hidden">
                            <img
                              src={cardImage}
                              alt={`${item.title} preview`}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-6 h-full flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <IconComponent className="w-6 h-6 text-primary" />
                              </div>
                              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                                {item.category}
                              </span>
                            </div>
                            
                            <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                              {item.title}
                            </h3>
                            
                            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                              <span className="text-sm text-gray-500">{item.date}</span>
                              <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                                <span>View</span>
                                <ChevronRight className="w-4 h-4 ml-1" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    );
                  })}
                </div>

                <div className="bg-[#474747] rounded-3xl p-8 md:p-12 text-white mb-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                          Need Press Kit or Media Assets?
                        </h3>
                        <p className="text-white/90 mb-4">
                          Get our complete media package including logos, brand guidelines, and executive bios.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3">
                          <Download className="w-5 h-5" />
                          Download Package
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'policies' && (
              <div id="policies-section">
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Protecting Your Trust, Defining Our Standards
                  </h2>
                  <p className="text-lg text-gray-600">
                    At Finserve, protecting your data and maintaining transparency in our operations is our top priority. 
                    Below are our core policies that guide information security, data protection, and customer communications.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {policies.map((policy, index) => {
                    const IconComponent = policy.icon;
                    const policyImage = legalCardImages[index % legalCardImages.length];
                    return (
                      <div key={index} className="group relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col group-hover:-translate-y-2">
                          <div className="h-40 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-2xl">
                            <img
                              src={policyImage}
                              alt={`${policy.name} cover`}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="mb-6">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center mb-4">
                              <IconComponent className="w-8 h-8 text-primary" />
                            </div>
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                              {policy.category}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                            {policy.name}
                          </h3>
                          
                          <p className="text-gray-600 mb-6 flex-grow">
                            {policy.description}
                          </p>
                          
                          <a href={policy.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                            <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary/80 text-white py-6 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                              <Eye className="w-5 h-5" />
                              View Policy
                              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Our Compliance Standards
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-primary mb-2">GDPR</div>
                      <div className="text-sm text-gray-600">Data Protection</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-primary mb-2">ISO 27001</div>
                      <div className="text-sm text-gray-600">Security Standard</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-primary mb-2">PCI DSS</div>
                      <div className="text-sm text-gray-600">Payment Security</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-primary mb-2">SOC 2</div>
                      <div className="text-sm text-gray-600">Service Trust</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#474747] rounded-3xl p-8 md:p-12 text-white mb-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                          Download All Policies & Certificates
                        </h3>
                        <p className="text-white/90 mb-4">
                          Access our complete compliance documentation in one convenient package.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3">
                          <Download className="w-5 h-5" />
                          Download Package
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div id="testimonials-section" className="max-w-7xl mx-auto">
                <Testimonials />
              </div>
            )}

            {activeTab === "blogs" && (
              <div id="blogs-section" className="max-w-7xl mx-auto">
                <Blogs />
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Media;
