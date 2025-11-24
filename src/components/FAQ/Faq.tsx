import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowUp, Mail, Phone } from "lucide-react";

const faqData = [
  {
    category: "Bulk SMS",
    questions: [
      {
        question: "How do I set up an account?",
        answer: "To set up an account, visit our registration page and fill in your business details. You'll receive a verification email within minutes. Once verified, you can log in and start using our services immediately.",
      },
      {
        question: "Am I able to schedule an SMS?",
        answer: "Yes, you can schedule SMS messages for future delivery. Simply select the date and time when creating your message, and our system will automatically send it at the specified time. You can schedule messages up to 30 days in advance.",
      },
      {
        question: "Can we send SMSs outside Kenya?",
        answer: "Yes, our platform supports international SMS delivery to over 190 countries worldwide. International rates apply and vary by destination. Contact our sales team for specific pricing information.",
      },
      {
        question: "What is the maximum length of an SMS message that one can send on the platform?",
        answer: "A standard SMS message can contain up to 160 characters. Messages longer than 160 characters will be sent as concatenated SMS (multiple messages), with each segment containing up to 153 characters. Our platform automatically handles message segmentation.",
      },
      {
        question: "Do you charge any monthly charges or start-up fees?",
        answer: "No, we don't charge any monthly fees or start-up costs. You only pay for the SMS messages you send. Our pricing is transparent with no hidden charges, making it easy to budget for your communication needs.",
      },
      {
        question: "How Do I Send a message?",
        answer: "Sending a message is simple: log into your account, navigate to the 'Send SMS' section, enter your recipient's phone number or upload a contact list, compose your message, and click 'Send'. You'll receive immediate confirmation of delivery status.",
      },
      {
        question: "Do we offer branding/Sender ID services for SMS?",
        answer: "Yes, we offer custom Sender ID services that allow you to brand your SMS messages with your company name or brand. This helps recipients instantly recognize your business. Sender ID registration typically takes 3-5 business days for approval.",
      },
      {
        question: "Sender ID requirements.",
        answer: "To register a Sender ID, you need to provide: 1) Valid business registration documents, 2) A registered business name or trademark, 3) Proof of business address, and 4) A completed Sender ID application form. The Sender ID must be alphanumeric and between 3-11 characters.",
      },
      {
        question: "Do you provide delivery responses for the messages?",
        answer: "Yes, we provide comprehensive delivery reports for all sent messages. You can track the status of each SMS (delivered, pending, failed) in real-time through your dashboard. Detailed reports are also available for download.",
      },
      {
        question: "How do I contact Support?",
        answer: "Our support team is available Monday to Friday, 8 AM to 6 PM. You can reach us via email at support@finserve.africa, call us at +254 766 000 200, or use the live chat feature in your account dashboard. We typically respond within 2 hours during business hours.",
      },
      {
        question: "How can I change my password?",
        answer: "To change your password, log into your account, go to 'Settings' > 'Security', and click 'Change Password'. Enter your current password and your new password twice for confirmation. For security, we recommend using a strong password with a mix of letters, numbers, and symbols.",
      },
      {
        question: "How long does it take to get the SMS up and running?",
        answer: "Once your account is verified, you can start sending SMS immediately. If you're registering a custom Sender ID, the approval process takes 3-5 business days. Our team will guide you through the setup to ensure you're sending messages as quickly as possible.",
      },
      {
        question: "Do bulk SMS expire?",
        answer: "SMS credits purchased on our platform do not expire as long as your account remains active. However, scheduled messages that fail to send within 72 hours will be marked as expired and credits will be refunded to your account.",
      },
      {
        question: "My activation code has not come through, what do I do?",
        answer: "If you haven't received your activation code within 10 minutes, first check your spam/junk folder. If it's not there, click 'Resend activation code' on the login page. If the issue persists, contact our support team at +254 766 000 200 or support@finserve.africa.",
      },
      {
        question: "Is there a regulated period that I can send SMS?",
        answer: "While there are no strict regulatory restrictions on SMS sending times in Kenya, we recommend following best practices: avoid sending promotional messages between 9 PM and 8 AM unless it's transactional or time-sensitive information. This helps maintain good customer relationships.",
      },
      {
        question: "What is the Maximum number of customers that I can send an SMS to in a day?",
        answer: "There is no daily sending limit on our platform. However, if you're planning to send to very large volumes (over 100,000 recipients per day), please contact our sales team to ensure optimal delivery rates and to discuss any volume-based pricing benefits.",
      },
      {
        question: "How safe is my client contact list?",
        answer: "Your contact data is completely secure. We use bank-level encryption (256-bit SSL) to protect all data in transit and at rest. We never share, sell, or use your contact lists for any purpose other than delivering your SMS messages. Our platform is fully GDPR and data protection compliant.",
      },
    ],
  },
  {
    category: "Jenga API",
    questions: [
      {
        question: "What is Jenga API?",
        answer: "Jenga API is our comprehensive suite of financial APIs that enable businesses to integrate banking and payment services into their applications. It provides secure access to account information, payments, airtime purchase, and more.",
      },
      {
        question: "How do I get started with Jenga API?",
        answer: "Visit our developer portal at jengaapi.io, register for an account, and access our sandbox environment to test integrations. Our comprehensive documentation and SDKs will guide you through the integration process.",
      },
      {
        question: "What authentication methods does Jenga API support?",
        answer: "Jenga API uses OAuth 2.0 for authentication, ensuring secure API access. All requests require a valid access token obtained through the authentication endpoint using your API credentials.",
      },
    ],
  },
  {
    category: "Jenga Payment Gateway",
    questions: [
      {
        question: "What payment methods are supported?",
        answer: "Jenga Payment Gateway supports multiple payment methods including card payments (Visa, Mastercard), mobile money (M-Pesa, Airtel Money), and bank transfers. This gives your customers flexibility in how they pay.",
      },
      {
        question: "How long does it take to integrate the payment gateway?",
        answer: "Integration typically takes 3-7 business days depending on your technical setup. We provide comprehensive documentation, SDKs for popular programming languages, and dedicated technical support to ensure smooth integration.",
      },
      {
        question: "What are the transaction fees?",
        answer: "Transaction fees vary based on payment method and transaction volume. Contact our sales team for a customized pricing structure that fits your business needs. We offer competitive rates with no hidden charges.",
      },
    ],
  },
  {
    category: "Equitel",
    questions: [
      {
        question: "What is Equitel?",
        answer: "Equitel is Kenya's first mobile virtual network operator (MVNO) offering integrated mobile and financial services. It combines traditional mobile services with advanced financial capabilities on a single SIM card.",
      },
      {
        question: "How is Equitel different from other mobile services?",
        answer: "Equitel uniquely integrates banking services directly into your mobile line, allowing you to make payments, transfer money, and access loans without needing a separate banking app. It runs on Kenya's widest 4G network.",
      },
      {
        question: "Can I port my existing number to Equitel?",
        answer: "Yes, you can port your existing mobile number to Equitel while maintaining all your contacts and services. The porting process typically takes 24-48 hours and our support team will guide you through each step.",
      },
    ],
  },
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Bulk SMS");

  // Filter questions based on search query
  const filteredFAQs = faqData.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  // Get current category data
  const currentCategory = filteredFAQs.find(
    (cat) => cat.category === activeCategory
  );

  // Handle scroll for back to top button
  const handleScroll = () => {
    setShowBackToTop(window.scrollY > 400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add scroll listener
  useState(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
    

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <pattern
                    id="faq-pattern"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="2"
                      cy="2"
                      r="1"
                      fill="currentColor"
                      className="text-primary"
                    />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#faq-pattern)" />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Find answers to common questions about our products and services
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-base rounded-full border-2 border-border focus:border-primary transition-colors bg-background/80 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-3 mb-10 justify-center">
                {faqData.map((category) => (
                  <Button
                    key={category.category}
                    variant={
                      activeCategory === category.category ? "default" : "outline"
                    }
                    onClick={() => setActiveCategory(category.category)}
                    className="rounded-full px-6 py-2 transition-all duration-300"
                  >
                    {category.category}
                  </Button>
                ))}
              </div>

              {/* Questions Accordion */}
              {currentCategory && currentCategory.questions.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {currentCategory.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-border rounded-lg px-6 bg-card hover:shadow-md transition-shadow duration-300"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pt-2">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No questions found matching your search.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Still have questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Can't find the answer you're looking for? Our support team is here
                to help.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a
                    href="tel:+254766000200"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    +254 766 000 200
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:support@finserve.africa"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    support@finserve.africa
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="rounded-full px-8"
                  onClick={() => window.location.href = "/#contact"}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

     
    </div>
  );
}