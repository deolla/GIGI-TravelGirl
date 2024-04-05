function getFlight(flight) {
    const val = sessionStorage.getItem('cardsData')
    if (val) {
        const newVal = JSON.parse(val)
        for (const key of newVal) {
            if ( key.id === flight) {
                return key
            }
            
        }
        return null
    }
}

export default getFlight