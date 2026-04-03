/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}','./components/**/*.{ts,tsx,js,jsx}'],
  safelist: [
    'from-blue-900','to-blue-950','bg-blue-900','bg-blue-950','bg-blue-800',
    'bg-emerald-500','bg-emerald-600','hover:bg-emerald-600',
    'text-emerald-400','text-emerald-300','text-blue-200','text-blue-300',
    'border-blue-400','ring-blue-200',
    'animate-bounce','animate-spin',
    'rotate-180',
  ],
  theme: { extend: {} },
  plugins: [],
}
