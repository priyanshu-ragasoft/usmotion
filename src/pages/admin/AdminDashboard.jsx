import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Film, Layers, MessageSquare, LogOut, BarChart3, CheckCircle2, Sparkles, ShieldCheck, Zap, Menu, X, Briefcase, Wrench, Info, LayoutTemplate, Phone, Settings, Video } from "lucide-react";
import { FEATURED_VIDEOS, CATEGORIES, REELS } from "../../utils/constants";
import Logo from "../../components/common/Logo";
import AdminOverviewTab from "../../components/admin/AdminOverviewTab";
import AdminBannerUpdatesTab from "../../components/admin/AdminBannerUpdatesTab";
import AdminCategoriesTab from "../../components/admin/AdminCategoriesTab";
import AdminVideosTab from "../../components/admin/AdminVideosTab";
import AdminServicesTab from "../../components/admin/AdminServicesTab";
import AdminIndustriesTab from "../../components/admin/AdminIndustriesTab";
import AdminAboutUsTab from "../../components/admin/AdminAboutUsTab";
import AdminInquiriesTab from "../../components/admin/AdminInquiriesTab";
import AdminContactBannerTab from "../../components/admin/AdminContactBannerTab";
import AdminSettingsTab from "../../components/admin/AdminSettingsTab";
import AdminReelsTab from "../../components/admin/AdminReelsTab";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [videosList, setVideosList] = useState(FEATURED_VIDEOS);
  const [toastMessage, setToastMessage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem("usmotion_admin_token");
    localStorage.removeItem("usmotion_admin_user");
    navigate("/admin/login", { replace: true });
  };

  const handleAddVideo = (newVideo) => {
    setVideosList((prev) => [newVideo, ...prev]);
    showToast("New film added to catalogue!");
  };

  const handleUpdateVideo = (updatedVideo) => {
    setVideosList((prev) =>
      prev.map((v) => (v.id === updatedVideo.id ? updatedVideo : v))
    );
    showToast("Film details updated!");
  };

  const handleDeleteVideo = (id) => {
    setVideosList((prev) => prev.filter((v) => v.id !== id));
    showToast("Film removed from catalogue");
  };

  // Mock inquiries data
  const inquiries = [
    { id: 1, name: "Aether Tech", email: "contact@aether.com", service: "Commercial Film", budget: "$75k - $150k", date: "Today, 2:40 PM", status: "New", urgent: true },
    { id: 2, name: "Northline Auto", email: "media@northline.com", service: "Automotive Shoot", budget: "$150k+", date: "Yesterday", status: "In Review", urgent: false },
    { id: 3, name: "Marlow Apparel", email: "campaigns@marlow.com", service: "Fashion Film", budget: "$25k - $75k", date: "Sep 7", status: "Replied", urgent: false },
    { id: 4, name: "Zenith Sound", email: "info@zenith.audio", service: "Brand Documentary", budget: "$50k - $100k", date: "Sep 5", status: "In Review", urgent: false },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative h-screen bg-[#08090a] text-slate-100 font-sans flex flex-col overflow-hidden selection:bg-[#e30613] selection:text-white">
      {/* Background Ambient Glow Orbs */}
      <div className="pointer-events-none fixed top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#e30613]/10 blur-[150px]" />
      <div className="pointer-events-none fixed bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-red-900/10 blur-[180px]" />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-4 sm:right-8 z-50 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#e30613] to-[#be030d] px-5 py-3.5 text-xs font-bold text-white shadow-2xl shadow-[#e30613]/30 border border-white/20 backdrop-blur-xl animate-bounce">
          <CheckCircle2 className="h-5 w-5 text-white shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header Bar */}
      <header className="shrink-0 z-40 border-b border-white/10 bg-[#08090a]/90 backdrop-blur-2xl px-4 sm:px-10 py-3.5 flex items-center justify-between transition-all">
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Mobile Sidebar Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 text-[#e30613]" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" className="flex items-center gap-3 group ml-4 sm:ml-8">
            <img src="/Layer 2.png" alt="US Motion Logo" className="h-12 sm:h-14 w-auto object-contain" />
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-md bg-[#e30613]/15 border border-[#e30613]/30 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-[#ff4d58]">
              Studio Director
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/"
            target="_blank"
            className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs font-semibold text-white/90 hover:bg-white/10 hover:border-white/20 transition-all shadow-sm group"
          >
            <span>Live Site</span>
          </Link>

          <div className="h-5 w-px bg-white/10 hidden sm:block" />

          {/* User Profile Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 pl-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#e30613] to-[#400004] p-0.5 shadow-lg shadow-[#e30613]/20">
                <div className="h-full w-full rounded-[10px] bg-[#0d0e12] flex items-center justify-center font-black text-xs text-white">
                  SD
                </div>
              </div>
              <div className="text-left hidden md:block">
                <p className="text-xs font-bold text-white leading-none flex items-center gap-1">
                  Studio Director
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 inline" />
                </p>
                <p className="text-[10px] font-medium text-white/50 mt-1">admin@usmotion.com</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout Grid */}
      <div className="flex-1 flex flex-col md:flex-row relative z-10 min-h-0">
        {/* Mobile Backdrop Overlay */}
        {isMobileMenuOpen && (
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm md:hidden transition-opacity"
          />
        )}

        {/* Sidebar Navigation */}
        <aside
          className={`fixed md:relative inset-y-0 left-0 z-40 w-72 md:h-auto overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border-r border-white/10 bg-[#0d0e12] p-5 flex flex-col justify-between shrink-0 transform transition-transform duration-300 ease-in-out md:transform-none ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            }`}
        >
          <div className="w-full pt-16 md:pt-0">
            <div className="flex items-center justify-between mb-6 px-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">Studio Admin Menu</p>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="md:hidden rounded-lg p-1 text-white/50 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 w-full">
              {/* 1. Overview */}
              <button
                onClick={() => handleTabChange("overview")}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 ${activeTab === "overview"
                  ? "bg-[#e30613] text-white shadow-lg shadow-[#e30613]/30 border border-red-400/40"
                  : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-4 w-4 shrink-0" />
                  <span>Overview</span>
                </div>
                <Zap className={`h-3.5 w-3.5 transition-opacity ${activeTab === "overview" ? "opacity-100" : "opacity-0"}`} />
              </button>

              {/* 2. Banner Updates */}
              <button
                onClick={() => handleTabChange("bannerUpdates")}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 ${activeTab === "bannerUpdates"
                  ? "bg-[#e30613] text-white shadow-lg shadow-[#e30613]/30 border border-red-400/40"
                  : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <LayoutTemplate className="h-4 w-4 shrink-0" />
                  <span>Banner Updates</span>
                </div>
              </button>

              {/* Contact Us Banner */}
              <button
                onClick={() => handleTabChange("contactBanner")}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 ${activeTab === "contactBanner"
                  ? "bg-[#e30613] text-white shadow-lg shadow-[#e30613]/30 border border-red-400/40"
                  : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>Contact Us Banner</span>
                </div>
              </button>

              {/* 3. Categories */}
              <button
                onClick={() => handleTabChange("categories")}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 ${activeTab === "categories"
                  ? "bg-[#e30613] text-white shadow-lg shadow-[#e30613]/30 border border-red-400/40"
                  : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Layers className="h-4 w-4 shrink-0" />
                  <span>Categories</span>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${activeTab === "categories" ? "bg-white/20 text-white" : "bg-white/10 text-white/60"
                  }`}>
                  {CATEGORIES.length}
                </span>
              </button>

              {/* Video Catalogue */}
              <button
                onClick={() => handleTabChange("videos")}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 ${activeTab === "videos"
                  ? "bg-[#e30613] text-white shadow-lg shadow-[#e30613]/30 border border-red-400/40"
                  : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Film className="h-4 w-4 shrink-0" />
                  <span>Video Catalogue</span>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${activeTab === "videos" ? "bg-white/20 text-white" : "bg-white/10 text-white/60"
                  }`}>
                  {videosList.length}
                </span>
              </button>

              {/* Studio Reels / Feed */}
              <button
                onClick={() => handleTabChange("reels")}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 ${activeTab === "reels"
                  ? "bg-[#e30613] text-white shadow-lg shadow-[#e30613]/30 border border-red-400/40"
                  : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Video className="h-4 w-4 shrink-0" />
                  <span>Studio Feed Reels</span>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${activeTab === "reels" ? "bg-white/20 text-white" : "bg-white/10 text-white/60"
                  }`}>
                  {REELS.length}
                </span>
              </button>

              {/* 4. Services */}
              <button
                onClick={() => handleTabChange("services")}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 ${activeTab === "services"
                  ? "bg-[#e30613] text-white shadow-lg shadow-[#e30613]/30 border border-red-400/40"
                  : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Wrench className="h-4 w-4 shrink-0" />
                  <span>Services</span>
                </div>
              </button>

              {/* 5. Industries */}
              <button
                onClick={() => handleTabChange("industries")}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 ${activeTab === "industries"
                  ? "bg-[#e30613] text-white shadow-lg shadow-[#e30613]/30 border border-red-400/40"
                  : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Briefcase className="h-4 w-4 shrink-0" />
                  <span>Industries</span>
                </div>
              </button>

              {/* 6. About Us */}
              <button
                onClick={() => handleTabChange("AboutUs")}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 ${activeTab === "AboutUs"
                  ? "bg-[#e30613] text-white shadow-lg shadow-[#e30613]/30 border border-red-400/40"
                  : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Info className="h-4 w-4 shrink-0" />
                  <span>About Us</span>
                </div>
              </button>

              {/* 7. Client Inquiries */}
              <button
                onClick={() => handleTabChange("inquiries")}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 ${activeTab === "inquiries"
                  ? "bg-[#e30613] text-white shadow-lg shadow-[#e30613]/30 border border-red-400/40"
                  : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-4 w-4 shrink-0" />
                  <span>Client Inquiries</span>
                </div>

                <span className="rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold">
                  {inquiries.length}
                </span>
              </button>

              {/* 8. Settings */}
              <button
                onClick={() => handleTabChange("settings")}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 ${activeTab === "settings"
                  ? "bg-[#e30613] text-white shadow-lg shadow-[#e30613]/30 border border-red-400/40"
                  : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Settings</span>
                </div>
              </button>
            </nav>
          </div>

          {/* Sidebar Bottom Logout Action */}
          <div className="pt-6 mt-6 border-t border-white/10 w-full">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs font-bold text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-red-500/20 active:scale-95 group"
            >
              <LogOut className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Dynamic Content View */}
        <main className="flex-1 p-4 sm:p-8 md:p-10 overflow-y-auto max-w-7xl min-h-0">
          {/* Render Active Sub-Component */}
          {activeTab === "overview" && (
            <AdminOverviewTab
              videosList={videosList}
              categoriesList={CATEGORIES}
              inquiries={inquiries}
              onTabChange={handleTabChange}
              videoUrlSlug={videoUrlSlug}
            />
          )}

          {activeTab === "bannerUpdates" && (
            <AdminBannerUpdatesTab showToast={showToast} />
          )}

          {activeTab === "contactBanner" && (
            <AdminContactBannerTab showToast={showToast} />
          )}

          {activeTab === "categories" && <AdminCategoriesTab showToast={showToast} />}

          {activeTab === "videos" && (
            <AdminVideosTab
              videosList={videosList}
              showToast={showToast}
              onAddVideo={handleAddVideo}
              onUpdateVideo={handleUpdateVideo}
              onDeleteVideo={handleDeleteVideo}
              videoUrlSlug={videoUrlSlug}
            />
          )}

          {activeTab === "reels" && <AdminReelsTab showToast={showToast} />}

          {activeTab === "services" && <AdminServicesTab showToast={showToast} />}

          {activeTab === "industries" && <AdminIndustriesTab showToast={showToast} />}

          {activeTab === "AboutUs" && <AdminAboutUsTab showToast={showToast} />}

          {activeTab === "inquiries" && (
            <AdminInquiriesTab inquiries={inquiries} showToast={showToast} />
          )}

          {activeTab === "settings" && <AdminSettingsTab showToast={showToast} />}
        </main>
      </div>
    </div>
  );
}

// Helper to determine URL slug cleanly
function videoUrlSlug(video) {
  if (!video) return "";
  return video.id;
}



