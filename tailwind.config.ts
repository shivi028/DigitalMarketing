module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
  	extend: {
		animation: {
			"fade-in": "fade-in 0.5s ease-out forwards",
			"fade-out": "fade-out 0.5s ease-in forwards",
		  },
		keyframes: {
			"fade-in": {
			  "0%": {
				opacity: "0",
				transform: "translateX(100%)",
			  },
			  "100%": {
				opacity: "1",
				transform: "translateX(0)",
			  },
			},
			"fade-out": {
			  "0%": {
				opacity: "1",
				transform: "translateX(0)",
			  },
			  "100%": {
				opacity: "0",
				transform: "translateX(-100%)",
			  },
			},
		  },
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			color: {
				bluePrimary: '#16458E',
			},
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
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
			lora: ['var(--font-lora)', 'serif'],
  		}
  	}
  },
//   plugins: [require("tailwindcss-animate")],
}

