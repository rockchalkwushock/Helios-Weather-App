const npsUtils = require('nps-utils')

const { rimraf, series } = npsUtils

module.exports = {
  scripts: {
    clean: {
      description: 'Clean repository of generated directories & files.',
      script: series(rimraf('.next'), rimraf('coverage'))
    },
    commit: {
      description: 'Run commitizen-cli for creating clean commit messages.',
      script: 'git cz'
    },
    lint: {
      description: 'Lint code base.',
      default: 'eslint __tests__ components lib pages',
      fix: {
        description: 'Lint & fix errors.',
        script: series.nps('lint --fix')
      }
    }
  }
}
