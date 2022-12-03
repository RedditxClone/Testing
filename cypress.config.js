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
      return config 
    },
  }
})