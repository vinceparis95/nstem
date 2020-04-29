from matplotlib import pyplot as plt
import pandas as pd

###################################
# download and plot data

# get data
eth = "~/data/eth.csv"
eth = pd.read_csv(eth)
print(eth.info())

# convert date column to datetime
eth['date'] = pd.to_datetime(eth['date'])

# plot and show data
ethplot = eth.plot(kind='scatter',
                   x='date',
                   y='CapMrktCurUSD')
plt.show()

# #############################################
# filter and slice columns

# filter
eth2b = eth.filter(items=['date', 'CapMrktCurUSD',
                          'BlkCnt'])

# slice
eth2c = eth2b.loc[1586:1723]
ethplot2 = eth2c.plot(kind='line',
                      x='date',
                      y='CapMrktCurUSD')

plt.show()
print(eth2c.info())

#########################################