// JS => Now our data is the single source of truth !!!

vm = new Vue( {
    el:'#vue',
    data: {
        title: 'title canged with javascript',
        content: 'This is the content',
        isLoading: false,
    },
    methods: {
        action1: function() {
            console.log('you just cliced me!');
            this.isLoading = !this.loading;
        }
    },
    mounted() {
        console.log('Vue is ready!!!');
        // this.isLoading = false;
        console.log(this.isLoading);
    }
});

