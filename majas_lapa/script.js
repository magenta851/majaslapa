var Galcta = document.getElementById("Galcta"); /* atrod elementu ar id galacta */
var ctx = Galcta.getContext("2d"); /* dabū otro dimensiju priekš kanvas zīmējuma */

function paradiAprakstu(planeta) { /* funkcija notiek kad onclick uz pasaules bildēm. kad ir noklikšķinātsz tad rāda aprakstu un nosaukumu pasaulēm */
    var nosaukums = document.getElementById('planetas-nosaukums');
    var apraksts = document.getElementById('planetas-apraksts');
    var aprakstsBloks = document.getElementById('apraksts');

    var planētuApraksti = { /* pasaules apraksti */
        'merkurijs': 'Merkurijs ir vistuvāk Saulei esošā planēta un vismazākā Saules sistēmā.', /* pirmais vārds ir nosaukums un teksts ir apraksts kas parādās funkcijā */
        'venēra': 'Venēra ir ļoti karsta un tai ir biezi mākoņi, kas rada siltumnīcas efektu.',
        'zeme': 'Zeme ir vienīgā zināmā planēta, kur pastāv dzīvība.',
        'mars': 'Marss ir pazīstams kā "Sarkanā planēta" un, iespējams, kādreiz uz tās bija ūdens.',
        'jupiters': 'Jupiters ir lielākā planēta Saules sistēmā ar milzīgu vētru - Lielo sarkano plankumu.',
        'saturns': 'Saturnam ir smuki gredzeni, kas veidoti no ledus un akmeņiem.',
        'urans': 'Urāns ir dīvains, jo rotē uz sāniem un tam ir zilgani zaļa krāsa.',
        'neptuns': 'Neptūns ir ļoti vētraina planēta ar spēcīgām vētrām un dziļu zilu krāsu.'
    };

    nosaukums.innerText = planeta.charAt(0).toUpperCase() + planeta.slice(1); /* leik lai pirmais burts nosaukumiem ir liels */
    apraksts.innerText = planētuApraksti[planeta]; /* ņem no planētām aprakstus */
    aprakstsBloks.style.display = 'block';
}