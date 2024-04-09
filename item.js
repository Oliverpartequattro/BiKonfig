class Bike{
    constructor(row){
        const splittedData = row.split(";")
        this.name = splittedData[0]
        this.year = splittedData[1]
        this.price = Number(splittedData[2])
        this.condition = splittedData[3]
        this.id = Number(splittedData[4])
    }

    static loadData(data){
        let bikes = []
        data.forEach(element => {
            bikes.push(new Bike(element))
        });
        return bikes
    }
}

export {Bike}