class Game{
    constructor(){

    }
    start(){
        form=new Form()
        form.display()
        player=new Player()
        player.getpc()
    
    }
    getstate(){
        db.ref("gameState").on("value",(a)=>{
            gameState=a.val()
        })
    }
    setState(g){
        db.ref("/").update({gameState:g})
    }
}