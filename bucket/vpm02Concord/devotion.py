import pandas as pd;
import matplotlib.pyplot as plt



devotions = pd.read_excel("~/nstemData/devoQ1.xlsx")
devotions.rename(columns={'Host':'day'}, inplace=True)
devotions.set_index('day')
devotions = devotions.loc[1:64,'day':'12/29 F']
devotions = devotions.drop(['Sub-cluster',
                            'Sector/Locality', 'Frequency',
                            'Count'], axis=1)
devotions = devotions.fillna(0)
# devotions = devotions.transpose()
print(devotions.head())
print(list(devotions.columns))


# devotions[['Mohadjeri family','Anisa new Bk 1 w/Nagiarry']].plot()
