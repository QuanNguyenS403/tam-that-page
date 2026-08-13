import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Không tìm thấy trang — QuanNguyenS" },
      { name: "description", content: "Trang bạn tìm không tồn tại." },
      { property: "og:title", content: "Không tìm thấy trang — QuanNguyenS" },
      { property: "og:description", content: "Trang bạn tìm không tồn tại." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CatchAll,
});

const CONSENT_PATH = "/.lovable/oauth/consent";

function CatchAll() {
  const pathname = useLocation({ select: (s) => s.pathname });
  if (pathname === CONSENT_PATH) return <OAuthConsent />;
  return <NotFound />;
}

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="text-center">
        <h1 className="mb-4 font-display text-4xl text-stone-900">404</h1>
        <p className="mb-4 font-body text-stone-600">Không tìm thấy trang bạn yêu cầu.</p>
        <Link to="/" className="font-body text-accent underline">
          Về trang chủ
        </Link>
      </div>
    </main>
  );
}

type OAuthNamespace = {
  getAuthorizationDetails: (id: string) => Promise<{ data: any; error: any }>;
  approveAuthorization: (id: string) => Promise<{ data: any; error: any }>;
  denyAuthorization: (id: string) => Promise<{ data: any; error: any }>;
};

function oauth(): OAuthNamespace {
  return (supabase.auth as unknown as { oauth: OAuthNamespace }).oauth;
}

function OAuthConsent() {
  const [authorizationId, setAuthorizationId] = useState("");
  const [details, setDetails] = useState<any>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      const id = new URLSearchParams(window.location.search).get("authorization_id") ?? "";
      setAuthorizationId(id);
      if (!id) return setError("Thiếu authorization_id.");
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/auth?next=" + encodeURIComponent(next);
        return;
      }
      if (active) setAccount(sess.session.user.email ?? null);
      const { data, error } = await oauth().getAuthorizationDetails(id);
      if (!active) return;
      if (error) return setError(error.message);
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    })();
    return () => {
      active = false;
    };
  }, []);

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const { data, error } = approve
      ? await oauth().approveAuthorization(authorizationId)
      : await oauth().denyAuthorization(authorizationId);
    if (error) {
      setBusy(false);
      return setError(error.message);
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      return setError("Máy chủ ủy quyền không trả về địa chỉ chuyển hướng.");
    }
    window.location.href = target;
  }

  const clientName = details?.client?.name ?? "Ứng dụng";
  const scopes: string[] = (details?.scope ?? details?.scopes ?? "").toString().split(" ").filter(Boolean);

  return (
    <main className="min-h-screen bg-canvas flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-card border border-stone-300 bg-parchment p-8">
        {error ? (
          <>
            <h1 className="font-display text-2xl text-stone-900 mb-2">Không thể tải yêu cầu</h1>
            <p className="font-body text-sm text-stone-600">{error}</p>
          </>
        ) : !details ? (
          <p className="font-body text-sm text-stone-600">Đang tải…</p>
        ) : (
          <>
            <h1 className="font-display text-2xl text-stone-900 mb-2">
              Kết nối {clientName} với QuanNguyenS
            </h1>
            {account && <p className="font-body text-sm text-stone-600 mb-4">Đang đăng nhập với {account}</p>}
            <p className="font-body text-sm text-stone-700 mb-4">
              {clientName} sẽ có thể gọi các công cụ của ứng dụng này với danh nghĩa của bạn.
            </p>
            {details?.client?.redirect_uri && (
              <p className="font-body text-xs text-stone-500 mb-4 break-all">
                Chuyển hướng tới: {details.client.redirect_uri}
              </p>
            )}
            {scopes.length > 0 && (
              <ul className="mb-4 space-y-1">
                {scopes.map((s) => (
                  <li key={s} className="font-body text-sm text-stone-700">
                    {s === "email"
                      ? "Chia sẻ địa chỉ email của bạn"
                      : s === "profile"
                        ? "Chia sẻ hồ sơ cơ bản của bạn"
                        : s === "openid"
                          ? "Xác minh danh tính của bạn"
                          : `Quyền bổ sung: ${s}`}
                  </li>
                ))}
              </ul>
            )}
            <p className="font-body text-xs text-stone-500 mb-6">
              Việc này không vượt qua các quyền và chính sách bảo mật của ứng dụng.
            </p>
            <div className="flex gap-3">
              <button
                disabled={busy}
                onClick={() => decide(true)}
                className="flex-1 rounded-[8px] bg-stone-900 px-4 py-2.5 font-body text-parchment disabled:opacity-60"
              >
                Chấp thuận
              </button>
              <button
                disabled={busy}
                onClick={() => decide(false)}
                className="flex-1 rounded-[8px] border border-stone-300 px-4 py-2.5 font-body text-stone-800 disabled:opacity-60"
              >
                Hủy kết nối
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
