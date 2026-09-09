import { useState, useRef } from "react";
import { Wrench, Plus, Trash2, X, Upload, Save, Image, CheckCircle2, Edit2, Check } from "lucide-react";
import { SERVICES as INITIAL_SERVICES } from "../../utils/constants";

export default function AdminServicesTab({ showToast }) {
  const [services, setServices] = useState(
    INITIAL_SERVICES.map((s) => ({
      id: s.id,
      title: s.title,
      description: s.description,
      copy: s.copy || "",
      image: s.image || "/laptop.png",
      items: s.items || [],
      status: "Active",
    }))
  );

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const [bannerConfig, setBannerConfig] = useState({
    tagline: "What we do",
    heading: "From first frame to final grade",
    description: "One production house across pre-production, production, and post — so the film stays coherent from concept through delivery.",
    image: "/laptop.png",
  });

  const [previewImage, setPreviewImage] = useState(bannerConfig.image);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newCopy, setNewCopy] = useState("");
  const [newImage, setNewImage] = useState("/laptop.png");
  const [newItemsStr, setNewItemsStr] = useState("");
  
  const bannerFileRef = useRef(null);
  const modalFileRef = useRef(null);
  const editFileRef = useRef(null);

  const handleAddService = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      if (showToast) showToast("Please enter a service title");
      return;
    }
    const slugId = newTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `svc-${Date.now()}`;
    const newSvcObj = {
      id: slugId,
      title: newTitle,
      description: newDesc || "Custom production service designed for brand scale.",
      copy: newCopy || "Full end-to-end studio support tailored for your project needs.",
      image: newImage || "/laptop.png",
      items: newItemsStr ? newItemsStr.split(",").map((i) => i.trim()).filter(Boolean) : ["Studio Production"],
      status: "Active",
    };
    setServices([...services, newSvcObj]);
    setIsModalOpen(false);
    setNewTitle("");
    setNewDesc("");
    setNewCopy("");
    setNewImage("/laptop.png");
    setNewItemsStr("");
    if (showToast) showToast("New Service added successfully!");
  };

  const handleDeleteService = (id) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
    if (showToast) showToast("Service removed successfully");
  };

  const startEditService = (svc) => {
    setEditingId(svc.id);
    setEditForm({
      title: svc.title,
      description: svc.description,
      copy: svc.copy,
      image: svc.image || "/laptop.png",
      itemsStr: (svc.items || []).join(", "),
    });
  };

  const saveEditService = (id) => {
    setServices((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          return {
            ...s,
            title: editForm.title,
            description: editForm.description,
            copy: editForm.copy,
            image: editForm.image || s.image,
            items: editForm.itemsStr ? editForm.itemsStr.split(",").map((i) => i.trim()).filter(Boolean) : s.items,
          };
        }
        return s;
      })
    );
    setEditingId(null);
    if (showToast) showToast("Service details updated!");
  };

  const handleBannerSave = (e) => {
    e.preventDefault();
    if (showToast) showToast("Services Page Hero Banner saved!");
  };

  const handleBannerImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setBannerConfig((prev) => ({ ...prev, image: url }));
      if (showToast) showToast("New Services Hero Banner image selected!");
    }
  };

  const handleModalImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewImage(url);
      if (showToast) showToast("Service image selected!");
    }
  };

  const handleEditImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setEditForm((prev) => ({ ...prev, image: url }));
      if (showToast) showToast("Updated service image selected!");
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Add New Service Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all overflow-hidden">
          <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#111318] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 shrink-0 bg-[#111318]">
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-[#e30613]" />
                <h2 className="font-heading text-lg font-bold text-white">Add New Studio Service</h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-1.5 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleAddService} id="add-service-form" className="p-6 space-y-4 overflow-y-auto custom-scrollbar flex-1">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                    Service Title
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Pre-Production, Aerial Cinema"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                    Short Subtitle / Description
                  </label>
                  <input
                    type="text"
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    placeholder="e.g. The film is designed before a camera moves."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                  Detailed Copy (Service Chapter)
                </label>
                <textarea
                  rows={2}
                  value={newCopy}
                  onChange={(e) => setNewCopy(e.target.value)}
                  placeholder="e.g. We lock the idea, the frames, and the plan before a camera rolls..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                  Service Feature Image
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="flex items-center gap-2 flex-1 w-full">
                    <input
                      type="text"
                      value={newImage}
                      onChange={(e) => setNewImage(e.target.value)}
                      className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
                      placeholder="/laptop.png"
                    />
                    <label className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3.5 py-2 text-xs font-bold text-white cursor-pointer transition-all shrink-0">
                      <Upload className="h-4 w-4 text-[#ff4d58]" />
                      <span>Upload</span>
                      <input
                        ref={modalFileRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleModalImageChange}
                      />
                    </label>
                  </div>
                  {/* Uploaded Image Preview */}
                  {newImage && (
                    <div className="relative h-14 w-28 rounded-xl overflow-hidden border border-white/10 bg-neutral-900 shrink-0">
                      <img
                        src={newImage}
                        alt="Service Preview"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/laptop.png";
                        }}
                      />
                      <span className="absolute bottom-1 left-1 rounded bg-black/80 px-1 py-0.2 text-[7px] font-mono text-white/80">
                        Preview
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                  Deliverable Items (Comma separated)
                </label>
                <input
                  type="text"
                  value={newItemsStr}
                  onChange={(e) => setNewItemsStr(e.target.value)}
                  placeholder="Concept Development, Scriptwriting, Storyboarding"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                />
              </div>
            </form>

            {/* Modal Footer (Sticky) */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10 bg-[#111318] shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold text-white hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="add-service-form"
                className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-6 py-2 text-xs font-bold text-white shadow-lg shadow-[#e30613]/30 transition-all active:scale-95"
              >
                <Plus className="h-4 w-4" />
                <span>Add Service</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Services Hero Banner Upload Box */}
      <div className="rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <Image className="h-5 w-5 text-[#e30613]" />
              <h2 className="font-heading text-lg font-bold text-white">Services Page Banner Settings</h2>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                Live Header
              </span>
            </div>
            <p className="mt-1 text-xs text-white/50">
              Upload hero background banner and edit header typography for the Services page.
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
                placeholder="What we do"
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
                placeholder="From first frame to final grade"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                Services Description
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
                  placeholder="/laptop.png"
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
                <span className="text-[10px] font-mono uppercase text-white/40">Services Hero Preview</span>
                <span className="text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Live Active
                </span>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-950 p-5 min-h-[180px] flex flex-col justify-end group">
                <img
                  src={previewImage || "/laptop.png"}
                  alt="Services Banner Preview"
                  className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/laptop.png";
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

      {/* Services Process Bar Preview */}
      <div className="rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h2 className="font-heading text-base font-bold text-white">Live Service Process Bar Preview</h2>
            <p className="text-xs text-white/50">
              Preview of how the top process navigation bar will look on the Services page.
            </p>
          </div>
          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] text-white/70 font-mono">
            {services.length} Process Steps
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0d0e12] p-4">
          <div className="grid grid-flow-col auto-cols-fr divide-x divide-white/10 text-center min-w-[500px]">
            {services.map((service, index) => (
              <div key={service.id} className="px-3 py-2">
                <p className="font-heading text-[10px] font-semibold tracking-[0.2em] text-[#ff4d58]">
                  0{index + 1}
                </p>
                <p className="mt-1 font-heading text-xs font-bold text-white">{service.title}</p>
                <p className="mt-0.5 text-[10px] text-white/50 truncate max-w-[150px] mx-auto">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Management Catalogue */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <h1 className="font-heading text-xl sm:text-3xl font-black text-white tracking-tight">
              Services Process Chapters & Offerings
            </h1>
            <p className="mt-1 text-xs text-white/50">
              Configure services, process steps, media assets, and deliverable items.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-5 py-3 text-xs font-bold text-white shadow-xl shadow-[#e30613]/30 border border-red-400/30 w-full sm:w-auto active:scale-95 transition-all"
          >
            <Plus className="h-4 w-4" />
            <span>Add New Service</span>
          </button>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1">
          {services.map((svc, index) => {
            const isEditing = editingId === svc.id;

            return (
              <div
                key={svc.id}
                className="rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-xl space-y-4 hover:border-white/20 transition-all"
              >
                <div className="flex items-start justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e30613]/10 font-heading text-xs font-bold text-[#ff4d58] border border-[#e30613]/20">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-white">{svc.title}</h3>
                      <p className="text-[11px] font-mono text-white/40">ID: {svc.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
                      {svc.status}
                    </span>
                    {!isEditing ? (
                      <button
                        onClick={() => startEditService(svc)}
                        className="rounded-lg bg-white/5 hover:bg-white/10 p-2 text-white/70 hover:text-white transition-colors"
                        title="Edit Service"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        onClick={() => saveEditService(svc.id)}
                        className="rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 p-2 text-emerald-400 transition-colors"
                        title="Save Changes"
                      >
                        <Check className="h-4 w-4" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteService(svc.id)}
                      className="rounded-lg bg-red-500/10 hover:bg-red-500/20 p-2 text-red-400 hover:text-red-300 transition-colors"
                      title="Delete Service"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {!isEditing ? (
                  <div className="grid gap-6 md:grid-cols-12 items-start">
                    <div className="space-y-3 md:col-span-8">
                      <div>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Process Subtitle</p>
                        <p className="text-xs text-white/80 mt-0.5">{svc.description}</p>
                      </div>
                      {svc.copy && (
                        <div>
                          <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Chapter Overview</p>
                          <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{svc.copy}</p>
                        </div>
                      )}
                      {svc.items && svc.items.length > 0 && (
                        <div>
                          <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1.5">Deliverables</p>
                          <div className="flex flex-wrap gap-1.5">
                            {svc.items.map((item, idx) => (
                              <span
                                key={idx}
                                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Display Service Image preview on card */}
                    <div className="md:col-span-4 rounded-xl border border-white/10 bg-[#0d0e12] p-2 space-y-1.5">
                      <p className="text-[10px] font-mono text-white/40 px-1">Service Chapter Media</p>
                      <div className="relative h-28 w-full rounded-lg overflow-hidden border border-white/10 bg-neutral-950">
                        <img
                          src={svc.image || "/laptop.png"}
                          alt={svc.title}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "/laptop.png";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 pt-2">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">
                          Service Title
                        </label>
                        <input
                          type="text"
                          value={editForm.title}
                          onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">
                          Process Subtitle (ServiceProcess)
                        </label>
                        <input
                          type="text"
                          value={editForm.description}
                          onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">
                        Chapter Detailed Copy
                      </label>
                      <textarea
                        rows={2}
                        value={editForm.copy}
                        onChange={(e) => setEditForm({ ...editForm, copy: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">
                        Service Media Image
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          value={editForm.image}
                          onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
                          placeholder="/laptop.png"
                        />
                        <label className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-2 text-xs font-bold text-white cursor-pointer transition-all">
                          <Upload className="h-3.5 w-3.5 text-[#ff4d58]" />
                          <span>Upload</span>
                          <input
                            ref={editFileRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleEditImageChange}
                          />
                        </label>
                      </div>
                      {/* Live Edit Image Preview */}
                      {editForm.image && (
                        <div className="mt-2 relative h-24 w-40 rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
                          <img
                            src={editForm.image}
                            alt="Edit Preview"
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "/laptop.png";
                            }}
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">
                        Deliverable Items (Comma separated)
                      </label>
                      <input
                        type="text"
                        value={editForm.itemsStr}
                        onChange={(e) => setEditForm({ ...editForm, itemsStr: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-2 border-t border-white/10">
                      <button
                        onClick={() => setEditingId(null)}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/10"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => saveEditService(svc.id)}
                        className="rounded-xl bg-[#e30613] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#be030d]"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


