import { Users } from "lucide-react";

const boardMembersData = [
      {
    name: "DR. JAMES MWANGI, CBS",
    title: "Non-Executive Director",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/James_Mwangi.jpg/500px-James_Mwangi.jpg",
    bio: [
      "Dr. James Mwangi holds five honorary doctorate degrees in recognition of his positive impact on Kenyan society. He is a Bachelor of Commerce graduate and a Certified Public Accountant, honored thrice with National Presidential Awards: CBS, MBS, and HSC.",
      "Globally, he has received multiple awards, including the G8 Global Vision Award (2007), Forbes Africa Person of the Year (2012), and the Oslo Business for Peace Award (2020), described as the 'Nobel Prize for Business'.",
      "Regionally, he has been recognized as Africa Investor CEO of the Year, African Business Leader of the Year, and African Banker of the Year multiple times. He has served in advisory roles for VISA, IFC, the Clinton Global Initiative, and was the Founding Chair of Kenya's Vision 2030."
    ]
  },
  {
    name: "DR. PATRICK UWIZEYE",
    title: "Non-Executive Chairman",
    image: "https://www.finserve.africa/images/Dr_Patrick_Uwizeye.jpg",
    bio: [
      "Meet Dr. Uwizeye, our chairman who holds impressive academic and professional qualifications. He earned a Doctor of Business Administration (DBA) and an MSc in Strategic Planning from Edinburgh Business School, Heriot-Watt University, UK; an MBA in Financial Management from the University of Hull, UK; and a Masters in Communications Management (MCM) from Coventry University, UK.",
      "He is a Certified Public Accountant (CPA) and a member of both the Institute of CPA Kenya and Rwanda, a Certified Member of the Institute of Risk Management (CMIRM), UK, and an Associate Member of the Kenya Institute of Management.",
      "Dr. Uwizeye has over 28 years of experience as a business management professional in senior-level roles, including CFO and General Manager at MTN Rwanda, and Director of Finance and Administration at AACC, Nairobi. He currently leads BPU Consulting Ltd, the company he founded."
    ]
  },

  {
    name: "BRENT MALAHAY",
    title: "Non-Executive Director",
    image: "https://www.finserve.africa/images/Brent.jpg",
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
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-primary">Finserve</span>{" "}
                <span className="text-foreground">Board Members</span>
              </h1>
            </div>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
              Meet the visionary leaders guiding Finserve Africa towards innovation and excellence.
            </p>
          </div>
        </section>

        {/* Board Members Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-12">
              {boardMembersData.map((member, index) => (
                <div 
                  key={index}
                  className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start border-b border-muted-foreground pb-8 last:border-b-0"
                >
                  {/* Image */}
                  <div className="relative group w-full max-w-[300px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                    <div className="relative aspect-[3/4] bg-muted rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                        {member.name}
                      </h2>
                      <p className="text-base text-primary font-semibold">
                        {member.title}
                      </p>
                    </div>

                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      {member.bio.map((paragraph, idx) => (
                        <p key={idx} className="text-sm md:text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
