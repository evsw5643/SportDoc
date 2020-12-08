import React from 'react'
import Sport from '../Sport/sport.js'
function Potd() {
    return (
        <div>
            <div className="column justify-content-center">
                <Sport sport="basketball" ></Sport>
                <Sport sport="hockey" ></Sport>
                <Sport sport="baseball" ></Sport>
            </div>
        </div>
    )
}

export default Potd
