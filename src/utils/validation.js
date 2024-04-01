const validation=(form,signin)=>{
    let valid=[]
    if(signin){
        for(let e of Object.keys(form)){
          if(e==='email or phone'||e==='password'){
            if(form[e][1]==false){
              valid=[e,true]
              break
            }
          }
        }
    }
    else{
        for(let e of Object.keys(form)){
            if(form[e][1]==false){
                valid=[e,true]
                break
            }
        }
    }
    return valid
}

export default validation