import { useState, useRef } from "react";
import { Briefcase, Plus, Trash2, X, Upload, Save, Image, CheckCircle2 } from "lucide-react";

export default function AdminIndustriesTab({ showToast }) {
  const [industries, setIndustries] = useState([
    { id: 1, name: "Automotive & Mobility", clients: "14 Productions", image: "/laptop.png", status: "Active" },
    { id: 2, name: "Technology & AI", clients: "22 Productions", image: "/laptop1.png", status: "Active" },
    { id: 3, name: "Fashion & Apparel", clients: "18 Productions", image: "/laptop2.png", status: "Active" },
    { id: 4, name: "Luxury & Consumer Goods", clients: "11 Productions", image: "/hero-banner.png", status: "Active" },
  ]);

  const [bannerConfig, setBannerConfig] = useState({
    tagline: "Who we work with",
    heading: "Industries we film for",
    description: "Automotive, fashion, technology, corporate, and the sectors in between — each with its own pace, still held to one production standard.",
    image: "/laptop1.png",
  });

  const [previewImage, setPreviewImage] = useState(bannerConfig.image);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newIndustryName, setNewIndustryName] = useState("");
  const [newCount, setNewCount] = useState("1 Production");
  const [modalImage, setModalImage] = useState("");
  const bannerFileRef = useRef(null);
  const modalFileRef = useRef(null);
  const cardFileRefs = useRef({});

  const handleAddIndustry = (e) => {
    e.preventDefault();
    if (!newIndustryName.trim()) {
      if (showToast) showToast("Please enter an industry name");
      return;
    }
    const newIndObj = {
      id: Date.now(),
      name: newIndustryName,
      clients: newCount || "1 Production",
      image: modalImage || "/laptop1.png",
      status: "Active",
    };
    setIndustries([newIndObj, ...industries]);
    setIsModalOpen(false);
    setNewIndustryName("");
    setNewCount("1 Production");
    setModalImage("");
    if (showToast) showToast("New Industry Vertical added successfully!");
  };

  const handleDeleteIndustry = (id) => {
    setIndustries((prev) => prev.filter((ind) => ind.id !== id));
    if (showToast) showToast("Industry vertical removed");
  };

  const handleCardImageChange = (id, e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setIndustries((prev) =>
        prev.map((ind) => (ind.id === id ? { ...ind, image: url } : ind))
      );
      if (showToast) showToast("Industry card image updated!");
    }
  };

  const handleBannerSave = (e) => {
    e.preventDefault();
    if (showToast) showToast("Industries Page Hero Banner saved!");
  };

  const handleBannerImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setBannerConfig((prev) => ({ ...prev, image: url }));
      if (showToast) showToast("New Industries Banner image uploaded!");
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Add New Industry Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-[#e30613]" />
                <h2 className="font-heading text-lg font-bold text-white">Add New Industry Vertical</h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-1 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleAddIndustry} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                  Industry Name
                </label>
                <input
                  type="text"
                  required
                  value={newIndustryName}
                  onChange={(e) => setNewIndustryName(e.target.value)}
                  placeholder="e.g. Healthcare & Biotech"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                  Production Count Subtitle
                </label>
                <input
                  type="text"
                  value={newCount}
                  onChange={(e) => setNewCount(e.target.value)}
                  placeholder="e.g. 5 Productions"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                  Industry Cover / Icon Image
                </label>
                <div
                  onClick={() => modalFileRef.current?.click()}
                  className="cursor-pointer rounded-xl border-2 border-dashed border-white/20 bg-white/[0.02] hover:border-[#e30613]/50 p-4 flex flex-col items-center justify-center gap-2 transition-all group min-h-[120px]"
                >
                  {modalImage ? (
                    <div className="relative w-full h-28 rounded-lg overflow-hidden border border-white/20">
                      <img src={modalImage} alt="Industry Cover" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs font-bold text-white bg-black/60 px-3 py-1 rounded-md">Change Image</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-6 w-6 text-white/40 group-hover:text-[#ff4d58] transition-colors" />
                      <p className="text-xs font-bold text-white">Click to select image file from device</p>
                      <p className="text-[10px] text-white/40">Supports JPG, PNG, WEBP</p>
                    </>
                  )}
                  <input
                    ref={modalFileRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setModalImage(URL.createObjectURL(file));
                      }
                    }}
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
                  <span>Add Vertical</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Industries Hero Banner Upload Box */}
      <div className="rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <Image className="h-5 w-5 text-[#e30613]" />
              <h2 className="font-heading text-lg font-bold text-white">Industries Page Banner Settings</h2>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                Live Header
              </span>
            </div>
            <p className="mt-1 text-xs text-white/50">
              Upload background hero banner image and edit header titles for the Industries page.
            </p>
          </div>

          <button
            onClick={handleBannerSave}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#e30613]/30 active:scale-95 transition-all w-full sm:w-auto"
          >
            <Save className="h-4 w-4" />
            <span>Save Banner Updates</span>
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Controls */}
          <form onSubmit={handleBannerSave} className="lg:col-span-7 space-y-4">
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                Header Tagline
              </label>
              <input
                type="text"
                value={bannerConfig.tagline}
                onChange={(e) => setBannerConfig({ ...bannerConfig, tagline: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                placeholder="Who we work with"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                Main Hero Heading
              </label>
              <input
                type="text"
                value={bannerConfig.heading}
                onChange={(e) => setBannerConfig({ ...bannerConfig, heading: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                placeholder="Industries we film for"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                Industries Subtitle Description
              </label>
              <textarea
                rows={3}
                value={bannerConfig.description}
                onChange={(e) => setBannerConfig({ ...bannerConfig, description: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                Hero Background Banner Media
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={bannerConfig.image}
                  onChange={(e) => {
                    setBannerConfig({ ...bannerConfig, image: e.target.value });
                    setPreviewImage(e.target.value);
                  }}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                  placeholder="/laptop1.png"
                />
                <label className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2.5 text-xs font-bold text-white cursor-pointer transition-all">
                  <Upload className="h-4 w-4 text-[#ff4d58]" />
                  <span>Upload Image</span>
                  <input
                    ref={bannerFileRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleBannerImageChange}
                  />
                </label>
              </div>
            </div>
          </form>

          {/* Live Preview */}
          <div className="lg:col-span-5 rounded-xl border border-white/10 bg-[#0d0e12] p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <span className="text-[10px] font-mono uppercase text-white/40">Industries Hero Preview</span>
                <span className="text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Live Active
                </span>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-950 p-5 min-h-[180px] flex flex-col justify-end group">
                <img
                  src={previewImage || "/laptop1.png"}
                  alt="Industries Banner Preview"
                  className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/laptop1.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
                <div className="relative z-10 space-y-1.5">
                  <p className="text-[9px] font-bold tracking-widest text-[#ff4d58] uppercase">
                    {bannerConfig.tagline}
                  </p>
                  <h3 className="font-heading text-sm font-extrabold text-white leading-tight">
                    {bannerConfig.heading}
                  </h3>
                  <p className="text-[10px] text-white/70 line-clamp-2 leading-relaxed">
                    {bannerConfig.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Management Stream */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <h1 className="font-heading text-xl sm:text-3xl font-black text-white tracking-tight">
              Industries Stream
            </h1>
            <p className="mt-1 text-xs text-white/50">
              Manage industry verticals and sector showcase filters.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-5 py-3 text-xs font-bold text-white shadow-xl shadow-[#e30613]/30 border border-red-400/30 w-full sm:w-auto active:scale-95 transition-all"
          >
            <Plus className="h-4 w-4" />
            <span>Add Industry Vertical</span>
          </button>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="rounded-2xl border border-white/10 bg-[#111318] p-5 shadow-xl space-y-3 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="h-9 w-9 rounded-xl bg-[#e30613]/15 flex items-center justify-center text-[#ff4d58] border border-[#e30613]/30">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <button
                    onClick={() => handleDeleteIndustry(ind.id)}
                    className="text-red-400 hover:text-red-300 p-1"
                    title="Delete Industry"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Display uploaded image thumbnail */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 h-32 bg-neutral-950 mb-3 group/img">
                  <img
                    src={ind.image || "/laptop1.png"}
                    alt={ind.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/laptop1.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                    <button
                      onClick={() => cardFileRefs.current[ind.id]?.click()}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#e30613] hover:bg-[#be030d] px-3 py-1.5 text-[11px] font-bold text-white shadow-md transition-all"
                    >
                      <Upload className="h-3.5 w-3.5" />
                      <span>Change Image</span>
                    </button>
                  </div>
                  <input
                    ref={(el) => (cardFileRefs.current[ind.id] = el)}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleCardImageChange(ind.id, e)}
                  />
                </div>

                <div>
                  <h3 className="font-heading text-base font-bold text-white">{ind.name}</h3>
                  <p className="text-xs text-white/40 mt-1 font-mono">{ind.clients}</p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold">{ind.status}</span>
                <button
                  onClick={() => cardFileRefs.current[ind.id]?.click()}
                  className="text-white/50 hover:text-white text-[11px] font-medium transition-colors flex items-center gap-1"
                >
                  <Upload className="h-3 w-3 text-[#ff4d58]" />
                  <span>Upload Image</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
