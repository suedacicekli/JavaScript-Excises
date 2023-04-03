const seriesList = list => {

    list.forEach((series, index) => {
        console.log(`${index + 1}. ${series}`)
    });
};

seriesList(["Firefly", "The Mandalorian", "Breaking Bad"]);