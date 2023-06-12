/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: "0.05em",
        widest: ".1em",
      },
      colors: {
        "gray-800": "#1F2937",
        "gray-900": "#111827",
        "gray-500": "#6B7280",
        "gray-400": "#9CA3AF",
        "gray-600": "#4B5563",
        "indigo-600": "#4F46E5",
        "indigo-500": "#6366F1",

        "border-100": "#D1D5DB",
        "gray-100": "#F3F4F6",
        "gray-50": "#F9FAFB",
        "gray-300": "#FFFFFF",
        "gray-200": "#E5E7EB",
        "blue-500": "#3B82F6",
        "grey-whisper": "#FAFAFA",
        "grey-border": "#ECEBEB",
        "backgoundColor-1": "#FEF2F2",
        "backgoundColor-2": "#F0FDFA",
        "backgoundColor-green": "#0F766E",
        "backgoundColor-blue": "#0464FC",
        "authBackgoundColor": "#1d2228",
        
      },
      boxShadow: {
        "3xl": "0px 1px 2px rgba(0, 0, 0, 0.05)",
        "authShadow": "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
      },
      backgroundImage: {
        "bg-chatColor": "linear-gradient(360deg, rgba(67, 56, 202, 0.2) 0%, rgba(67, 56, 202, 0) 100%), #FFFFFF;"
      }
    },
  },
  plugins: [],
};
