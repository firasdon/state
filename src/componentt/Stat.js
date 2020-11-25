import React from 'react'

class Stat extends React.Component {
   state={
       profil : 
           [{Name : "FFull Name : Mohamed Firas Bechedlli" , isComplete:false, 
        Bio : " Bio : we can als take any adher momnt to be suscologie in the room and all street",
        id :  0 ,}
        ] , 
      
            } 
            handleRemouve(){
                const newtext =  ''   
               this.setState ({profil : newtext   }  )
            }


render () { 

    return (
        <div className='lkol'>
            <h1>{this.state.profil.Name}</h1>
            <h2>{this.state.profil.Bio} </h2>
            <button onClick={() => this.handleRemouve()}  >Delete</button>
            
        </div>
    )
}
}

export default Stat
