let thumperNr = 8 //endre dette tallet for å programmere de ulike kaninene
let rabbitNames = ["T0", "T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12", "T13", "T14", "T15", "T16",]
music.playTone(440, 50)
music.playTone(880, 50)
music.playTone(1760, 50)
OrchestraInstrument.makeAThumper(rabbitNames[thumperNr], thumperType.thumpBit)
OrchestraInstrument.slaveToBun(thumperNr, bunSolactions.tok)