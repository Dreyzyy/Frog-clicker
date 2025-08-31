function siglasNumeros (num) {
    if(num >= 1_000_000_000) {
        return(num / 1_000_000_000).toFixed(1) + 'B'; //Bilhão
    } else if(num >= 1_000_000) {
        return(num / 1_000_000).toFixed(1) + 'M' //Milhão
    } else if(num >= 1_000) {
        return(num / 1_000).toFixed(1) + 'K' //Milhares
    }
}