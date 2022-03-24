export default function Paged({dogPerPage,paged,dogs}){
  /*   console.log('dog por pagina',dogPerPage)
    console.log('paginado',paged)
    console.log('perros',dogs) */
    const numberOfPaged = []
    for (let i = 1; i < Math.ceil(dogs/dogPerPage); i++) {
        numberOfPaged.push(i)
        
    }
    
    return (
        
        <div>
           {numberOfPaged&&numberOfPaged.map(n =>(
                    <>
                        <button onClick={() => paged(n)} key={n}>{n} </button>
                    </>
                ))
                }
        </div>
    )
}