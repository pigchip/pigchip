import { motion } from 'motion/react'
import { Section } from '@/components/layout/Section'
import { ContactIcon } from '@/components/sections/Hero'
import { CopyButton } from '@/components/common/CopyButton'
import { profile } from '@/data/profile'
import type { ContactLink } from '@/types'
import { staggerItem } from '@/lib/motion'
import { useCenterPop } from '@/lib/usePop'
import githubLogo from '@/assets/brands/github.svg'
import linkedinLogo from '@/assets/brands/linkedin.svg'

const brandLogos: Partial<Record<string, string>> = {
  github: githubLogo,
  linkedin: linkedinLogo,
}

function ContactCard({ contact: c }: { contact: ContactLink }) {
  const logo = c.logo ?? brandLogos[c.kind]
  const copyValue = c.kind === 'mail' || c.kind === 'phone' ? c.handle : c.href
  const { ref, animate } = useCenterPop<HTMLDivElement>()
  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      initial="hidden"
      animate={animate}
      whileHover={{ y: -4 }}
      className="glass relative flex h-full min-w-0 flex-col rounded-2xl"
    >
      <CopyButton
        value={copyValue}
        label={`Copy ${c.label.toLowerCase()}`}
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2"
      />
      <a
        href={c.href}
        target={c.kind === 'mail' || c.kind === 'phone' ? undefined : '_blank'}
        rel="noreferrer"
        className="flex h-full items-center gap-2.5 p-2.5 pr-10 sm:gap-4 sm:p-6 sm:pr-14"
      >
        {logo ? (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center sm:h-14 sm:w-14">
            <img
              src={logo}
              alt={`${c.label} logo`}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </span>
        ) : (
          <span
            className="icon-tile h-8 w-8 shrink-0 text-white sm:h-14 sm:w-14"
            style={{ ['--accent' as string]: '#4890d8' }}
          >
            <ContactIcon kind={c.kind} size={20} />
          </span>
        )}
        <span className="flex min-w-0 flex-col gap-0.5">
          <span className="flex items-center gap-1.5">
            <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-white/50 sm:text-xs">
              {c.label}
            </span>
            {c.scope && (
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1"
                style={
                  c.scope === 'internal'
                    ? {
                        color: '#7cb3ec',
                        backgroundColor: 'rgba(72,144,216,0.12)',
                        ['--tw-ring-color' as string]: 'rgba(72,144,216,0.35)',
                      }
                    : {
                        color: '#8fd6a0',
                        backgroundColor: 'rgba(63,185,80,0.12)',
                        ['--tw-ring-color' as string]: 'rgba(63,185,80,0.35)',
                      }
                }
              >
                {c.scope === 'internal' ? 'Work' : 'Personal'}
              </span>
            )}
          </span>
          <span className="truncate text-sm font-semibold text-white sm:text-lg">{c.handle}</span>
        </span>
      </a>
    </motion.div>
  )
}

export function Contact() {
  return (
    <Section
      id="contact"
      title="Get in touch"
      icon="Mail"
      eyebrow="Let's connect"
      sectionClassName="flex min-h-svh flex-col justify-start sm:justify-center"
    >
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {profile.contacts.map((c) => (
          <ContactCard key={c.href} contact={c} />
        ))}
      </div>
    </Section>
  )
}
