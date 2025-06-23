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
				'lotus': ['Lotus Flower', 'cursive'],
				'orbitron': ['Orbitron', 'monospace', 'sans-serif'],
				'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				'poppins': ['Poppins', 'Inter', 'sans-serif'],
				'source-sans': ['Source Sans Pro', 'sans-serif'],
				'michroma': ['Michroma', 'sans-serif'],
				'sphere-fez': ['SPHERE FEZ', 'Arial', 'sans-serif'],
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                slideRight: {
                    '0%': { transform: 'translateX(-20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' }
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
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fadeIn': 'fadeIn 1s ease-in forwards',
                'slideUp': 'slideUp 0.5s ease-out forwards',
                'slideRight': 'slideRight 0.5s ease-out forwards',
                'gentle-pulse': 'gentle-pulse 4s ease-in-out infinite',
                'professional-glow': 'professional-glow 4s ease-in-out infinite',
                'cosmic-pulse': 'cosmic-pulse 6s ease-in-out infinite',
                'cosmic-glow': 'cosmic-glow 4s ease-in-out infinite',
                'progress-fill': 'progress-fill 2s ease-out forwards',
                'hero-glow': 'hero-glow 3s ease-in-out infinite',
                'typewriter': 'typewriter 2s steps(20) forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
