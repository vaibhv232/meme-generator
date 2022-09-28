import React from "react";
import memesData from "./memesData";
export default function Button() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    function handleChange(event) {
        setMeme(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
 


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }
    // const [url, setUrl] = React.useState("https://i.imgflip.com/1ur9b0.jpg")
    // function getMeme(){
    //     const memesArray = memesData.data.memes
    //     const randomNumber = Math.floor(Math.random() * memesArray.length)
    //     //const url = memesArray[randomNumber].url
    //     setUrl(memesArray[randomNumber].url)
    //     console.log({url})
    // }
    return (
        <div>
            <div className="form">
                <input type="text" placeholder="shut up" id="form--first" 
                name = "topText"
                onChange = {handleChange}
                value = {meme.topText}
                />
                <input type="text" placeholder="and take ur money" id="form--second"
                name = "bottomText"
                onChange={handleChange}
                value = {meme.bottomText}
                />
            </div>
            <div className="button">

                <button className="btn"><span id="btn--text"
                    onClick={getMemeImage}>Get a new meme image  🖼</span>
                </button>
                <br />
                <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            </div>
        </div>
    )
}