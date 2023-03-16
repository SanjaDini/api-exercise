// This is a JavaScript-based config file containing every Mocha option plus others.
// If you need conditional logic, you might want to use this type of config.
// Otherwise, JSON or YAML is recommended.

module.exports = {
  baseUrl: 'https://l761dniu80.execute-api.us-east-2.amazonaws.com/default/exercise_api',
  bail: false,
  color: true,
  extension: ['js'],
  package: './package.json',
  reporter: ['spec'],
  require: '@babel/register',
  spec: ['test/specs/**/*.js'], 
  timeout: '9999999',
  ui: 'bdd',
  'async-only': true,
  // retries: 1, does not log output in terminalwen assertion fails
  // diff: true,
  // 'allow-uncaught': false,
  // 'check-leaks': false,
  // delay: false,
  // exit: false, // could be expressed as "'no-exit': true"
  // fgrep: something, // fgrep and grep are mutually exclusive
  // file: ['/path/to/some/file', '/path/to/some/other/file'],
  // 'forbid-only': false,
  // 'forbid-pending': false,
  // 'full-trace': false,
  // global: ['jQuery', '$'],
  // grep: something, // fgrep and grep are mutually exclusive
  // growl: false,
  // ignore: ['/path/to/some/ignored/file'],
  // 'inline-diffs': false,
  // invert: false, // needs to be used with grep or fgrep
  // jobs: 1,
  // parallel: false,
  // recursive: false,
  // 'reporter-option': ['foo=bar', 'baz=quux'],
  // slow: '75',
  // sort: false,
  // timeout: false, // same as "'no-timeout': true" or "timeout: 0"
  // 'trace-warnings': true, // node flags ok
  // 'v8-stack-trace-limit': 100, // V8 flags are prepended with "v8-"
  // watch: false,
  // 'watch-files': ['lib/**/*.js', 'test/**/*.js'],
  // 'watch-ignore': ['lib/vendor']
};