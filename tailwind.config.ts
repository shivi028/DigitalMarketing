/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./src/**/*.{js,ts,jsx,tsx,mdx}", 
	],
	theme: {
	  extend: {
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  orange: {
			500: '#ff7a59', // Adjusted to match the reference image
		  },
		  // ✅ Fixed: Use valid color keys
		  purpleCustom: "#7e3bff",
		  yellowCustom: "#c1ff00",
		  creamCustom: "#fdf8f2",
		  peachCustom: "#ffecd9",
		},
		fontFamily: {
		  sans: ["var(--font-inter)"],
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		animation: {
			"fade-in": "fadeIn 0.5s ease-out forwards",
			"slide-up": "slideUp 0.5s ease-out forwards",
			"accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
		  },
		  keyframes: {
			fadeIn: {
			  "0%": { opacity: 0 },
			  "100%": { opacity: 1 },
			},
			slideUp: {
			  "0%": { opacity: 0, transform: "translateY(20px)" },
			  "100%": { opacity: 1, transform: "translateY(0)" },
			},
			"accordion-down": {
				from: { height: 0 },
				to: { height: "var(--radix-accordion-content-height)" },
			  },
			  "accordion-up": {
				from: { height: "var(--radix-accordion-content-height)" },
				to: { height: 0 },
			  },
		},
	  },
	},
	plugins: [  addVariablesForColors, require("tailwindcss-animate")],
  }

  function addVariablesForColors({ addBase, theme }: any) {
	const allColors = theme("colors") as Record<string, string | Record<string, string>>;

	// Flatten nested color values
	const newVars = Object.fromEntries(
		Object.entries(allColors).flatMap(([key, val]) =>
			typeof val === "string"
				? [[`--${key}`, val]] // Direct color values
				: Object.entries(val).map(([shade, shadeVal]) => [`--${key}-${shade}`, shadeVal]) // Nested shades
		)
	);

	addBase({
		":root": newVars,
	});
}
