import { useState, useRef } from "react";
import { Info, Save, Upload, Users, Sparkles, BookOpen, Rocket, Plus, X } from "lucide-react";
import { TEAM } from "../../utils/constants";

export default function AdminAboutUsTab({ showToast }) {
  // 1. About Hero State
  const [aboutHero, setAboutHero] = useState({
    tagline: "The studio",
    heading: "A production house built for cinema",
    description: "US Motion Studio makes brand films with the discipline of a production house — concept, direction, and finish held to one standard.",
    image: "/laptop.png",
  });

  // 2. Who We Are State
  const [whoWeAre, setWhoWeAre] = useState({
    tagline: "Who we are",
    heading: "Films made with craft, not volume",
    paragraph1: "We are a production house for brands that need cinema. Lighting, pace, performance, and finish stay on one line — from the first conversation through the final grade.",
    paragraph2: "Commercials, brand films, fashion, product, and documentary work are all held to the same standard. The brief changes. The discipline does not.",
    image: "/hero-banner.png",
  });

  // 3. Our Story State
  const [ourStory, setOurStory] = useState({
    tagline: "Our story",
    heading: "Built to hold the frame",
    paragraph1: "The studio started with a simple demand: brand films should feel like cinema, not leftover content. That meant owning the process — writing, shooting, cutting, and finishing under one roof.",
    paragraph2: "Years of commercials, fashion films, and corporate work shaped a house style: precise light, measured pace, and a finish that still holds on a large screen.",
    image: "/laptop1.png",
  });

  // 4. Team State
  const [teamMembers, setTeamMembers] = useState(TEAM);

  // 5. Start Project Banner State
  const [startProject, setStartProject] = useState({
    tagline: "09 — Start a project",
    heading: "Tell us the film you want to make",
    description: "Commercials, brand films, fashion, product, and documentary work — from the first conversation through the final grade.",
    image: "/hero-banner-2.png",
  });

  // Image Refs
  const heroFileRef = useRef(null);
  const whoWeAreFileRef = useRef(null);
  const storyFileRef = useRef(null);
  const ctaFileRef = useRef(null);

  const handleSaveSection = (sectionName) => {
    if (showToast) showToast(`${sectionName} section updated successfully!`);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-xl sm:text-3xl font-black text-white tracking-tight">
            About Us & Studio Content Editor
          </h1>
          <p className="mt-1 text-xs text-white/50">
            Manage About Hero, Who We Are, Our Story, Team Members, and Call To Action section media & copy.
          </p>
        </div>
      </div>

      {/* SECTION 1: ABOUT HERO */}
      <div className="rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#e30613]" />
            <h2 className="font-heading text-base font-bold text-white">1. About Hero Section</h2>
          </div>
          <button
            onClick={() => handleSaveSection("About Hero")}
            className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-4 py-2 text-xs font-bold text-white transition-all shadow-md"
          >
            <Save className="h-3.5 w-3.5" /> Save Hero
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-4">
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Tagline</label>
              <input
                type="text"
                value={aboutHero.tagline}
                onChange={(e) => setAboutHero({ ...aboutHero, tagline: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Heading</label>
              <input
                type="text"
                value={aboutHero.heading}
                onChange={(e) => setAboutHero({ ...aboutHero, heading: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Description</label>
              <textarea
                rows={3}
                value={aboutHero.description}
                onChange={(e) => setAboutHero({ ...aboutHero, description: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white focus:border-[#e30613] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Hero Background Image</label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={aboutHero.image}
                  onChange={(e) => setAboutHero({ ...aboutHero, image: e.target.value })}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
                />
                <label className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-2 text-xs font-bold text-white cursor-pointer">
                  <Upload className="h-3.5 w-3.5 text-[#ff4d58]" /> Upload
                  <input
                    ref={heroFileRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setAboutHero({ ...aboutHero, image: URL.createObjectURL(e.target.files[0]) });
                      }
                    }}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl border border-white/10 bg-neutral-950 p-4 relative overflow-hidden flex flex-col justify-end min-h-[200px]">
            <img src={aboutHero.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
            <div className="relative z-10 space-y-1">
              <p className="text-[9px] font-bold text-[#ff4d58] uppercase">{aboutHero.tagline}</p>
              <h4 className="font-heading text-sm font-bold text-white">{aboutHero.heading}</h4>
              <p className="text-[10px] text-white/70 line-clamp-2">{aboutHero.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: WHO WE ARE */}
      <div className="rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5 text-[#e30613]" />
            <h2 className="font-heading text-base font-bold text-white">2. Who We Are Section</h2>
          </div>
          <button
            onClick={() => handleSaveSection("Who We Are")}
            className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-4 py-2 text-xs font-bold text-white transition-all shadow-md"
          >
            <Save className="h-3.5 w-3.5" /> Save Who We Are
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-4">
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Tagline</label>
              <input
                type="text"
                value={whoWeAre.tagline}
                onChange={(e) => setWhoWeAre({ ...whoWeAre, tagline: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Heading</label>
              <input
                type="text"
                value={whoWeAre.heading}
                onChange={(e) => setWhoWeAre({ ...whoWeAre, heading: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Paragraph 1</label>
              <textarea
                rows={2}
                value={whoWeAre.paragraph1}
                onChange={(e) => setWhoWeAre({ ...whoWeAre, paragraph1: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Paragraph 2</label>
              <textarea
                rows={2}
                value={whoWeAre.paragraph2}
                onChange={(e) => setWhoWeAre({ ...whoWeAre, paragraph2: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Side Image</label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={whoWeAre.image}
                  onChange={(e) => setWhoWeAre({ ...whoWeAre, image: e.target.value })}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
                />
                <label className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-2 text-xs font-bold text-white cursor-pointer">
                  <Upload className="h-3.5 w-3.5 text-[#ff4d58]" /> Upload
                  <input
                    ref={whoWeAreFileRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setWhoWeAre({ ...whoWeAre, image: URL.createObjectURL(e.target.files[0]) });
                      }
                    }}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center rounded-xl border border-white/10 bg-neutral-950 p-2 overflow-hidden">
            <img src={whoWeAre.image} alt="" className="h-full max-h-[280px] w-full object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* SECTION 3: OUR STORY */}
      <div className="rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-[#e30613]" />
            <h2 className="font-heading text-base font-bold text-white">3. Our Story Section</h2>
          </div>
          <button
            onClick={() => handleSaveSection("Our Story")}
            className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-4 py-2 text-xs font-bold text-white transition-all shadow-md"
          >
            <Save className="h-3.5 w-3.5" /> Save Story
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-4">
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Tagline</label>
              <input
                type="text"
                value={ourStory.tagline}
                onChange={(e) => setOurStory({ ...ourStory, tagline: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Heading</label>
              <input
                type="text"
                value={ourStory.heading}
                onChange={(e) => setOurStory({ ...ourStory, heading: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Story Paragraph 1</label>
              <textarea
                rows={2}
                value={ourStory.paragraph1}
                onChange={(e) => setOurStory({ ...ourStory, paragraph1: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Story Image</label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={ourStory.image}
                  onChange={(e) => setOurStory({ ...ourStory, image: e.target.value })}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
                />
                <label className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-2 text-xs font-bold text-white cursor-pointer">
                  <Upload className="h-3.5 w-3.5 text-[#ff4d58]" /> Upload
                  <input
                    ref={storyFileRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setOurStory({ ...ourStory, image: URL.createObjectURL(e.target.files[0]) });
                      }
                    }}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center rounded-xl border border-white/10 bg-neutral-950 p-2 overflow-hidden">
            <img src={ourStory.image} alt="" className="h-full max-h-[240px] w-full object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* SECTION 4: TEAM MEMBERS */}
      <div className="rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-[#e30613]" />
            <h2 className="font-heading text-base font-bold text-white">4. Studio Team & Departments</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setTeamMembers([...teamMembers, { image: "", role: "", copy: "" }])
              }
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 text-xs font-bold text-white transition-all"
            >
              <Plus className="h-3.5 w-3.5" /> Add Member
            </button>
            <button
              onClick={() => handleSaveSection("Team Members")}
              className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-4 py-2 text-xs font-bold text-white transition-all shadow-md"
            >
              <Save className="h-3.5 w-3.5" /> Save Team
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-3">
              <button
                onClick={() => {
                  const updated = teamMembers.filter((_, i) => i !== index);
                  setTeamMembers(updated);
                }}
                className="absolute -top-2 -right-2 z-10 rounded-full bg-[#e30613] hover:bg-[#be030d] p-1.5 text-white shadow-md transition-all"
                title="Delete member"
              >
                <X className="h-3 w-3" />
              </button>

              <div className="relative h-36 w-full rounded-lg overflow-hidden border border-white/10">
                <img src={member.image} alt="" className="h-full w-full object-cover" />
                <label className="absolute bottom-2 right-2 rounded-lg bg-black/70 p-1.5 text-white hover:bg-black cursor-pointer">
                  <Upload className="h-3.5 w-3.5" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        const url = URL.createObjectURL(e.target.files[0]);
                        const updated = [...teamMembers];
                        updated[index].image = url;
                        setTeamMembers(updated);
                      }
                    }}
                  />
                </label>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-white/50 uppercase">Department Role</label>
                <input
                  type="text"
                  value={member.role}
                  onChange={(e) => {
                    const updated = [...teamMembers];
                    updated[index].role = e.target.value;
                    setTeamMembers(updated);
                  }}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-white font-bold"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-white/50 uppercase">Role Description</label>
                <textarea
                  rows={2}
                  value={member.copy}
                  onChange={(e) => {
                    const updated = [...teamMembers];
                    updated[index].copy = e.target.value;
                    setTeamMembers(updated);
                  }}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-white/80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: START PROJECT CTA BANNER */}
      <div className="rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-[#e30613]" />
            <h2 className="font-heading text-base font-bold text-white">5. Start Project CTA Banner</h2>
          </div>
          <button
            onClick={() => handleSaveSection("Start Project CTA Banner")}
            className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-4 py-2 text-xs font-bold text-white transition-all shadow-md"
          >
            <Save className="h-3.5 w-3.5" /> Save CTA Banner
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-4">
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Tagline</label>
              <input
                type="text"
                value={startProject.tagline}
                onChange={(e) => setStartProject({ ...startProject, tagline: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Main Heading</label>
              <input
                type="text"
                value={startProject.heading}
                onChange={(e) => setStartProject({ ...startProject, heading: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Subtitle Description</label>
              <textarea
                rows={2}
                value={startProject.description}
                onChange={(e) => setStartProject({ ...startProject, description: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Background Banner Image</label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={startProject.image}
                  onChange={(e) => setStartProject({ ...startProject, image: e.target.value })}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
                />
                <label className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-2 text-xs font-bold text-white cursor-pointer">
                  <Upload className="h-3.5 w-3.5 text-[#ff4d58]" /> Upload
                  <input
                    ref={ctaFileRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setStartProject({ ...startProject, image: URL.createObjectURL(e.target.files[0]) });
                      }
                    }}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl border border-white/10 bg-neutral-950 p-4 relative overflow-hidden flex flex-col justify-end min-h-[180px]">
            <img src={startProject.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
            <div className="relative z-10 space-y-1">
              <p className="text-[9px] font-bold text-[#ff4d58] uppercase">{startProject.tagline}</p>
              <h4 className="font-heading text-sm font-bold text-white">{startProject.heading}</h4>
              <p className="text-[10px] text-white/70 line-clamp-2">{startProject.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

