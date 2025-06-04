
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
			colors: {
				neura: {
					dark: '#0F1629',        // Deeper dark blue
					purple: '#8B5CF6',      // Enhanced purple
					'light-purple': '#A78BFA',
					cyan: '#06B6D4',        // Enhanced cyan
					magenta: '#EC4899',     // Enhanced magenta
					teal: '#0D9488',        // New teal color
				},
				// Enhanced color palette with inspired scheme
				solar: {
					'core': '#FFE135',        // Bright yellow core
					'radiative': '#FF8C00',   // Deep orange
					'convection': '#FF4500',  // Red-orange
					'photosphere': '#FFA500', // Orange
					'chromosphere': '#DC143C', // Crimson red
					'corona': '#FF6B35',      // Coral orange
					'subsurface': '#06B6D4',  // Enhanced cyan blue
					'plasma': '#EC4899',      // Enhanced pink
				},
				// Enhanced primary color scheme
				dzuwa: {
					'light-blue': '#E0F2FE',  // Lighter blue background
					'bright-blue': '#0EA5E9', // Enhanced bright blue
					'dark-blue': '#0F172A',   // Deep dark blue
					'teal': '#0D9488',        // Teal accent
					'cyan': '#06B6D4',        // Cyan accent
					'white': '#FFFFFF',       // Pure white
					'gold': '#FFE135',        // Gold sun color
					'gold-warm': '#FF8C00',   // Warm gold
					'purple': '#8B5CF6',      // Purple accent
					'magenta': '#EC4899',     // Magenta accent
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
                'solar-pulse': {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.05)' }
                },
                'solar-flare': {
                    '0%': { background: 'linear-gradient(45deg, #FFE135, #FF8C00)' },
                    '50%': { background: 'linear-gradient(45deg, #FF4500, #DC143C)' },
                    '100%': { background: 'linear-gradient(45deg, #FFE135, #FF8C00)' }
                },
                'cosmic-pulse': {
                    '0%, 100%': { opacity: '0.6', transform: 'scale(1) rotate(0deg)' },
                    '50%': { opacity: '0.9', transform: 'scale(1.1) rotate(180deg)' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fadeIn': 'fadeIn 1s ease-in forwards',
                'slideUp': 'slideUp 0.5s ease-out forwards',
                'slideRight': 'slideRight 0.5s ease-out forwards',
                'solar-pulse': 'solar-pulse 3s ease-in-out infinite',
                'solar-flare': 'solar-flare 4s ease-in-out infinite',
                'cosmic-pulse': 'cosmic-pulse 6s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
