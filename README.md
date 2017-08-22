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
// -----------------------------------------------------------------------------------------------//

# ticker
Simple Ticker to retrieve value of cryptocoins from Bitfinex


How to use:
1 - Install Bitfinex Rest API
  npm install bitfinex-api-node

2 - Download BetterTouchTool;

3 - Download ticker.js file ;

Sample to use:

Adjuste the Widget to Run Apple Script and Show Return Value
Press Advanced Configuration and put the script bellow

set value to do shell script "/usr/local/bin/node /Users/Your_user/directory/ticker.js 'coin_to_monitore'"
return value

Example:
set value to do shell script "/usr/local/bin/node /Users/Reinke/bitfinex/ticker.js 'btcusd'"
return value

Enjoy :-)
