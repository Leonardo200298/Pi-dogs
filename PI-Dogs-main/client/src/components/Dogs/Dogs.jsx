export default function Dogs(name) {
  console.log(name)
    return (
        <div>
            <h3>name: {name.name}</h3>
            <h3>life_span: {name.life_span}</h3>
            {/* <h3>weight:{name.weight}</h3> */}
            <h3>weight-max: {name.weightMax}</h3>
            <h3>weight-min: {name.weightMin}</h3>
            <h3> height-min: {name.heightMax}</h3>
            <h3> height-max: {name.heightMin}</h3>
            <img src={name.image} alt={name.name} />
        </div>
    )
}