/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/**/*.md',
    './docs/.vitepress/**/*.{js,ts,vue}',
  ],
  // Preflight tắt để không reset style mặc định của VitePress
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      // Breakpoint riêng của VitePress (sidebar xuất hiện từ 960px)
      screens: {
        desk: '960px',
      },
      colors: {
        // `base` giữ lại để tương thích class trong file .md; code mới dùng `ink`
        base: '#3E3E3E',
        ink: '#3E3E3E',
        primary: {
          DEFAULT: '#e60012',
          dark: '#c4000f',
          deep: '#a3000d',
          light: '#fff5f5',
        },
        black: '#000000',
        white: '#ffffff',
        gray: {
          DEFAULT: '#cccccc',
          light: '#f7f7f7',
          subtle: '#fafafa',
          bg: '#f2f2f2',
          border: '#e0e0e0',
        },
        muted: '#666666',
        subtle: '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'Monaco', 'monospace'],
      },
      spacing: {
        nav: '64px',
        sidebar: '280px',
      },
    },
  },
  plugins: [],
}
