(function () {
    objectDefault = {
        periode: 5,
        traiter: function () { trace("traitement") },
        continuer: function () { return true; }
    }

    function enrichir(objectDefault, objectModif) {
        // renvoie un nouvel objet ayant complété les propriétés absentes de l'objet de configuration
        // par les valeurs de l'objet par défaut

        var objectFinal = {};

        for (nomProp in objectDefault) {
            if (objectModif[nomProp] != undefined)
                objectFinal[nomProp] = objectModif[nomProp];
            else
                objectFinal[nomProp] = objectDefault[nomProp];
        }

        return objectFinal;
    }

    function boucleV2(objectConfig) {

        var objectReel = enrichir(objectDefault, objectConfig);

        // boucle utilisant les arguments
        var rep = function () {
            if (objectReel.continuer()) {
                objectReel.traiter();
                window.setTimeout(rep, objectReel.periode * 1000);
            }
        }
        rep();

    }

    // le code ainsi on peut accéder à la variable objectDefault d'où la necessicté d'une closure
    // Mais dans ce cas boucleV2({}); n'est plus globale en l'état.
    // Il faut donc l'exposer uniquement

    window.boucleV2 = boucleV2;

})();