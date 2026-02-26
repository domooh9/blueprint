import { useState } from "react";
import { ArrowRight, Briefcase, X } from "lucide-react";
import careerHero from "@/assets/imag.png";

type Job = {
  id: number;
  title: string;
  type: string;
  department: string;
  description: string;
  tags: string[];
  qualifications: string[];
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    type: "Full-time",
    department: "Engineering",
    description: "Build responsive and accessible web applications using modern React patterns.",
    tags: ["React", "TypeScript", "Tailwind"],
    qualifications: [
      "4+ years of frontend development experience in production systems.",
      "Strong TypeScript and React architecture skills.",
      "Experience building reusable UI components and design-system driven pages.",
      "Comfortable collaborating with product, design, and QA teams.",
    ],
  },
  {
    id: 2,
    title: "Product Manager - Payments",
    type: "Full-time",
    department: "Product",
    description: "Lead roadmap delivery for payment experiences and partner integrations.",
    tags: ["Payments", "Roadmap", "API"],
    qualifications: [
      "3+ years in product management within fintech or payments.",
      "Ability to define clear product requirements and success metrics.",
      "Strong stakeholder communication and execution discipline.",
      "Experience shipping API-led products is an advantage.",
    ],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    type: "Full-time",
    department: "Infrastructure",
    description: "Improve platform reliability, deployment workflows, and cloud operations.",
    tags: ["AWS", "Kubernetes", "CI/CD"],
    qualifications: [
      "Hands-on experience with cloud infrastructure and observability tooling.",
      "Strong understanding of containerized deployments and automation.",
      "Experience with infrastructure-as-code workflows.",
      "Security and reliability mindset for production environments.",
    ],
  },
  {
    id: 4,
    title: "UX/UI Designer",
    type: "Contract",
    department: "Design",
    description: "Design intuitive digital finance journeys for web and mobile platforms.",
    tags: ["Figma", "UX Research", "Prototyping"],
    qualifications: [
      "Strong portfolio demonstrating end-to-end product design work.",
      "Ability to translate requirements into practical UI flows.",
      "Experience collaborating with developers in iterative delivery cycles.",
      "Strong visual hierarchy and accessibility awareness.",
    ],
  },
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [heroImageStyle, setHeroImageStyle] = useState("scale(1.02) translate3d(0px, 0px, 0px)");

  const openModal = (job: Job) => {
    setSelectedJob(job);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedJob(null);
    document.body.style.overflow = "auto";
  };

  const handleHeroMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    // Subtle pan + zoom for a "video-like" hover feel
    const moveX = (x - 0.5) * 18;
    const moveY = (y - 0.5) * 18;
    setHeroImageStyle(`scale(1.1) translate3d(${moveX}px, ${moveY}px, 0px)`);
  };

  const handleHeroMouseLeave = () => {
    setHeroImageStyle("scale(1.02) translate3d(0px, 0px, 0px)");
  };

  return (
    <main className="pt-16 md:pt-20 min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" />
                Careers at Finserve
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build the future of <span className="text-primary">digital finance</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                Join our team and help create products that power secure, scalable, and inclusive financial services.
              </p>
              <a
                href="#openings"
                className="inline-flex mt-8 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition"
              >
                View Openings
              </a>
            </div>

            <div
              className="rounded-2xl shadow-2xl overflow-hidden group"
              onMouseMove={handleHeroMouseMove}
              onMouseLeave={handleHeroMouseLeave}
            >
              <img
                src={careerHero}
                alt="Careers at Finserve"
                className="object-cover w-full h-[360px] md:h-[460px] transition-transform duration-500 ease-out"
                style={{ transform: heroImageStyle }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50" id="openings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm tracking-wider">OPEN ROLES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Current opportunities</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Find a role where your skills can create impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-primary font-medium mt-1">{job.department}</p>
                  </div>
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20">
                    {job.type}
                  </span>
                </div>

                <p className="mt-4 text-gray-600">{job.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <button
                    onClick={() => openModal(job)}
                    className="text-primary font-medium hover:underline"
                  >
                    Read more
                  </button>
                  <button className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              aria-label="Close role details"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
              <p className="text-primary font-semibold mt-1">{selectedJob.department}</p>
              <span className="inline-flex mt-3 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20">
                {selectedJob.type}
              </span>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Role Description</h3>
                <p className="text-gray-700">{selectedJob.description}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualifications</h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  {selectedJob.qualifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Careers;
