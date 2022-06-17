new Vue({
    el: "#app",
    data: {
        xa: [],
        counter:0,
    },
    methods: {
        generateEmail() {
            
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((emailGenerata) => {
                    
                    this.xa.push(emailGenerata.data.response)
                    this.counter++
                    
                })
        },
        generateArray(){
            for(let i=0;i<10;i++){

                this.generateEmail()
              
            }
        },
        isgenerated(){
            if(this.counter==10){return true}
            else{
                return false
            }
        }
    },
})