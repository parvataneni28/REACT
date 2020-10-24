import React from 'react'
import { withTranslation } from 'react-i18next'

const Hello = ({t}) => {
  return (
    <div>
      {t('hello.label')}
    </div>
  )
}

export default withTranslation()(Hello)