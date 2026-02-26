import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Picturer from "@/assets/imagee.png";

const boardMembersData = [
  {
    name: "DR. JAMES MWANGI, CBS",
    title: "Non-Executive Director",
    image: "https://s7d1.scene7.com/is/image/wbcollab/Screen-Shot-2020-09-17-at-1_26_30-PM:twld?qlt=90",
    bio: [
      "Dr. James Mwangi holds five honorary doctorate degrees in recognition of his positive impact on Kenyan society. He is a Bachelor of Commerce graduate and a Certified Public Accountant, honored thrice with National Presidential Awards: CBS, MBS, and HSC.",
      "Globally, he has received multiple awards, including the G8 Global Vision Award (2007), Forbes Africa Person of the Year (2012), and the Oslo Business for Peace Award (2020), described as the 'Nobel Prize for Business'.",
      "Regionally, he has been recognized as Africa Investor CEO of the Year, African Business Leader of the Year, and African Banker of the Year multiple times. He has served in advisory roles for VISA, IFC, the Clinton Global Initiative, and was the Founding Chair of Kenya's Vision 2030."
    ]
  },
  {
    name: "DR. PATRICK UWIZEYE",
    title: "Non-Executive Chairman",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0YTzHfwbn9Re74Wxx_S_EDzQ5Aw0bvyc2Q&s",
    bio: [
      "Meet Dr. Uwizeye, our chairman who holds impressive academic and professional qualifications. He earned a Doctor of Business Administration (DBA) and an MSc in Strategic Planning from Edinburgh Business School, Heriot-Watt University, UK; an MBA in Financial Management from the University of Hull, UK; and a Masters in Communications Management (MCM) from Coventry University, UK.",
      "He is a Certified Public Accountant (CPA) and a member of both the Institute of CPA Kenya and Rwanda, a Certified Member of the Institute of Risk Management (CMIRM), UK, and an Associate Member of the Kenya Institute of Management.",
      "Dr. Uwizeye has over 28 years of experience as a business management professional in senior-level roles, including CFO and General Manager at MTN Rwanda, and Director of Finance and Administration at AACC, Nairobi. He currently leads BPU Consulting Ltd, the company he founded."
    ]
  },
  {
    name: "BRENT MALAHAY",
    title: "Non-Executive Director",
    image: "https://scontent.fnbo1-1.fna.fbcdn.net/v/t1.6435-9/37331039_1478988452246776_127289370225934336_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=LvSC_PwUvEcQ7kNvwFsDBzo&_nc_oc=AdmoLyeclt6R3tNoYux8vst2xNFQ-w6jTDFThXUDVkxnwHG6dIo-fl8r_04gtSOrZMs&_nc_zt=23&_nc_ht=scontent.fnbo1-1.fna&_nc_gid=7UDI8IS-NfCHGYEDUm3bvw&oh=00_Aft08ZjJ9XLXNqAvQe3D5NzezuDb9hlfJMPRwbCQVww_WA&oe=69C390D2",
    bio: [
      "Brent Malahay holds a Master’s in Economics and a Bachelor’s in Commerce from the University of KwaZulu-Natal, South Africa. He has over 16 years of experience across commercial banking, credit ratings, investment banking, and fund management.",
      "He previously worked at Standard Bank, Fitch Ratings, J.P. Morgan, and Investec Asset Management, gaining deep expertise in multiple financial sectors.",
      "He joined Equity Group in 2016, contributing significantly to the growth and strategic direction of the organization."
    ]
  },
  {
    name: "MS. SARAH KABIRA",
    title: "Non-Executive Director",
    image: "https://www.finserve.africa/images/sarah-kibira.png",
    bio: [
      "Sarah is a seasoned telecommunications and technology professional with over 15 years of experience in ICT and IT sectors. She is the Managing Director of Techminds Technologies Limited, a leading ICT services firm.",
      "She previously served as Senior Manager, Enterprise Segments at Safaricom PLC, and Innovations Leader at Copycat Group, driving strategic projects, ITIL initiatives, Salesforce.com implementation, and new product development.",
      "Passionate about women’s empowerment, Sarah serves on the Women’s Mentorship Network and has received the Women in STEM Award (2023) and IEEE Woman Engineer of the Year (2008).",
      "She holds an MPhil in Technology Policy from Judge Business School, University of Cambridge, a First Class Honors in Computer Science from Nairobi University, and has completed executive programs at Oxford University.",
      "Sarah is a Council Member of the Kenya Advanced Institute of Science and Technology."
    ]
  }
];

export default function BoardMembers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedMember, setSelectedMember] = useState<typeof boardMembersData[0] | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320; // approximate card width + gap
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const openModal = (member: typeof boardMembersData[0]) => {
    setSelectedMember(member);
    // Optional: lock body scroll
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const atEnd = container.scrollLeft >= maxScrollLeft - 5;

      if (atEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      container.scrollBy({ left: 320, behavior: "smooth" });
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        {/* Hero Section - Single Background Image */}
       <section className="relative py-16 md:py-28 overflow-hidden group flex flex-col justify-end min-h-[70vh] md:min-h-[80vh]">
  {/* Background image with hover zoom */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-110"
    style={{ backgroundImage: `url(${Picturer})` }}
  />
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />

  {/* Content */}
  <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center pb-8 md:pb-12">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
      <span className="text-white drop-shadow-lg">Finserve</span>{" "}
      <span className="text-primary drop-shadow-lg">Board Members</span>
    </h1>
    <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
      Meet the visionary leaders guiding Finserve Africa towards innovation and excellence.
    </p>
  </div>
</section>

        {/* Board Members Carousel */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="relative">
              {/* Scroll Buttons */}
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all duration-300 -ml-4 md:-ml-5"
                aria-label="Previous members"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all duration-300 -mr-4 md:-mr-5"
                aria-label="Next members"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Scrollable Cards */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {boardMembersData.map((member, index) => (
                  <div
                    key={index}
                    className="flex-none w-[280px] sm:w-[320px] md:w-[350px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 snap-start"
                  >
                    {/* Image */}
                    <div className="relative h-64 sm:h-72 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary font-semibold mt-1">
                        {member.title}
                      </p>
                      <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                        {member.bio[0]}
                      </p>
                      <button
                        onClick={() => openModal(member)}
                        className="mt-4 text-primary font-medium hover:underline focus:outline-none"
                      >
                        Read more
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modal for full details */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  {/* Details */}
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedMember.name}</h2>
                    <p className="text-primary font-semibold mt-1">{selectedMember.title}</p>
                    <div className="mt-4 space-y-3 text-gray-700">
                      {selectedMember.bio.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
