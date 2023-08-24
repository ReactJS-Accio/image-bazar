import React,{useState,useEffect} from "react";
import axios from "axios";


const SearchBar = ({setImages})=> {

    const [searchText, setSearchText] = useState("");

  

    function getImages (){
        searchText && (
            axios.get("https://api.unsplash.com/search/photos" , {
            params:{
                client_id : "9T4GkwLn8FI6UOXtHZ4zBGAqgeRxCDTFCWZCmwvWBFo",
                query : searchText

            }
        })
        .then((response)=> {
            setImages(response.data.results)
            setSearchText("")
        })
        .catch((err)=>console.log(err))
        )

    }


    return (

    <div>

        <input type="text"
        placeholder="Search your image here..."
        value={searchText}
        onChange={(e)=> setSearchText(e.target.value)}
        />

        <button onClick={getImages}>Search</button>

        
    </div>


    )
}



export default SearchBar;