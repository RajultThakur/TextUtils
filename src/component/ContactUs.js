import React,{useState} from 'react'
import {Link} from "react-router-dom"

function ContactUs(props) {
  const [more, setMore] = useState(false);
  const [less, setLess] = useState("Learn more");
  function aboutMore() {
      if(more === false){
          setMore(true);
          setLess("Less")
      }else{
          setMore(false);
          setLess("Learn more")
      }
  }
  let light = ({
    backgroundColor: "white",
    color: "black",
})
let dark = ({
    backgroundColor: "black",
    color: "white",
})
    return (
        <div className="jumbotron container mt-4"  style ={props.state ? dark : light}>
        <h1 className="display-4"><strong>Connect With Us!</strong></h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate porro debitis, dolorum aliquam repellendus qui nam ipsam, soluta facere facilis nobis est culpa alias omnis cum quo. Voluptatum, officia rerum..</p>
        {more ?<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ducimus unde voluptatem, atque incidunt, commodi quisquam fugiat facere culpa sed omnis dicta ab pariatur ipsa error quas totam. Maiores praesentium tenetur iure deleniti assumenda consequuntur distinctio ullam aut veritatis reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, natus voluptatum laborum sint tenetur ipsa quam molestias ducimus adipisci numquam quaerat repudiandae perspiciatis. Quod nisi repellat dicta. Voluptatum, nobis accusantium repudiandae perspiciatis assumenda dolorem odit ullam cumque consequatur. Eligendi dolor pariatur quaerat voluptate aspernatur. Placeat vero dolore est corrupti sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sed blanditiis at officiis, ut autem expedita? Facilis nisi vero, sed a accusantium excepturi harum facere cumque mollitia animi consequuntur! Illo.</p> : ""}
  <button className="btn btn-primary" onClick ={aboutMore}>{less}</button>
      </div>
    )
}

export default ContactUs
