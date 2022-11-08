import React from 'react'

function MemeForm(){
    const [memeImage,setMemeImage] = React.useState('')
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return(
        <div>
            <div className="form-div">
                <form>
                    <input className="input-box" type="text"  />
                    <input className="input-box" type="text" /><br></br>
                    <input className="submit-button"type="submit" value="Get a new meme image🖼️" />
                </form>
            </div>
            <div>

                <img src="{memeImage}" />

            </div>
        </div>
    )
}

export default MemeForm