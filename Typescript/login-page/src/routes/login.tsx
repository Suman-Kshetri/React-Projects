import { createFileRoute } from '@tanstack/react-router'
import StatefulLoginForm from '@/components/StatefulLoginForm'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div className="flex flex-col items-center justify-center h-screen">
    <StatefulLoginForm/>
  </div>)
}
