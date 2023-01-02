import './App.css'
import { useEffect, useState, useRef } from 'react'

function App() {
  const [text, setText] = useState('Hello Diana')
  const [loaded, setLoaded] = useState(false)
  let width = 100

  const textRef = useRef(null)
  const flowerRef = useRef(null)
  
  const interval = () => {
    const textStyle = textRef.current.style
    const flowerStyle = flowerRef.current.style

    setTimeout(() => {
      textStyle.transition = '1s opacity ease-in-out'
      textStyle.opacity = '0'
      setTimeout(() => {
        setText(`Here's your flower`)
        textStyle.opacity = '1'

        setTimeout(() => {
          textStyle.opacity = '0'

          setTimeout(() => {
            textStyle.display = 'none'
            if(loaded) {
              flowerStyle.opacity = '0'
              flowerStyle.display = 'block'
  
              setTimeout(() => {
                flowerStyle.opacity = '1'
                flowerStyle.transition = '1s opacity ease-in-out'        
              }, 1000)
            }
          }, 1000)

        }, 1500)

      },1000)

    }, 1500)
  }

  useEffect(() => {
    interval()
  }, [])
  console.log(flowerRef)
  return (
    <div className="App">
      <h1 ref={textRef}>{text}</h1>
      <img className='flower' ref={flowerRef} src='../images/flowers-01.png' onLoad={() => setLoaded(true)}/>
    </div>
  )
}

export default App
