
function createSpell (name, isEvil, energyRequired) {
    if (typeof name !== "string" || typeof isEvil !== "boolean" || typeof energyRequired !== "number") {
        throw new Error("Invalid input")
    }
    return {
        name,
        isEvil,
        energyRequired
    }
}

const allSpells = [
        createSpell("Turn enemy into a newt", true, 5.1),
        createSpell("Conjure some gold for a local charity", false, 2.99),
        createSpell("Give a deaf person the ability to heal", false, 12.2),
        createSpell("Make yourself emperor of the universe", true, 100.0),
        createSpell("Convince your relatives your political views are correct", false, 2921.5)
    ]



const displaySpellBook = (spellBook) => {
    console.log(spellBook.title)
    for (const spell of spellBook.spells) {
        console.log(spell.name)
    }
}

const makeEvilSpellBook = (spellBook) => {
    const evilSpellBook = {
        title: "Evil Book",
        spells: spellBook.filter(spell => spell.isEvil)
    }
    return evilSpellBook
}

const makeGoodSpellBook = (spellBook) => {
    const goodSpellBook = {
        title: "Good Book",
        spells: spellBook.filter(spell => !spell.isEvil)
    }
    return goodSpellBook
}






console.log("Do you believe in magic?")
console.log("------------------------")

const goodBook = makeGoodSpellBook(allSpells)
const evilBook = makeEvilSpellBook(allSpells)

displaySpellBook(goodBook)
console.log("")
displaySpellBook(evilBook)