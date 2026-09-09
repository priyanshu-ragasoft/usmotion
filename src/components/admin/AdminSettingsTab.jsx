import { useState, useMemo } from "react";
import {
  KeyRound,
  Shield,
  Eye,
  EyeOff,
  Save,
  CheckCircle2,
  Lock,
  AlertTriangle,
  Fingerprint,
  Clock,
  Smartphone,
} from "lucide-react";

export default function AdminSettingsTab({ showToast }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  // --- Password strength calculation (visual only, purely client-side) ---
  const strength = useMemo(() => {
    let score = 0;
    if (newPassword.length >= 6) score++;
    if (newPassword.length >= 10) score++;
    if (/[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword)) score++;
    if (/\d/.test(newPassword)) score++;
    if (/[^A-Za-z0-9]/.test(newPassword)) score++;

    const levels = [
      { label: "Too Short", color: "bg-white/10", text: "text-white/40" },
      { label: "Weak", color: "bg-red-500", text: "text-red-400" },
      { label: "Fair", color: "bg-orange-500", text: "text-orange-400" },
      { label: "Good", color: "bg-yellow-500", text: "text-yellow-400" },
      { label: "Strong", color: "bg-emerald-500", text: "text-emerald-400" },
      { label: "Excellent", color: "bg-emerald-400", text: "text-emerald-300" },
    ];

    return { score, ...levels[newPassword.length === 0 ? 0 : score] };
  }, [newPassword]);

  const handlePasswordReset = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!currentPassword) {
      setErrorMsg("Please enter your current password.");
      return;
    }

    if (newPassword.length < 6) {
      setErrorMsg("New password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMsg("New password and confirm password do not match.");
      return;
    }

    // Success logic
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    if (showToast) showToast("Admin password updated successfully!");
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-6xl">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <div className="flex items-center gap-2">
          <KeyRound className="h-6 w-6 text-[#e30613]" />
          <h1 className="font-heading text-xl sm:text-3xl font-black text-white tracking-tight">
            Account & Security Settings
          </h1>
        </div>
        <p className="mt-1 text-xs text-white/50">
          Manage administrative security credentials and access preferences.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Password Reset Section */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-2xl space-y-6 h-fit">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-[#e30613]/10 border border-[#e30613]/20 flex items-center justify-center text-[#ff4d58]">
                <Lock className="h-4 w-4" />
              </div>
              <div>
                <h2 className="font-heading text-base font-bold text-white">Reset Admin Password</h2>
                <p className="text-xs text-white/50">Update your security passkey for studio portal access.</p>
              </div>
            </div>
            <span className="hidden sm:flex rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[10px] font-bold text-emerald-400 items-center gap-1">
              <Shield className="h-3 w-3" /> Secure Access
            </span>
          </div>

          {errorMsg && (
            <div className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-300 font-medium">
              <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handlePasswordReset} className="space-y-5 max-w-xl">
            {/* Current Password */}
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrent ? "text" : "password"}
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-10 text-xs text-white focus:border-[#e30613] focus:ring-1 focus:ring-[#e30613]/40 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  tabIndex={-1}
                >
                  {showCurrent ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNew ? "text" : "password"}
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-10 text-xs text-white focus:border-[#e30613] focus:ring-1 focus:ring-[#e30613]/40 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  tabIndex={-1}
                >
                  {showNew ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {/* Strength meter */}
              {newPassword.length > 0 && (
                <div className="mt-2 space-y-1.5">
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i < strength.score ? strength.color : "bg-white/10"
                          }`}
                      />
                    ))}
                  </div>
                  <p className={`text-[10px] font-bold ${strength.text}`}>{strength.label}</p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className={`w-full rounded-xl border bg-white/5 px-4 py-3 pr-10 text-xs text-white focus:outline-none focus:ring-1 transition-colors ${confirmPassword && confirmPassword !== newPassword
                      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/40"
                      : confirmPassword && confirmPassword === newPassword
                        ? "border-emerald-500/50 focus:border-emerald-500 focus:ring-emerald-500/40"
                        : "border-white/10 focus:border-[#e30613] focus:ring-[#e30613]/40"
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  tabIndex={-1}
                >
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {confirmPassword && confirmPassword === newPassword && (
                <p className="mt-2 flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" /> Passwords match
                </p>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-start">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[#e30613] hover:bg-[#be030d] px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#e30613]/30 active:scale-95 transition-all"
              >
                <Save className="h-4 w-4" />
                <span>Update Password</span>
              </button>
            </div>
          </form>
        </div>

        {/* Side Panel: Security Overview / Tips */}
        <div className="space-y-6">
          {/* Account Summary Card */}
          <div className="rounded-2xl border border-white/10 bg-[#111318] p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Fingerprint className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-white">Account Status</h3>
                <p className="text-[11px] text-white/50">Studio Director access</p>
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-white/60">
                  <Clock className="h-3.5 w-3.5" /> Last password change
                </span>
                <span className="font-semibold text-white/80">42 days ago</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-white/60">
                  <Smartphone className="h-3.5 w-3.5" /> Active sessions
                </span>
                <span className="font-semibold text-white/80">1 device</span>
              </div>
            </div>
          </div>

          {/* Security Tips Card */}
          <div className="rounded-2xl border border-[#e30613]/20 bg-gradient-to-br from-[#1a0507] to-[#111318] p-6 shadow-2xl space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#ff4d58]" />
              <h3 className="font-heading text-sm font-bold text-white">Password Tips</h3>
            </div>
            <ul className="space-y-2.5 text-[11px] text-white/60 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-[#ff4d58] mt-0.5">•</span>
                Use at least 10 characters mixing upper and lower case.
              </li>
              <li className="flex gap-2">
                <span className="text-[#ff4d58] mt-0.5">•</span>
                Include numbers and a symbol for stronger protection.
              </li>
              <li className="flex gap-2">
                <span className="text-[#ff4d58] mt-0.5">•</span>
                Avoid reusing passwords from other accounts.
              </li>
              <li className="flex gap-2">
                <span className="text-[#ff4d58] mt-0.5">•</span>
                Change your password periodically, especially after shared access.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}