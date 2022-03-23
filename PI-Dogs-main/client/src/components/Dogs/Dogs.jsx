export default function Dogs(name) {
    console.log(name)
    return (
        <div>


            name:{name.name}
            <img src={name.image} alt={name.name} />


        </div>
    )
}