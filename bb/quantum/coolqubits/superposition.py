import cirq

###########################

# Superposition

qubit = cirq.GridQubit(0,0)

circuit = cirq.Circuit([
    cirq.H(qubit)
])

print(circuit)