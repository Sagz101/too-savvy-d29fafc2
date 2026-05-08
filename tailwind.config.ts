import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
		fontFamily: {
			'fraunces': ['Fraunces', 'Georgia', 'serif'],
			'dm-sans': ['DM Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
			'syne': ['Syne', 'sans-serif'],
			'space-mono': ['Space Mono', 'monospace'],
			'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
		},
			colors: {
				// Cosmic-inspired color palette from reference images
				cosmic: {
					'deep': '#0C0C14',        // Deep space background
					'dark': '#141423',       // Dark cosmic navy
					'purple': '#9333EA',     // Rich cosmic purple
					'purple-light': '#A855F7', // Bright purple accent
					'purple-soft': '#C084FC', // Soft purple highlight
					'blue': '#3B82F6',       // Cosmic blue
					'blue-light': '#6366F1', // Light cosmic blue
					'indigo': '#6366F1',     // Cosmic indigo
					'violet': '#8B5CF6',     // Cosmic violet
					'pink': '#EC4899',       // Cosmic pink accent
					'border': '#2D2D46',     // Cosmic border
					'glow': 'rgba(147, 51, 234, 0.3)', // Purple glow
					'beam': 'rgba(59, 130, 246, 0.2)', // Blue beam
				},
				// Enhanced solar color palette
				solar: {
					'core': '#FF4500',        // Deep orange-red core
					'radiative': '#FF6B35',   // Bright orange
					'convection': '#FF8C42',  // Orange-amber
					'photosphere': '#FFB347', // Golden orange
					'chromosphere': '#FF7F50', // Coral orange
					'corona': '#FFA500',      // Pure orange
					'subsurface': '#FF2D00',  // Intense red-orange
					'plasma': '#FF1C00',      // Deep red
					'flare': '#FFFF00',       // Bright yellow
					'prominence': '#FF0000',  // Pure red
				},
				// Sequence.xyz-inspired color palette
				sequence: {
					'dark': '#121212',        // Deep background
					'card': '#1E1E2F',       // Card backgrounds
					'purple': '#8B5CF6',     // Primary purple
					'blue': '#3B82F6',       // Secondary blue
					'emerald': '#10B981',    // Accent emerald
					'pink': '#EC4899',       // Accent pink
					'gray': {
						'50': '#F9FAFB',
						'100': '#F3F4F6',
						'200': '#E5E7EB',
						'300': '#D1D5DB',
						'400': '#9CA3AF',
						'500': '#6B7280',
						'600': '#4B5563',
						'700': '#374151',
						'800': '#1F2937',
						'900': '#111827',
					}
				},
				// Enhanced softer primary color scheme
				dzuwa: {
					'light-blue': '#F0F9FF',  // Even lighter blue background
					'bright-blue': '#38BDF8', // Softer bright blue
					'dark-blue': '#1E293B',   // Slightly lighter dark blue
					'teal': '#5EEAD4',        // Soft teal accent
					'cyan': '#67E8F9',        // Soft cyan accent
					'white': '#FFFFFF',       // Pure white
					'gold': '#FFD700',        // Solar gold
					'gold-warm': '#FFA500',   // Warm solar gold
					'purple': '#A78BFA',      // Soft purple accent
					'magenta': '#F472B6',     // Soft magenta accent
					'soft-gray': '#F8FAFC',   // Very soft gray
					'gentle-blue': '#E0F2FE', // Gentle blue
					'pastel-cyan': '#CFFAFE', // Pastel cyan
					'warm-white': '#FEFEFE',  // Warm white
					'solar-orange': '#FF6B35', // Solar orange
					'solar-red': '#FF2D00',   // Solar red
					'solar-yellow': '#FFFF00', // Solar yellow
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
			},
			// Renegade editorial palette
			renegade: {
				'bg': '#FAFAF7',
				'card': '#FFFFFF',
				'text': '#111110',
				'muted': '#6B6B68',
				'accent': '#E8650A',
				'hover': '#FEF3EB',
				'alt': '#F4F4F0',
			'ticker': '#F07820',
		},
		},
		borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem',
				'4xl': '2rem',
			},
			boxShadow: {
				'glow-sm': '0 0 10px hsl(var(--primary) / 0.2)',
				'glow': '0 0 20px hsl(var(--primary) / 0.3)',
				'glow-lg': '0 0 40px hsl(var(--primary) / 0.4)',
				'glow-primary': '0 0 30px hsl(var(--primary) / 0.5), 0 0 60px hsl(var(--primary) / 0.2)',
				'glow-accent': '0 0 30px hsl(var(--accent) / 0.5), 0 0 60px hsl(var(--accent) / 0.2)',
				'inner-glow': 'inset 0 0 20px hsl(var(--primary) / 0.1)',
				'elevated': '0 10px 40px -10px hsl(var(--primary) / 0.15), 0 4px 16px -4px hsl(0 0% 0% / 0.1)',
				'elevated-lg': '0 25px 60px -15px hsl(var(--primary) / 0.2), 0 10px 30px -10px hsl(0 0% 0% / 0.15)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-mesh': `
					radial-gradient(at 40% 20%, hsl(var(--primary) / 0.15) 0px, transparent 50%),
					radial-gradient(at 80% 0%, hsl(var(--accent) / 0.12) 0px, transparent 50%),
					radial-gradient(at 0% 50%, hsl(var(--secondary) / 0.1) 0px, transparent 50%)
				`,
				'shimmer': 'linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.1) 50%, transparent 100%)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				fadeInDown: {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				slideRight: {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				slideLeft: {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				scaleIn: {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'gentle-pulse': {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.9', transform: 'scale(1.02)' }
				},
				'professional-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(147, 51, 234, 0.2)' },
					'50%': { boxShadow: '0 0 40px rgba(147, 51, 234, 0.3)' }
				},
				'cosmic-pulse': {
					'0%, 100%': { 
						opacity: '0.8', 
						transform: 'scale(1)',
						filter: 'brightness(1)'
					},
					'50%': { 
						opacity: '1', 
						transform: 'scale(1.05)',
						filter: 'brightness(1.2)'
					}
				},
				'cosmic-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 30px rgba(147, 51, 234, 0.3), 0 0 60px rgba(59, 130, 246, 0.2)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 60px rgba(147, 51, 234, 0.6), 0 0 120px rgba(59, 130, 246, 0.4), 0 0 180px rgba(168, 85, 247, 0.2)',
						transform: 'scale(1.02)'
					}
				},
				'progress-fill': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'hero-glow': {
					'0%, 100%': { 
						textShadow: '0 0 15px rgba(147, 51, 234, 0.4), 0 0 30px rgba(168, 85, 247, 0.3)' 
					},
					'50%': { 
						textShadow: '0 0 30px rgba(147, 51, 234, 0.7), 0 0 60px rgba(168, 85, 247, 0.5), 0 0 90px rgba(196, 132, 252, 0.3)' 
					}
				},
				'typewriter': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'wobbly-scale': {
					'0%': { 
						transform: 'scale(1) rotate(0deg)',
						borderRadius: '12px'
					},
					'25%': { 
						transform: 'scale(1.02) rotate(0.5deg)',
						borderRadius: '18px 12px 16px 14px'
					},
					'50%': { 
						transform: 'scale(1.05) rotate(0deg)',
						borderRadius: '14px 20px 12px 18px'
					},
					'75%': { 
						transform: 'scale(1.02) rotate(-0.5deg)',
						borderRadius: '16px 14px 20px 12px'
					},
					'100%': { 
						transform: 'scale(1) rotate(0deg)',
						borderRadius: '12px'
					}
				},
				'organic-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(147, 51, 234, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(147, 51, 234, 0.6), 0 0 80px rgba(59, 130, 246, 0.4), 0 0 120px rgba(168, 85, 247, 0.2)'
					}
				},
				'bubble-expand': {
					'0%': { transform: 'scale(0)', opacity: '0' },
					'50%': { transform: 'scale(1.2)', opacity: '0.8' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'playful-bounce': {
					'0%, 100%': { transform: 'translateY(0px) scale(1)' },
					'25%': { transform: 'translateY(-2px) scale(1.02)' },
					'50%': { transform: 'translateY(-4px) scale(1.05)' },
					'75%': { transform: 'translateY(-2px) scale(1.02)' }
				},
				'border-beam': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'spotlight': {
					'0%': { opacity: '0', transform: 'translate(-50%, -50%) scale(0.5)' },
					'100%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fadeIn': 'fadeIn 0.5s ease-out forwards',
				'fadeInUp': 'fadeInUp 0.5s ease-out forwards',
				'fadeInDown': 'fadeInDown 0.5s ease-out forwards',
				'slideUp': 'slideUp 0.5s ease-out forwards',
				'slideRight': 'slideRight 0.5s ease-out forwards',
				'slideLeft': 'slideLeft 0.5s ease-out forwards',
				'scaleIn': 'scaleIn 0.3s ease-out forwards',
				'gentle-pulse': 'gentle-pulse 4s ease-in-out infinite',
				'professional-glow': 'professional-glow 4s ease-in-out infinite',
				'cosmic-pulse': 'cosmic-pulse 6s ease-in-out infinite',
				'cosmic-glow': 'cosmic-glow 4s ease-in-out infinite',
				'progress-fill': 'progress-fill 2s ease-out forwards',
				'hero-glow': 'hero-glow 3s ease-in-out infinite',
				'typewriter': 'typewriter 2s steps(20) forwards',
				'float': 'float 6s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite linear',
				'wobbly-scale': 'wobbly-scale 0.6s ease-in-out',
				'organic-glow': 'organic-glow 2s ease-in-out infinite',
				'bubble-expand': 'bubble-expand 0.4s ease-out',
				'playful-bounce': 'playful-bounce 0.4s ease-out',
				'border-beam': 'border-beam 3s linear infinite',
				'spotlight': 'spotlight 0.3s ease-out',
			},
			transitionTimingFunction: {
				'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
