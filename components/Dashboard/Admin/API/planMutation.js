import merge from 'lodash.merge'
import clone from 'lodash.clone'
import { planIds } from 'common/constants'
import plansData from './plansData'

export const mutatePlanData = (file, updatePlan, updateSuccesfullUploads, planName, apiConsole, finished) => {
  apiConsole.log('mutating plan data')
  let planId
  if (planName === 'entry') planId = planIds.ENTRY
  else if (planName === 'premium') planId = planIds.PREMIUM
  else if (planName === 'business') planId = planIds.BUSINESS
  else if (planName === 'fund') planId = planIds.FUND

  let { backtestedData, latestSells, portfolioYields, launchStatistics, statistics, suggestions } = plansData[planName]

  if (file.name.includes('weekly')) {
    apiConsole.log('mutating weekly data')
    // keep model "trades" from suggestions
    apiConsole.log('filter out existing trades from suggestions')
    const modelSuggestions = suggestions.filter(sugg => sugg.model)
    // concat suggestions with new suggestions
    apiConsole.log('concat trades with new suggestions')
    suggestions = file.data.actionable.concat(modelSuggestions)
  } else if (file.name.includes('monthly')) {
    apiConsole.log('mutating monthly data')
    // update portfolioYields
    portfolioYields = file.data.logs

    apiConsole.log('adding latest sells')
    // add to latestSells (& pop if more than 10)
    file.data.actionable.forEach(sugg => {
      if (sugg.action === 'SELL') {
        const newSell = {
          originalPrice: sugg.original_purchase,
          sellPrice: sugg.suggested_price,
          ticker: sugg.ticker,
          name: sugg.name || sugg.systemname,
          return: Number((((sugg.suggested_price - sugg.original_purchase) * 100) / sugg.original_purchase).toFixed(2)),
        }
        latestSells = [newSell].concat(latestSells)
        if (latestSells.length > 10) {
          latestSells.pop()
        }
      }
    })

    apiConsole.log('make latest sells unique')
    // Make sure latestSells is unique
    const latestSellTickers = latestSells.map(sell => sell.ticker)
    latestSells = latestSells.filter((sell, pos) => latestSellTickers.indexOf(sell.ticker) === pos)

    apiConsole.log('concat trades to suggestions')
    // concat model suggestions "trades"
    const weeklySuggestions = suggestions.filter(sugg => !sugg.model)
    let modelSuggestions = []
    if (file.data.actionable) {
      modelSuggestions = file.data.actionable.map(sugg => {
        sugg.model = true
        return sugg
      })
    }

    suggestions = weeklySuggestions.concat(modelSuggestions)

    // update percentInCash
    apiConsole.log('update percent in cash')
    const percentInCash = file.data.portfolio[file.data.portfolio.length - 1].percentage_weight

    // update statistics
    apiConsole.log('updating statistics')
    launchStatistics = merge(launchStatistics, file.data.statistics, { percentInCash })
  } else if (file.name.includes('annual')) {
    apiConsole.log('mutating annual data')
    statistics = clone(statistics)
    apiConsole.log('updating statistics')
    statistics.winRatio = 100 - (statistics.negatives / (statistics.positives + statistics.negatives)) * 100
    statistics = merge(statistics, file.data.statistics)
    apiConsole.log('set backtested data')
    backtestedData = file.data.logs
  }

  apiConsole.log('run updatePlan mutation')

  updatePlan({
    variables: {
      id: planId,
      backtestedData,
      latestSells,
      portfolio: file.data.portfolio || plansData[planName].portfolio,
      portfolioYields,
      statistics,
      launchStatistics,
      suggestions,
    },
  })
    .then(({ data }) => {
      apiConsole.log('SUCCESS: ' + planName + ' updated successfully - ' + file.name)
      plansData[planName] = data.updatePlan
      updateSuccesfullUploads()
      finished(null)
    })
    .catch(err => {
      apiConsole.error('ERROR: updating plan failed: ' + err)
      console.error('failed updating plan', err)

      finished(err)
    })
}

export const extractJSONFromFile = file =>
  new Promise((resolve, reject) => {
    const receivedJSON = (fileName, e) => {
      const lines = e.target.result
      try {
        const data = JSON.parse(lines)
        resolve({ data, name: fileName })
      } catch (error) {
        reject(error)
      }
    }

    const fr = new FileReader()
    fr.onload = receivedJSON.bind(null, file.name)
    fr.readAsText(file)
  })
