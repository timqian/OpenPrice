import { Nav } from '@/components/nav2'
import { CoinPage } from '@/components/coin-page'

export default function Home() {
  const users = [
    {
      name: 'Jane Cooper',
      email: 'sdd',
      access: 'Admin',
    },
    {
      name: 'Jane Cooper',
      email: 'sdd',
      access: 'Admin',
    },
    {
      name: 'Jane Cooper',
      email: 'sdd',
      access: 'Admin',
    },
    {
      name: 'Jane Cooper',
      email: 'sdd',
      access: 'Admin',
    },
    {
      name: 'Jane Cooper',
      email: 'sdd',
      access: 'Admin',
    },
    {
      name: 'Jane Cooper',
      email: 'sdd',
      access: 'Admin',
    },
    {
      name: 'Jane Cooper',
      email: 'sdd',
      access: 'Admin',
    },
    {
      name: 'Jane Cooper',
      email: 'sdd',
      access: 'Admin',
    },
    {
      name: 'Jane Cooper',
      email: 'sdd',
      access: 'Admin',
    },
  ]
  return (
    <main className="dark:bg-zinc-900">
      <Nav />
      <div className='w-full flex items-center justify-center'>
        <CoinPage />
      </div>

    </main>
  )
}
