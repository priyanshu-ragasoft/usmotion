import { useState, useRef } from "react";
import { Plus, Search, Filter, Eye, Edit3, Trash2, X, Upload, Film, Video, Image, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../../utils/constants";

export default function AdminVideosTab({
  videosList,
  showToast,
  onAddVideo,
  onUpdateVideo,
  onDeleteVideo,
  videoUrlSlug,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");

  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);

  // Add Form state
  const [newTitle, setNewTitle] = useState("");
  const [newClient, setNewClient] = useState("");
  const [newCategory, setNewCategory] = useState("Commercial");
  const [newYear, setNewYear] = useState(new Date().getFullYear().toString());
  const [newDuration, setNewDuration] = useState("0:45");
  const [newImage, setNewImage] = useState("/laptop.png");
  const [newVideoUrl, setNewVideoUrl] = useState("");

  // Edit Form state
  const [editForm, setEditForm] = useState({});

  const addFileRef = useRef(null);
  const editFileRef = useRef(null);

  const filteredVideos = videosList.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategoryFilter === "all" ||
      video.category.toLowerCase().includes(selectedCategoryFilter.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      if (showToast) showToast("Please enter a film title");
      return;
    }

    const newSlug = newTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || `film-${Date.now()}`;

    const newFilm = {
      id: newSlug,
      title: newTitle,
      client: newClient || "Studio Production",
      category: newCategory,
      year: newYear || "2026",
      duration: newDuration || "0:45",
      image: newImage || "/laptop.png",
      videoUrl: newVideoUrl || "",
    };

    if (onAddVideo) onAddVideo(newFilm);
    setIsAddModalOpen(false);
    // Reset form
    setNewTitle("");
    setNewClient("");
    setNewCategory("Commercial");
    setNewYear(new Date().getFullYear().toString());
    setNewDuration("0:45");
    setNewImage("/laptop.png");
    setNewVideoUrl("");
  };

  const handleAddImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewImage(url);
      if (showToast) showToast("Film poster image selected!");
    }
  };

  const startEditVideo = (video) => {
    setEditingVideo(video);
    setEditForm({
      title: video.title,
      client: video.client,
      category: video.category,
      year: video.year,
      duration: video.duration,
      image: video.image,
      videoUrl: video.videoUrl || "",
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editingVideo) return;

    const updatedFilm = {
      ...editingVideo,
      title: editForm.title,
      client: editForm.client,
      category: editForm.category,
      year: editForm.year,
      duration: editForm.duration,
      image: editForm.image,
      videoUrl: editForm.videoUrl,
    };

    if (onUpdateVideo) onUpdateVideo(updatedFilm);
    setEditingVideo(null);
  };

  const handleEditImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setEditForm((prev) => ({ ...prev, image: url }));
      if (showToast) showToast("Updated poster image selected!");
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Add New Film Modal Dialog */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all overflow-hidden">
          <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#111318] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 shrink-0 bg-[#111318]">
              <div className="flex items-center gap-2">
                <Film className="h-5 w-5 text-[#e30613]" />
                <h2 className="font-heading text-lg font-bold text-white">Add New Production Film</h2>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="rounded-lg p-1.5 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleAddSubmit} id="add-video-form" className="p-6 space-y-4 overflow-y-auto custom-scrollbar flex-1">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                    Film Title
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Night Drive, Motion Horizon"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                    Client / Brand Name
                  </label>
                  <input
                    type="text"
                    value={newClient}
                    onChange={(e) => setNewClient(e.target.value)}
                    placeholder="e.g. Northline Auto, Studio Film"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                    Category Tag
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#08090a] px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Commercial">Commercial</option>
                    <option value="Brand">Brand</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Product">Product</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Documentary">Documentary</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                    Release Year
                  </label>
                  <input
                    type="text"
                    value={newYear}
                    onChange={(e) => setNewYear(e.target.value)}
                    placeholder="2026"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                    Film Duration
                  </label>
                  <input
                    type="text"
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                    placeholder="0:45"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                  Film Poster Cover Image
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
                        ref={addFileRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAddImageChange}
                      />
                    </label>
                  </div>
                  {newImage && (
                    <div className="relative h-14 w-28 rounded-xl overflow-hidden border border-white/10 bg-neutral-900 shrink-0">
                      <img
                        src={newImage}
                        alt="Poster Preview"
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
                  Video Stream URL (Optional Vimeo / MP4 / YouTube)
                </label>
                <input
                  type="text"
                  value={newVideoUrl}
                  onChange={(e) => setNewVideoUrl(e.target.value)}
                  placeholder="https://vimeo.com/..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                />
              </div>
            </form>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10 bg-[#111318] shrink-0">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold text-white hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="add-video-form"
                className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-6 py-2 text-xs font-bold text-white shadow-lg shadow-[#e30613]/30 transition-all active:scale-95"
              >
                <Plus className="h-4 w-4" />
                <span>Add Film</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Film Modal Dialog */}
      {editingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all overflow-hidden">
          <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#111318] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 shrink-0 bg-[#111318]">
              <div className="flex items-center gap-2">
                <Edit3 className="h-5 w-5 text-[#e30613]" />
                <h2 className="font-heading text-lg font-bold text-white">Edit Film Details</h2>
              </div>
              <button
                onClick={() => setEditingVideo(null)}
                className="rounded-lg p-1.5 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleEditSubmit} id="edit-video-form" className="p-6 space-y-4 overflow-y-auto custom-scrollbar flex-1">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                    Film Title
                  </label>
                  <input
                    type="text"
                    required
                    value={editForm.title || ""}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                    Client / Brand
                  </label>
                  <input
                    type="text"
                    value={editForm.client || ""}
                    onChange={(e) => setEditForm({ ...editForm, client: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                    Category Tag
                  </label>
                  <select
                    value={editForm.category || "Commercial"}
                    onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-[#08090a] px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none cursor-pointer"
                  >
                    <option value="Commercial">Commercial</option>
                    <option value="Brand">Brand</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Product">Product</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Documentary">Documentary</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                    Year
                  </label>
                  <input
                    type="text"
                    value={editForm.year || ""}
                    onChange={(e) => setEditForm({ ...editForm, year: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={editForm.duration || ""}
                    onChange={(e) => setEditForm({ ...editForm, duration: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
                  Poster Image Media
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="flex items-center gap-2 flex-1 w-full">
                    <input
                      type="text"
                      value={editForm.image || ""}
                      onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                      className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
                    />
                    <label className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3.5 py-2 text-xs font-bold text-white cursor-pointer transition-all shrink-0">
                      <Upload className="h-4 w-4 text-[#ff4d58]" />
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
                  {editForm.image && (
                    <div className="relative h-14 w-28 rounded-xl overflow-hidden border border-white/10 bg-neutral-900 shrink-0">
                      <img
                        src={editForm.image}
                        alt="Poster Edit Preview"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/laptop.png";
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </form>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10 bg-[#111318] shrink-0">
              <button
                type="button"
                onClick={() => setEditingVideo(null)}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold text-white hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="edit-video-form"
                className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-6 py-2 text-xs font-bold text-white shadow-lg shadow-[#e30613]/30 transition-all active:scale-95"
              >
                <Save className="h-4 w-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-heading text-xl sm:text-3xl font-black text-white tracking-tight">
            Video Catalogue Management ({videosList.length})
          </h1>
          <p className="mt-1 text-xs text-white/50">
            Add, edit, or organize production films presented across category streams.
          </p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-5 py-3 text-xs font-bold text-white shadow-xl shadow-[#e30613]/30 hover:shadow-[#e30613]/50 hover:scale-[1.02] active:scale-95 transition-all border border-red-400/30 w-full sm:w-auto"
        >
          <Plus className="h-4 w-4 stroke-[3]" />
          <span>Add New Film</span>
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#111318] p-4 shadow-xl">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Search film title or client..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-10 pr-4 text-xs font-medium text-white placeholder:text-white/40 focus:border-[#e30613] focus:bg-white/10 focus:outline-none transition-all"
          />
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <Filter className="h-3.5 w-3.5 text-[#e30613]" />
            <span>Filter:</span>
          </div>
          <select
            value={selectedCategoryFilter}
            onChange={(e) => setSelectedCategoryFilter(e.target.value)}
            className="rounded-xl border border-white/15 bg-[#08090a] py-2.5 px-4 text-xs font-semibold text-white focus:border-[#e30613] focus:outline-none transition-all cursor-pointer"
          >
            <option value="all">All Categories ({videosList.length})</option>
            <option value="commercial">Commercial</option>
            <option value="brand">Brand</option>
            <option value="corporate">Corporate</option>
            <option value="product">Product</option>
            <option value="fashion">Fashion</option>
            <option value="automotive">Automotive</option>
          </select>
        </div>
      </div>

      {/* Video Table */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111318] shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[600px]">
            <thead className="border-b border-white/10 bg-white/5 text-[11px] font-bold uppercase tracking-wider text-white/40">
              <tr>
                <th className="py-4 px-5">Film Production</th>
                <th className="py-4 px-5">Category Tag</th>
                <th className="py-4 px-5">Client / Agency</th>
                <th className="py-4 px-5">Year</th>
                <th className="py-4 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-medium">
              {filteredVideos.map((video) => (
                <tr key={video.id} className="hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-4">
                      <div className="relative overflow-hidden rounded-lg h-11 w-18 bg-neutral-900 shrink-0 border border-white/10">
                        <img
                          src={video.image}
                          alt={video.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = "/laptop.png";
                          }}
                        />
                      </div>
                      <div>
                        <p className="font-bold text-white group-hover:text-[#ff4d58] transition-colors">
                          {video.title}
                        </p>
                        <p className="text-[10px] text-white/40 mt-0.5">{video.duration} duration</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <span className="rounded-lg bg-white/10 border border-white/10 px-3 py-1 text-[11px] font-bold text-slate-200">
                      {video.category}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-white/80 font-semibold">{video.client}</td>
                  <td className="py-4 px-5 text-white/50 font-mono">{video.year}</td>
                  <td className="py-4 px-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/videos/${videoUrlSlug(video)}`}
                        target="_blank"
                        className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/60 hover:text-white hover:bg-white/10 transition-all"
                        title="Preview on live site"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => startEditVideo(video)}
                        className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-2 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
                        title="Edit Film Details"
                      >
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => onDeleteVideo(video.id)}
                        className="rounded-xl border border-red-500/20 bg-red-500/10 p-2 text-red-400 hover:bg-red-500 hover:text-white transition-all"
                        title="Remove Film"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredVideos.length === 0 && (
          <div className="py-12 text-center text-white/40 text-xs">
            No films match search query "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
}

