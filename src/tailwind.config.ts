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
				'helvetica': ['Helvetica Neue', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				'source-sans': ['Source Sans Pro', 'sans-serif'],
				'michroma': ['Michroma', 'sans-serif'],
				'porscha': ['Porscha', 'sans-serif'],
			},
			colors: {
				// xAI-inspired black theme with neon Web3 accents
				black: '#000000',
				'near-black': '#1A1A1A',
				'neon-green': '#00FFAA',
				'neon-pink': '#FF007A',
				'neon-blue': '#00BFFF',
				'light-gray': '#E0E0E0',
				'mid-gray': '#A0A0A0',
				'dark-gray': '#333333',
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
				},
				// Web3 Semantic Colors
				'web3-cyan': 'hsl(var(--web3-cyan))',
				'web3-purple': 'hsl(var(--web3-purple))',
				'web3-green': 'hsl(var(--web3-green))',
				'web3-navy': 'hsl(var(--web3-navy))',
				'cosmic-deep': 'hsl(var(--cosmic-deep))',
				'cosmic-dark': 'hsl(var(--cosmic-dark))',
				'cosmic-blue': 'hsl(var(--cosmic-blue))',
				'cosmic-purple': 'hsl(var(--cosmic-purple))',
				'cosmic-purple-light': 'hsl(var(--cosmic-purple-light))',
				'cosmic-purple-soft': 'hsl(var(--cosmic-purple-soft))'
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
                    '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)' },
                    '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)' }
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
                        filter: 'brightness(1.1)'
                    }
                },
                'progress-fill': {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' }
                },
                'hero-glow': {
                    '0%, 100%': { 
                        textShadow: '0 0 10px rgba(59, 130, 246, 0.3)' 
                    },
                    '50%': { 
                        textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 30px rgba(168, 85, 247, 0.3)' 
                    }
                },
                'typewriter': {
                    'from': { width: '0' },
                    'to': { width: '100%' }
                },
				// xAI-inspired neon animations
				'neon-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(0, 255, 170, 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(0, 255, 170, 0.6), 0 0 60px rgba(0, 255, 170, 0.4)',
						transform: 'scale(1.02)'
					}
				},
				'neon-pulse-pink': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 0, 122, 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 0, 122, 0.6), 0 0 60px rgba(255, 0, 122, 0.4)',
						transform: 'scale(1.02)'
					}
				},
				'hero-text-glow': {
					'0%, 100%': { textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' },
					'50%': { textShadow: '0 0 40px rgba(255, 255, 255, 0.5), 0 0 60px rgba(0, 255, 170, 0.3)' }
				},
				'floating-particles': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)',
						opacity: '0.6' 
					},
					'50%': { 
						transform: 'translateY(-20px) rotate(180deg)',
						opacity: '1' 
					}
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
                'progress-fill': 'progress-fill 2s ease-out forwards',
                'hero-glow': 'hero-glow 3s ease-in-out infinite',
                'typewriter': 'typewriter 2s steps(20) forwards',
				// xAI-inspired neon animations
				'neon-pulse': 'neon-pulse 4s ease-in-out infinite',
				'neon-pulse-pink': 'neon-pulse-pink 4s ease-in-out infinite',
				'hero-text-glow': 'hero-text-glow 6s ease-in-out infinite',
				'floating-particles': 'floating-particles 8s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
