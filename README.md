Super simplified version of eth-poa bridge.

There is no actual bridge contract, we simulate it
by listening to transfers of 'Dai' to the 0x000.. address,
and issue the corresponding amount of dai to the address which
sent the dai on the other chain.