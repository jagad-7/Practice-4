import React from 'react'
import './Netflix.css'

// Normal way of ReactJs
let Movie1 = {
    ImgURL: ".C:/Users/Admin/Desktop/New_React_Js/demo-1/src/NewProjext/logo192.png",
    title: "IronMan",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quas rem repellat sapiente nulla molestias id fugiat nostrum vero corrupti."
}
let Movie2 = {
    ImgURL: "./NewProjext/logo512.png",
    title: "Captain Amarica",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quas rem repellat sapiente nulla molestias id fugiat nostrum vero corrupti."
}

export default function Netflix() {
  return (
    <section className='sec'>
        <Movie title={Movie1.title} ImgURL={Movie1.ImgURL} description={Movie1.description} />
        <Movie title={Movie2.title} ImgURL={Movie2.ImgURL} description={Movie2.description} />
    </section>
  )
}
const Movie = (props) =>{
    return(
        <article className='art'>
            <img src={props.ImgURL} alt="" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </article>
    )
}