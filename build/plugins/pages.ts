import Pages from 'vite-plugin-pages'

const autoPages = () => {
  return [
    Pages({
      resolver: 'react',
      importMode: 'sync',
      routeStyle: 'next',
      extensions: ['tsx', 'jsx'],
      exclude: [
        '**/components/**/*',
        '**/utils/**/*',
        '**/lib/**/*',
        '**/hooks/**/*',
        '**/model.tsx',
        '**/tests/**/*',
        '**/__test__/**/*'
      ]
    })
  ]
}

export default autoPages
