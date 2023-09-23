cd ezkl

./ezkl gen-witness -D input.json -M network.ezkl -S settings.json

./ezkl prove -M network.ezkl --witness witness.json --pk-path=pk.key --proof-path=model.proof --srs-path=kzg.srs --settings-path=settings.json

