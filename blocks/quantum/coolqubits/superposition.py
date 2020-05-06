import cirq

###########################

# Superposition

qubit = cirq.GridQubit(0,0)

circuit = cirq.Circuit([
    cirq.H(qubit),
    cirq.measure(qubit)

])

sim = cirq.Simulator()
res = sim.run(circuit, repetitions=9)

print(circuit)
print(res)
