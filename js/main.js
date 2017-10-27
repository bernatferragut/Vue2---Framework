// JS => Now our data is the single source of truth !!!

vm = new Vue( {
    el:'#area',
    data: {
        bands: [ 'TJAMC', 'RIDE', 'BOO RADLEYS', 'MVB'],
    },
    mounted() {
        // selections
        let bandInput = document.querySelector('input');
        let buttonInput = document.querySelector('button');
        // events
        buttonInput.addEventListener('click', function() {
            vm.bands.push(bandInput.value);
            bandInput.value = '';
        })
        console.log('ready to go !');
    }
});

