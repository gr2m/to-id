;(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory()
  } else {
    root.toId = factory()
  }
})(this, function () {

  // We don't simply do a negative "/[^\w]+/" regex,
  // as it would exclude non-ascii letters, like "ä", "안", etc
  var nonLetters = /[ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~\’]+/g
  var dashesAtBeginningOrEnd = /(^-+|-+$)/g

  function toId (string) {
    string = string.trim().toLowerCase()
    string = string.replace(nonLetters, '-')
    string = string.replace(dashesAtBeginningOrEnd, '')
    return string
  }

  return toId
})
