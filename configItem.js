class ConfigItem{ //név;ár;kategória;verseny;path;id
    constructor(row){
        const splittedData = row.split(";")
        this.name = splittedData[0]
        this.price = Number(splittedData[1])
        this.category = splittedData[2]
        this.race = splittedData[3]
        this.path = splittedData[4]
        this.id = splittedData[5]
    }

    static loadData(data){
        let configItems = []
        data.forEach(element => {
            configItems.push(new ConfigItem(element))
        });
        return configItems
    }
}

export {ConfigItem}