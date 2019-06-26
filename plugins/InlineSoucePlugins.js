const HtmlWebpackPlugin = require('html-webpack-plugin')
class InlineSourcePlugin {
  constructor (obj) {
    this.reg = obj.match
  }
  processTags (data, compilation) {
    // 处理标签
    console.log(data)
    let headTags = []
    let bodyTags = []
    data.headTags.forEach(headTag => {
      headTags.push(this.processTag(headTag, compilation))
    })
    data.bodyTags.forEach(bodyTag => {
      bodyTags.push(this.processTag(bodyTag, compilation))
    })
    return { ...data, headTags, bodyTags }
  }
  processTag (tag, compilation) {
    let newTag, url
    console.log(tag, 'tag')
    if (tag.tagName === 'link' && this.reg.test(tag.attributes.href)) {
      newTag = {
        tagName: 'style',
        attributes: {
          type: 'text/css'
        }
      }
      url = tag.attributes.href
    }
    if (tag.tagName === 'script' && this.reg.test(tag.attributes.src)) {
      newTag = {
        tagName: 'script',
        attributes: {
          type: 'application/javascript'
        }
      }
      url = tag.attributes.src
    }
    if (url) {
      newTag.innerHTML = compilation.assets[url.replace('./', '')].source() // 取到文件内容放到innerHtml
      delete compilation.assets[url.replace('./', '')]
      return newTag
    }
    return tag
  }
  apply (compiler) {
    // 要通过html-webpack-plugin
    compiler.hooks.compilation.tap('InlineSourcePlugin', (compilation) => {
      console.log('The InlineSourcePlugin is starting a new compilation...')

      // Staic Plugin interface |compilation |HOOK NAME | register listener
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tapAsync(
        'alterPlugin', // <-- Set a meaningful name here for stacktraces
        (data, cb) => {
          // Manipulate the content
          data = this.processTags(data, compilation)
          // Tell webpack to move on
          cb(null, data)
        }
      )
    })
  }
}
/**
 * new InlineSourcePlugin({
 *  match: /\.(js|css)/
 * })
 *
 */
module.exports = InlineSourcePlugin
