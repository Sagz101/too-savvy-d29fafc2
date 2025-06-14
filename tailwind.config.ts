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
				'source-sans': ['Source Sans Pro', 'sans-serif'],
				'michroma': ['Michroma', 'sans-serif'],
				'porscha': ['Saira Stencil One', 'sans-serif'],
			},
			colors: {
				neura: {
					dark: '#0F1629',        // Deeper dark blue
					purple: '#A78BFA',      // Softer purple
					'light-purple': '#C4B5FD',
					cyan: '#67E8F9',        // Softer cyan
					magenta: '#F472B6',     // Softer magenta
					teal: '#5EEAD4',        // Softer teal color
				},
				// Enhanced solar color palette inspired by the reference image
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
				// Enhanced softer primary color scheme with solar integration
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
                'soft-glow': {
                    '0%': { boxShadow: '0 0 5px rgba(255, 107, 53, 0.3)' },
                    '50%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)' },
                    '100%': { boxShadow: '0 0 5px rgba(255, 107, 53, 0.3)' }
                },
                'solar-pulse': {
                    '0%, 100%': { 
                        opacity: '0.8', 
                        transform: 'scale(1)',
                        boxShadow: '0 0 20px rgba(255, 107, 53, 0.4)'
                    },
                    '50%': { 
                        opacity: '1', 
                        transform: 'scale(1.05)',
                        boxShadow: '0 0 40px rgba(255, 107, 53, 0.6)'
                    }
                },
                'cosmic-pulse': {
                    '0%, 100%': { 
                        opacity: '0.6', 
                        transform: 'scale(1) rotate(0deg)',
                    },
                    '50%': { 
                        opacity: '0.9', 
                        transform: 'scale(1.1) rotate(180deg)',
                    }
                },
                'progress-fill': {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fadeIn': 'fadeIn 1s ease-in forwards',
                'slideUp': 'slideUp 0.5s ease-out forwards',
                'slideRight': 'slideRight 0.5s ease-out forwards',
                'gentle-pulse': 'gentle-pulse 4s ease-in-out infinite',
                'soft-glow': 'soft-glow 3s ease-in-out infinite',
                'solar-pulse': 'solar-pulse 6s ease-in-out infinite',
                'cosmic-pulse': 'cosmic-pulse 8s ease-in-out infinite',
                'progress-fill': 'progress-fill 2s ease-out forwards',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
