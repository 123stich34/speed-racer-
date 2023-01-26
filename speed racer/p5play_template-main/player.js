class Player {
    constructor(){
    this.name=""
    this.index=null
    this.x=0 
    this.y=0

    }
     getpc(){
        db.ref("pc").on("value",(a)=>{
            pc=a.val()
        })
     }
     setpc(){
        db.ref("/").update({pc:pc})
        
     }
     adda(){
        db.ref("players/player"+this.index).update({name:this.name})
     }
}