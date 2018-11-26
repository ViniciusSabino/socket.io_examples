import React from 'react'

export default props => (
    <div className={props.classe} id='container'>
        {props.children}
    </div>
)