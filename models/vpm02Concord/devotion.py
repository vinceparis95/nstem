import pandas as pd;
import matplotlib.pyplot as plt



devotions = pd.read_excel("~/nstemData/devoQ1.xlsx")

devotions = devotions.loc[1:64,'Host':'4/26 F']
devotions = devotions.rename(columns={'Host':'day'})
devotions = devotions.drop(['Sub-cluster',
                            'Sector/Locality', 'Frequency',
                            'Count'], axis=1)
devotions = devotions.fillna(0)
devotions = devotions.set_index('day').T


print(devotions)
print(list(devotions.columns))

mohadjeri = devotions['Mohadjeri family']

plot = devotions.plot(legend=None,linewidth=7, alpha=0.14)
plot.set_ylabel('number')
plot.set_xlabel('days')
plt.xticks(fontsize=9, rotation=45)
plt.locator_params(axis='x',nbins=19)

plt.show()

# plot2 = devotions.plot(kind= "scatter", x='Host', y='sum',
# legend=None,linewidth=7, alpha=0.14)
# plt.show()

# devotions[['Mohadjeri family','Anisa new Bk 1 w/Nagiarry']].plot()
