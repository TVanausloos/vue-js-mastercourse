const app = Vue.createApp({
    data(){
        return {
            name: 'Thomas Vanausloos',
            age: 32,
            imgUrl: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'

        };
    },
    methods: {
        calculateAgeIn5Years(){
            return this.age + 5;
        },
        calculateRandomNr(){
            return Math.random();
        }
    }
});
app.mount('#assignment');