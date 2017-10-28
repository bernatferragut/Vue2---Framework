// JS => Now our data is the single source of truth !!!

vm = new Vue( {
    el:'#vue',
    data: {
        band: '',
        bands: [ 'TJAMC', 'RIDE', 'BOO RADLEYS', 'MVB'],
    },
    methods: {
        addBand: function(band) {
            this.bands.push(this.band);
            this.band = '';
        }
    },
    mounted() {
        console.log('Vue is ready!!!');
    }
});

