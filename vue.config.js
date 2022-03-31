module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/user-list/'
    : '/',

    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title = "測驗者列表";
          return args;
        })
    }
};
