
type nameprops ={
    name?:string
}


const Greet = (props:nameprops) => {
  return (
    <div>
      Hello {props.name ? props.name : "Guest"}
    </div>
  )
}

export default Greet
