import React from 'react'

function ProductCard(props) {
    const tags = props.tags.map((tag, index) => {
        return (
        <button key={index} className="tag">{tag.toUpperCase()}</button>
        )
    })
  return (
    <div className="product-card">
        <div className="product-img">
            <img className="url" src={props.image}></img>
            </div>
        <div className="product-info">
            <h5>{props.name}</h5>
            <div className="price">${props.price}</div>
        </div>
        <div className="tags">{tags}</div>
    </div>
  )
}

export default ProductCard