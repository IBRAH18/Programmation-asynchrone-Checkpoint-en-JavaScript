/* -------------------- TACHE 01 : ITERATION AVEC ASYNC / AWAIT -------------------- */

const arrayValues = ["Marc", "Anne", "Gilbert", "Vincent", "Arnaud", "Sylvie"];

async function iterateWhitAsyncAwait(array) {
    for (let i = 0; i < array.length; i++) {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(array[i]);
                resolve();
            }, 1000);
        });
    }

    try {
        console.log("Toutes les valeurs ont été enrégistrées avec un délai de 1 seconde !");      
    }

    catch (err) {
        console.error("Une erreur est survenue !");
    }
};

// iterateWhitAsyncAwait(arrayValues);




/* -------------------- TACHE 02 & 03 : EN ATTENTE D'APPEL & GESTION DES ERREURS AVEC ASYNC/AWAIT -------------------- */

async function waitCall() {
    console.log("Récupération des données des utilisateurs ...")

    const rq = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
        }
    });

    if (rq.ok === true) {
        const data = await rq.json()
        return data;
    }

    else {
        throw new Error('Erreur 404 : Impossible de contacter le serveur');
    };
};

/* waitCall()
    .then((users) => {
        for (let i = 0; i < users.length; i++) {
            const user = users[i]
            console.log(`NOM : ${user.name} / EMAIL : ${user.email}`);               
        };
    })
    .catch((error) => {
        alert(error.message);
    });
 */




