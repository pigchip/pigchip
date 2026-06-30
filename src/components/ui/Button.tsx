import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'solid' | 'ghost'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: Variant
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ember)]/70'

const variants: Record<Variant, string> = {
  solid:
    'bg-gradient-to-br from-[#4890d8] to-[#2d6793] text-white shadow-lg shadow-sky-900/40 hover:brightness-110',
  ghost: 'border border-white/20 bg-white/5 text-white/90 hover:bg-white/12',
}

/** Anchor styled as a button (the page is link-driven). */
export function ButtonLink({
  children,
  variant = 'solid',
  className = '',
  ...rest
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
