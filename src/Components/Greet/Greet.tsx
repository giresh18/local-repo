
type nameprops ={
    name?:string
}


const Greet = (props:nameprops) => {
  return (
    <div>
      Hello {props.name}
    </div>
  )
}

export default Greet
