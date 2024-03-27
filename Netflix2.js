import React from 'react'
import './Netflix.css'

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

export default function Netflix2() {

    // Array in js of map method

    // let newTemArray = data.map((eachObj)=>{
    //     return(
    //         <article>
    //             <h1>{eachObj.title}</h1>
    //             <img src={eachObj.ImgURL} />
    //             <p>{eachObj.description}</p>
    //         </article>
    //     )
    // })
  return (
    <section className='sec'>
       {/* {newTemArray} */}

{/* another way in js array of map method */}
    {
        // data.map((eachObj)=>{
        //     return(
        //         <Movie 
        //             title={eachObj.title}
        //             ImgURL={eachObj.ImgURL}
        //             description={eachObj.description}
        //         />
        //     )
        // })


        // De Structuring method 
        data.map((eachObj)=>{
            const {title, ImgURL, description} = eachObj
            return(
                <Movie key={eachObj.title}
                    title={title}
                    ImgURL={ImgURL}
                    description={description}
                />
            )
        })
    }
    </section>
  )
}
// const Movie = (props) =>{
//     return(
//         <article className='art'>
//             <img src={props.ImgURL} alt="" />
//             <h1>{props.title}</h1>
//             <p>{props.description}</p>
//         </article>
//     )
// }


// const Movie = (props) =>{
//     // de strucring method here
//     // const {title, ImgURL, description} = props
//     return(
//         <article className='art'>
//             <img src={ImgURL} alt="" />
//             <h1>{title}</h1>
//             <p>{description}</p>
//         </article>
//     )
// }

const Movie = ({title, ImgURL, description}) =>{
    return(
        <article className='art'>
            <img src={ImgURL} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
        </article>
    )
}




  
