interface PlayStoreIconProps {
  className?: string;
}

export function PlayStoreIcon({ className = 'h-5 w-5' }: PlayStoreIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.61 1.814L13.793 12L3.61 22.186a1.75 1.75 0 0 1-.61-1.335V3.149c0-.516.225-.997.61-1.335Z"
        fill="#32BBFF"
      />
      <path
        d="M17.213 8.58L13.793 12l3.42 3.42l3.847-2.192a1.38 1.38 0 0 0 0-2.456L17.213 8.58Z"
        fill="#FFBC00"
      />
      <path
        d="M13.793 12L3.61 22.186c.42.36 1.028.44 1.563.135l12.04-6.901L13.793 12Z"
        fill="#FF4B3E"
      />
      <path
        d="M13.793 12l3.42-3.42L5.173 1.679c-.535-.305-1.143-.225-1.563.135L13.793 12Z"
        fill="#00F076"
      />
    </svg>
  );
}
