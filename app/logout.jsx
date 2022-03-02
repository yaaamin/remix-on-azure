import { authenticator } from "./utils/auth.server"

export async function loader({ request }) {
  await authenticator.logout(request, { redirectTo: '/login' })
}
