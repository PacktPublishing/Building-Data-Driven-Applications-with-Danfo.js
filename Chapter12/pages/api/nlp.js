import { Result } from 'postcss'

const { SentimentAnalyzer } = require('node-nlp')
const { DataFrame } = require("danfojs-node")

export default async function SentimentApi(req, res) {

  if (req.method === "POST") {
    const sentiment = new SentimentAnalyzer({ language: 'en' })
    const { dfData, username } = req.body

    const df = new DataFrame(dfData)
    let removeUserRow = df.query({
      column: "users",
      is: "!=",
      to: username
    })
    //filter rows with tweet length <=1
    let filterByLength = removeUserRow.query({
      column: "length",
      is: ">",
      to: 1
    })


    let data = {
      positive: 0,
      negative: 0,
      neutral: 0
    }
    let sent = filterByLength["text"].values

    for (let i in sent) {
      const getSent = await sentiment.getSentiment(sent[i])

      if (getSent.vote === "negative") {
        data.negative += 1
      } else if (getSent.vote === "positive") {
        data.positive += 1
      } else {
        data.neutral += 1
      }
    }
    res.status(200).json(data)
  }


}