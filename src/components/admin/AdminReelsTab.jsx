import { useState } from "react";
import {
  Film,
  Plus,
  Trash2,
  Edit2,
  Video,
  Upload,
  Sparkles,
  CheckCircle2,
  X,
  Play,
  Volume2,
} from "lucide-react";
import { REELS } from "../../utils/constants";

export default function AdminReelsTab({ showToast }) {
  const [reelsList, setReelsList] = useState(REELS);
  const [editingReel, setEditingReel] = useState(null); // null when creating new
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    video: "",
  });

  const [videoPreview, setVideoPreview] = useState("");

  const handleOpenAddModal = () => {
    setEditingReel(null);
    setFormData({
      id: `reel-${Date.now().toString().slice(-5)}`,
      title: "Studio reel",
      video: "/reels/Video-45917.mp4",
    });
    setVideoPreview("/reels/Video-45917.mp4");
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (reel) => {
    setEditingReel(reel);
    setFormData({ ...reel });
    setVideoPreview(reel.video || "");
    setIsModalOpen(true);
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, video: url }));
      setVideoPreview(url);
    }
  };

  const handleDeleteReel = (id) => {
    setReelsList((prev) => prev.filter((r) => r.id !== id));
    if (showToast) showToast("Reel frame removed!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.video) return;

    if (editingReel) {
      setReelsList((prev) =>
        prev.map((r) => (r.id === editingReel.id ? formData : r))
      );
      if (showToast) showToast("Reel details updated!");
    } else {
      setReelsList((prev) => [formData, ...prev]);
      if (showToast) showToast("New Reel added to Feed!");
    }

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <Video className="h-6 w-6 text-[#e30613]" />
            <h1 className="font-heading text-xl sm:text-3xl font-black text-white tracking-tight">
              Studio Reels & Feed Manager
            </h1>
          </div>
          <p className="mt-1 text-xs text-white/50">
            Manage vertical video reels featured in "From the studio feed" home section.
          </p>
        </div>

        <button
          onClick={handleOpenAddModal}
          className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#e30613]/30 active:scale-95 transition-all"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Reel</span>
        </button>
      </div>

      {/* Grid of Reels Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {reelsList.map((item, index) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111318] p-2 shadow-xl transition-all duration-300 hover:border-[#e30613]/50 hover:shadow-2xl hover:shadow-[#e30613]/10"
          >
            {/* Reel 9:16 Aspect ratio container */}
            <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-black">
              <video
                src={item.video}
                muted
                loop
                playsInline
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                <span className="rounded-full bg-black/60 backdrop-blur-md border border-white/10 px-2 py-0.5 text-[9px] font-bold uppercase text-white/80">
                  Reel 0{index + 1}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-[#e30613] px-2 py-0.5 text-[9px] font-bold uppercase text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                  Live
                </span>
              </div>

              <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-white">
                <span className="font-bold text-xs truncate drop-shadow">{item.title}</span>
                <Play className="h-3.5 w-3.5 text-white/70" />
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-2.5 flex items-center justify-between gap-2 px-1 pb-1">
              <button
                onClick={() => handleOpenEditModal(item)}
                className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-white/5 hover:bg-white/10 px-2.5 py-1.5 text-[11px] font-bold text-white border border-white/10 transition-colors"
              >
                <Edit2 className="h-3 w-3" /> Edit
              </button>
              <button
                onClick={() => handleDeleteReel(item.id)}
                className="rounded-lg p-1.5 text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                title="Delete Reel"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-2xl space-y-5 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="font-heading text-base font-bold text-white">
                {editingReel ? "Edit Reel Frame" : "Add New Studio Reel"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-xl p-1.5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                  Reel Title / Tag
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData((p) => ({ ...p, title: e.target.value }))}
                  placeholder="e.g. Studio reel"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                />
              </div>

              {/* Video URL or File */}
              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                  Video Asset Path or Upload (.mp4)
                </label>
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    value={formData.video}
                    onChange={(e) => {
                      setFormData((p) => ({ ...p, video: e.target.value }));
                      setVideoPreview(e.target.value);
                    }}
                    placeholder="/reels/Video-45917.mp4"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                  />

                  <label className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 bg-white/5 px-4 py-3 text-xs font-bold text-white/70 hover:bg-white/10 hover:text-white cursor-pointer transition-colors">
                    <Upload className="h-4 w-4 text-[#e30613]" />
                    <span>Upload Local MP4 Video</span>
                    <input
                      type="file"
                      accept="video/mp4,video/*"
                      onChange={handleVideoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Live Preview */}
              {videoPreview && (
                <div>
                  <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                    9:16 Vertical Preview
                  </label>
                  <div className="relative aspect-[9/16] max-h-56 mx-auto overflow-hidden rounded-xl border border-white/10 bg-black">
                    <video
                      src={videoPreview}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border border-white/10 px-4 py-2 text-xs font-bold text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-5 py-2 text-xs font-bold text-white shadow-lg shadow-[#e30613]/30 transition-all"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{editingReel ? "Save Changes" : "Add Reel"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
