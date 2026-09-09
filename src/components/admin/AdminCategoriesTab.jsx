import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Layers, Plus, Trash2, X, Upload, Save, Image, CheckCircle2, Edit2, Check, ExternalLink, Search, Film } from "lucide-react";
import { CATEGORIES as INITIAL_CATEGORIES } from "../../utils/constants";

export default function AdminCategoriesTab({ showToast }) {
  const [categories, setCategories] = useState(
    INITIAL_CATEGORIES.map((cat) => ({
      ...cat,
      image: cat.image || "/laptop.png",
      status: "Active",
    }))
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  // Hero header banner config for Categories page
  const [headerConfig, setHeaderConfig] = useState({
    tagline: "Film Collections",
    title: "Browse Categories",
    description: "Commercial, brand, corporate, product, fashion, and more — every film filed by the purpose and industry it serves.",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newSlug, setNewSlug] = useState("");
  const [newImage, setNewImage] = useState("/laptop.png");
  
  const modalFileRef = useRef(null);
  const editFileRef = useRef(null);

  const filteredCategories = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newName.trim()) {
      if (showToast) showToast("Please enter a category name");
      return;
    }
    const autoSlug = newSlug.trim() || newName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const newCatObj = {
      id: autoSlug,
      slug: autoSlug,
      name: newName,
      description: newDesc || "Films curated for brand storytelling and engagement.",
      image: newImage || "/laptop.png",
      status: "Active",
    };

    setCategories([newCatObj, ...categories]);
    setIsModalOpen(false);
    setNewName("");
    setNewDesc("");
    setNewSlug("");
    setNewImage("/laptop.png");
    if (showToast) showToast("New Category added successfully!");
  };

  const handleDeleteCategory = (id) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
    if (showToast) showToast("Category removed successfully");
  };

  const startEditCategory = (cat) => {
    setEditingId(cat.id);
    setEditForm({
      name: cat.name,
      slug: cat.slug,
      description: cat.description,
      image: cat.image || "/laptop.png",
    });
  };

  const saveEditCategory = (id) => {
    setCategories((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          return {
            ...c,
            name: editForm.name,
            slug: editForm.slug.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || c.slug,
            description: editForm.description,
            image: editForm.image || c.image,
          };
        }
        return c;
      })
    );
    setEditingId(null);
    if (showToast) showToast("Category updated successfully!");
  };

  const handleHeaderSave = (e) => {
    e.preventDefault();
    if (showToast) showToast("Categories Header settings saved!");
  };

  const handleModalImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewImage(url);
      if (showToast) showToast("Category feature image selected!");
    }
  };

  const handleEditImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setEditForm((prev) => ({ ...prev, image: url }));
      if (showToast) showToast("Updated image selected!");
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Add New Category Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all overflow-hidden">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111318] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-5 shrink-0 bg-[#111318]">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-[#e30613]" />
                <h2 className="font-heading text-lg font-bold text-white">Add New Category</h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-1 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleAddCategory} id="add-category-form" className="p-5 space-y-4 overflow-y-auto custom-scrollbar flex-1">
              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">
                  Category Name
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Commercial Videos, Aerial Cinema"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">
                  Custom Route Slug (Optional)
                </label>
                <input
                  type="text"
                  value={newSlug}
                  onChange={(e) => setNewSlug(e.target.value)}
                  placeholder="e.g. commercial, aerial-cinema"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">
                  Category Description
                </label>
                <textarea
                  rows={2}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="High-impact films built for campaigns, launches, and brand channels..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">
                  Cover / Feature Image
                </label>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={newImage}
                      onChange={(e) => setNewImage(e.target.value)}
                      className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
                      placeholder="/laptop.png"
                    />
                    <label className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-2 text-xs font-bold text-white cursor-pointer transition-all shrink-0">
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
                  {newImage && (
                    <div className="relative h-20 w-44 rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
                      <img
                        src={newImage}
                        alt="Category Cover Preview"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/laptop.png";
                        }}
                      />
                      <span className="absolute bottom-1 left-1 rounded bg-black/80 px-1.5 py-0.5 text-[8px] font-mono text-white/80">
                        Cover Preview
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </form>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-4 border-t border-white/10 bg-[#111318] shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="add-category-form"
                className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-5 py-2 text-xs font-bold text-white shadow-lg shadow-[#e30613]/30 transition-all active:scale-95"
              >
                <Plus className="h-4 w-4" />
                <span>Add Category</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Categories Page Header Settings Section */}
      <div className="rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <Image className="h-5 w-5 text-[#e30613]" />
              <h2 className="font-heading text-lg font-bold text-white">Categories Page Header Settings</h2>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                Live Section
              </span>
            </div>
            <p className="mt-1 text-xs text-white/50">
              Edit hero banner title, tagline, and intro text shown on the Categories page.
            </p>
          </div>

          <button
            onClick={handleHeaderSave}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#e30613]/30 active:scale-95 transition-all w-full sm:w-auto"
          >
            <Save className="h-4 w-4" />
            <span>Save Header Updates</span>
          </button>
        </div>

        <form onSubmit={handleHeaderSave} className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
              Header Tagline Badge
            </label>
            <input
              type="text"
              value={headerConfig.tagline}
              onChange={(e) => setHeaderConfig({ ...headerConfig, tagline: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
              placeholder="Film Collections"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
              Main Hero Heading
            </label>
            <input
              type="text"
              value={headerConfig.title}
              onChange={(e) => setHeaderConfig({ ...headerConfig, title: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
              placeholder="Browse Categories"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
              Page Description
            </label>
            <textarea
              rows={2}
              value={headerConfig.description}
              onChange={(e) => setHeaderConfig({ ...headerConfig, description: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white focus:border-[#e30613] focus:outline-none transition-colors"
            />
          </div>
        </form>
      </div>

      {/* Catalogue Controls Header */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <h1 className="font-heading text-xl sm:text-3xl font-black text-white tracking-tight">
              Film Categories Catalogue ({categories.length})
            </h1>
            <p className="mt-1 text-xs text-white/50">
              Manage film taxonomy, edit cover imagery, routes, and descriptions.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <input
                type="text"
                placeholder="Filter categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-9 pr-3 text-xs text-white placeholder:text-white/40 focus:border-[#e30613] focus:outline-none"
              />
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-5 py-2.5 text-xs font-bold text-white shadow-xl shadow-[#e30613]/30 border border-red-400/30 shrink-0 active:scale-95 transition-all"
            >
              <Plus className="h-4 w-4" />
              <span>Add Category</span>
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((cat) => {
            const isEditing = editingId === cat.id;

            return (
              <div
                key={cat.id}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111318] p-5 shadow-xl backdrop-blur-md hover:border-white/20 transition-all duration-300 group flex flex-col justify-between"
              >
                {!isEditing ? (
                  <div>
                    <div className="relative h-32 w-full rounded-xl overflow-hidden mb-4 border border-white/10 bg-neutral-950">
                      <img
                        src={cat.image || "/laptop.png"}
                        alt={cat.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "/laptop.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                      <span className="absolute bottom-2 left-2.5 rounded-md bg-black/70 border border-white/10 px-2 py-0.5 text-[9px] font-mono text-white/80">
                        /{cat.slug}
                      </span>
                    </div>

                    <div className="flex items-start justify-between">
                      <h3 className="font-heading text-base font-bold text-white">{cat.name}</h3>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => startEditCategory(cat)}
                          className="rounded-lg bg-white/5 hover:bg-white/10 p-1.5 text-white/70 hover:text-white transition-colors"
                          title="Edit Category"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(cat.id)}
                          className="rounded-lg bg-red-500/10 hover:bg-red-500/20 p-1.5 text-red-400 hover:text-red-300 transition-colors"
                          title="Delete Category"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-slate-300 font-normal line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">
                        Category Name
                      </label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white focus:border-[#e30613] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">
                        Slug (Route URL)
                      </label>
                      <input
                        type="text"
                        value={editForm.slug}
                        onChange={(e) => setEditForm({ ...editForm, slug: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white focus:border-[#e30613] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">
                        Description
                      </label>
                      <textarea
                        rows={2}
                        value={editForm.description}
                        onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white focus:border-[#e30613] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">
                        Cover Image
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={editForm.image}
                          onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white focus:border-[#e30613] focus:outline-none"
                        />
                        <label className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1.5 text-xs font-bold text-white cursor-pointer transition-all">
                          <Upload className="h-3.5 w-3.5 text-[#ff4d58]" />
                          <input
                            ref={editFileRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleEditImageChange}
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        onClick={() => setEditingId(null)}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/10"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => saveEditCategory(cat.id)}
                        className="rounded-xl bg-[#e30613] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#be030d]"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}

                {!isEditing && (
                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
                      Active Stream
                    </span>

                    <Link
                      to={`/categories/${cat.slug}`}
                      target="_blank"
                      className="flex items-center gap-1 text-[11px] font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 px-2.5 py-1 rounded-lg transition-all"
                    >
                      <span>Preview Route</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="my-8 rounded-2xl border border-dashed border-white/10 bg-[#111318] p-12 text-center">
            <Layers className="mx-auto h-10 w-10 text-white/30" />
            <h3 className="mt-3 font-heading text-base font-bold text-white">No Category Found</h3>
            <p className="mt-1 text-xs text-white/50">No matching category for "{searchQuery}".</p>
          </div>
        )}
      </div>
    </div>
  );
}

