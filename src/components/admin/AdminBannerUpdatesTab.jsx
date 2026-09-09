import { useState, useRef } from "react";
import { Image, Upload, RefreshCw, Trash2, X, Plus } from "lucide-react";

export default function AdminBannerUpdatesTab({ showToast }) {
  const [banners, setBanners] = useState([
    { id: 1, section: "Home Hero Stream", title: "US Motion Reel 2026", image: "/hero-banner-2.png", active: true },
    { id: 2, section: "Categories Banner", title: "Cinematic Film Showcase", image: "/logo1.png", active: true },
    { id: 3, section: "Services Hero", title: "Production Services Motion", image: "/logo1.png", active: true },
    { id: 4, section: "Contact Us Banner", title: "Begin With The Brief", image: "/hero-banner-2.png", active: true },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newSection, setNewSection] = useState("Home Hero Stream");
  const [newImage, setNewImage] = useState("");
  const fileInputRef = useRef(null);

  const toggleStatus = (id) => {
    setBanners((prev) =>
      prev.map((b) => (b.id === id ? { ...b, active: !b.active } : b))
    );
    showToast("Banner status updated");
  };

  const handleDelete = (id) => {
    setBanners((prev) => prev.filter((b) => b.id !== id));
    showToast("Banner removed successfully");
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewImage(url);
    }
  };

  const handleCreateBanner = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      showToast("Please enter a banner title");
      return;
    }
    const newBannerObj = {
      id: Date.now(),
      section: newSection,
      title: newTitle,
      image: newImage || "/hero-banner-2.png",
      active: true,
    };
    setBanners([newBannerObj, ...banners]);
    setIsModalOpen(false);
    setNewTitle("");
    setNewImage("");
    showToast("New Banner Media uploaded successfully!");
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Upload Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-[#e30613]" />
                <h2 className="font-heading text-lg font-bold text-white">Upload New Banner Media</h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-1 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateBanner} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                  Banner Title
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Autumn Commercial Campaign"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                  Target Section Page
                </label>
                <select
                  value={newSection}
                  onChange={(e) => setNewSection(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#181a20] px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                >
                  <option value="Home Hero Stream">Home Hero Stream</option>
                  <option value="Categories Banner">Categories Banner</option>
                  <option value="Services Hero">Services Hero</option>
                  <option value="Contact Us Banner">Contact Us Banner</option>
                  <option value="About Us Banner">About Us Banner</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                  Banner Image File
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="cursor-pointer rounded-xl border-2 border-dashed border-white/20 bg-white/[0.02] hover:border-[#e30613]/50 p-6 flex flex-col items-center justify-center gap-2 transition-all group"
                >
                  {newImage ? (
                    <img src={newImage} alt="Selected Banner" className="h-28 w-full object-cover rounded-lg" />
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-white/40 group-hover:text-[#ff4d58] transition-colors" />
                      <p className="text-xs font-bold text-white">Click to select image file from device</p>
                      <p className="text-[10px] text-white/40">Supports JPG, PNG, WEBP (16:9 ratio recommended)</p>
                    </>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#e30613]/30 transition-all"
                >
                  <Plus className="h-4 w-4" />
                  <span>Upload & Publish</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-heading text-xl sm:text-3xl font-black text-white tracking-tight">
            Banner Media Updates
          </h1>
          <p className="mt-1 text-xs text-white/50">
            Manage section banners, hero background reels, and portal header graphics.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-5 py-3 text-xs font-bold text-white shadow-xl shadow-[#e30613]/30 border border-red-400/30 w-full sm:w-auto active:scale-95 transition-all"
        >
          <Upload className="h-4 w-4" />
          <span>Upload Banner Media</span>
        </button>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="rounded-2xl border border-white/10 bg-[#111318] p-5 shadow-xl space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">{banner.section}</span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                    banner.active
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      : "bg-white/10 text-white/40 border-white/10"
                  }`}
                >
                  {banner.active ? "Active" : "Disabled"}
                </span>
              </div>
              <h3 className="font-heading text-base font-bold text-white mt-2">{banner.title}</h3>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/10 h-32 bg-neutral-900 flex items-center justify-center group">
              {banner.image ? (
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <Image className="h-8 w-8 text-white/20" />
              )}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
              <button
                onClick={() => toggleStatus(banner.id)}
                className="text-slate-300 hover:text-white font-semibold flex items-center gap-1.5"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Toggle Active</span>
              </button>
              <button
                onClick={() => handleDelete(banner.id)}
                className="text-red-400 hover:text-red-300 p-1"
                title="Remove Banner"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
