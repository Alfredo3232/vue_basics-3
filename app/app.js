const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = true;

                console.log("selected A");
            } else if (box === 'B') {
                this.boxBSelected = true;

                console.log("selected B");
            } else if (box === 'C') {
                this.boxCSelected = true;

                console.log("selected C");
            }
        }
    }
})

app.mount("#styling")