function getlocalLocation(location) {
    const val = localStorage.getItem('locationsData')
    if (val) {
        const newVal = JSON.parse(val)
        for (const key of newVal) {
            if ( key.id === location) {
                return key
            }
            
        }
        return null
    }
}

export default getlocalLocation