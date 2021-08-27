import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import { PageTemplateProps } from 'pages/[slug]'

import * as S from './styles'

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close About" />
    </LinkWrapper>

    <S.Heading>{heading}</S.Heading>

    <S.Body dangerouslySetInnerHTML={{ __html: body.html }} />
  </S.Content>
)

export default PageTemplate
