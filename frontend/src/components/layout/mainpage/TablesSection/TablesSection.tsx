import React from 'react'

import styles from './TablesSection.module.sass'
import DefaultButton from '@/components/buttons/defaultbutton/DefaultButton'

export default function TablesSection({  onChange, active }: { onChange: (value: string) => void, active: string }) {
  return (
    <section>
      <DefaultButton isActive={active === 'main'} onClick={() => onChange('main')}>Direct Connections</DefaultButton>
      <DefaultButton isActive={active === 'main'} onClick={() => onChange('main')}>Direct Connections</DefaultButton>
      <DefaultButton isActive={active === 'main'} onClick={() => onChange('main')}>Direct Connections</DefaultButton>
    </section>
  )
}

