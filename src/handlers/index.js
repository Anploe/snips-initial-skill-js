import { handler } from 'snips-toolkit'
import pokemon from './pokemon'
import addition from './addition'

// Add handlers here, and wrap them.
export default {
    addition: handler.wrap(addition)
}