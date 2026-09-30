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

export function ProductImage({ product, size = 'md' }) {
  const style = { '--hue': product.hue }
  return (
    <div className={`pimg pimg-${size}`} style={style} role="img" aria-label={`Sample image: ${product.name}`}>
      <Icon name={product.icon} size={size === 'lg' ? 120 : size === 'sm' ? 36 : 64} strokeWidth={size === 'lg' ? 1.5 : 2} />
    </div>
  )
}
