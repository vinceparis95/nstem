import matplotlib.pyplot as plt
import pandas as pd

#####################
# D a t a F r a m e s
#####################

# Build a DataFrame
# quanta = pd.read_csv('~/nstemData/particles.csv')
# print(quanta.info())
#
# # Load Data into a DataFrame
# print("median: ", quanta['charge'].median())
# print("mean: ", quanta['charge'].mean())
# print("stdev: ", quanta['charge'].std())
# print("min: ", quanta['charge'].min())
# print("max: ", quanta['charge'].max())
#
# print("summary:\n", quanta['charge'].describe())
# df = pd.read_csv("~/nstem/webbing/nstemb/src/Models/Maps/data/df3.csv")
# print(df.columns)
# df2 = pd.DataFrame()
# df2['dates'] = df.pop('Unnamed: 0')

df = pd.read_csv("~/nstem/webbing/nstemb/src/Models/Maps/data/cobbs1.csv")
df = df.drop(['Unnamed: 0'], axis=1)
df.to_json("~/nstem/webbing/nstemb/src/Models/Maps/data/cobbs1.json")
print(df.columns)


# df = df.to_json("~/nstem/webbing/nstemb/src/Models/Maps/data/df3.json")
