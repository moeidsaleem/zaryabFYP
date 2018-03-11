module.exports = function(bs) {

    return {
      server: {
        middleware: {
          // overrides the second middleware default with new settings
          1: require('connect-history-api-fallback')({
            index: '/index.html',
            verbose: true
          })
        },
        
      }, 
      https:true, 
      port: process.env.PORT || 8000,
      files: ["./dist/**/*.{html,htm,css,js}"],
      server: { "baseDir": "./dist" }
    };
  
  };