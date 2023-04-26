import React from 'react'

// function FRInput() {
//   return (
//     <input type='text'></input>
//   )
// }

const FRInput = React.forwardRef((props,ref) => {
    return(
        <div>
            <input type='text' ref={ref} />
        </div>
    )
})

export default FRInput