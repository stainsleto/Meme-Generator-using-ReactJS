import React from 'react'
import memesData from './memesData'


function MemeForm(){
    // const [memeImage,setMemeImage] = React.useState('https://i.imgflip.com/30b1gx.jpg')

    const [meme,setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage : 'https://i.imgflip.com/30b1gx.jpg'
    })

    const[allMemeImages,setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }))
    }
    return(
        <div>
            <div className="form-div">
                <form>
                    <input className="input-box" type="text" placeholder="Top text" />
                    <input className="input-box" type="text" placeholder="Bottom text" /><br></br>
                    <button className="submit-button" onClick={getMemeImage}> Get a new meme image🖼️ </button>
                </form>
            </div>
            <div>

                <img src={meme.randomImage} className="meme--image" />

            </div>
        </div>
    )
}

export default MemeForm