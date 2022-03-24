export default function Dogs(name) {
  
    return (
        <div>
            name:{name.name}
            <img src={name.image} alt={name.name} />
        </div>
    )
}