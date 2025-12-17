import Image from "next/image"

export function EventureLogo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/eventure-logo.png"
        alt="Eventure"
        width={160}
        height={80}
        className="w-auto h-full object-contain"
        priority
        quality={100}
      />
    </div>
  )
}
