function trace(s) {
    // que fait cette fonction ?
    window.console && console.log(s);

    // identique à
    // if (window.console !== "undefined") {
    // 	console.log(s);
    // }
}

function debug(s) {
    // affiche un nombre de messages limité par un compteur
    // affiche le compteur si s n'est pas fourni
    if (s == undefined) return compteurDebug;
    if (compteurDebug++ < maxDebug) {
        trace(s);
    }
    // e.g. après 10 affichages, la fonction ne fait plus rien 
    // comment remettre à 0 le compteur ?   
}

function creerCompteur() {
    let nombre = 0;

    return function () {
        nombre++;
        trace(nombre);
    };
}

var debugVersion2 = (function () {
    var compteur = 0;
    var max = 5;

    return function (message) {
        if (compteur > max) return;

        compteur++;
        if (message == undefined) {
            trace(compteur);
        } else {
            trace(message);
        }
    }
})();

var debugVersion3 = (function (borneMax) {

    var compteur = 0;
    if (borneMax == undefined) borneMax = 5;

    return {
        trace: function (message) {
            if (compteur++ < borneMax) {
                trace(message);
            }
        },
        reset: function () {
            compteur = 0;
        },
        getCompteur: function () {
            return compteur;
        },
        setCompteur: function (value) {
            compteur = value;
        }
    };
})();

function getElement(element) {
    if (typeof element === "string") {
        return document.getElementById(element);
    }
    return element;
}



function show(refOrId, display) {
    // affiche l'élément dont la référence ou l'id est fourni
    // le paramètre display doit valoir block par défaut

    element = getElement(refOrId);

    if (display == undefined) {
        element.style.display = "block";
    } else {
        element.style.display = "";
    }
}

function hide(refOrId) {
    // cache l'élément dont la référence ou l'id est fourni

    element = getElement(refOrId);

    if (element) element.style.display = "none";
}

function html(refOrId, val) {
    // affecte une valeur à l'élément dont la référence ou l'id est fourni; si val n'est pas fourni, on renvoie son contenu

    element = getElement(refOrId);

    if (!element) { return null; }

    if (typeof val === "undefined") {
        return element.innerHTML;
    }

    element.innerHTML = val;
}

function val(refOrId, val) {
    // affecte une valeur à l'élément dont la référence ou l'id est fourni; si val n'est pas fourni, on renvoie son contenu
    // l'élément est un champ de formulaire
    // la fonction doit pouvoir manipuler l'état des champs de type checkbox et radio 

    element = getElement(refOrId);

    if (!element) { return null; }

    if (typeof val === "undefined") {
        return element.value;
    }

    element.value = val;

}

function check(refOrId, val) {
    element = getElement(refOrId);

    if (!element) { return null; }

    if (typeof val === "undefined") {
        return element.checked;
    }

    element.value = val;


}