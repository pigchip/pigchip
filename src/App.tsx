import { lazy, Suspense } from 'react'
import { Page } from '@/components/layout/Page'

// Heavy (three.js): load after first paint to keep the initial bundle small.
const Background = lazy(() =>
  import('@/components/layout/Background').then((m) => ({ default: m.Background })),
)

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <Page />
    </>
  )
}

export default App
