// Simple line illustrations used as product placeholders. Real product
// imagery comes from the Amazon Creators API in the full build.
const PATHS = {
  pot: <><path d="M10 20h28v14a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z" /><path d="M6 20h36M18 20v-4a6 6 0 0 1 12 0v4" /></>,
  pan: <><circle cx="20" cy="26" r="12" /><circle cx="20" cy="26" r="7" /><path d="M31 22l12-8" /></>,
  fryer: <><rect x="11" y="8" width="26" height="32" rx="6" /><path d="M11 22h26M20 30h8" /><circle cx="24" cy="15" r="2" /></>,
  knife: <><path d="M8 34L36 8c3 5 2 10-4 16L18 36z" /><path d="M18 36l-6 6-4-4 6-6" /></>,
  kettle: <><path d="M12 38h22l-2-20H14z" /><path d="M14 18a9 9 0 0 1 18 0M34 22c5 0 6 8 1 10" /><path d="M20 10h6" /></>,
  board: <><rect x="8" y="14" width="30" height="24" rx="4" /><circle cx="40" cy="20" r="3" /><path d="M13 19h20" /></>,
  box: <><rect x="8" y="18" width="32" height="20" rx="3" /><path d="M6 12h36v6H6z" /></>,
  blender: <><path d="M14 8h20l-3 22H17z" /><rect x="14" y="30" width="20" height="10" rx="2" /><path d="M24 34v2" /></>,
  scale: <><rect x="8" y="16" width="32" height="22" rx="4" /><rect x="16" y="22" width="16" height="6" rx="1" /><path d="M6 12h36" /></>,
  spoon: <><ellipse cx="18" cy="14" rx="6" ry="8" /><path d="M18 22v20M32 6v36M28 6v10a4 4 0 0 0 8 0V6" /></>,
  fountain: <><path d="M10 30h28l-3 10H13z" /><path d="M24 30V14M24 14c-6 0-8 6-8 10M24 14c6 0 8 6 8 10" /></>,
  harness: <><path d="M10 16c6 4 22 4 28 0M8 26c8 6 24 6 32 0" /><rect x="20" y="18" width="8" height="12" rx="2" /><circle cx="24" cy="36" r="3" /></>,
  bag: <><path d="M12 14h24l2 26H10z" /><path d="M18 14v-4h12v4M18 24h12" /></>,
  bowl: <><path d="M6 24h36c0 9-8 14-18 14S6 33 6 24z" /><circle cx="18" cy="28" r="2" /><circle cx="30" cy="28" r="2" /></>,
  brush: <><rect x="10" y="10" width="28" height="12" rx="4" /><path d="M14 22v4M20 22v4M26 22v4M32 22v4M24 10V6M22 26l-2 16h8l-2-16" /></>,
  bone: <><path d="M14 20a4 4 0 1 1 4-6l12 12a4 4 0 1 1 6 4 4 4 0 1 1-6 4L18 22a4 4 0 1 1-4-2z" /></>,
  tree: <><rect x="8" y="36" width="32" height="4" rx="1" /><path d="M16 36V14M32 36V22" /><rect x="10" y="8" width="14" height="6" rx="2" /><rect x="26" y="18" width="12" height="4" rx="2" /></>,
  camera: <><rect x="10" y="10" width="28" height="26" rx="8" /><circle cx="24" cy="23" r="7" /><path d="M18 40h12" /></>,
  pad: <><rect x="8" y="10" width="32" height="28" rx="3" /><rect x="14" y="16" width="20" height="16" rx="2" /></>,
  bed: <><path d="M6 34V20a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v14z" /><path d="M12 26h24M6 34v4M42 34v4" /></>,
  beans: <><ellipse cx="17" cy="22" rx="7" ry="10" transform="rotate(-25 17 22)" /><ellipse cx="31" cy="28" rx="7" ry="10" transform="rotate(20 31 28)" /><path d="M14 14c4 4 2 12 6 16M28 20c4 4 0 12 4 16" /></>,
  pod: <><path d="M12 14h24l-4 22H16z" /><path d="M10 14h28M20 22h8" /></>,
  leaf: <><path d="M10 38C10 18 22 8 40 8c0 18-10 30-30 30z" /><path d="M10 38L30 18" /></>,
  jar: <><rect x="12" y="14" width="24" height="26" rx="4" /><rect x="14" y="8" width="20" height="6" rx="2" /><path d="M16 26h16" /></>,
  bottle: <><path d="M19 6h10v8l4 6v20H15V20l4-6z" /><path d="M15 26h18" /></>,
  cup: <><path d="M10 18h24v10a10 10 0 0 1-10 10h-4a10 10 0 0 1-10-10z" /><path d="M34 21h3a4 4 0 0 1 0 8h-3M16 8c0 3 2 3 2 6M24 8c0 3 2 3 2 6" /></>,
  paw: <><ellipse cx="24" cy="31" rx="9" ry="7" /><circle cx="14" cy="20" r="3.5" /><circle cx="20" cy="13" r="3.5" /><circle cx="28" cy="13" r="3.5" /><circle cx="34" cy="20" r="3.5" /></>,
  lamp: <><path d="M16 8h16l6 16H10z" /><path d="M24 24v12M16 40h16" /></>,
  pillow: <><path d="M8 16c0-4 4-6 16-6s16 2 16 6v16c0 4-4 6-16 6S8 36 8 32z" /><path d="M14 18c4 2 16 2 20 0" /></>,
  blanket: <><rect x="6" y="12" width="36" height="24" rx="3" /><path d="M6 20h36M14 12v24" /></>,
  vacuum: <><circle cx="24" cy="26" r="14" /><circle cx="24" cy="26" r="5" /><path d="M14 16l4 4" /></>,
  towel: <><path d="M12 8h24v30l-4-3-4 3-4-3-4 3-4-3-4 3z" /><path d="M12 16h24" /></>,
  hanger: <><path d="M24 14a4 4 0 1 1 4-4" /><path d="M24 14v4L6 32h36L24 18" /></>,
  mop: <><path d="M26 6L18 30" /><path d="M10 30h16l4 10H6z" /><path d="M12 34v4M18 34v4M24 34v4" /></>,
  candle: <><rect x="14" y="20" width="20" height="20" rx="3" /><path d="M24 20v-4" /><path d="M24 8c-2 3-2 5 0 6 2-1 2-3 0-6z" /></>,
  fan: <><rect x="18" y="6" width="12" height="30" rx="6" /><path d="M21 12h6M21 18h6M21 24h6M14 42h20M24 36v6" /></>,
  tube: <><path d="M16 12h16l-2 28H18z" /><rect x="19" y="6" width="10" height="6" rx="1" /><path d="M18 22h12" /></>,
  dropper: <><rect x="14" y="20" width="20" height="20" rx="4" /><path d="M20 20v-6h8v6M22 14V8a2 2 0 0 1 4 0v6" /></>,
  dryer: <><circle cx="20" cy="18" r="10" /><path d="M30 14h10v8H30M18 28l-2 14h8l-2-14" /></>,
  toothbrush: <><rect x="20" y="16" width="8" height="26" rx="4" /><path d="M22 16V8h4v8" /><path d="M22 10h4" /></>,
  razor: <><rect x="12" y="6" width="24" height="10" rx="4" /><path d="M20 16l-2 26h12l-2-26" /></>,
  dumbbell: <><rect x="6" y="16" width="6" height="16" rx="2" /><rect x="36" y="16" width="6" height="16" rx="2" /><rect x="12" y="19" width="4" height="10" rx="1" /><rect x="32" y="19" width="4" height="10" rx="1" /><path d="M16 24h16" /></>,
  mat: <><path d="M8 16h26a6 6 0 0 1 0 12H8z" /><circle cx="34" cy="22" r="3" /><path d="M8 28v8h26" /></>,
  band: <><path d="M10 12c0 18 28 18 28 0" /><rect x="6" y="6" width="8" height="8" rx="2" /><rect x="34" y="6" width="8" height="8" rx="2" /></>,
  roller: <><rect x="6" y="16" width="36" height="16" rx="8" /><path d="M14 16v16M22 16v16M30 16v16" /></>,
  watch: <><rect x="14" y="14" width="20" height="20" rx="5" /><path d="M18 14l2-8h8l2 8M18 34l2 8h8l2-8M24 20v5l3 2" /></>,
  rope: <><rect x="6" y="30" width="6" height="12" rx="2" /><rect x="36" y="30" width="6" height="12" rx="2" /><path d="M9 30C9 4 39 4 39 30" /></>,
  sock: <><path d="M18 6h12v18l6 8a5 5 0 0 1-4 8H22a6 6 0 0 1-6-6z" /><path d="M18 12h12" /></>,
  lantern: <><rect x="14" y="14" width="20" height="24" rx="4" /><path d="M18 14v-4h12v4M20 8a4 4 0 0 1 8 0M20 22h8v8h-8z" /></>,
  backpack: <><path d="M12 18a12 12 0 0 1 24 0v22H12z" /><path d="M18 10V6h12v4M16 28h16v8H16z" /></>,
  bar: <><path d="M6 14h36" /><path d="M10 10v8M38 10v8M18 14v6a6 6 0 0 0 12 0v-6" /></>,
  ball: <><circle cx="24" cy="24" r="16" /><path d="M8 24h32M24 8c-6 5-6 27 0 32M24 8c6 5 6 27 0 32" /></>,
}

export function Icon({ name, size = 48, strokeWidth = 2, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] || PATHS.box}
    </svg>
  )
}

export function ProductImage({ product, size = 'md', variant = 0 }) {
  const hue = (product.hue + variant * 40) % 360
  const px = { xs: 40, sm: 72, md: 110, lg: 220 }[size] || 110
  return (
    <div className={`pimg pimg-${size}`} style={{ '--hue': hue }} role="img" aria-label={`Sample image: ${product.name}`}>
      <span className="pimg-blob" aria-hidden="true" />
      <Icon name={product.icon} size={px} strokeWidth={size === 'lg' ? 1.3 : 1.7} className="pimg-icon" />
    </div>
  )
}
