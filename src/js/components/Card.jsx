import React from 'react'

const Card = (props) => {
    return (
        <div className="col">
            <div className="card shadow-sm border-3 mb-3">
                <img src={props.imgUrl} alt="" srcset="" height={"225px"}/>
                <div className="card-body">
                    <p className="card-text">
                        {props.text}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card