// FinAdmin.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Briefcase, 
  FileText, 
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Upload,
  Image as ImageIcon,
  LogOut,
  Menu,
  ChevronDown,
  Search,
  Filter,
  Eye,
  Calendar,
  User,
  Mail,
  Phone,
  Link as LinkIcon,
  Globe,
  Twitter,
  Linkedin,
  Github,
  CheckCircle,
  AlertCircle,
  RefreshCw
} from "lucide-react";

// Types
interface BoardMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  order: number;
  createdAt: string;
}

interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  description: string;
  requirements: string[];
  salary?: string;
  postedDate: string;
  deadline?: string;
  status: "active" | "closed" | "draft";
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar?: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishedDate: string;
  readTime: number;
  status: "published" | "draft" | "archived";
}

type TabType = "board" | "careers" | "blogs";

// Mock Data
const mockBoardMembers: BoardMember[] = [
  {
    id: "1",
    name: "Dr. Sarah Kimani",
    title: "Chairperson",
    bio: "Over 20 years of experience in fintech and banking. Former CEO of Equity Bank.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    linkedin: "https://linkedin.com/in/sarahkimani",
    order: 1,
    createdAt: "2025-01-15"
  },
  {
    id: "2",
    name: "James Mwangi",
    title: "Non-Executive Director",
    bio: "Tech entrepreneur and investor. Founded two successful startups in East Africa.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    linkedin: "https://linkedin.com/in/jamesmwangi",
    twitter: "https://twitter.com/jamesmwangi",
    order: 2,
    createdAt: "2025-01-20"
  },
  {
    id: "3",
    name: "Prof. Amina Hassan",
    title: "Independent Director",
    bio: "Professor of Economics at University of Nairobi. Expert in financial inclusion.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    order: 3,
    createdAt: "2025-02-01"
  }
];

const mockCareers: Career[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Nairobi, Kenya (Hybrid)",
    type: "Full-time",
    description: "Build responsive, performant web applications using React and TypeScript.",
    requirements: ["5+ years React experience", "TypeScript", "Tailwind CSS"],
    salary: "Ksh 300k - 450k",
    postedDate: "2026-02-15",
    deadline: "2026-03-15",
    status: "active"
  },
  {
    id: "2",
    title: "Product Manager - Payments",
    department: "Product",
    location: "Remote (Africa)",
    type: "Full-time",
    description: "Lead the development of our payment gateway and API products.",
    requirements: ["Fintech experience", "API products", "Agile methodology"],
    salary: "Ksh 350k - 500k",
    postedDate: "2026-02-10",
    status: "active"
  }
];

const mockBlogs: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Digital Payments in Africa",
    slug: "future-digital-payments-africa",
    excerpt: "How fintech is transforming financial inclusion across the continent.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Dr. Sarah Kimani",
    coverImage: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800",
    category: "Industry Trends",
    tags: ["fintech", "payments", "africa"],
    publishedDate: "2026-02-20",
    readTime: 5,
    status: "published"
  },
  {
    id: "2",
    title: "Building Inclusive Financial Systems",
    slug: "inclusive-financial-systems",
    excerpt: "Our approach to reaching the unbanked population.",
    content: "Lorem ipsum dolor sit amet...",
    author: "James Mwangi",
    coverImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800",
    category: "Company News",
    tags: ["inclusion", "banking"],
    publishedDate: "2026-02-18",
    readTime: 4,
    status: "published"
  }
];

// Modal Components
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>
          <div className="p-6 overflow-y-auto">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Form Components
interface BoardMemberFormProps {
  member?: BoardMember;
  onSubmit: (data: Partial<BoardMember>) => void;
  onCancel: () => void;
}

const BoardMemberForm = ({ member, onSubmit, onCancel }: BoardMemberFormProps) => {
  const [formData, setFormData] = useState({
    name: member?.name || "",
    title: member?.title || "",
    bio: member?.bio || "",
    image: member?.image || "",
    linkedin: member?.linkedin || "",
    twitter: member?.twitter || "",
    order: member?.order || 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Name *
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Dr. Sarah Kimani"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Title *
        </label>
        <input
          type="text"
          required
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Chairperson"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Bio *
        </label>
        <textarea
          required
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Over 20 years of experience in fintech..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Image URL *
        </label>
        <div className="flex gap-2">
          <input
            type="url"
            required
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="flex-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="https://images.unsplash.com/..."
          />
          <button
            type="button"
            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
          >
            <Upload className="w-5 h-5 text-slate-500" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            LinkedIn
          </label>
          <input
            type="url"
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="https://linkedin.com/in/..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Twitter
          </label>
          <input
            type="url"
            value={formData.twitter}
            onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
            className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="https://twitter.com/..."
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Display Order
        </label>
        <input
          type="number"
          min="1"
          value={formData.order}
          onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
          className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          {member ? "Update Member" : "Add Member"}
        </button>
      </div>
    </form>
  );
};

// Main Admin Component
const FinAdmin = () => {
  const [activeTab, setActiveTab] = useState<TabType>("board");
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>(mockBoardMembers);
  const [careers, setCareers] = useState<Career[]>(mockCareers);
  const [blogs, setBlogs] = useState<BlogPost[]>(mockBlogs);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [modalType, setModalType] = useState<"add" | "edit">("add");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Sidebar collapsed state for mobile
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Show notification
  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  // CRUD Handlers
  const handleAddBoardMember = (data: Partial<BoardMember>) => {
    const newMember: BoardMember = {
      id: Date.now().toString(),
      name: data.name!,
      title: data.title!,
      bio: data.bio!,
      image: data.image!,
      linkedin: data.linkedin,
      twitter: data.twitter,
      order: data.order || boardMembers.length + 1,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setBoardMembers([...boardMembers, newMember]);
    setModalOpen(false);
    showNotification("success", "Board member added successfully");
  };

  const handleEditBoardMember = (data: Partial<BoardMember>) => {
    if (!editingItem) return;
    const updated = boardMembers.map(m => 
      m.id === editingItem.id ? { ...m, ...data } : m
    );
    setBoardMembers(updated);
    setModalOpen(false);
    setEditingItem(null);
    showNotification("success", "Board member updated successfully");
  };

  const handleDeleteBoardMember = (id: string) => {
    setBoardMembers(boardMembers.filter(m => m.id !== id));
    setShowDeleteConfirm(null);
    showNotification("success", "Board member deleted successfully");
  };

  // Tab content components
  const renderBoardTab = () => (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boardMembers
          .filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .sort((a, b) => a.order - b.order)
          .map((member) => (
            <motion.div
              key={member.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">{member.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">{member.bio}</p>
                
                <div className="flex items-center gap-2 mt-3">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                      <Linkedin className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                      <Twitter className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-700">
                  <span className="text-xs text-slate-400">Order: {member.order}</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => {
                        setEditingItem(member);
                        setModalType("edit");
                        setModalOpen(true);
                      }}
                      className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4 text-slate-500" />
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(member.id)}
                      className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>

                {showDeleteConfirm === member.id && (
                  <div className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-2xl flex items-center justify-center p-4">
                    <div className="text-center">
                      <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Delete this member?</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDeleteBoardMember(member.id)}
                          className="flex-1 px-3 py-1.5 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => setShowDeleteConfirm(null)}
                          className="flex-1 px-3 py-1.5 bg-slate-200 dark:bg-slate-700 text-sm rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );

  const renderCareersTab = () => (
    <div className="space-y-4">
      {careers
        .filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((career) => (
          <motion.div
            key={career.id}
            layout
            className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{career.title}</h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">{career.department}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                career.status === 'active' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                career.status === 'closed' ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400' :
                'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
              }`}>
                {career.status}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="text-sm font-medium">{career.location}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Type</p>
                <p className="text-sm font-medium">{career.type}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Salary</p>
                <p className="text-sm font-medium">{career.salary || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Posted</p>
                <p className="text-sm font-medium">{career.postedDate}</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">{career.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {career.requirements.map((req, i) => (
                <span key={i} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-lg">
                  {req}
                </span>
              ))}
            </div>

            <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                <Edit className="w-4 h-4 text-slate-500" />
              </button>
              <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
          </motion.div>
        ))}
    </div>
  );

  const renderBlogsTab = () => (
    <div className="space-y-4">
      {blogs
        .filter(b => b.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((blog) => (
          <motion.div
            key={blog.id}
            layout
            className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-48 h-32 md:h-auto">
                <img 
                  src={blog.coverImage} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{blog.title}</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">{blog.category}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    blog.status === 'published' ? 'bg-green-100 text-green-700' :
                    blog.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    {blog.status}
                  </span>
                </div>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">{blog.excerpt}</p>
                
                <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {blog.publishedDate}
                  </span>
                  <span>{blog.readTime} min read</span>
                </div>

                <div className="flex justify-end gap-2 mt-4">
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    <Edit className="w-4 h-4 text-slate-500" />
                  </button>
                  <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg ${
              notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'
            } text-white`}
          >
            {notification.type === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span>{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside 
        initial={{ width: sidebarOpen ? 280 : 80 }}
        animate={{ width: sidebarOpen ? 280 : 80 }}
        className="fixed left-0 top-0 h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-40"
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            {sidebarOpen && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="font-bold text-lg">Finserve Admin</span>
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              <Menu className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("board")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeTab === "board" 
                  ? "bg-indigo-600 text-white" 
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Users className="w-5 h-5" />
              {sidebarOpen && <span>Board Members</span>}
            </button>
            
            <button
              onClick={() => setActiveTab("careers")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeTab === "careers" 
                  ? "bg-indigo-600 text-white" 
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Briefcase className="w-5 h-5" />
              {sidebarOpen && <span>Careers</span>}
            </button>
            
            <button
              onClick={() => setActiveTab("blogs")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeTab === "blogs" 
                  ? "bg-indigo-600 text-white" 
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <FileText className="w-5 h-5" />
              {sidebarOpen && <span>Blogs</span>}
            </button>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main style={{ marginLeft: sidebarOpen ? 280 : 80 }} className="transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              {activeTab === "board" && "Board Members"}
              {activeTab === "careers" && "Career Opportunities"}
              {activeTab === "blogs" && "Blog Posts"}
            </h1>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Add Button */}
              <button
                onClick={() => {
                  setEditingItem(null);
                  setModalType("add");
                  setModalOpen(true);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add New</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {activeTab === "board" && renderBoardTab()}
          {activeTab === "careers" && renderCareersTab()}
          {activeTab === "blogs" && renderBlogsTab()}
        </div>
      </main>

      {/* Modals */}
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingItem(null);
        }}
        title={modalType === "add" ? "Add Board Member" : "Edit Board Member"}
      >
        <BoardMemberForm
          member={editingItem}
          onSubmit={modalType === "add" ? handleAddBoardMember : handleEditBoardMember}
          onCancel={() => {
            setModalOpen(false);
            setEditingItem(null);
          }}
        />
      </Modal>
    </div>
  );
};

export default FinAdmin;