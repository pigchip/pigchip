import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import type { ContactKind } from '@/types'
import { profile } from '@/data/profile'
import { BrandIcon } from '@/components/common/BrandIcon'
import { Typewriter } from '@/components/common/Typewriter'
import { ButtonLink } from '@/components/ui/Button'
import { onAnchorClick } from '@/lib/scroll'
import { Mail, Phone, Globe } from '@/lib/icons'
import { fadeUp, stagger, pop, popGroup } from '@/lib/motion'
import { useCenterPop } from '@/lib/usePop'

export function ContactIcon({ kind, size = 16 }: { kind: ContactKind; size?: number }) {
  if (kind === 'mail') return <Mail size={size} />
  if (kind === 'phone') return <Phone size={size} />
  if (kind === 'globe') return <Globe size={size} />
  return <BrandIcon brand={kind} size={size} />
}

// Persists across slide remounts so the typewriter only runs the first time.
let heroHasTyped = false

export function Hero() {
  const [typing] = useState(!heroHasTyped)
  useEffect(() => {
    heroHasTyped = true
  }, [])

  const roleText = `SOFTWARE ENGINEER L60 @ ${profile.company.toUpperCase()}`
  const nameParts = profile.name.split(' ')
  const heroName =
    nameParts.length >= 4
      ? `${nameParts.slice(0, 2).join('\u00A0')} ${nameParts.slice(2).join('\u00A0')}`
      : profile.name

  // One continuous typewriter flows name -> role -> tagline via cumulative delays.
  const nameSpeed = 28
  const roleSpeed = 24
  const taglineSpeed = 14
  const nameStart = 200
  const nameEnd = nameStart + heroName.length * nameSpeed
  const roleDelay = typing ? nameEnd : 0
  const roleEnd = nameEnd + roleText.length * roleSpeed
  const taglineDelay = typing ? roleEnd : 0
  const taglineEnd = roleEnd + profile.tagline.length * taglineSpeed

  // Reveal buttons + contact tags with a curtain wipe once typing completes.
  const [revealed, setRevealed] = useState(!typing)
  useEffect(() => {
    if (!typing) return
    const t = setTimeout(() => setRevealed(true), taglineEnd + 150)
    return () => clearTimeout(t)
  }, [typing, taglineEnd])

  // After the initial reveal, each element pops out at the nav line on scroll
  // (and pops back in when scrolled into view again), matching the sections.
  const { ref: nameRef, animate: nameAnim } = useCenterPop<HTMLHeadingElement>()
  const { ref: roleRef, animate: roleAnim } = useCenterPop<HTMLParagraphElement>()
  const { ref: tagRef, animate: tagAnim } = useCenterPop<HTMLParagraphElement>()
  const { ref: btnsRef, shown: btnsShown } = useCenterPop<HTMLDivElement>()
  const { ref: tagsRef, shown: tagsShown } = useCenterPop<HTMLDivElement>()

  return (
    <section
      id="hero"
      className="flex min-h-svh w-full flex-col justify-center px-5 pb-16 pt-20 sm:px-10 sm:pb-24 sm:pt-28"
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto w-full max-w-6xl">
        <motion.h1
          ref={nameRef}
          variants={fadeUp}
          initial="hidden"
          animate={nameAnim}
          className="font-serif text-4xl font-bold leading-[1.05] tracking-tight text-white text-legible sm:text-6xl xl:text-7xl"
        >
          <Typewriter
            text={heroName}
            enabled={typing}
            speed={nameSpeed}
            startDelay={nameStart}
            cursor="typing"
          />
        </motion.h1>

        <motion.p
          ref={roleRef}
          variants={fadeUp}
          initial="hidden"
          animate={roleAnim}
          className="mt-2 text-base font-semibold sm:mt-3 sm:text-2xl"
        >
          <Typewriter
            text={roleText}
            enabled={typing}
            speed={roleSpeed}
            startDelay={roleDelay}
            cursor="typing"
            textClassName="text-gradient-animated"
            cursorClassName="cursor-gradient"
          />
        </motion.p>

        <motion.p
          ref={tagRef}
          variants={fadeUp}
          initial="hidden"
          animate={tagAnim}
          className="mt-4 max-w-5xl text-left text-sm leading-relaxed text-white text-legible-strong sm:mt-5 sm:text-justify sm:text-lg"
        >
          <Typewriter
            text={profile.tagline}
            enabled={typing}
            speed={taglineSpeed}
            startDelay={taglineDelay}
            cursor={typing ? 'always' : 'none'}
          />
        </motion.p>

        <motion.div
          ref={btnsRef}
          variants={popGroup}
          initial="hidden"
          animate={revealed && btnsShown ? 'show' : 'hidden'}
          className="mt-6 flex flex-wrap gap-3 sm:mt-8"
        >
          <motion.div variants={pop}>
            <ButtonLink href="#projects" onClick={(e) => onAnchorClick(e, 'projects')}>
              View projects
            </ButtonLink>
          </motion.div>
          <motion.div variants={pop}>
            <ButtonLink href="#contact" variant="ghost" onClick={(e) => onAnchorClick(e, 'contact')}>
              Get in touch
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          ref={tagsRef}
          variants={popGroup}
          initial="hidden"
          animate={revealed && tagsShown ? 'show' : 'hidden'}
          className="mt-6 flex flex-col gap-2 sm:mt-8"
        >
          {[
            profile.contacts.filter((c) => c.kind === 'mail' || c.kind === 'phone'),
            profile.contacts.filter((c) => c.kind !== 'mail' && c.kind !== 'phone'),
          ].map((row, i) => (
            <div key={i} className="flex flex-wrap gap-2">
              {row.map((c) => (
                <motion.a
                  variants={pop}
                  key={c.href}
                  href={c.href}
                  target={c.kind === 'mail' || c.kind === 'phone' ? undefined : '_blank'}
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/8 px-2.5 py-1 text-xs text-white/90 text-legible-strong transition-colors hover:border-white/25 hover:bg-white/12 hover:text-white sm:px-3 sm:py-1.5 sm:text-sm"
                >
                  <ContactIcon kind={c.kind} />
                  {c.handle}
                </motion.a>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
