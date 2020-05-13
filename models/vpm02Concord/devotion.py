import pandas as pd;
import matplotlib.pyplot as plt

devoq3_19 = pd.read_excel("~/nstemData/devoq3_19.xlsx", index_col=False)
devoq1_20 = pd.read_excel("~/nstemData/devoq1_20.xlsx", index_col=False)

################################################################
# clean up quarterly DataFrames

#Q3/19 DataFrame (51 rows)
devoq3_19 = devoq3_19.loc[1:51,'Host':]
devoq3_19 = devoq3_19.rename(columns={'Host':'day'})
devoq3_19 = devoq3_19.drop(['Sub-cluster',
                            'Sector/Locality', 'Frequency',
                            'Count'], axis=1)
devoq3_19 = devoq3_19.fillna(0)
devoq3_19 = devoq3_19.set_index('day').T
devoq3_19 = devoq3_19.iloc[1:42]
devoq3_19 = devoq3_19.loc[:, ~devoq3_19.columns.duplicated()]
print(devoq3_19)

# Q1/20 DataFrame (64 rows)
devoq1_20 = devoq1_20.loc[1:64,'Host':]
devoq1_20 = devoq1_20.rename(columns={'Host':'day'})
devoq1_20 = devoq1_20.drop(['Sub-cluster',
                            'Sector/Locality', 'Frequency',
                            'Count'], axis=1)
devoq1_20 = devoq1_20.fillna(0)
devoq1_20 = devoq1_20.set_index('day').T
devoq1_20 = devoq1_20.iloc[1:34]
devoq1_20 = devoq1_20.loc[:, ~devoq1_20.columns.duplicated()]
# print(devoq1_20)

#########################################################
# Build master df and plot resulting DataFrame

# build master from quarterlies
df=pd.concat((devoq3_19,devoq1_20)).fillna(0)
df = df.drop(['MVCI Group'], axis=1)
df.to_csv('~/Desktop/df3.csv')
print(df.columns)

# create plot from master
plot = df.plot(legend=None,linewidth=7, alpha=0.09)
plot.set_ylabel('number')
plot.set_xlabel('days')
plt.xticks(fontsize=9, rotation=45)
plt.locator_params(axis='x',nbins=19)
plt.show()
