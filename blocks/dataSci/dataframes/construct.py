import matplotlib.pyplot as plt
import pandas as pd

#####################
# D a t a F r a m e s
#####################

# Build a DataFrame
quanta = pd.read_csv('~/nstemData/particles.csv')
print(quanta.info())

# Load Data into a DataFrame
print("median: ", quanta['charge'].median())
print("mean: ", quanta['charge'].mean())
print("stdev: ", quanta['charge'].std())
print("min: ", quanta['charge'].min())
print("max: ", quanta['charge'].max())

print("summary:\n", quanta['charge'].describe())

