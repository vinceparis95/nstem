import pandas as pd
import numpy as np
from matplotlib import pyplot as plt
from scipy.interpolate import interpolate, interp1d


# #################################
# # Data Amplitudes
#
# df=pd.read_csv("~/data/poli.csv")
# print(df)
#
# #################################
# #Wave Probability
# amps = (df.right + df.left)
# wave = amps**2
# print(wave)
# df['concord'] = wave
# print(df)
#
# #################################
#
# plot = df.plot(x='issue',
#              linewidth=9,
#              alpha=0.36)
# plot.set_ylabel('score')
# plot.set_xlabel('issues')
# plot.legend()
# plt.show()
#
# concord=df['concord'].values
# left=df['left'].values
# right=df['right'].values
#
#
# ######################################
# ######################################
#
# import numpy as np
# import pandas as pd
# from scipy import interpolate
# import matplotlib.pyplot as plt
#
# d = {
#      'issue': ['end div',
#                'for trump',
#                'aisle cross',
#                'for blm',
#                'help world',
#                'service',
#                'community'],
#      'right': [1, 1, 1, -1, 1, 1, 1],
#      'left': [1, -1, 1, 1, 1, 1, 1],
#      'concord': [4, 0, 4, 0, 4, 4, 4]
#      }
# df = pd.DataFrame.from_dict(d)
#
# #####################################
#
# x = df['issue'].values
# concord = df['concord'].values
# left = df['left'].values
# right = df['right'].values
#
# #####################################
#
# n = len(x)
# x_map = np.arange(0,n)
# dx = 0.1
# x_int = np.arange(0, n - 1, dx)  # vector where we interpolate
#
# # We create the interpolants our three datasets separately:
# f_concord = interpolate.interp1d(x_map, concord, 'quadratic')
# f_left = interpolate.interp1d(x_map, left, 'quadratic')
# f_right = interpolate.interp1d(x_map, right, 'quadratic')
#
# # And interpolate in the resampled x-coordinates:quadratic
# concord_int = f_concord(x_int)
# left_int = f_left(x_int)
# right_int = f_right(x_int)
#
# # Finally, plot the interpolated data:
# fig, ax = plt.subplots()
# ax.plot(x_int, right_int, lw = 14, alpha = 0.27, label = 'right')
# ax.plot(x_int, left_int, lw = 14, alpha = 0.27, label = 'left')
# ax.plot(x_int, concord_int, lw = 14, alpha = 0.27, label = 'concord')
# ax.set_xlabel('issues')
# ax.set_ylabel('score')
# # Set the correct xticks
# ax.set_xticks(x_map)
# ax.set_xticklabels(x)
# fig.legend(bbox_to_anchor=(0.7, 0.3), loc='upper left', ncol=1)
# fig.show()
#
# ##############################################################
# ###############################################################
#
# import numpy as np
# import pandas as pd
# from scipy import interpolate
# import matplotlib.pyplot as plt
#
# d = {
#      'issue': ['end div',
#                'for trump',
#                'aisle cross',
#                'for blm',
#                'help world',
#                'service',
#                'community'],
#      'p1': [1, 1, 1, -1, 1, 1, 1],
#      'p2': [1, -1, 1, 1, 1, 1, 1],
#      'p3': [1, 2, 3,  2, 1, 2, 2],
#      'p4': [1, 1, 1, -1, 1, 1, 1],
#      'p5': [1, -1, 1, 1, 1, 1, 1],
#      'p6': [1, 2, 3,  2, 1, 2, 2],
#      'p7': [1, 1, 1, -1, 1, 1, 1],
#      'p8': [1, -1, 1, 1, 1, 1, 1],
#      'p9': [1, 2, 3,  2, 1, 2, 2],
#
#      }
# df = pd.DataFrame.from_dict(d)
#
# #####################################
#
# x2 = df['issue'].values
# p1 = df['p1'].values
# p2 = df['p2'].values
# p3 = df['p3'].values
# p4 = df['p4'].values
# p5 = df['p5'].values
# p6 = df['p6'].values
# p7 = df['p7'].values
# p8 = df['p8'].values
# p9 = df['p9'].values
#
# #####################################
# wave = (p1+p2+p3+p4+p5+p6+p7+p8+p3)**2
# df['concord'] = wave
#
# n = len(x2)
# x_map = np.arange(0,n)
# dx = 0.1
# x_int = np.arange(0, n - 1, dx)  # vector where we interpolate
#
# # We create the interpolants our three datasets separately:
# f_concord = interpolate.interp1d(x_map, wave, 'quadratic')
# f_p1 = interpolate.interp1d(x_map, p1, 'quadratic')
# f_p2 = interpolate.interp1d(x_map, p2, 'quadratic')
# f_p3 = interpolate.interp1d(x_map, p3, 'quadratic')
# f_p4 = interpolate.interp1d(x_map, p4, 'quadratic')
# f_p5 = interpolate.interp1d(x_map, p5, 'quadratic')
# f_p6 = interpolate.interp1d(x_map, p6, 'quadratic')
# f_p7 = interpolate.interp1d(x_map, p7, 'quadratic')
# f_p8 = interpolate.interp1d(x_map, p8, 'quadratic')
# f_p9 = interpolate.interp1d(x_map, p9, 'quadratic')
#
# # And interpolate in the resampled x-coordinates:quadratic
# concord_int = f_concord(x_int)
# p1i = f_p1(x_int)
# p2i = f_p2(x_int)
# p3i = f_p3(x_int)
# p4i = f_p4(x_int)
# p5i = f_p5(x_int)
# p6i = f_p6(x_int)
# p7i = f_p7(x_int)
# p8i = f_p8(x_int)
# p9i = f_p9(x_int)
#
# # Finally, plot the interpolated data:
# fig, ax = plt.subplots()
# ax.plot(x_int, concord_int, lw = 9, alpha = 0.27, label = 'concord')
# ax.plot(x_int, p1i, lw = 9, alpha = 0.19, label = 'p1')
# ax.plot(x_int, p2i, lw = 9, alpha = 0.19, label = 'p2')
# ax.plot(x_int, p3i, lw = 9, alpha = 0.19, label = 'p3')
# ax.plot(x_int, p4i, lw = 9, alpha = 0.19, label = 'p4')
# ax.plot(x_int, p5i, lw = 9, alpha = 0.19, label = 'p5')
# ax.plot(x_int, p6i, lw = 9, alpha = 0.19, label = 'p6')
# ax.plot(x_int, p7i, lw = 9, alpha = 0.19, label = 'p7')
# ax.plot(x_int, p8i, lw = 9, alpha = 0.19, label = 'p8')
# ax.plot(x_int, p9i, lw = 9, alpha = 0.19, label = 'p9')
# ax.set_xlabel('issues')
# ax.set_ylabel('score')
# # Set the correct xticks
# ax.set_xticks(x_map)
# ax.set_xticklabels(x2)
# fig.legend(bbox_to_anchor=(0.47, .95), loc='upper left', ncol=3)
# fig.show()


##############################################################
##############################################################

# NUCLEUS

import numpy as np
import pandas as pd
from scipy import interpolate
import matplotlib.pyplot as plt


df = pd.read_csv("~/data/wpnucleus.csv")
print(df)
#####################################
#
space = df['space'].values
print(space)
# concord = df['concord'].values
tay = df['tay'].values
samir = df['samir'].values
anisa = df['anisa'].values
dorri = df['dorri'].values
vince = df['vince'].values
jaleh = df['jaleh'].values
susan= df['susan'].values

#Wave Probability
amps = (tay + samir + anisa+dorri+
        vince + jaleh + samir)
print(amps)
wave = amps**2
print(wave)
df['amps'] = amps
df['square'] = wave
print(df.loc[:, ['space', 'amps', 'square']])

# #####################################

n = len(space)
x_map = np.arange(0,n)
dx = 0.1
x_int = np.arange(0, n - 1, dx)  # vector where we interpolate

# We create the interpolants our three datasets separately:
iwave = interpolate.interp1d(x_map, wave, 'quadratic')
itay = interpolate.interp1d(x_map, tay, 'quadratic')
isamir = interpolate.interp1d(x_map, samir, 'quadratic')
ianisa = interpolate.interp1d(x_map, anisa, 'quadratic')
idorri = interpolate.interp1d(x_map, dorri, 'quadratic')
ivince = interpolate.interp1d(x_map, vince, 'quadratic')
ijaleh = interpolate.interp1d(x_map, jaleh, 'quadratic')
isusan = interpolate.interp1d(x_map, susan, 'quadratic')

# And interpolate in the resampled x-coordinates:quadratic
concord_int = iwave(x_int)
p1i = itay(x_int)
p2i = isamir(x_int)
p3i = ianisa(x_int)
p4i = idorri(x_int)
p5i = ivince(x_int)
p6i = ijaleh(x_int)
p7i = isusan(x_int)

# Finally, plot the interpolated data:
fig, ax = plt.subplots()
ax.plot(x_int, concord_int, lw = 9, alpha = 0.27, label = 'concord')
ax.plot(x_int, p1i, lw = 9, alpha = 0.19, label = 'p1')
ax.plot(x_int, p2i, lw = 9, alpha = 0.19, label = 'p2')
ax.plot(x_int, p3i, lw = 9, alpha = 0.19, label = 'p3')
ax.plot(x_int, p4i, lw = 9, alpha = 0.19, label = 'p4')
ax.plot(x_int, p5i, lw = 9, alpha = 0.19, label = 'p5')
ax.plot(x_int, p6i, lw = 9, alpha = 0.19, label = 'p6')
ax.plot(x_int, p7i, lw = 9, alpha = 0.19, label = 'p7')
ax.set_xlabel('space')
ax.set_ylabel('score')
# Set the correct xticks
ax.set_xticks(x_map)
ax.set_xticklabels(space)
fig.show()