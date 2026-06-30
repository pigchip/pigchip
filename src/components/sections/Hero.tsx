import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import type { ContactKind } from '@/types'
import { profile } from '@/data/profile'
import { BrandIcon } from '@/components/common/BrandIcon'
import { Typewriter } from '@/components/common/Typewriter'
import { ButtonLink } from '@/components/ui/Button'
import { Mail, Phone, Globe, MapPin } from '@/lib/icons'
import { fadeUp, stagger } from '@/lib/motion'

export function ContactIcon({ kind, size = 16 }: { kind: ContactKind; size?: number }) {
  if (kind === 'mail') return <Mail size={size} />
  if (kind === 'phone') return <Phone size={size} />
  if (kind === 'globe') return <Globe size={size} />
  return <BrandIcon brand={kind} size={size} />
}

// Persists across slide remounts so the typewriter only runs the first time.
let heroHasTyped = false

export function Hero({ onNavigate }: { onNavigate?: (id: string) => void }) {
  const [typing] = useState(!heroHasTyped)
  const [nameDone, setNameDone] = useState(!typing)
  useEffect(() => {
    heroHasTyped = true
  }, [])

  const roleText = `SOFTWARE ENGINEER L60 @ ${profile.company.toUpperCase()}`
  const nameSpeed = 28
  const roleSpeed = 24
  const nameStart = 200
  const nameEnd = nameStart + profile.name.length * nameSpeed
  const roleDelay = typing ? nameEnd : 0

  useEffect(() => {
    if (!typing) return
    const t = setTimeout(() => setNameDone(true), nameEnd)
    return () => clearTimeout(t)
  }, [typing, nameEnd])

  return (
    <section id="hero" className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-semibold text-white/80"
        >
          <MapPin size={13} className="text-[var(--color-ember)]" />
          {profile.location}
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white text-legible sm:text-6xl"
        >
          <Typewriter
            text={profile.name}
            enabled={typing}
            speed={nameSpeed}
            startDelay={nameStart}
            cursor={nameDone ? 'none' : 'always'}
          />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-3 text-xl font-semibold sm:text-2xl"
        >
          <Typewriter
            text={roleText}
            enabled={typing}
            speed={roleSpeed}
            startDelay={roleDelay}
            cursor="always"
            textClassName="text-gradient-animated"
            cursorClassName="cursor-gradient"
          />
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white text-legible-strong sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#projects" onClick={(e) => { e.preventDefault(); onNavigate?.('projects') }}>
            View projects
          </ButtonLink>
          <ButtonLink
            href="#contact"
            variant="ghost"
            onClick={(e) => { e.preventDefault(); onNavigate?.('contact') }}
          >
            Get in touch
          </ButtonLink>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
          {profile.contacts.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target={c.kind === 'mail' || c.kind === 'phone' ? undefined : '_blank'}
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/90 text-legible-strong transition-colors hover:text-white"
            >
              <ContactIcon kind={c.kind} />
              {c.handle}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
