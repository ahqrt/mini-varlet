const md = require('markdown-it')
module.exports = function markdownPlugin() {
  return {
    name: 'mini-varlet-vite-markdown-plugin',
    enforce: 'pre',
    transform(code, id) {
      if (id.endsWith('.md')) {
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