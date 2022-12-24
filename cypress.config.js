require('dotenv').config()
const { defineConfig } = require('cypress')
module.exports = defineConfig({

  projectId: "pz79y6",

  resolve: {
    extensions: [".ts", ".js"],
  },

  env: {
    baseUrl: process.env.BASE_URL, //'https://swproject.demosfortest.com',
  },
  e2e: {
    baseUrl: process.env.BASE_URL, //'https://swproject.demosfortest.com',
    /*
         Hint to me: This code is part of the setupNodeEvents function and thus executes in the Node environment. 
         You cannot call Cypress or cy commands in this function, but you do have the direct access 
         to the file system and the rest of the operating system.
    */ 
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env = {
        ...process.env,
        ...config.env
      }
      
      //require('@cypress/code-coverage/task')(on, config)
      //on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
      
      return config 
    },
  }
})



// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   // setupNodeEvents can be defined in either
//   // the e2e or component configuration
//     component: {
//       devServer(cypressConfig) {
//         // component testing dev server setup code
//       },
//       setupNodeEvents(on, config) {
//         // component testing node events setup code
//       },
//     },
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('@cypress/code-coverage/task')(on, config)
//       //on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))

//       // include any other plugin code...

//       // It's IMPORTANT to return the config object
//       // with any changed environment variables
//       return config
//     }
//   }
// })




// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   // setupNodeEvents can be defined in either
//   // the e2e or component configuration
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('@cypress/code-coverage/task')(on, config)
//       // include any other plugin code...
      
//       // It's IMPORTANT to return the config object
//       // with any changed environment variables
//       return config
//     }
//   }
// })