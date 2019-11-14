const webpack = require('webpack')
const devServer = require('webpack-dev-server')
const config = require('../webpack/webpack.dev')
const openBrowser = require('react-dev-utils/openBrowser')
const { choosePort, createCompiler, prepareUrls } = require('react-dev-utils/WebpackDevServerUtils')

choosePort('localhost', 9527)
.then(port => {

  const urls = prepareUrls('http', 'localhost', port)
  const params = {
    webpack,
    config,
    appName: 'speed',
    urls
  }
  const compiler = createCompiler(params);
  console.log('in then')
  const server = new devServer(compiler, {
    contentBase: './dist',
    hot: true,
    host: 'localhost',
    proxy: {
      '/api': 'http://www.strongcode.top'
    }
  })

  server.listen(port, 'localhost', () => {
    console.log(`the client is open in ${port}`)
    openBrowser(`http://localhost:${port}`)
  })

})  