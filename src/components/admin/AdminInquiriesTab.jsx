import { useState } from "react";
import { Mail, Phone, Building, Globe, DollarSign, Clock, Briefcase, FileText, Search, Filter, Eye, Trash2, X, Send, Calendar, } from "lucide-react";

export default function AdminInquiriesTab({ inquiries = [], showToast }) {
  const [items, setItems] = useState(
    inquiries.length > 0
      ? inquiries.map((inq) => ({
        id: inq.id,
        name: inq.name || "Client",
        company: inq.company || "N/A",
        email: inq.email || "email@domain.com",
        phone: inq.phone || "+1 (555) 000-0000",
        country: inq.country || "United States",
        projectType: inq.service || inq.projectType || "Commercial Film",
        industry: inq.industry || "Automotive",
        budget: inq.budget || "$50k - $100k",
        timeline: inq.timeline || "1-3 Months",
        description:
          inq.description ||
          "Looking to create a cinematic promotional film and digital ad campaign for our upcoming brand launch. We need full pre-production through final color grading.",
        date: inq.date || "Today",
        status: inq.status || "New",
        urgent: inq.urgent || false,
      }))
      : [
        {
          id: 1,
          name: "Aether Tech",
          company: "Aether Dynamics Inc.",
          email: "contact@aether.com",
          phone: "+1 (310) 555-0192",
          country: "United States",
          projectType: "Commercial Film",
          industry: "Technology",
          budget: "$75k - $150k",
          timeline: "1-2 Months",
          description:
            "We need a high-end 60-second broadcast commercial highlighting our autonomous software suite. Must feature VFX integration and sound design.",
          date: "Today, 2:40 PM",
          status: "New",
          urgent: true,
        },
        {
          id: 2,
          name: "Northline Auto",
          company: "Northline Motors",
          email: "media@northline.com",
          phone: "+1 (415) 888-2910",
          country: "Germany",
          projectType: "Automotive Shoot",
          industry: "Automotive",
          budget: "$150k+",
          timeline: "3-6 Months",
          description:
            "Global product launch film for our new electric GT coupe. Track shooting in Europe and studio lighting setups required.",
          date: "Yesterday",
          status: "In Review",
          urgent: false,
        },
        {
          id: 3,
          name: "Marlow Apparel",
          company: "Marlow Studio Ltd",
          email: "campaigns@marlow.com",
          phone: "+44 20 7946 0912",
          country: "United Kingdom",
          projectType: "Fashion Film",
          industry: "Fashion & Lifestyle",
          budget: "$25k - $75k",
          timeline: "Flexible",
          description:
            "Autumn/Winter editorial fashion film shoot. Looking for moody aesthetic, anamorphic lens treatment, and custom score.",
          date: "Sep 7",
          status: "Replied",
          urgent: false,
        },
        {
          id: 4,
          name: "Zenith Sound",
          company: "Zenith Audio Labs",
          email: "info@zenith.audio",
          phone: "+1 (212) 440-1823",
          country: "United States",
          projectType: "Brand Documentary",
          industry: "Entertainment",
          budget: "$50k - $100k",
          timeline: "2-3 Months",
          description:
            "10-minute mini-doc following our sound engineering team building acoustic chambers in Tokyo and Berlin.",
          date: "Sep 5",
          status: "Archived",
          urgent: false,
        },
      ]
  );

  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.projectType.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = filterStatus === "All" || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleStatusUpdate = (id, newStatus) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry((prev) => ({ ...prev, status: newStatus }));
    }
    if (showToast) showToast(`Inquiry status marked as ${newStatus}`);
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry(null);
    }
    if (showToast) showToast("Inquiry deleted");
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <Mail className="h-6 w-6 text-[#e30613]" />
            <h1 className="font-heading text-xl sm:text-3xl font-black text-white tracking-tight">
              Client Inquiries & Leads
            </h1>
          </div>
          <p className="mt-1 text-xs text-white/50">
            Review detailed production request briefs submitted via Project Enquiry form.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-white/70 font-semibold flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#e30613]" />
            Total: <strong className="text-white">{items.length} Briefs</strong>
          </span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#111318] p-4 rounded-2xl border border-white/10 shadow-lg">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <input
            type="text"
            placeholder="Search client, email, company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-2 text-xs text-white placeholder:text-white/40 focus:border-[#e30613] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <Filter className="h-4 w-4 text-white/40 shrink-0" />
          {["All", "New", "In Review", "Replied", "Archived"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all shrink-0 ${filterStatus === status
                ? "bg-[#e30613] text-white shadow-md shadow-[#e30613]/20"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111318] shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[750px]">
            <thead className="border-b border-white/10 bg-white/5 text-[11px] font-bold uppercase tracking-wider text-white/40">
              <tr>
                <th className="py-4 px-5">Client / Brand</th>
                <th className="py-4 px-5">Project Type</th>
                <th className="py-4 px-5">Industry</th>
                <th className="py-4 px-5">Est. Budget</th>
                <th className="py-4 px-5">Timeline</th>
                <th className="py-4 px-5">Received</th>
                <th className="py-4 px-5">Status</th>
                <th className="py-4 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-medium">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-white/40 text-xs">
                    No client inquiries found matching your filters.
                  </td>
                </tr>
              ) : (
                filteredItems.map((inq) => (
                  <tr key={inq.id} className="hover:bg-white/5 transition-colors group">
                    <td className="py-4 px-5">
                      <div className="font-bold text-white flex items-center gap-2">
                        {inq.name}
                        {inq.urgent && (
                          <span className="rounded bg-red-500/20 text-red-300 border border-red-500/30 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider">
                            Urgent
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-white/50 font-mono mt-0.5 flex items-center gap-2">
                        <span>{inq.company}</span> • <span>{inq.email}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 font-semibold text-slate-200">
                      {inq.projectType}
                    </td>
                    <td className="py-4 px-5 text-white/60">{inq.industry}</td>
                    <td className="py-4 px-5 font-bold text-[#ff4d58]">{inq.budget}</td>
                    <td className="py-4 px-5 text-white/60">{inq.timeline}</td>
                    <td className="py-4 px-5 text-white/40">{inq.date}</td>
                    <td className="py-4 px-5">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold border ${inq.status === "New"
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                          : inq.status === "In Review"
                            ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                            : inq.status === "Replied"
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                              : "bg-white/5 text-white/40 border-white/10"
                          }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${inq.status === "New"
                            ? "bg-blue-400 animate-pulse"
                            : inq.status === "In Review"
                              ? "bg-amber-400"
                              : inq.status === "Replied"
                                ? "bg-emerald-400"
                                : "bg-white/40"
                            }`}
                        />
                        {inq.status}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-right space-x-2">
                      <button
                        onClick={() => setSelectedInquiry(inq)}
                        className="inline-flex items-center gap-1 rounded-lg bg-white/10 hover:bg-[#e30613] px-3 py-1.5 text-[11px] font-bold text-white transition-colors"
                      >
                        <Eye className="h-3.5 w-3.5" /> View Brief
                      </button>
                      <button
                        onClick={() => handleDelete(inq.id)}
                        className="rounded-lg p-1.5 text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                        title="Delete Inquiry"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-2xl space-y-6 text-xs text-white">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-heading text-lg font-bold text-white">
                    {selectedInquiry.name}
                  </h2>
                  {selectedInquiry.urgent && (
                    <span className="rounded bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-0.5 text-[9px] font-black uppercase">
                      Urgent Request
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#ff4d58] font-semibold mt-0.5">
                  {selectedInquiry.projectType} Brief
                </p>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="rounded-xl p-1.5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Specs Grid matching ProjectEnquiryForm */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
              <div>
                <span className="text-[10px] uppercase font-bold text-white/40 block">Client / Company</span>
                <span className="font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <Building className="h-3.5 w-3.5 text-[#e30613]" />
                  {selectedInquiry.company || "Independent"}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-white/40 block">Industry</span>
                <span className="font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <Briefcase className="h-3.5 w-3.5 text-[#e30613]" />
                  {selectedInquiry.industry}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-white/40 block">Country</span>
                <span className="font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <Globe className="h-3.5 w-3.5 text-[#e30613]" />
                  {selectedInquiry.country}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-white/40 block">Est. Budget</span>
                <span className="font-bold text-[#ff4d58] flex items-center gap-1.5 mt-0.5">
                  <DollarSign className="h-3.5 w-3.5" />
                  {selectedInquiry.budget}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-white/40 block">Timeline</span>
                <span className="font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <Clock className="h-3.5 w-3.5 text-[#e30613]" />
                  {selectedInquiry.timeline}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-white/40 block">Received Date</span>
                <span className="font-bold text-white/80 flex items-center gap-1.5 mt-0.5">
                  <Calendar className="h-3.5 w-3.5 text-white/40" />
                  {selectedInquiry.date}
                </span>
              </div>
            </div>

            {/* Contact Specs */}
            <div className="space-y-2 border-b border-white/10 pb-4">
              <h3 className="text-xs font-bold text-white/70 uppercase tracking-wider">Contact Information</h3>
              <div className="flex flex-wrap gap-4 text-xs">
                <a
                  href={`mailto:${selectedInquiry.email}`}
                  className="flex items-center gap-2 text-white/90 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-[#e30613]" />
                  {selectedInquiry.email}
                </a>
                {selectedInquiry.phone && (
                  <a
                    href={`tel:${selectedInquiry.phone}`}
                    className="flex items-center gap-2 text-white/90 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-emerald-400" />
                    {selectedInquiry.phone}
                  </a>
                )}
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-white/70 uppercase tracking-wider flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#e30613]" /> Project Description & Brief
              </h3>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80 leading-relaxed font-sans whitespace-pre-wrap">
                {selectedInquiry.description}
              </div>
            </div>

            {/* Status Change & Action Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white/60">Update Status:</span>
                {["New", "In Review", "Replied", "Archived"].map((st) => (
                  <button
                    key={st}
                    onClick={() => handleStatusUpdate(selectedInquiry.id, st)}
                    className={`rounded-lg px-2.5 py-1 text-[10px] font-bold border transition-all ${selectedInquiry.status === st
                      ? "bg-[#e30613] text-white border-[#e30613]"
                      : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
                      }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <a
                href={`mailto:${selectedInquiry.email}?subject=RE: Studio Project Enquiry - ${selectedInquiry.projectType}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-5 py-2 text-xs font-bold text-white shadow-lg shadow-[#e30613]/30 transition-all"
              >
                <Send className="h-3.5 w-3.5" />
                Reply to Client
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
