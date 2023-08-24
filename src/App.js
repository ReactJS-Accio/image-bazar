
import SearchBar from "./Components/SearchBar";
import ImageGallery from "./Components/ImageGallery";
import { useState } from "react";

function App() {

  const [images,setImages] = useState([]);


  return (
    <div className="App">
    <SearchBar setImages={setImages}/>
    <ImageGallery images={images}/>
    </div>
  );
}

export default App;
