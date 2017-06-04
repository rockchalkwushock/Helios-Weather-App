import { compose } from 'redux'
import withData from './withData'
import withLayout from './withLayout'

const pageWithoutLayout = compose(withData)

const page = compose(pageWithoutLayout, withLayout)

export { page, pageWithoutLayout }
