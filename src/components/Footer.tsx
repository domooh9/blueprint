import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { initEloquaForm } from "@/lib/eloquaEmbed";
import finserveLogo from "@/assets/finserve-logo.png";
import cert2 from "@/assets/cert2.png"
import cert1 from "@/assets/cert1.png"
import Picturer from "@/assets/Picturer.png"

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/FinserveAfricaofficial/", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: "X", href: "https://x.com/Finserve_Africa", label: "X" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/finserveafrica/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@finserveafrica2390", label: "YouTube" },
];

const quickLinks = [
  { label: "Who we are", href: "/who-we-are" },
  { label: "The Board", href: "/boardmembers" },
  { label: "Careers", href: "/careers" },
  { label: "Equitel", href: "https://equitel.com/" },
  { label: "Jenga PGW", href: "https://jengapgw.io/" },
  { label: "Jenga API", href: "https://jengahq.io/" },
  { label: "Finserve Mobile", href: "https://finservemoney.com/" },
];

const complianceLinks = [
  { label: "Legal", href: "/media-centre#policies" },
  { label: "Security Policy", href: "/media-centre#policies" },
];

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
export const Footer = () => {
  const [showInquiry, setShowInquiry] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success">("idle");
  const formRef = useRef<HTMLFormElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    let timeout = 5;
    let timerId: number | null = null;
    const waitUntilCustomerGUIDIsRetrieved = () => {
      if (timerId && timeout === 0) return;
      const getGuid = (window as any).GetElqCustomerGUID as undefined | (() => string);
      const fields = document.querySelectorAll<HTMLInputElement>(
        'form[name="UntitledForm-1774961240561"] input[name="elqCustomerGUID"]'
      );
      if (typeof getGuid === "function" && fields.length > 0) {
        const guid = getGuid();
        fields.forEach((field) => {
          field.value = guid;
        });
        return;
      }
      timeout -= 1;
      timerId = window.setTimeout(waitUntilCustomerGUIDIsRetrieved, 500);
    };
    (window as any)._elqQ = (window as any)._elqQ || [];
    (window as any)._elqQ.push(["elqGetCustomerGUID"]);
    waitUntilCustomerGUIDIsRetrieved();
    return () => {
      if (timerId) window.clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    if (!formRef.current) return;
    initEloquaForm(formRef.current);
  }, []);

  const handleEloquaSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const handler = (window as any).handleFormSubmit as undefined | ((form: HTMLFormElement) => boolean);
    if (typeof handler === "function") {
      const result = handler(event.currentTarget);
      if (result === false) {
        setSubmitStatus("idle");
        return;
      }
    }

    const iframe = iframeRef.current;
    if (iframe) {
      const onLoad = () => {
        setSubmitStatus("success");
        iframe.removeEventListener("load", onLoad);
      };
      iframe.addEventListener("load", onLoad);
    } else {
      setSubmitStatus("success");
    }

    setSubmitStatus("sending");
    event.currentTarget.submit();
  };
  return (
    <footer 
      className="bg-primary relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${Picturer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '35vh' // Further reduced
      }}
    >
      <div className="font-sans">
        
        {/* Diagonal stripe pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 50px,
              rgba(255,255,255,0.03) 50px,
              rgba(255,255,255,0.03) 100px
            )`
          }} />
        </div>

        <div className="relative z-10">
          {/* Compliance Certifications Section - REDUCED */}
          <div className="pt-4 pb-2 text-center"> {/* Reduced vertical padding */}
            <h2 className="text-lg md:text-xl font-light italic text-white mb-1 tracking-tight"> {/* Smaller font and margin */}
              Compliance Certifications
            </h2>
            
            {/* Smaller certification badges */}
            <div className="flex justify-center gap-3 mb-1"> {/* Reduced gap and margin */}
              <img 
                src={cert1} 
                alt="Certification 1" 
                className="w-20 h-10 md:w-24 md:h-12 object-contain" // Smaller images
              />
              <img 
                src={cert2} 
                alt="Certification 2" 
                className="w-20 h-10 md:w-24 md:h-12 object-contain" // Smaller images
              />
            </div>
          </div>

          {/* Divider */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-white/30" />
          </div>

          {/* Main Footer Content - Compact */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3"> {/* Reduced padding */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3"> {/* Reduced gap */}
              
              {/* Left Column - Brand */}
              <div>
                <img 
                  src={finserveLogo} 
                  alt="Finserve" 
                  className="h-7 mb-1 brightness-0 invert" // Smaller logo with reduced margin
                />
                <p className="text-white/80 text-xs mb-2 max-w-xs font-normal leading-snug tracking-normal"> {/* Smaller text with tighter line height */}
                  The innovative fintech platform connecting potential with prosperity across borders.
                </p>
                
                {/* Social Icons - smaller */}
                <div className="flex gap-2.5">
                  {socialLinks.map((social) => {
                    if (social.icon === "X") {
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          className="text-white hover:text-white/70 transition-colors"
                          aria-label={social.label}
                        >
                        <svg
  viewBox="0 0 24 24"
  className="w-5 h-5 fill-current" // 5 * 4px = 20px
>
  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
</svg>

                        </a>
                      );
                    }
                    const Icon = social.icon as typeof Facebook;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="text-white hover:text-white/70 transition-colors"
                        aria-label={social.label}
                      >
                        <Icon size={20} /> {/* Smaller */}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Middle Column - Quick Links */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5 tracking-tight"> {/* Smaller */}
                  Quick Links
                </h4>
                <ul className="space-y-0.5"> {/* Very tight spacing */}
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/80 text-xs hover:text-white transition-colors font-normal tracking-normal"
                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                        
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column - Compliance */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5 tracking-tight">
                  Compliance
                </h4>
                <ul className="space-y-0.5">
                  {complianceLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/80 text-xs hover:text-white transition-colors font-normal tracking-normal"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Compact */}
          <div className="bg-[#595A5C] py-1.5"> {/* Very small padding */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-1.5 text-xs">
                {/* Copyright */}
                <p className="text-white/70 font-normal tracking-normal text-xs">
                  © {new Date().getFullYear()} Finserve Africa Limited. All rights reserved.
                </p>
                
                {/* Links - compact */}
                <div className="flex gap-3">
                  <a 
                    href="/media-centre#policies" 
                    className="text-white/70 hover:text-white transition-colors font-normal tracking-normal text-xs"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Inquiry/Feedback Button */}
      <button
        type="button"
        onClick={() => setShowInquiry((prev) => !prev)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-[#ec2240] px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_16px_40px_rgba(236,34,64,0.45)] transition-transform hover:-translate-y-1"
        aria-expanded={showInquiry}
        aria-controls="finserve-inquiry-panel"
      >
        {showInquiry ? "Close Inquiry/Feedback" : "Inquiry/Feedback"}
      </button>

      {/* Floating Inquiry/Feedback Panel */}
      {showInquiry && (
        <div
          id="finserve-inquiry-panel"
          className="fixed bottom-20 right-6 z-40 w-[92vw] max-w-md rounded-2xl border border-[#dfe6f4] bg-white p-5 shadow-[0_30px_80px_rgba(11,31,102,0.25)]"
          role="dialog"
          aria-label="Inquiry and feedback form"
        >
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-[#0b1f66]">Inquiry/Feedback</h4>
            <p className="text-sm text-[#5b6a92]">Tell us what you need or share feedback.</p>
          </div>
          <form
            ref={formRef}
            className="elq-form space-y-3"
            action="https://s793546030.t.eloqua.com/e/f2"
            method="post"
            name="UntitledForm-1774961240561"
            id="form183-footer"
            onSubmit={handleEloquaSubmit}
            target="eloquaHiddenFrameFooter"
          >
            <input type="hidden" name="elqFormName" value="UntitledForm-1774961240561" />
            <input type="hidden" name="elqSiteId" value="793546030" />
            <input type="hidden" name="elqCampaignId" value="" />
            <input type="hidden" name="elqCustomerGUID" value="" />
            <input type="hidden" name="elqCookieWrite" value="0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-[#2b3a66]" htmlFor="fe2239-footer">Full Name</label>
                <input
                  type="text"
                  name="fullName1"
                  id="fe2239-footer"
                  placeholder="Your full name"
                  required
                  className="elq-item-input mt-1 w-full rounded-lg border border-[#d9e2f2] bg-white px-3 py-2 text-sm text-[#1f2c55] outline-none focus:border-[#ec2240] focus:ring-2 focus:ring-[#ec2240]/20"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#2b3a66]" htmlFor="fe2241-footer">Email Address</label>
                <input
                  type="email"
                  name="emailAddress"
                  id="fe2241-footer"
                  placeholder="you@company.com"
                  required
                  className="elq-item-input mt-1 w-full rounded-lg border border-[#d9e2f2] bg-white px-3 py-2 text-sm text-[#1f2c55] outline-none focus:border-[#ec2240] focus:ring-2 focus:ring-[#ec2240]/20"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-[#2b3a66]" htmlFor="fe2240-footer">Phone number</label>
              <input
                type="tel"
                name="phoneNumber1"
                id="fe2240-footer"
                placeholder="+254 7xx xxx xxx"
                required
                className="elq-item-input mt-1 w-full rounded-lg border border-[#d9e2f2] bg-white px-3 py-2 text-sm text-[#1f2c55] outline-none focus:border-[#ec2240] focus:ring-2 focus:ring-[#ec2240]/20"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#2b3a66]" htmlFor="fe2242-footer">Paragraph Text</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                name="paragraphText"
                id="fe2242-footer"
                required
                className="elq-item-textarea mt-1 w-full rounded-lg border border-[#d9e2f2] bg-white px-3 py-2 text-sm text-[#1f2c55] outline-none focus:border-[#ec2240] focus:ring-2 focus:ring-[#ec2240]/20"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#0b1f66] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0a1a4f]"
            >
              Send Inquiry/Feedback
            </button>
            {submitStatus === "success" && (
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
                Thanks! Your inquiry has been sent.
              </div>
            )}
          </form>
          <iframe
            ref={iframeRef}
            title="eloqua-hidden-frame"
            name="eloquaHiddenFrameFooter"
            className="hidden"
          />
        </div>
      )}
    </footer>
  );
};
