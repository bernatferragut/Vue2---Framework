// Global View component creation
Vue.component('band',  {
    template: '<li> {{ message }} </li>',

    data() {
        return {
            message: 'foobar';
        }
    }
});

// Vue Object
vm = new Vue( {
    el:'#vue',
    data: {
        bandsList: ['TJAMC','LOOP','RIDE'],
    }
});