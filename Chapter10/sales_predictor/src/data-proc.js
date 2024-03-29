const dfd = require("danfojs-node")
const path = require("path")

async function processData() {
    const dataPath = path.join(__dirname, "dataset", "Train.csv")
    const salesDf = await dfd.read_csv(dataPath)
    salesDf.head().print()

    // Check and fill missing columns
    salesDf.isna().sum().print()
    salesDf.fillna({
        columns: ["Item_Weight", "Outlet_Size"],
        values: [salesDf['Item_Weight'].mean(), "Medium"],
        inplace: true
    })

    //label encode categorical feature
    let encoder = new dfd.LabelEncoder()
    let catCols = salesDf.select_dtypes(includes = ['string']).columns // get all categorical column names
    catCols.forEach(col => {
        encoder.fit(salesDf[col])
        enc_val = encoder.transform(salesDf[col])
        salesDf.addColumn({ column: col, values: enc_val })
    })

    //split data into train and target values
    let Xtrain, ytrain;
    Xtrain = salesDf.iloc({ columns: [`:${salesDf.columns.length - 1}`] })
    ytrain = salesDf['Item_Outlet_Sales']
    console.log(`Training Dataset Shape: ${Xtrain.shape}`)

    // Standardize the data with StandardScaler
    let scaler = new dfd.MinMaxScaler()
    scaler.fit(Xtrain)
    Xtrain = scaler.transform(Xtrain)

    Xtrain.tensor.print()
    ytrain.tensor.print()
    return [Xtrain.tensor, ytrain.tensor]
}

module.exports = { processData }
