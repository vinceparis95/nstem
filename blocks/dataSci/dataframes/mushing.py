import pandas as pd

################################################

# Merging

##############################################


#appending

fermions = pd.read_csv('~/data/fermions.csv')
bosons = pd.read_csv('~/data/bosons.csv')
# print(fermions.append(bosons))


#############################################


# Concat

# buckets = [fermions, bosons]
# # print(pd.concat(buckets, axis='columns'))
#
# # Concatenate dataframes
# bucket = pd.concat(buckets,
# keys=['fermions','bosons'], axis=0)
#
# print(bucket)
#
# # # Print bucket.info()
# print(bucket.info())


###########################################


# Joins

joinedBucket = [fermions,bosons]

innerjoinedBucket = pd.concat(joinedBucket,
                              keys=['type', 'charge'],axis=1, join='outer')
outerjoinedBucket = pd.concat(joinedBucket,
                              keys=['type', 'charge'],axis=1, join='outer')


# print(innerjoinedBucket)
# print(outerjoinedBucket)

###############################################


mergedBucket = pd.merge(fermions, bosons, on='type')
print(mergedBucket)