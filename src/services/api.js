const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function submitProjectEnquiry(payload) {
  if (!BASE_URL) {
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    return { ok: true };
  }

  const response = await fetch(`${BASE_URL.replace(/\/$/, "")}/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Something went wrong while sending your project.");
  }

  return response.json().catch(() => ({ ok: true }));
}
