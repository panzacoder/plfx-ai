import { fetchQuery } from 'convex/nextjs'
import { api } from '@/convex/_generated/api'
import { getAuthToken } from './util'

export default async function AccountPage() {
  const token = await getAuthToken()
  const user = await fetchQuery(api.users.getMyUser, {}, { token })

  return (
    <div className="grid h-screen w-screen place-items-center">
      <img src={user.profileImage} className="h-24 w-24 rounded-full" />
      {user.name}
    </div>
  )
}
