
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./shared-react-native-types.cjs.production.min.js')
} else {
  module.exports = require('./shared-react-native-types.cjs.development.js')
}
