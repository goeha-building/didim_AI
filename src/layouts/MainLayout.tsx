import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

import { useAppStore } from '../stores/appStore'

export default function MainLayout() {
  const highContrast = useAppStore((s) => s.highContrast)
  const fontScale = useAppStore((s) => s.fontScale)

  return (
    <div
      className={highContrast ? 'high-contrast' : ''}
      style={{
        fontSize: `${fontScale}rem`,
      }}
    >
      <div className="min-h-screen p-4">
        <div className="mx-auto flex max-w-[1600px] gap-4">
          <Sidebar />

          <main className="flex-1">
            <Topbar />

            <div className="glass fade-in min-h-[88vh] rounded-[32px] p-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}