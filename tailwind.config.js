/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
			backgroundImage: {
				'custom-linear-gradient': 'linear-gradient(to bottom right, #efebce, #d6ce93)',
			},
			animation: {
				float1: 'float1 20s ease-in-out infinite',
				float2: 'float2 25s ease-in-out infinite',
				float3: 'float3 30s ease-in-out infinite',
				float4: 'float4 35s ease-in-out infinite',
			},
			keyframes: {
				float1: {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'50%': { transform: 'translate(50px, 50px)' },
				},
				float2: {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'50%': { transform: 'translate(-50px, 25px)' },
				},
				float3: {
					'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
					'50%': { transform: 'translate(25px, -50px) rotate(180deg)' },
				},
				float4: {
					'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
					'50%': { transform: 'translate(-25px, 50px) rotate(-180deg)' },
				},
			},

				borderRadius: {
					lg: 'var(--radius)',
					md: 'calc(var(--radius) - 2px)',
					sm: 'calc(var(--radius) - 4px)'
				},
				
				colors: {
					background: 'hsl(var(--background))',
					foreground: 'hsl(var(--foreground))',
					card: {
						DEFAULT: 'hsl(var(--card))',
						foreground: 'hsl(var(--card-foreground))'
					},
					popover: {
						DEFAULT: 'hsl(var(--popover))',
						foreground: 'hsl(var(--popover-foreground))'
					},
					primary: {
						DEFAULT: 'hsl(var(--primary))',
						foreground: 'hsl(var(--primary-foreground))'
					},
					secondary: {
						DEFAULT: 'hsl(var(--secondary))',
						foreground: 'hsl(var(--secondary-foreground))'
					},
					muted: {
						DEFAULT: 'hsl(var(--muted))',
						foreground: 'hsl(var(--muted-foreground))'
					},
					accent: {
						DEFAULT: 'hsl(var(--accent))',
						foreground: 'hsl(var(--accent-foreground))'
					},
					destructive: {
						DEFAULT: 'hsl(var(--destructive))',
						foreground: 'hsl(var(--destructive-foreground))'
					},
					border: 'hsl(var(--border))',
					input: 'hsl(var(--input))',
					ring: 'hsl(var(--ring))',
					chart: {
						'1': 'hsl(var(--chart-1))',
						'2': 'hsl(var(--chart-2))',
						'3': 'hsl(var(--chart-3))',
						'4': 'hsl(var(--chart-4))',
						'5': 'hsl(var(--chart-5))'
					}
				}
			}
		},
		plugins: [require("tailwindcss-animate")],
	}

