import BottomBar from "./components/BottomBar"
import CurrentOrder from "./components/CurrentOrder"

export default function Home() {
  return (
    <main>
      <div className='absolute bottom-5 left-5'>
          <BottomBar />
      </div>
      <div className='absolute inset-y-0 right-0 w-1/3 h-screen-max border border-black'>
        <CurrentOrder />
      </div>
    </main>
  )
}
