// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {
    event.remove({ output: 'ae2:inscriber' })
    event.shaped('ae2:inscriber', [
        'FMF',
        'P F',
        'FMF'
    ], {
        M: 'create:mechanical_press',
        F: 'minecraft:iron_ingot',
        P: 'create:precision_mechanism'
    }),


    event.recipes.create.mixing(
        'create:rose_quartz',                  // résultat
        ['minecraft:iron_block', 'minecraft:redstone_block','minecraft:amethyst_block', Fluid.of('minecraft:water', 1000)]    // ingrédients
    ),

    event.remove({ output: 'enderio:void_chassis' })
    event.shaped('enderio:void_chassis', [
        'FGF',
        'GPG',
        'FGF'
    ], {
        G: 'enderio:grains_of_infinity',
        F: 'minecraft:iron_ingot',
        P: 'create:precision_mechanism'
    }),

    event.remove({ output: 'naturesaura:gold_fiber' })
    event.recipes.create.compacting(
        'naturesaura:gold_fiber',
        ['minecraft:gold_ingot', Ingredient.of('#minecraft:leaves'), 'minecraft:short_grass']
    ),


    event.custom({
        type: 'naturesaura:altar',
        input: { item: 'naturesaura:infused_iron' },
        output: { id: 'apotheosis:gem_dust', count: 1 },
        aura: 5000,
        time: 100
    })
    event.remove({ output: 'ars_nouveau:imbuement_chamber' })
    event.shaped('ars_nouveau:imbuement_chamber', [
        'ATA',
        'A A',
        'ATA'
    ], {
        T: 'naturesaura:tainted_gold',
        A: 'ars_nouveau:archwood_planks',
    })
    event.remove({ output: 'ad_astra:nasa_workbench' })
    event.shaped('ad_astra:nasa_workbench', [
        'RPR',
        'DCD',
        'PBP'
    ], {
        R: 'createaddition:iron_rod',
        P: 'ad_astra:steel_plate',
        B: 'mekanism:block_steel',
        D: 'minecraft:dragon_head',
        C: 'minecraft:crafting_table'
    })
    event.remove({ output: 'powah:energizing_orb' })
    event.shaped('powah:energizing_orb', [
        'GGG',
        'GPG',
        'RCR'
    ], {
        R: 'powah:dielectric_rod_horizontal',
        P: 'powah:dielectric_casing',
        C: Ingredient.of('#astralsorcery:celestial_crystal'),
        G: Ingredient.of('#c:glass_blocks')
    })
    event.remove({ output: 'forbidden_arcanus:mundabitur_dust' })
    event.shaped('forbidden_arcanus:mundabitur_dust', [
        'ARS',
        'BPG',
    ], {
        A: 'forbidden_arcanus:arcane_crystal_dust',
        R: 'minecraft:redstone',
        S: 'powah:crystal_spirited',
        B: 'minecraft:bone_meal',
        P: 'minecraft:phantom_membrane',
        G: 'minecraft:gunpowder'
    })
    event.remove({ output: 'oritech:machine_core_1' })
    event.shaped('oritech:machine_core_1', [
        'FFF',
        'FCF',
        'FFF'
    ], {
        C: 'minecraft:crafting_table',
        F: 'forbidden_arcanus:corrupti_dust',
    })
    event.remove({ output: 'oritech:machine_core_2' })
    event.shaped('oritech:machine_core_2', [
        'FFF',
        'FCF',
        'FFF'
    ], {
        C: 'oritech:machine_core_1',
        F: 'minecraft:copper_ingot',
    })
    event.remove({ output: 'oritech:machine_core_2' })
    event.shaped('oritech:machine_core_2', [
        'FFF',
        'FCF',
        'FFF'
    ], {
        C: 'oritech:machine_core_1',
        F: 'minecraft:iron_ingot',
    })
    event.remove({ output: 'oritech:machine_core_3' })
    event.shaped('oritech:machine_core_3', [
        'FFF',
        'FCF',
        'FFF'
    ], {
        C: 'oritech:machine_core_2',
        F: 'oritech:carbon_fibre_strands',
    })
    event.shaped('oritech:machine_core_3', [
        'FFF',
        'FCF',
        'FFF'
    ], {
        C: 'oritech:machine_core_2',
        F: 'tfmg:nickel_ingot',
    })
    event.remove({ output: 'oritech:machine_core_4' })
    event.shaped('oritech:machine_core_4', [
        'FFF',
        'FCF',
        'FEF'
    ], {
        C: 'oritech:machine_core_3',
        F: Ingredient.of('#oritech:plating'),
        E: 'oritech:enderic_compound'
    })
    event.remove({ output: 'oritech:machine_core_5' })
    event.shaped('oritech:machine_core_5', [
        'FFF',
        'FCF',
        'FEF'
    ], {
        C: 'oritech:machine_core_4',
        F: 'oritech:adamant_ingot',
        E: 'oritech:advanced_computing_engine'
    })
    event.remove({ output: 'oritech:machine_core_6' })
    event.shaped('oritech:machine_core_6', [
        'FFF',
        'FCF',
        'FEF'
    ], {
        C: 'oritech:machine_core_5',
        F: 'oritech:duratium_ingot',
        E: 'oritech:dubios_container'
    })
    event.remove({ output: 'oritech:machine_core_7' })
    event.shaped('oritech:machine_core_7', [
        'FFF',
        'FCF',
        'FEF'
    ], {
        C: 'oritech:machine_core_6',
        F: 'oritech:prometheum_ingot',
        E: 'oritech:superconductor'
    })
    event.remove({ output: 'mekanism:metallurgic_infuser' })
    event.shaped('mekanism:metallurgic_infuser', [
        'IFI',
        'ROR',
        'IPI'
    ], {
        P: 'oritech:processing_unit',
        I: 'minecraft:iron_ingot',
        F: 'minecraft:furnace',
        R: 'minecraft:redstone',
        O: 'mekanism:ingot_osmium',
    })
    event.remove({ output: 'draconicevolution:draconium_core' })
    event.shaped('draconicevolution:draconium_core', [
        'DGD',
        'GAG',
        'DGD'
    ], {
        A: 'mekanism:alloy_reinforced',
        D: 'draconicevolution:draconium_ingot',
        G: 'minecraft:gold_ingot'
    })
    event.remove({ output: 'rftoolsbase:machine_frame' })
    event.shaped('rftoolsbase:machine_frame', [
        'IBI',
        'GDG',
        'IBI'
    ], {
        B: 'minecraft:blue_dye',
        D: 'mysticalagradditions:dragon_scale',
        I: 'minecraft:iron_ingot',
        G: 'minecraft:gold_nugget'
    })
    event.remove({ output: 'matc:inferium_crystal[]' })
    event.shaped('matc:inferium_crystal[]', [
        'EPE',
        'PGP',
        'EME'
    ], {
        M: 'create:precision_mechanism',
        P: 'mysticalagriculture:prosperity_shard',
        G: 'mysticalagriculture:inferium_gemstone',
        E: 'mysticalagriculture:inferium_essence'
    })

    event.remove({ output: 'matc:prudentium_crystal[]' })
    event.shaped('matc:prudentium_crystal[]', [
        'EPE',
        'PGP',
        'EME'
    ], {
        M: 'minecraft:quartz',
        P: 'mysticalagriculture:prosperity_shard',
        G: 'matc:inferium_crystal[]',
        E: 'mysticalagriculture:prudentium_essence'
    })
    event.remove({ output: 'matc:tertium_crystal' })
    event.shaped('matc:tertium_crystal', [
        'EPE',
        'PGP',
        'EME'
    ], {
        M: 'mysticalagradditions:dragon_scale',
        P: 'mysticalagriculture:prosperity_shard',
        G: 'matc:prudentium_crystal[]',
        E: 'mysticalagriculture:tertium_essence'
    })
    event.remove({ output: 'matc:imperium_crystal' })
    event.shaped('matc:imperium_crystal', [
        'EPE',
        'PGP',
        'EME'
    ], {
        M: 'powah:crystal_niotic',
        P: 'mysticalagriculture:prosperity_shard',
        G: 'matc:tertium_crystal[]',
        E: 'mysticalagriculture:imperium_essence'
    })
    event.remove({ output: 'matc:supremium_crystal' })
    event.shaped('matc:supremium_crystal', [
        'EPE',
        'PGP',
        'EME'
    ], {
        M: 'oritech:processing_unit',
        P: 'mysticalagriculture:prosperity_shard',
        G: 'matc:imperium_crystal[]',
        E: 'mysticalagriculture:supremium_essence'
    })
    event.remove({ output: 'naturesaura:bottle_two_the_rebottling' })
    event.shaped('naturesaura:bottle_two_the_rebottling', [
        'BG',
    ], {
        B: 'minecraft:glass_bottle',
        G:'naturesaura:gold_leaf'
    })
    event.remove({ output: 'apothic_enchanting:seashelf' })
    event.shaped('apothic_enchanting:seashelf', [
        'PPP',
        'BEF',
        'PPP'
    ], {
        B: 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]',
        P: 'minecraft:prismarine_bricks',
        F: 'minecraft:pufferfish',
        E: Ingredient.of('#c:bookshelves')
    })
    event.shaped('astralsorcery:altar_illumination', [
        'MMM',
        'MCM',
        ' D '
    ], {
        D: 'ad_astra:desh_ingot',
        M: 'astralsorcery:marble_raw',
        C: 'minecraft:crafting_table',
    })
})


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

PlayerEvents.loggedIn(event => {
  const player = event.player;

  if (!player.tags.contains('first_join_all_books')) {
    player.tags.add('first_join_all_books');
    

    player.give('akashictome:tome');
    player.give('astralsorcery:tome');
    player.give('ars_nouveau:worn_notebook');
    player.give('powah:book');
    player.give('rftoolsbase:manual');
    player.give('ftbquests:book');
    player.give('cookingforblockheads:recipe_book');

    event.server.runCommand(`execute as ${player.username} run give @s patchouli:guide_book[patchouli:book="apotheosis:apoth_chronicle"]`);
    event.server.runCommand(`execute as ${player.username} run give @s patchouli:guide_book[patchouli:book="mysticalagriculture:guide"]`);
    event.server.runCommand(`execute as ${player.username} run give @s patchouli:guide_book[patchouli:book="naturesaura:book"]`);
    event.server.runCommand(`execute as ${player.username} run give @s patchouli:guide_book[patchouli:book="ad_astra:astrodux"]`);
    player.tell('§a[KubeJS] Attribution de tous les livres de départ...');
    player.tell("Pour accèder aux quête vous pouvez :");
    player.tell("-Utiliser le quest book");
    player.tell("-CLiquer tout en haut à gauche dans votre inventaire");
    player.tell("-Bind une touche dans Option->Controls->Key Binds");
  }
});