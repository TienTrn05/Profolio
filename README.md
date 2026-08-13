# Tiến Portfolio

Portfolio được xây dựng bằng React 19 và Vite. Menu, theme, project tabs, learning slider, dialog và clipboard đều sử dụng state/event của React.

## Lệnh phát triển

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Kiến trúc

```text
src/
├── components/
│   ├── layout/
│   ├── learning/
│   ├── overlays/
│   ├── projects/
│   ├── sections/
│   └── ui/
├── hooks/              # Hiệu ứng dùng IntersectionObserver và cleanup
├── styles/             # CSS theo layout, component và section
│   └── index.css
├── App.jsx
└── main.jsx
```

Icon được import từ `lucide-react`; dự án không phụ thuộc CDN hoặc script DOM truyền thống.
