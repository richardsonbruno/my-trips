import dynamic from 'next/dynamic'
const Map = dynamic(() => import('components/Map'), { ssr: false })

import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>

      <Map places={places} />
    </>
  )
}
