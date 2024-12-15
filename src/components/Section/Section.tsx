import s from './Section.module.css'
import { ReactNode } from 'react'

interface SectionProps {
  title?: string
  children: ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  )
}
