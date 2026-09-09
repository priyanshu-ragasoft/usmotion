import { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Eye, EyeOff, Lock, Mail, ArrowRight, ShieldCheck,
  Sparkles, Camera, Users, TrendingUp, Film
} from "lucide-react";
import Logo from "../../components/common/Logo";

function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      width: (i * 37 % 4) + 2 + "px",
      height: (i * 37 % 4) + 2 + "px",
      left: (i * 17 % 100) + "%",
      top: (i * 29 % 100) + "%",
      animationDelay: (i * 3 % 10) + "s",
      animationDuration: (i * 5 % 15) + 10 + "s",
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white/5 animate-float"
          style={{
            width: p.width,
            height: p.height,
            left: p.left,
            top: p.top,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }}
        />
      ))}
    </div>
  );
}

function BrandGradientOrbs() {
  return (
    <>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-red/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/80 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
    </>
  );
}

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@usmotion.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("usmotion_admin_token") === "true") {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email.trim().toLowerCase() === "admin@usmotion.com" && password === "admin123") {
        localStorage.setItem("usmotion_admin_token", "true");
        localStorage.setItem("usmotion_admin_user", JSON.stringify({ email, name: "Studio Director", role: "Admin" }));
        navigate("/admin/dashboard", { replace: true });
      } else {
        setError("Invalid credentials. Please use the demo credentials below.");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#041a3a] font-sans text-white overflow-hidden relative">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes beamSweep {
          0% { transform: translateX(-30%) rotate(8deg); opacity: 0; }
          15% { opacity: 0.4; }
          50% { opacity: 0.25; }
          85% { opacity: 0.4; }
          100% { transform: translateX(130%) rotate(8deg); opacity: 0; }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #ffffff 0%, #ff8a93 30%, #ffffff 60%, #ff8a93 85%, #ffffff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        .slide-in-delay-1 { animation-delay: 0.1s; opacity: 0; }
        .slide-in-delay-2 { animation-delay: 0.2s; opacity: 0; }
        .slide-in-delay-3 { animation-delay: 0.3s; opacity: 0; }
        .slide-in-delay-4 { animation-delay: 0.4s; opacity: 0; }
        .slide-in-delay-5 { animation-delay: 0.5s; opacity: 0; }
        .slide-in-delay-6 { animation-delay: 0.6s; opacity: 0; }
        .beam {
          animation: beamSweep 9s ease-in-out infinite;
        }
      `}</style>

      <BrandGradientOrbs />
      <FloatingParticles />

      {/* Ambient Sweeping Light Beam */}
      <div className="beam pointer-events-none absolute -top-1/4 left-0 h-[160%] w-1/3 bg-gradient-to-b from-white/0 via-brand-red/10 to-white/0 blur-3xl z-0" />

      <div className="relative z-10 flex min-h-screen lg:flex-row flex-col">
        {/* Left Showcase Panel - Official US Motion Studio Theme */}
        <div className="relative flex-1 overflow-hidden lg:min-h-screen min-h-[300px] bg-gradient-to-br from-[#021533] via-[#042455] to-[#010e24]">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

          <div className="relative z-10 flex h-full flex-col justify-between px-8 py-10 sm:px-12 lg:py-14">
            {/* Official US Motion Logo */}
            <div className="self-start">
              <img src="/Layer 2.png" alt="logo" className="h-32 sm:h-40 max-w-[320px] sm:max-w-[400px] w-auto object-contain shrink-0" />
            </div>

            <div className="mt-10 lg:mt-0 max-w-md space-y-6">
              <div className="slide-in slide-in-delay-1">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/15 border border-brand-red/30 text-xs font-semibold text-white tracking-wider uppercase">
                  <Sparkles className="h-3.5 w-3.5 text-brand-red" />
                  Studio Management Portal
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
                <span className="text-white">
                  Welcome back to
                </span>
                <br />
                <span className="shimmer-text">the cutting room.</span>
              </h1>

              <p className="text-sm leading-relaxed text-white/70 max-w-sm slide-in slide-in-delay-2">
                Sign in to manage your film catalogue, categories, and client project briefs with the US Motion Studio dashboard.
              </p>

              <div className="flex flex-wrap gap-6 pt-4 slide-in slide-in-delay-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-red/15 border border-brand-red/25">
                    <Camera className="h-4 w-4 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">24/7</p>
                    <p className="text-[10px] text-white/50">Production System</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">50+</p>
                    <p className="text-[10px] text-white/50">Brand Partners</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-red/15 border border-brand-red/25">
                    <TrendingUp className="h-4 w-4 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">4.9★</p>
                    <p className="text-[10px] text-white/50">Client Rating</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Right Form Panel - Glassmorphic Admin Login */}
        <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-10 bg-[#020e24]">
          <div className="w-full max-w-md glass-effect rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl shadow-black/50">
            <div className="slide-in slide-in-delay-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-red mb-3">
                <Film className="h-3 w-3" /> Admin Access
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-black tracking-tight text-white">
                Sign In to Studio
              </h2>
              <p className="mt-1.5 text-xs text-white/60">
                Enter your administrative credentials to open the dashboard.
              </p>
            </div>

            {error && (
              <div className="mt-6 rounded-2xl border border-brand-red/40 bg-brand-red/10 backdrop-blur-md px-4 py-3 text-xs leading-relaxed text-red-200 slide-in slide-in-delay-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-red animate-ping shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="slide-in slide-in-delay-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                  Admin Email
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40 group-focus-within:text-brand-red transition-colors" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@usmotion.com"
                    className="w-full rounded-xl border border-white/15 bg-white/5 py-3 pl-10 pr-4 text-xs font-medium text-white placeholder:text-white/30 focus:border-brand-red focus:bg-white/10 focus:ring-2 focus:ring-brand-red/20 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="slide-in slide-in-delay-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40 group-focus-within:text-brand-red transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-white/15 bg-white/5 py-3 pl-10 pr-10 text-xs font-medium text-white placeholder:text-white/30 focus:border-brand-red focus:bg-white/10 focus:ring-2 focus:ring-brand-red/20 focus:outline-none transition-all duration-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs slide-in slide-in-delay-5">
                <label className="flex items-center gap-2 cursor-pointer text-white/70 hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-3.5 w-3.5 rounded border-white/20 bg-white/10 text-brand-red focus:ring-0 transition-colors"
                  />
                  <span>Keep me signed in</span>
                </label>
                <span className="text-white/40 hover:text-brand-red cursor-pointer transition-colors">
                  Forgot password?
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="relative w-full overflow-hidden group slide-in slide-in-delay-6"
              >
                <div className="flex items-center justify-center gap-2 rounded-xl bg-brand-red py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-red/30 transition-all duration-300 hover:bg-[#c50e18] hover:shadow-brand-red/50 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? (
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <span>Sign In to Dashboard</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </button>
            </form>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 slide-in slide-in-delay-6">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white/90">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Demo Access Credentials</span>
              </div>
              <div className="mt-2.5 space-y-1 font-mono text-[11px] text-white/70">
                <p>Email: <span className="text-brand-red font-semibold">admin@usmotion.com</span></p>
                <p>Password: <span className="text-brand-red font-semibold">admin123</span></p>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-white/40 slide-in slide-in-delay-6">
              <Link to="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
                <span>←</span> Return to US Motion Studio website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}