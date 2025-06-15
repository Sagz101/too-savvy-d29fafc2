import React, { useState } from 'react';
import { DualOnboarding } from '@/components/auth/DualOnboarding';
import { Web3UpgradePrompt } from '@/components/auth/Web3UpgradePrompt';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/services/auth';
import {
  Palette,
  BookOpen,
  ShoppingCart,
  Crown,
  Star,
  ArrowRight,
  CheckCircle,
  User,
  Users,
  Code,
  BarChart2,
} from 'lucide-react';
import { CreatorStudioInterests } from "./CreatorStudioInterests";

const onboardingRoles = [
  {
    key: 'creator',
    label: 'Creator',
    icon: <Palette className="w-8 h-8 text-solar-core" />,
    description: 'Content makers, artists, musicians, streamers, educators.',
  },
  {
    key: 'developer',
    label: 'Developer',
    icon: <Code className="w-8 h-8 text-solar-radiative" />,
    description: 'Builders, integrators, and contributors to the Savvy ecosystem.',
  },
  {
    key: 'investor',
    label: 'Investor',
    icon: <BarChart2 className="w-8 h-8 text-green-500" />,
    description: 'Collectors, supporters, and data-driven Web3 explorers.',
  },
];

const onboardingSteps = [
  'Role',
  'Account',
  'Explore',
  'Finish',
];

export const OnboardingFlow = () => {
  // Add interest selection as step 0
  const [studioInterest, setStudioInterest] = useState<string | null>(null);
  const [role, setRole] = useState<null | string>(null);
  // Replace old step logic: step 0 → Studio Interest, step 1 → Role, etc.
  const [step, setStep] = useState(0);
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);
  const auth = useAuth();

  // Step 0: User selects a Creator Studio interest (first-time users)
  if (step === 0) {
    return (
      <CreatorStudioInterests
        onContinue={(interest) => {
          setStudioInterest(interest);
          setStep(1);
        }}
      />
    );
  }

  // Step 1: Role selection
  if (step === 1) {
    return (
      <section className="py-20 min-h-[75vh] flex items-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              <span className="bg-gradient-to-r from-solar-core to-solar-photosphere bg-clip-text text-transparent">
                Welcome to T00 Savvy
              </span>
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Get started in seconds. Choose your journey to personalize your onboarding.
            </p>
            <ProgressBar step={2} total={onboardingSteps.length + 1} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {onboardingRoles.map((r) => (
              <button
                key={r.key}
                onClick={() => {
                  setRole(r.key);
                  setTimeout(() => setStep(2), 200);
                }}
                className={`group border-2 rounded-xl px-6 py-8 bg-card/70 shadow-xl hover:shadow-2xl text-center transition-all duration-150 outline-none focus-visible:ring-2 ${role === r.key ? 'border-solar-core ring-2 ring-solar-core' : 'border-card/0 hover:border-solar-core/60'}`}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-3">{r.icon}</div>
                  <span className="font-bold text-lg mb-2">{r.label}</span>
                  <p className="text-muted-foreground text-sm leading-snug">{r.description}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="text-center mt-4">
            <Button
              size="lg"
              className="bg-solar-core hover:bg-solar-photosphere/80 text-white rounded-xl px-10 disabled:opacity-60"
              onClick={() => setStep(2)}
              disabled={!role}
            >
              Start Onboarding <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Step 2: Account creation/login (Dual onboarding)
  if (step === 2) {
    return (
      <section className="py-20 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-solar-core to-solar-photosphere bg-clip-text text-transparent">
                {personalizedStepTitle(role)}
              </span>
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-xl mx-auto">
              {personalizedStepSubtext(role)}
            </p>
            <ProgressBar step={3} total={onboardingSteps.length + 1} />
          </div>
          {/* Dual onboarding, show onComplete prop to advance step */}
          <DualOnboarding onComplete={() => setStep(3)} />
        </div>
      </section>
    );
  }

  // Step 3: Explore/first actions
  if (step === 3 && auth.isAuthenticated) {
    return (
      <section className="py-20 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {afterAuthWelcome(role, auth.user?.profile?.name)}
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-xl mx-auto">
              {afterAuthSubtitle(role)}
            </p>
            <ProgressBar step={4} total={onboardingSteps.length + 1} />
          </div>
          <RoleQuickActions role={role} />
          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-solar-core text-white rounded-xl px-10"
              onClick={() => setStep(4)}
            >
              Continue <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Step 4: Final screen with next steps, community/mentor CTAs, and feedback prompt
  if (step === 4) {
    return (
      <section className="py-20 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-solar-core to-solar-photosphere bg-clip-text text-transparent">
              🎉 You're in! Explore T00 Savvy
            </h2>
            <ProgressBar step={5} total={onboardingSteps.length + 1} />
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Connect with the community and unlock your Web3 journey—mentors, DAOs, and rewards await!
            </p>
            {studioInterest && (
              <div className="mt-4 font-semibold text-solar-core">
                Your Interest: <span className="capitalize">{studioInterest.replace(/[-_]/g, " ")}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center gap-4 mb-8">
            <a
              href="https://discord.gg/toosavvy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-solar-core hover:underline hover:text-solar-photosphere text-lg"
            >
              <Users className="w-5 h-5" /> Join Discord for mentorship and support
            </a>
            <a
              href="https://docs.toosavvy.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-solar-core hover:underline hover:text-solar-photosphere text-lg"
            >
              <BookOpen className="w-5 h-5" /> Read docs and quickstart guides
            </a>
          </div>
          <FeedbackPrompt />
          <div className="mt-8 text-xs text-muted-foreground text-center">
            You can update or expand your Creator Studio interests anytime in your profile.
          </div>
        </div>
      </section>
    );
  }

  // Fallback - if not authenticated on step 3, show login
  return (
    <section className="py-24 min-h-[50vh] flex items-center">
      <div className="container mx-auto px-4">
        <DualOnboarding onComplete={() => setStep(3)} />
      </div>
    </section>
  );
};

/** ProgressBar for onboarding steps */
function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = (step / total) * 100;
  return (
    <div className="w-full max-w-md mx-auto mt-6 mb-8">
      <div className="relative h-3 bg-card/80 rounded-full">
        <div
          className="absolute top-0 left-0 h-3 bg-gradient-to-r from-solar-core to-solar-photosphere rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="flex justify-between text-xs font-medium text-muted-foreground mt-1">
        {onboardingSteps.map((label, i) => (
          <span key={label} className={step === i + 1 ? 'text-solar-core' : ''}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

// Text for role-based onboarding screens
function personalizedStepTitle(role: string | null) {
  switch (role) {
    case 'creator':
      return "Creator Onboarding";
    case 'developer':
      return "Developer Onboarding";
    case 'investor':
      return "Investor Onboarding";
    default:
      return "Get Started with T00 Savvy";
  }
}
function personalizedStepSubtext(role: string | null) {
  switch (role) {
    case 'creator':
      return "Sign up and kickstart your creative journey. You’ll automatically get a custodial wallet and discover how to own and monetize your work.";
    case 'developer':
      return "Register to unlock APIs and SDKs, access quickstart guides, and join our developer Discord.";
    case 'investor':
      return "Track token analytics, explore platform metrics, and receive curated insights.";
    default:
      return "Choose your preferred way to sign up or log in.";
  }
}
function afterAuthWelcome(role: string | null, userName?: string) {
  switch (role) {
    case 'creator':
      return `Welcome, ${userName || "Creator"}! Ready to own your content?`;
    case 'developer':
      return `Welcome, ${userName || "Builder"}! Start building on Web3.`;
    case 'investor':
      return `Welcome, ${userName || "Explorer"}! Let's grow your portfolio.`;
    default:
      return `Welcome, ${userName || "User"}!`;
  }
}
function afterAuthSubtitle(role: string | null) {
  switch (role) {
    case 'creator':
      return "Try minting your first NFT, setting up your profile, or exploring the Creator Dashboard.";
    case 'developer':
      return "Check out docs, play in the sandbox, or connect with the dev community.";
    case 'investor':
      return "Dive into analytics, track NFT sales, or join governance.";
    default:
      return "Explore T00 Savvy features and tools.";
  }
}

/** Quick role-based actions */
function RoleQuickActions({ role }: { role: string | null }) {
  if (role === 'creator') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <a href="/video-studio" className="grok-card p-6 flex flex-col items-center hover-scale transition-all text-center">
          <Palette className="w-6 h-6 mb-2 text-solar-core" />
          <div className="font-bold mb-1">Create a Video NFT</div>
          <span className="text-sm text-muted-foreground">Turn your creative content into an on-chain NFT—no code needed.</span>
        </a>
        <a href="/projects-creator" className="grok-card p-6 flex flex-col items-center hover-scale transition-all text-center">
          <ShoppingCart className="w-6 h-6 mb-2 text-solar-core" />
          <div className="font-bold mb-1">Launch a Project</div>
          <span className="text-sm text-muted-foreground">Start building your community and monetize your work.</span>
        </a>
      </div>
    );
  }
  if (role === 'developer') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <a href="https://docs.toosavvy.xyz/" target="_blank" rel="noopener noreferrer" className="grok-card p-6 flex flex-col items-center hover-scale transition-all text-center">
          <Code className="w-6 h-6 mb-2 text-solar-radiative" />
          <div className="font-bold mb-1">Read Developer Docs</div>
          <span className="text-sm text-muted-foreground">Get started with our APIs, SDKs, and guides.</span>
        </a>
        <a href="https://discord.gg/toosavvy" target="_blank" rel="noopener noreferrer" className="grok-card p-6 flex flex-col items-center hover-scale transition-all text-center">
          <Users className="w-6 h-6 mb-2 text-solar-radiative" />
          <div className="font-bold mb-1">Join Dev Community</div>
          <span className="text-sm text-muted-foreground">Find hackathons, support, and contributors.</span>
        </a>
      </div>
    );
  }
  if (role === 'investor') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <a href="/creator-dashboard" className="grok-card p-6 flex flex-col items-center hover-scale transition-all text-center">
          <BarChart2 className="w-6 h-6 mb-2 text-green-500" />
          <div className="font-bold mb-1">View Analytics</div>
          <span className="text-sm text-muted-foreground">Track NFT minting, token stats, and creator growth.</span>
        </a>
        <a href="https://docs.toosavvy.xyz/tokenomics" target="_blank" rel="noopener noreferrer" className="grok-card p-6 flex flex-col items-center hover-scale transition-all text-center">
          <BookOpen className="w-6 h-6 mb-2 text-green-500" />
          <div className="font-bold mb-1">Learn about $Neurax</div>
          <span className="text-sm text-muted-foreground">Discover platform economics and opportunities.</span>
        </a>
      </div>
    );
  }
  return null;
}

function FeedbackPrompt() {
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');
  if (submitted) {
    return <div className="text-center text-green-600 font-semibold mt-4">Thank you for your feedback! 🚀</div>;
  }
  return (
    <form
      className="bg-card/80 border border-solar-core/20 rounded-lg p-4 text-center max-w-lg mx-auto"
      onSubmit={e => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="block font-medium mb-2 text-solar-core">
        How was your onboarding experience?
      </label>
      <textarea
        className="grok-input w-full min-h-16 mb-3"
        placeholder="Share your thoughts or suggestions (optional)..."
        value={feedback}
        onChange={e => setFeedback(e.target.value)}
      />
      <Button className="bg-solar-core text-white px-8" type="submit">Send Feedback</Button>
    </form>
  );
}
