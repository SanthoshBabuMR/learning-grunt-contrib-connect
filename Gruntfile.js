module.exports = function( grunt ) {

	// configure task(s)
	grunt.initConfig( {

		// connect begin
		connect: {

			  // simpleServer begin
			  simpleServer: {
				options: {
					  protocol: "https"
					, hostname: "localhost"
					, port: 7000
					, base: "./views/serve"
					, keepalive: true
				}
			  }
			  // simpleServer end

			, // appServerPort begin
			  appServerPort: {
				options: {
					  protocol: "http"
					, hostname: "localhost"
					, port: 0
					//, port: "?"
					, base: "./views/serve"
					, keepalive: true
				}
			  }
			  // appServerPort end

			, // appServerHostname begin
			  appServerHostname: {
				options: {
					  protocol: "http"
					, hostname: "*"
					, port: 7001
					, base: "./views/serve"
					, keepalive: true
				}
			  }
			  // appServerHostname end

			, // appServerDirectory begin
			  appServerDirectory: {
				options: {
					  protocol: "http"
					, hostname: "localhost"
					, port: 7002
					, base: "./views/serve"
					, directory: "./views/"
					, keepalive: true
				}
			  }
			  // appServerDirectory end

			, // appServerOpen begin
			  appServerOpen: {
				options: {
					  protocol: "http"
					, hostname: "localhost"
					, port: 7003
					, base: "./views/serve"
					, open: {
						  target: 'http://localhost:7003/json/week.json'
  						, appName: 'chrome'
  						, callback: function() {
  							console.log("Specified web page opened via chrome browser ...");
  						}
					  }
					, keepalive: true
				}
			  }
			  // appServerOpen end

			,  // appServerUsePort begin
			  appServerUsePort: {
				options: {
					  protocol: "http"
					, hostname: "localhost"
					, port: 7000
					, useAvailablePort: true
					, base: "./views/serve"
					, keepalive: true
				}
			  }
			  // appServerUsePort end

			,  // appServerMiddleware begin
			  appServerMiddleware: {
				options: {
					  protocol: "http"
					, hostname: "localhost"
					, port: 7005
					, base: "./views/serve"
					, keepalive: true
					, middleware:	[
										function myMiddleware(req, res, next) {
											res.end('Hello, world!');
										}
						        	]				
				}
			  }
			  // appServerMiddleware end

		}
		// connect end
		
	} );

	// load task(s)
	grunt.loadNpmTasks( "grunt-contrib-connect" );

	// register task(s)
	grunt.registerTask( "simpleServer", "connect:simpleServer" );
	grunt.registerTask( "appServerPort", "connect:appServerPort" );
	grunt.registerTask( "appServerHostname", "connect:appServerHostname" );
	grunt.registerTask( "appServerDirectory", "connect:appServerDirectory" );
	grunt.registerTask( "appServerOpen", "connect:appServerOpen" );
	grunt.registerTask( "appServerUsePort", "connect:appServerUsePort" );
	grunt.registerTask( "appServerMiddleware", "connect:appServerMiddleware" );

};
