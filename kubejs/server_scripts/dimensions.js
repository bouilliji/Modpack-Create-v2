EntityEvents.death(event => {
    const { entity, source } = event;
    const player = source.player;

    let targetPlayers = player ? [player] : event.level.getEntitiesWithin(entity.boundingBox.inflate(32)).filter(e => e.isPlayer());

    if (targetPlayers.length === 0) return;

    let nbtString = entity.nbt.toString();

    for (let p of targetPlayers) {
        if (nbtString.includes('apoth.boss')) {
            if (!p.persistentData.getBoolean('nether_unlocked')) {
                p.persistentData.putBoolean('nether_unlocked', true);
                p.tell(Text.gold("🔥 Vous avez vaincu un Boss épique d'Apotheosis ! L'accès au Nether est désormais déverrouillé."));
            }
        }
        if (entity.type === 'ars_nouveau:wilden_boss') {
            if (!p.persistentData.getBoolean('end_unlocked')) {
                p.persistentData.putBoolean('end_unlocked', true);
                p.tell(Text.lightPurple("🔮q Vous avez terrassé la Chimère Wilden ! Les portails de l'End s'ouvrent désormais à vous."));
            }
        }
    }
});

NativeEvents.onEvent('net.neoforged.neoforge.event.entity.EntityTravelToDimensionEvent', event => {
    const entity = event.entity;
    if (!entity.isPlayer()) return;

    const targetDim = event.dimension.location().toString();

    if (targetDim === 'minecraft:the_nether') {
        if (!entity.persistentData.getBoolean('nether_unlocked')) {
            entity.setStatusMessage(Text.red("🔒 Le portail vous repousse ! Vous devez d'abord vaincre un Boss épique d'Apotheosis."));
            event.setCanceled(true);
        }
    }

    if (targetDim === 'minecraft:the_end') {
        if (!entity.persistentData.getBoolean('end_unlocked')) {
            entity.setStatusMessage(Text.darkPurple("🔒 Le vide vous rejette ! Vous devez d'abord vaincre la Wilden Chimera."));
            event.setCanceled(true);
        }
    }

});