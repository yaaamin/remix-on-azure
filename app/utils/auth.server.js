import { Authenticator } from 'remix-auth'
import { sessionStorage } from './session.server'
import { GitHubStrategy } from 'remix-auth-github'

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator(sessionStorage)

authenticator.use(
  new GitHubStrategy(
    {
      clientID: 'd187623e40f396c85abc',
      clientSecret: 'ca109a7f72ac5240a9335fb90adf315186bb9707',
      callbackURL: 'http://polite-field-043a3c810.1.azurestaticapps.net/auth/github/callback',
    },
    //check wheter the user is in the database
    async ({ profile, accessToken, extraParams }) => {
      return { profile, accessToken, extraParams }
    }
  )
)