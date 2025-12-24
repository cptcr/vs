import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/technologies/recore',
  title: 'Recore',
  description: 'Next generation hosting solution.',
});

export default function RecorePage() {
  return (
    <main className="relative flex items-center justify-center w-full min-h-screen overflow-hidden text-white bg-black">
      {/* Animated Vaultscope waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[200%] h-[200%] rounded-full bg-gradient-to-r from-vault-primary via-vault-secondary to-vault-accent blur-[150px] animate-wave-slow"></div>
        <div className="absolute w-[220%] h-[220%] rounded-full bg-gradient-to-r from-vault-accent via-vault-primary to-vault-secondary blur-[120px] animate-wave-medium"></div>
        <div className="absolute w-[240%] h-[240%] rounded-full bg-gradient-to-r from-vault-secondary via-vault-accent to-vault-primary blur-[100px] animate-wave-fast"></div>

        {/* Static white particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.5 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-transparent sm:text-7xl bg-clip-text bg-gradient-to-br from-vault-primary via-vault-secondary to-vault-accent drop-shadow-xl">
          Recore
        </h1>
        <p className="mt-4 text-lg tracking-wide sm:text-xl text-zinc-400">
          A new experience is forming.
        </p>
        <p className="mt-10 text-sm text-zinc-600">Coming Soon</p>
      </div>

      <div className="absolute w-full text-xs text-center bottom-6 text-zinc-700">
        © {new Date().getFullYear()} Vaultscope
      </div>
    </main>
  );
}
