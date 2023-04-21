import { useRef, useState } from 'react'
import './App.css'
import ImageGallery from './ImageGallery'

function App() {
  const [fetchData, setFetchData] = useState([])
  const ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    // APIURL
    const endPointUrl = `https://pixabay.com/api/?key=35641182-2a2bc732c3b648d746f91ff06&q=${ref.current.value}&image_type=photo`
    // APIを叩く（Data Fetching）
    fetch(endPointUrl)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setFetchData(data.hits)
      })
  }

  return (
    <div className='container'>
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='画像を探す' ref={ref}></input>
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  )
}

export default App
