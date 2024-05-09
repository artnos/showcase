const allProfiles = [
    {
        address: "St.-Petersburg, Russia",
        country: "Russia",
        degree: "PhD",
        firstname: "Dmitry",
        fullname: "Dmitry Zrezvev",
        id: "6726",
        institution: "Federal Almazov North-West Research Centre",
        lastname: "Zrezvev",
        title: "MD",
    },
    {
        address: "St.-Petersburg, Russia",
        country: "Canada",
        degree: "PhD",
        firstname: "Dmitry",
        fullname: "Dmitry Zrezvev",
        id: "6726",
        institution: "Federal Almazov North-West Medical Research Centre",
        lastname: "Zrezvev",

        title: "MD",
    },
    {
        address: "99 midland",
        country: "USA",
        degree: "PhD",
        firstname: "Greg",
        fullname: "Greg Smith",
        id: "6726",
        institution: "Cors Hospital",
        lastname: "Smith",
        title: "MD",
    },
]

const input = "Dmi ca"
const inputSearch = input.split(" ")
console.log("searching:", input)
const result = allProfiles.filter(profile => {
    if (inputSearch === "") {
        return true
    } else {
        const flatValues = Object.values(profile)
        let inputMatch

        for (let i = 0; i < inputSearch.length; i++) {
            //each letter
            inputMatch = false
            for (let j = 0; j < flatValues.length; j++) {
                console.log(
                    flatValues[j].toLowerCase(),
                    inputSearch[i].toLowerCase(),
                    flatValues[j].toLowerCase().includes(inputSearch[i].toLowerCase()),
                )
                if (flatValues[j].toLowerCase().includes(inputSearch[i].toLowerCase())) {
                    inputMatch = true
                    break
                }
            }
            if (inputMatch === false) {
                //kill it no need to match
                console.log("kill no match========")
                break
            }
        }
        if (inputMatch) {
            console.log("saving this one")
        }

        return inputMatch
    }
})

console.log("==============================")
console.log(result)
