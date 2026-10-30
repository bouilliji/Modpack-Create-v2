BlockEvents.rightClicked(event => {
    const { block, item, player, level, hand } = event;

    // Évite le double déclenchement par interragir avec les deux mains
    if (hand != 'main_hand') return;

    // Chaîne d'amélioration des blocs de Entroized Fluix
    const upgrades = {
        'extendedae:entro_budding_hardly': 'extendedae:entro_budding_half',
        'extendedae:entro_budding_half': 'extendedae:entro_budding_mostly',
        'extendedae:entro_budding_mostly': 'extendedae:entro_budding_fully'
    };

    // Vérifie si le bloc cliqué est un Budding de Entroized
    if (upgrades[block.id]) {
        
        // Comprend le tag de poudre d'Ender Pearl
        if (item.hasTag('c:dusts/ender_pearl')) {
            
            // Consomme exactement 1 poudre (sauf en mode créatif)
            if (!player.isCreative()) {
                item.shrink(1);
            }

            // Succès : remplace par le niveau supérieur
            block.set(upgrades[block.id]);
            level.playSound(null, block.pos, 'block.amethyst_block.hit', 'blocks', 1.0, 1.2);

            // Annule l'action par défaut pour éviter de poser des blocs
            event.cancel();
        }
    }
});