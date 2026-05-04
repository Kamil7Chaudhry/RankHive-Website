export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size * 2.8} height={size * 0.65} viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Angular chevron mark - matching RankHive logo */}
      <path d="M0 6 L10 16 L0 26" stroke="white" strokeWidth="3" fill="none" strokeLinecap="square"/>
      <path d="M8 6 L18 16 L8 26" stroke="white" strokeWidth="3" fill="none" strokeLinecap="square" opacity="0.6"/>
      {/* RANKHIVE text */}
      <text x="26" y="22" fill="white" fontSize="18" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" letterSpacing="3">RANKHIVE</text>
    </svg>
  );
}
