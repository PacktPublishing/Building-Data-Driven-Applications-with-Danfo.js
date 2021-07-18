const dfd = require("danfojs-node")
const path = require("path")

const ratingsDataPath = path.join(__dirname, "data/ratings.csv")
const booksDataPath = path.join(__dirname, "data/books.csv")

async function processData() {
    const ratingsDF = await dfd.read_csv(ratingsDataPath)
    const booksDF = await dfd.read_csv(booksDataPath)

    const mergedDf = dfd.merge({ left: ratingsDF, right: booksDF, on: ["book_id"], how: "inner" })

    // mergedDf.head().print()
    // console.log(mergedDf.shape)

    const cols2drop = ["image_url", "small_image_url", "language_code", "work_id", "isbn", "isbn13",]
    const mergedDfDropped = mergedDf.drop({ columns: cols2drop, axis: 1 })

    //label encode categorical feature
    const encoder = new dfd.LabelEncoder()
    const catCols = mergedDfDropped.select_dtypes(includes = ['string']).column_names // get all categorical column names
    catCols.forEach(col => {
        encoder.fit(mergedDfDropped[col])
        enc_val = encoder.transform(mergedDfDropped[col])
        mergedDfDropped.addColumn({ column: col, value: enc_val })
    })

    //split data into train and target values
    let xTrain = mergedDfDropped.iloc({ columns: [`:${mergedDfDropped.columns.length - 1}`] })
    const yTrain = (mergedDfDropped['rating']).tensor

    console.log(`Training Dataset Shape: ${xTrain.shape}`)

    const nUniqueBookId = (xTrain["book_id"]).max()
    const nUniqueUserId = (xTrain["user_id"]).max()
    // const nExtraFeatures = xTrain.shape[0]

    const bookIdTrainTensor = (xTrain["book_id"]).tensor
    const userIdTrainTensor = (xTrain["user_id"]).tensor

    // Standardize the data with StandardScaler
    let scaler = new dfd.StandardScaler()
    scaler.fit(xTrain)
    xTrain = scaler.transform(xTrain)

    xTrain = xTrain.fillna({ values: [-1] })

    console.log(nUniqueBookId, nUniqueUserId)
    // console.log(xTrain.tensor.arraySync());
    // console.log(bookIdTrainTensor.arraySync());
    // console.log(userIdTrainTensor.arraySync());

    return {
        trainingData: [xTrain.tensor, bookIdTrainTensor, userIdTrainTensor],
        targetData: yTrain,
        // nExtraFeatures,
        nUniqueBookId,
        nUniqueUserId
    }


    // await mergedDfDropped.to_csv("./output/mergedDfDropped.csv")
    // await xTrain.to_csv("./output/train.csv")

}

// processData()


// async function processData(ratingsDataPath) {
//     const ratingsDF = await dfd.read_csv(ratingsDataPath)

//     ratingsDF.head().print()

//     const nUniqueBookId = ratingsDF["book_id"].nunique()
//     const nUniqueUserId = ratingsDF["user_id"].nunique()

//     const bookIdTrainTensor = (ratingsDF["book_id"]).tensor
//     const userIdTrainTensor = (ratingsDF["user_id"]).tensor
//     const ratingsTrainTensor = (ratingsDF["rating"]).tensor

//     return {
//         trainingData: [bookIdTrainTensor, userIdTrainTensor],
//         targetData: ratingsTrainTensor,
//         nUniqueBookId,
//         nUniqueUserId
//     }
// }

module.exports = { processData }