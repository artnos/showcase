export const searchFilter = activeInputSearch => {
    // eslint-disable-next-line no-unused-vars
    return function ({ id, firstname, lastname, ...rest }) {
        if (activeInputSearch === "") {
            return true
        } else {
            const flatValues = Object.values(rest)

            const inputSearchList = activeInputSearch.split(" ")
            //type "ga oh" => [ga,oh];

            let inputMatch

            for (let i = 0; i < inputSearchList.length; i++) {
                //each letter
                inputMatch = false
                for (let j = 0; j < flatValues.length; j++) {
                    // console.log(
                    //     flatValues[j].toLowerCase(),
                    //     inputSearchList[i].toLowerCase(),
                    //     flatValues[j].toLowerCase().includes(inputSearchList[i].toLowerCase()),
                    // )
                    if (flatValues[j].toLowerCase().includes(inputSearchList[i].toLowerCase())) {
                        inputMatch = true
                        break
                    }
                }
                if (inputMatch === false) {
                    //kill it no need to match
                    //console.log("kill no match========")
                    break
                }
            }
            if (inputMatch) {
                //console.log("saving this one")
            }

            return inputMatch
        }
    }
}

export const regionFilter = activeRegion => {
    return function (profile) {
        if (activeRegion === "ALL") {
            return true
        } else if (activeRegion === "International" && profile.country != "United States") {
            return true
        } else if (activeRegion === "USA" && profile.country == "United States") {
            return true
        } else {
            return false
        }
    }
}

export const lastNameFilter = activeLetter => {
    return function (profile) {
        if (activeLetter === "") {
            return true
        } else {
            return profile.lastname.substring(0, 1).toLowerCase() === activeLetter
        }
    }
}

export const countryFilter = activeCountry => {
    return function (profile) {
        if (activeCountry === "" || activeCountry === null) {
            return true
        } else {
            return profile.country === activeCountry
        }
    }
}
