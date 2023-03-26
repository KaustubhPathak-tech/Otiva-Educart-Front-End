import React from 'react'
import BounceLoader from 'react-spinners/BounceLoader';

import "./Loader.css"
function Loader(props) {

  return (props.trigger)?(
    <div className='popup'>
        <div className="preloader">
            <BounceLoader
              className="App"
              color={"#f59607"}
            //   loading={loading}
              // cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
    </div>
  ):"";
}

export default Loader