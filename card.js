import React from 'react';

export  const Card = (props) => {
    return (
        <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2  shadow-5 mw5 h-50'>{props.username}
            <img src='https://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png' alt='loading...'
            height = '200px' width = '200px'
            />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}