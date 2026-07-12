import { useState } from 'react'
import { Copy, Check } from '@/lib/icons'

interface CopyButtonProps {
  /** Text copied to the clipboard when pressed. */
  value: string
  /** Accessible label (e.g. "Copy email"). */
  label: string
  className?: string
}

/**
 * Small icon button that copies {@link value} to the clipboard and briefly
 * shows a checkmark. Rendered as a sibling (not a child) of card anchors so it
 * stays valid, interactive markup.
 */
export function CopyButton({ value, label, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copy = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable - no-op */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? 'Copied' : label}
      title={copied ? 'Copied' : label}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors hover:bg-white/12 hover:text-white ${className}`}
    >
      {copied ? (
        <Check size={15} className="text-[var(--color-ember)]" />
      ) : (
        <Copy size={15} />
      )}
    </button>
  )
}
