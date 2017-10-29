// JS => Now our data is the single source of truth !!!

vm = new Vue( {
    el:'#vue',
    data: {
        message: 'Bonjour Bernat!',
        tasks: [
            { description: 'Finish Vue course', completed: true },
            { description: 'Clean Floor with Cleaner', completed: false },
            { description: 'Clean Toilet', completed: false },
            { description: 'Think about weekly classes', completed: false },
            { description: 'Check the EOS registration thing', completed: false },
            { description: 'Relax reading Computer Philosophy', completed: true },
        ]
    },
    methods: {
        
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('');
        },
        completedTasks: function() {
            return this.tasks.filter( task => task.completed);
        }
    },
    mounted() {
        console.log('Vue is ready!!!');
    }
});
