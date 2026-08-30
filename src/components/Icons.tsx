import React from 'react';

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const PythonIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none">
    <path
      d="M63.5 8C35.2 8 36.9 20.3 36.9 20.3L37 33h27v3.8H18.7S6 35.3 6 63.6c0 28.3 11 27.2 11 27.2h6.5v-9.1s-.6-11 10.9-11h27.3s10.3.2 10.3-10V33.4S73.5 8 63.5 8zm-14.7 9.8c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z"
      fill="#387EB8"
    />
    <path
      d="M64.5 120c28.3 0 26.6-12.3 26.6-12.3L91 95H64v-3.8h45.3s12.7 1.5 12.7-26.8c0-28.3-11-27.2-11-27.2h-6.5v9.1s.6 11-10.9 11H66.3s-10.3-.2-10.3 10v26.3s-1.8 25.4 8.5 25.4zm14.7-9.8c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"
      fill="#FFE052"
    />
  </svg>
);

export const JavaScriptIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="20" fill="#F7DF1E" />
    <path
      d="M38 100c3-1.8 5.7-3.6 7.4-7.4 1.7-3.7 2.2-8.5 2.2-14.6V42h13v36c0 10.2-1.7 17.6-5.8 22.2s-10.3 7-18.8 7c-4.4 0-8.8-.9-13.2-2.7l3-10.5c3.2 1.5 6.6 2.2 9.2 2.2zM75 106.8c-7-3.8-11.4-10-11.4-19 0-7.8 3.8-13.6 11.2-17.8 7.4-4.2 17.6-7.8 30.6-10.8V56c0-4.8-1.2-8.2-3.6-10.2s-6.2-3-11.4-3c-5.8 0-11.6 1.8-17.4 5.4l-4.4-9.6c7.4-4.6 15.6-7 24.6-7 9.4 0 16.6 2.6 21.6 7.8s7.4 12.6 7.4 22.2v46.6h-12.8v-7.8c-6.8 6.4-15 9.6-24.4 9.6-3.4 0-6.7-.8-9.4-2.8z"
      fill="#000"
    />
  </svg>
);

export const Html5Icon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path d="M19 116.5L8.5 0h111L109 116.5 64 128z" fill="#E44D26" />
    <path d="M64 117.8l36.8-9.8 8.8-97.4H64z" fill="#F16529" />
    <path d="M64 54.7H47.4l-1.1-13.4H64V27.9H32.2l3.4 40.2H64zm0 39.8l-.2.1-16.7-4.5-1.1-12.3H32.6l2.1 23.6 29.3 8.1z" fill="#EBEBEB" />
    <path d="M64 54.7h16.6l-1.6 17.4-15 4v13.8l26.9-7.5 3.5-39.7H64V27.9h32.8l-.4 4.5-2.7 30.3H64z" fill="#FFF" />
  </svg>
);

export const Css3Icon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path d="M19 116.5L8.5 0h111L109 116.5 64 128z" fill="#1572B6" />
    <path d="M64 117.8l36.8-9.8 8.8-97.4H64z" fill="#33A9DC" />
    <path d="M64 54.7H47.4l-1.1-13.4H64V27.9H32.2l3.4 40.2H64zm0 39.8l-.2.1-16.7-4.5-1.1-12.3H32.6l2.1 23.6 29.3 8.1z" fill="#EBEBEB" />
    <path d="M80.6 41.3l-1.6 17.4H64v14h15l-1.4 15.4-13.6 3.7V105l24.4-6.8 3.5-39.7.4-4.5.3-3.7.8-9h-30v13.4z" fill="#FFF" />
  </svg>
);

export const SeleniumIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#00B400" />
    <text x="24" y="86" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="72">
      Se
    </text>
    <circle cx="100" cy="36" r="10" fill="#FFFFFF" opacity="0.9" />
  </svg>
);

export const PlaywrightIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none">
    <circle cx="64" cy="64" r="58" fill="#2EAD33" />
    <path
      d="M42 40C33.7 40 27 46.7 27 55C27 67.5 42 88 42 88S57 67.5 57 55C57 46.7 50.3 40 42 40ZM42 62C38.1 62 35 58.9 35 55C35 51.1 38.1 48 42 48C45.9 48 49 51.1 49 55C49 58.9 45.9 62 42 62Z"
      fill="#E63946"
    />
    <path
      d="M86 40C77.7 40 71 46.7 71 55C71 67.5 86 88 86 88S101 67.5 101 55C101 46.7 94.3 40 86 40ZM86 62C82.1 62 79 58.9 79 55C79 51.1 82.1 48 86 48C89.9 48 93 51.1 93 55C93 58.9 89.9 62 86 62Z"
      fill="#457B9D"
    />
  </svg>
);

export const AppiumIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#662D91" />
    <circle cx="64" cy="64" r="38" fill="#92278F" />
    <path d="M48 64a16 16 0 1 0 32 0 16 16 0 1 0-32 0" fill="#FFFFFF" />
    <circle cx="64" cy="64" r="6" fill="#662D91" />
  </svg>
);

export const PytestIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#0A9EDC" />
    <path d="M64 24L100 88H28L64 24Z" fill="#006699" />
    <path d="M64 38L90 84H38L64 38Z" fill="#FFE052" />
    <circle cx="64" cy="68" r="8" fill="#0A9EDC" />
  </svg>
);

export const FastApiIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#059669" />
    <path d="M72 16L32 72h28l-4 40 40-56H68l4-40z" fill="#FFFFFF" />
  </svg>
);

export const DjangoIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#092E20" />
    <text x="32" y="88" fill="#44B78B" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="72">
      dj
    </text>
  </svg>
);

export const FlaskIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#1E293B" />
    <path d="M54 26v24L34 88c-4 8 2 16 12 16h36c10 0 16-8 12-16L74 50V26h-20z" fill="#000000" stroke="#38BDF8" strokeWidth="6" />
    <ellipse cx="64" cy="88" rx="14" ry="6" fill="#38BDF8" />
  </svg>
);

export const PostmanIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#FF6C37" />
    <circle cx="64" cy="64" r="32" fill="#FFFFFF" />
    <path d="M52 64l12-12 12 12-12 12-12-12z" fill="#FF6C37" />
    <circle cx="64" cy="44" r="5" fill="#FF6C37" />
  </svg>
);

export const LocustIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#84CC16" />
    <circle cx="64" cy="64" r="30" fill="#1A2E05" />
    <circle cx="54" cy="58" r="4" fill="#84CC16" />
    <circle cx="74" cy="58" r="4" fill="#84CC16" />
    <path d="M46 76c6 8 30 8 36 0" stroke="#84CC16" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const OwaspZapIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#0284C7" />
    <path d="M68 20L36 68h28l-8 40 40-52H68l8-36z" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="3" />
  </svg>
);

export const HoppscotchIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#10B981" />
    <circle cx="64" cy="64" r="26" fill="#FFFFFF" />
    <path d="M54 54h20v20H54z" fill="#10B981" />
  </svg>
);

export const SwaggerIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#85EA2D" />
    <circle cx="64" cy="64" r="36" fill="#173647" />
    <text x="36" y="78" fill="#85EA2D" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="42">
      {`{ }`}
    </text>
  </svg>
);

export const MongoDbIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#116149" />
    <path
      d="M64 16c0 0-22 28-22 52 0 20 14 34 22 44 8-10 22-24 22-44 0-24-22-52-22-52z"
      fill="#47A248"
    />
    <path d="M64 16v96c8-10 22-24 22-44 0-24-22-52-22-52z" fill="#499D4A" />
    <path d="M64 16v96c-1 0-2 0-2-1V17z" fill="#FFFFFF" opacity="0.3" />
  </svg>
);

export const DBeaverIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#3B261D" />
    <circle cx="64" cy="64" r="34" fill="#784A28" />
    <circle cx="52" cy="56" r="4" fill="#FFFFFF" />
    <circle cx="76" cy="56" r="4" fill="#FFFFFF" />
    <rect x="58" y="68" width="12" height="14" rx="2" fill="#FFFFFF" />
    <line x1="64" y1="68" x2="64" y2="82" stroke="#3B261D" strokeWidth="1.5" />
  </svg>
);

export const SqlIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#336791" />
    <ellipse cx="64" cy="38" rx="32" ry="12" fill="#FFFFFF" />
    <path d="M32 38v30c0 6.6 14.3 12 32 12s32-5.4 32-12V38" fill="none" stroke="#FFFFFF" strokeWidth="6" />
    <path d="M32 68v30c0 6.6 14.3 12 32 12s32-5.4 32-12V68" fill="none" stroke="#FFFFFF" strokeWidth="6" />
  </svg>
);

export const JiraIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#0052CC" />
    <path d="M64 26L34 56h30V26z" fill="#2684FF" />
    <path d="M94 56L64 86h30V56z" fill="#0052CC" />
    <path d="M64 56L34 86h60L64 56z" fill="#FFFFFF" />
  </svg>
);

export const GitIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#F05032" />
    <circle cx="48" cy="48" r="8" fill="#FFFFFF" />
    <circle cx="80" cy="48" r="8" fill="#FFFFFF" />
    <circle cx="80" cy="80" r="8" fill="#FFFFFF" />
    <line x1="48" y1="48" x2="80" y2="80" stroke="#FFFFFF" strokeWidth="6" />
    <line x1="80" y1="48" x2="80" y2="80" stroke="#FFFFFF" strokeWidth="6" />
  </svg>
);

export const BitbucketIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#0052CC" />
    <path d="M28 32h72l-10 64H38L28 32zm30 44h12l4-24H54l4 24z" fill="#FFFFFF" />
  </svg>
);

export const ExcelIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="24" fill="#107C41" />
    <rect x="36" y="32" width="56" height="64" rx="4" fill="#FFFFFF" opacity="0.2" />
    <rect x="28" y="44" width="40" height="40" rx="4" fill="#185C37" />
    <text x="38" y="74" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="32">
      X
    </text>
  </svg>
);

// Dynamic Tool Logo Resolver
export const ToolLogo: React.FC<{ name: string; className?: string }> = ({ name, className = "w-5 h-5" }) => {
  const norm = name.toLowerCase().trim();

  if (norm.includes('python')) return <PythonIcon className={className} />;
  if (norm.includes('javascript') || norm === 'js') return <JavaScriptIcon className={className} />;
  if (norm.includes('html')) return <Html5Icon className={className} />;
  if (norm.includes('css')) return <Css3Icon className={className} />;
  if (norm.includes('selenium')) return <SeleniumIcon className={className} />;
  if (norm.includes('playwright')) return <PlaywrightIcon className={className} />;
  if (norm.includes('appium')) return <AppiumIcon className={className} />;
  if (norm.includes('pytest')) return <PytestIcon className={className} />;
  if (norm.includes('fastapi')) return <FastApiIcon className={className} />;
  if (norm.includes('django')) return <DjangoIcon className={className} />;
  if (norm.includes('flask')) return <FlaskIcon className={className} />;
  if (norm.includes('postman')) return <PostmanIcon className={className} />;
  if (norm.includes('locust')) return <LocustIcon className={className} />;
  if (norm.includes('owasp') || norm.includes('zap')) return <OwaspZapIcon className={className} />;
  if (norm.includes('hoppscotch')) return <HoppscotchIcon className={className} />;
  if (norm.includes('swagger')) return <SwaggerIcon className={className} />;
  if (norm.includes('mongo')) return <MongoDbIcon className={className} />;
  if (norm.includes('dbeaver')) return <DBeaverIcon className={className} />;
  if (norm.includes('sql') || norm.includes('postgres')) return <SqlIcon className={className} />;
  if (norm.includes('jira')) return <JiraIcon className={className} />;
  if (norm.includes('bitbucket')) return <BitbucketIcon className={className} />;
  if (norm.includes('git')) return <GitIcon className={className} />;
  if (norm.includes('excel')) return <ExcelIcon className={className} />;

  // Default fallback icon
  return (
    <div className={`rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono text-[10px] font-bold ${className}`}>
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
};
