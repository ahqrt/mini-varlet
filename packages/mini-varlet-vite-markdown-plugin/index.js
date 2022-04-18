const md = require('markdown-it')
module.exports = function markdownPlugin() {
  return {
    name: 'mini-varlet-vite-markdown-plugin',
    enforce: 'pre',
    transform(code, id) {
      if (id.endsWith('.md')) {
        console.log('markdown-it', md().render(code))
        return {
          code: `<template>
${md().render(code)}
          </template>          
          `,
        };
      }
    }
  }
}