const npsUtils = require('nps-utils')

const { rimraf, series, concurrent, crossEnv } = npsUtils

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
    },
    reportCoverage: {
      description: 'Send coverage data to third party.',
      script: 'codecov'
    },
    test: {
      description: 'Run Jest test suite on code base.',
      default: `${crossEnv(
        'BABEL_ENV=test'
      )} jest --config jest.config.json --runInBand`,
      coverage: {
        description: 'Generate coverage data.',
        script: series.nps('test --coverage --silent')
      },
      watch: {
        description: 'Watch test suite.',
        script: series.nps('test --watch')
      }
    },
    validate: {
      description: 'Validate code base against linting & tests.',
      default: concurrent.nps('lint', 'test'),
      withCoverage: {
        description: 'Validate code & output coverage data.',
        script: concurrent.nps('lint', 'test.coverage')
      }
    }
  }
}
