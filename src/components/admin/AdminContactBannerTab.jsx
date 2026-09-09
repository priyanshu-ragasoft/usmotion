import { useState } from "react";
import { Upload, CheckCircle2, Phone, Save } from "lucide-react";

export default function AdminContactBannerTab({ showToast }) {
  const [bannerConfig, setBannerConfig] = useState({
    tagline: "Start a project",
    heading: "Begin with the brief",
    description:
      "Commercials, brand films, fashion, product, and documentary work — from the first conversation through the final grade.",
    image: "/hero-banner-2.png",
  });

  const [previewImage, setPreviewImage] = useState(bannerConfig.image);

  const handleSave = (e) => {
    e.preventDefault();
    if (showToast) showToast("Contact Us Banner updated successfully!");
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setBannerConfig((prev) => ({ ...prev, image: url }));
      if (showToast) showToast("New image selected for Contact Banner!");
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-heading text-xl sm:text-3xl font-black text-white tracking-tight">
              Contact Us Banner Update
            </h1>
            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-0.5 text-[11px] font-bold text-emerald-400">
              Active Page Hero
            </span>
          </div>
          <p className="mt-1 text-xs text-white/50">
            Customize the hero header image, main title, and brief description of your Contact page.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-5 py-3 text-xs font-bold text-white shadow-xl shadow-[#e30613]/30 border border-red-400/30 w-full sm:w-auto transition-all active:scale-95"
        >
          <Save className="h-4 w-4" />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Form Controls */}
        <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-2xl space-y-5">
          <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            <Phone className="h-4 w-4 text-[#ff4d58]" />
            <h2 className="font-heading text-base font-bold text-white">Banner Content Configuration</h2>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                Sub-tagline Text
              </label>
              <input
                type="text"
                value={bannerConfig.tagline}
                onChange={(e) => setBannerConfig({ ...bannerConfig, tagline: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                placeholder="e.g. Start a project"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                Hero Heading Title
              </label>
              <input
                type="text"
                value={bannerConfig.heading}
                onChange={(e) => setBannerConfig({ ...bannerConfig, heading: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                placeholder="e.g. Begin with the brief"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                Subtitle Description
              </label>
              <textarea
                rows={3}
                value={bannerConfig.description}
                onChange={(e) => setBannerConfig({ ...bannerConfig, description: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                placeholder="Brief paragraph..."
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                Background Banner Image
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
                  placeholder="/hero-banner-2.png"
                />
                <label className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2.5 text-xs font-bold text-white cursor-pointer transition-all">
                  <Upload className="h-4 w-4 text-[#ff4d58]" />
                  <span>Browse</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Live Preview Card */}
        <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <h2 className="font-heading text-base font-bold text-white">Live Hero Preview</h2>
              <span className="text-[10px] font-mono text-white/40 uppercase">Contact Page</span>
            </div>

            {/* Simulated Contact Hero Component */}
            <div className="relative overflow-hidden rounded-xl border border-white/15 bg-neutral-950 p-6 min-h-[220px] flex flex-col justify-end shadow-inner group">
              <img
                src={previewImage || "/hero-banner-2.png"}
                alt="Banner Preview"
                className="absolute inset-0 h-full w-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "/hero-banner-2.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08090a] via-[#08090a]/80 to-transparent" />

              <div className="relative z-10 space-y-2">
                <p className="text-[9px] font-semibold tracking-[0.25em] text-white/60 uppercase">
                  {bannerConfig.tagline || "Start a project"}
                </p>
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white leading-tight">
                  {bannerConfig.heading || "Begin with the brief"}
                </h3>
                <p className="text-[11px] text-white/70 line-clamp-2 leading-relaxed">
                  {bannerConfig.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
            <span>Dimensions: 1920 x 1080 (16:9)</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> Synchronized
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
