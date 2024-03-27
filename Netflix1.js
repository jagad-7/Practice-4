import React from 'react'
import './Netflix.css'

//  Array type in javascript of reactJs Project
const data = [
        {
            ImgURL: ".C:/Users/Admin/Desktop/New_React_Js/demo-1/src/NewProjext/logo192.png",
            title: "IronMan",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quas rem repellat sapiente nulla molestias id fugiat nostrum vero corrupti."
        },
        {
            ImgURL: "./NewProjext/logo512.png",
            title: "Captain Amarica",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quas rem repellat sapiente nulla molestias id fugiat nostrum vero corrupti."
        },
        {
            ImgURL: "./NewProjext/logo512.png",
            title: "Spider Man",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quas rem repellat sapiente nulla molestias id fugiat nostrum vero corrupti."
        }
    ]


export default function Netflix1() {
  return (
    <section className='sec'>
        <Movie title={data[0].title} ImgURL={data[0].ImgURL} description={data[0].description} />
        <Movie title={data[1].title} ImgURL={data[1].ImgURL} description={data[1].description} />
        <Movie title={data[2].title} ImgURL={data[2].ImgURL} description={data[2].description} />
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