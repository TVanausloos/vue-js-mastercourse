
const app = Vue.createApp({
    data(){
        return {
            output: '',
            outputOnEnter: '',
        }
    },
    methods: {
        showAlert(){
            alert("Warning!");
        },

        updateOutput(event){
            this.output = event.target.value;
        },
        updateOutputOnEnter(event){
            this.outputOnEnter = event.target.value;
        }

    }
});

app.mount('#assignment')
