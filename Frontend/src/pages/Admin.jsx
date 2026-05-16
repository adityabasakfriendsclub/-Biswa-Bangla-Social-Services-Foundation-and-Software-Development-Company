import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchContacts = async (pwd) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API}/api/admin/contacts`, {
        headers: { password: pwd },
      });
      if (res.status === 401) {
        setError("Wrong password.");
        setAuthed(false);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setContacts(data);
      setAuthed(true);
    } catch {
      setError("Could not reach server. Is the backend running?");
    }
    setLoading(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchContacts(password);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this submission?")) return;
    await fetch(`${API}/api/admin/contacts/${id}`, {
      method: "DELETE",
      headers: { password },
    });
    setContacts((prev) => prev.filter((c) => c._id !== id));
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-sm">
          <div className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-6">
            Admin Access
          </div>
          <h1 className="text-2xl font-black text-white mb-6">
            Contact Submissions
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-3 rounded-lg text-sm transition-colors"
            >
              {loading ? "Checking…" : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-1">
              Admin Panel
            </div>
            <h1 className="text-2xl font-black text-white">
              Contact Submissions ({contacts.length})
            </h1>
          </div>
          <button
            onClick={() => fetchContacts(password)}
            className="text-xs text-gray-400 hover:text-white border border-gray-700 px-4 py-2 rounded-lg transition-colors"
          >
            Refresh
          </button>
        </div>

        {contacts.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            No submissions yet.
          </div>
        ) : (
          <div className="space-y-4">
            {contacts.map((c) => (
              <div
                key={c._id}
                className="bg-gray-900 rounded-xl p-5 border border-gray-800 flex flex-col sm:flex-row sm:items-start gap-4"
              >
                {/* Info */}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold">{c.name}</span>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">
                      {c.service}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <a
                      href={`mailto:${c.email}`}
                      className="text-orange-400 hover:underline"
                    >
                      {c.email}
                    </a>
                    {c.phone && <span className="ml-3">{c.phone}</span>}
                  </div>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    {c.message}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {new Date(c.createdAt).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
                {/* Actions */}
                <div className="flex gap-2 sm:flex-col">
                  <a
                    href={`mailto:${c.email}`}
                    className="text-xs bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg transition-colors text-center"
                  >
                    Reply
                  </a>
                  <button
                    onClick={() => handleDelete(c._id)}
                    className="text-xs bg-gray-800 hover:bg-red-900 text-gray-400 hover:text-red-300 px-3 py-2 rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
