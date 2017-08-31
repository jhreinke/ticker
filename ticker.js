//
// -----------------------------------------------------------------------------------------------//
//							___________.____________  ____  __._____________________    
//							\__    ___/|   \_   ___ \|    |/ _|\_   _____/\______   \   
//							  |    |   |   /    \  \/|      <   |    __)_  |       _/  
//							  |    |   |   \     \___|    |  \  |        \ |    |   \ 
//							  |____|   |___|\______  /____|__ \/_______  / |____|_  / 
//							                       \/        \/        \/         \/  
//
// Ticker for nodeJS BitFinex touchbar
// Author: J.H.Reinke
// Version: 1.0
// Date: 01/08/2017
//
//  Note:
// - 21/08/2017 - Ticker first version ;-)
//
// Example to use with BetterTouchTool + Apple Script :
//
// set value to do shell script "/usr/local/bin/node /Users/Reinke/bitfinex/ticker.js 'omgusd' "
// return value
//
// -----------------------------------------------------------------------------------------------//

const BFX = require('bitfinex-api-node')

const API_KEY = ''
const API_SECRET = ''
var VALUE = process.argv[2];

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  // the default value for minimumFractionDigits depends on the currency
  // and is usually already 2
});

const opts = {
  version: 2,
  transform: true
  }

const bws = new BFX(API_KEY, API_SECRET, opts).ws

bws.on('open', () => {
  bws.subscribeTicker(VALUE)
 
})

bws.on('ticker', (pair, ticker) => {
	
	switch(VALUE) {
    case "btcusd":
        console.log(formatter.format(ticker.LAST_PRICE))
        break;   
    case "omgbtc":
 	// Last Price - Your buy price X your coin ammount| Last Price of coin 
        console.log(((ticker.LAST_PRICE - 0.0023710) * 259.32655948).toFixed(7) + " | Value: " + ticker.LAST_PRICE.toFixed(8))
        break;
    default:
        console.log(ticker.LAST_PRICE)
}
  process.exit(0)

})

bws.on('error', console.error)
