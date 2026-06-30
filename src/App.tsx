import { lazy, Suspense } from 'react'
import { Slideshow } from '@/components/layout/Slideshow'

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
      <Slideshow />
    </>
  )
}

export default App
