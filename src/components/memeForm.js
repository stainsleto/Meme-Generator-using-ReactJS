import React from 'react'

function MemeForm(){
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

                <img src="" />

            </div>
        </div>
    )
}

export default MemeForm