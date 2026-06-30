import { motion } from 'motion/react'
import { Section } from '@/components/layout/Section'
import { ContactIcon } from '@/components/sections/Hero'
import { profile } from '@/data/profile'
import { staggerItem } from '@/lib/motion'

export function Contact() {
  return (
    <Section id="contact" title="Get in touch" icon="Mail">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.contacts.map((c) => (
          <motion.a
            key={c.href}
            variants={staggerItem}
            whileHover={{ y: -4 }}
            href={c.href}
            target={c.kind === 'mail' || c.kind === 'phone' ? undefined : '_blank'}
            rel="noreferrer"
            className="glass flex h-full flex-col gap-5 rounded-2xl p-7"
          >
            <span className="icon-tile h-16 w-16 shrink-0 text-white" style={{ ['--accent' as string]: '#4890d8' }}>
              <ContactIcon kind={c.kind} size={28} />
            </span>
            <span className="flex min-w-0 flex-col gap-1.5">
              <span className="text-sm font-semibold uppercase tracking-wide text-white/50">
                {c.label}
              </span>
              <span className="truncate text-xl font-semibold text-white">{c.handle}</span>
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
