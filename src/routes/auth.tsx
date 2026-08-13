import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Đăng nhập — QuanNguyenS" },
      { name: "description", content: "Đăng nhập hoặc tạo tài khoản QuanNguyenS để cấp quyền cho các ứng dụng kết nối." },
      { property: "og:title", content: "Đăng nhập — QuanNguyenS" },
      { property: "og:description", content: "Đăng nhập hoặc tạo tài khoản QuanNguyenS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function safeNext(raw: string | null): string {
  if (!raw) return "/";
  if (!raw.startsWith("/") || raw.startsWith("//")) return "/";
  return raw;
}

function AuthPage() {
  const [next, setNext] = useState("/");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    const target = safeNext(new URLSearchParams(window.location.search).get("next"));
    setNext(target);
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) window.location.href = target;
    });
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setInfo(null);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
        setBusy(false);
        return;
      }
      window.location.href = next;
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}${next}` },
      });
      setBusy(false);
      if (error) return setError(error.message);
      if (data.session) window.location.href = next;
      else setInfo("Kiểm tra email của bạn để xác nhận tài khoản.");
    }
  }

  return (
    <main className="min-h-screen bg-canvas flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-card border border-stone-300 bg-parchment p-8">
        <h1 className="font-display text-2xl text-stone-900 mb-1">
          {mode === "signin" ? "Đăng nhập" : "Tạo tài khoản"}
        </h1>
        <p className="font-body text-sm text-stone-600 mb-6">
          Tài khoản dùng để cấp quyền truy cập cho các ứng dụng kết nối.
        </p>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block font-body text-sm text-stone-700 mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-[8px] border border-stone-300 bg-canvas px-3 py-2 font-body text-stone-900"
            />
          </div>
          <div>
            <label className="block font-body text-sm text-stone-700 mb-1" htmlFor="password">Mật khẩu</label>
            <input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-[8px] border border-stone-300 bg-canvas px-3 py-2 font-body text-stone-900"
            />
          </div>

          {error && <p className="font-body text-sm text-accent">{error}</p>}
          {info && <p className="font-body text-sm text-stone-700">{info}</p>}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-[8px] bg-stone-900 px-4 py-2.5 font-body text-parchment disabled:opacity-60"
          >
            {busy ? "Đang xử lý…" : mode === "signin" ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(null); setInfo(null); }}
          className="mt-5 w-full font-body text-sm text-stone-600 underline"
        >
          {mode === "signin" ? "Chưa có tài khoản? Đăng ký" : "Đã có tài khoản? Đăng nhập"}
        </button>
      </div>
    </main>
  );
}
