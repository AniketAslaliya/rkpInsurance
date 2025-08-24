export default function Home() {
  return (
    <main className="min-h-dvh grid place-items-center p-6">
      <div className="glass-card rounded-xl p-8 w-full max-w-2xl animate-soft-enter">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-semibold tracking-tight">Insurance Management System</h1>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-foreground/70">
            v0.1.0
          </span>
        </div>
        <p className="text-foreground/70">
          Welcome. Please sign in to access your dashboard.
        </p>
      </div>
    </main>
  );
}
