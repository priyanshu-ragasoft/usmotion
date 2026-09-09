import { Film, Layers, MessageSquare, TrendingUp, UserCheck, ArrowUpRight, Video, Wrench, Sparkles, Plus, } from "lucide-react";
import { REELS, SERVICES, INDUSTRIES } from "../../utils/constants";

export default function AdminOverviewTab({
  videosList = [],
  categoriesList = [],
  inquiries = [],
  onTabChange,
}) {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="font-heading text-xl sm:text-3xl font-black text-white tracking-tight">
              Studio Overview
            </h1>
            <span className="rounded-full bg-[#e30613]/10 border border-[#e30613]/30 px-3 py-0.5 text-[11px] font-bold text-[#ff4d58] flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e30613] animate-pulse" />
              Live Dashboard
            </span>
          </div>
          <p className="mt-1 text-xs text-white/50">
            Welcome back, Studio Director. Central command center for films, category pages, client inquiries & reels.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => onTabChange("videos")}
            className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-4 py-2.5 text-xs font-bold text-white transition-all shadow-lg shadow-[#e30613]/25 active:scale-95"
          >
            <Plus className="h-4 w-4" />
            <span>Add New Film</span>
          </button>
          <button
            onClick={() => onTabChange("reels")}
            className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 px-4 py-2.5 text-xs font-bold text-white transition-all shadow-md"
          >
            <Video className="h-4 w-4 text-[#ff4d58]" />
            <span>Studio Feed Reels</span>
          </button>
        </div>
      </div>

      {/* Stats Cards Grid - 5 Modules */}
      <div className="grid gap-4 sm:gap-5 grid-cols-2 lg:grid-cols-5">
        {/* Stat 1: Video Catalogue */}
        <div
          onClick={() => onTabChange("videos")}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111318] p-5 shadow-xl backdrop-blur-md group hover:border-[#e30613]/50 cursor-pointer transition-all duration-300"
        >
          <div className="flex items-center justify-between text-white/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Catalogue</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e30613]/15 text-[#ff4d58] border border-[#e30613]/30">
              <Film className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
            {videosList.length}
          </p>
          <p className="mt-2 text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" /> Live Catalogue
          </p>
        </div>

        {/* Stat 2: Studio Reels */}
        <div
          onClick={() => onTabChange("reels")}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111318] p-5 shadow-xl backdrop-blur-md group hover:border-purple-500/50 cursor-pointer transition-all duration-300"
        >
          <div className="flex items-center justify-between text-white/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Studio Reels</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30">
              <Video className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
            {REELS.length}
          </p>
          <p className="mt-2 text-[10px] font-semibold text-purple-400 flex items-center gap-1">
            <Sparkles className="h-3 w-3" /> 9:16 Feed Cards
          </p>
        </div>

        {/* Stat 3: Categories */}
        <div
          onClick={() => onTabChange("categories")}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111318] p-5 shadow-xl backdrop-blur-md group hover:border-blue-400/50 cursor-pointer transition-all duration-300"
        >
          <div className="flex items-center justify-between text-white/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Categories</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/30">
              <Layers className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
            {categoriesList.length}
          </p>
          <p className="mt-2 text-[10px] font-semibold text-blue-400">
            Commercial, Brand, Product
          </p>
        </div>

        {/* Stat 4: Client Inquiries */}
        <div
          onClick={() => onTabChange("inquiries")}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111318] p-5 shadow-xl backdrop-blur-md group hover:border-emerald-400/50 cursor-pointer transition-all duration-300"
        >
          <div className="flex items-center justify-between text-white/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Leads & Briefs</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <MessageSquare className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
            {inquiries.length}
          </p>
          <p className="mt-2 text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
            <UserCheck className="h-3 w-3" /> Active Leads
          </p>
        </div>

        {/* Stat 5: Services & Capabilities */}
        <div
          onClick={() => onTabChange("services")}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111318] p-5 shadow-xl backdrop-blur-md group hover:border-amber-400/50 cursor-pointer transition-all duration-300 col-span-2 lg:col-span-1"
        >
          <div className="flex items-center justify-between text-white/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Services</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
              <Wrench className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
            {SERVICES.length}
          </p>
          <p className="mt-2 text-[10px] font-semibold text-amber-400">Pre & Post Production</p>
        </div>
      </div>

      {/* Main Grid: Featured Films & Reels Preview + Inquiries */}
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
        {/* Left Column: Featured Films & Reels Overview */}
        <div className="lg:col-span-8 space-y-6">
          {/* Featured Films Table/List */}
          <div className="rounded-2xl border border-white/10 bg-[#111318] p-5 sm:p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="font-heading text-base font-bold text-white">Featured Studio Catalogue</h3>
                <p className="text-xs text-white/40">Latest film productions live on website</p>
              </div>
              <button
                onClick={() => onTabChange("videos")}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#ff4d58] hover:text-white transition-colors"
              >
                <span>Manage All ({videosList.length})</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              {videosList.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] p-3.5 hover:bg-white/[0.07] hover:border-white/15 transition-all gap-3 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative overflow-hidden rounded-lg h-12 w-20 bg-neutral-900 shrink-0 border border-white/10">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-[#ff4d58] transition-colors">
                        {item.title}
                      </p>
                      <p className="text-[11px] font-medium text-white/40 mt-0.5">
                        {item.client} • <span className="text-slate-300 uppercase font-mono text-[10px]">{item.category}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Studio Reels Feed Preview Strip */}
          <div className="rounded-2xl border border-white/10 bg-[#111318] p-5 sm:p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4 text-[#ff4d58]" />
                <h3 className="font-heading text-base font-bold text-white">Live Studio Feed Reels</h3>
              </div>
              <button
                onClick={() => onTabChange("reels")}
                className="inline-flex items-center gap-1 text-xs font-bold text-purple-400 hover:text-white transition-colors"
              >
                <span>Edit Reels ({REELS.length})</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-5 gap-3">
              {REELS.slice(0, 5).map((reel, index) => (
                <div
                  key={reel.id}
                  onClick={() => onTabChange("reels")}
                  className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-black border border-white/10 cursor-pointer hover:border-purple-500/60 transition-all"
                >
                  <video
                    src={reel.video}
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-1.5 left-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[8px] font-bold text-white">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Recent Client Inquiries Summary */}
        <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-[#111318] p-5 sm:p-6 shadow-2xl flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="font-heading text-base font-bold text-white">Client Briefs</h3>
                <p className="text-xs text-white/40">Recent production leads</p>
              </div>
              <span className="rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold">
                {inquiries.length} Active
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {inquiries.map((inq) => (
                <div
                  key={inq.id}
                  onClick={() => onTabChange("inquiries")}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-xs hover:border-[#e30613]/50 cursor-pointer transition-all space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      {inq.name}
                      {inq.urgent && (
                        <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" title="Urgent Lead" />
                      )}
                    </span>
                    <span className="font-bold text-[#ff4d58] text-[11px]">{inq.budget}</span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-300">{inq.service || inq.projectType}</p>
                  <div className="flex items-center justify-between text-[10px] text-white/40 pt-2 border-t border-white/10">
                    <span>{inq.date}</span>
                    <span
                      className={`font-bold px-2 py-0.5 rounded border ${inq.status === "New"
                        ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                        : inq.status === "In Review"
                          ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                          : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        }`}
                    >
                      {inq.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onTabChange("inquiries")}
            className="w-full rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 py-2.5 text-xs font-bold text-white transition-all text-center"
          >
            Manage All Inquiries & Briefs →
          </button>
        </div>
      </div>
    </div>
  );
}
