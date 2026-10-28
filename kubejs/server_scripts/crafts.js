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
    })


    event.recipes.create.mixing(
        'create:rose_quartz',                  
        ['minecraft:iron_block', 'minecraft:redstone_block','minecraft:amethyst_block', Fluid.of('minecraft:water', 1000)] 
    )

    event.remove({ output: 'enderio:void_chassis' })
    event.shaped('enderio:void_chassis', [
        'FGF',
        'GPG',
        'FGF'
    ], {
        G: 'enderio:grains_of_infinity',
        F: 'minecraft:iron_ingot',
        P: 'create:precision_mechanism'
    })

    event.remove({ output: 'naturesaura:gold_fiber' })
    event.recipes.create.compacting(
        'naturesaura:gold_fiber',
        ['minecraft:gold_ingot', Ingredient.of('#minecraft:leaves'), 'minecraft:short_grass']
    )


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
        B: 'tfmg:steel_block',
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
        C: 'ad_astra:desh_ingot',
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
    }),
    event.remove("createdieselgenerators:compat/electroenergetics/copper_wire")
    Ingredient.of(/^artifacts:/).itemIds.forEach(id => {

        if (id.includes('chalk') || id.includes('researching_table') || id.includes('mimic')) return;

        event.shaped(Item.of(id, 1), [
            'DDD',
            'DAD',
            'DDD'
        ], {
            D: 'minecraft:diamond',
            A: id
        })
        .keepIngredient(id)
        .id(`kubejs:duplication_${id.replace(':', '_')}`)
    })
    Ingredient.of(/^relics:/).itemIds.forEach(id => {

        if (id.includes('chalk') || id.includes('researching_table') || id.includes('mimic') || id.includes('phantom_block')) return;

        event.shaped(Item.of(id, 1), [
            ' D ',
            'DAD',
            ' D '
        ], {
            D: 'powah:crystal_niotic',
            A: id
        })
        .keepIngredient(id)
        .id(`kubejs:duplication_${id.replace(':', '_')}`)
    })
    let allHats = Ingredient.of(/^simplehats:/).itemIds.filter(id => 
        !id.includes('hatbag') && 
        !id.includes('hatscraps') && 
        !id.includes('hatdisplay') && 
        !id.includes('haticon')
    );

    allHats.forEach(targetHat => {
        event.shapeless(Item.of(targetHat, 1), [
            targetHat,                    
        ])
        .keepIngredient(targetHat)        
        .id(`kubejs:hat_dup_${targetHat.replace(':', '_')}`);
    });
    event.recipes.create.mixing(
        'bhc:green_heart',                  
        ['mysticalagriculture:dragon_egg_essence', 'mysticalagriculture:dragon_egg_essence', 'mysticalagriculture:dragon_egg_essence', 'mysticalagriculture:dragon_egg_essence'] 
    ).superheated()
    event.recipes.create.compacting(
        'mysticalagradditions:dragon_scale',                  
        ['mysticalagriculture:dragon_egg_essence', 'mysticalagriculture:dragon_egg_essence', 'mysticalagriculture:dragon_egg_essence', 'mysticalagriculture:dragon_egg_essence'] 
    ).superheated()
    event.recipes.create.mixing(
        '2x minecraft:dirt', 
        [
            Ingredient.of('#minecraft:saplings'),
            Ingredient.of('#minecraft:saplings'), 
            Fluid.of('minecraft:water', 1000)
        ]
    )
    event.smelting('tfmg:aluminum_ingot', 'tfmg:bauxite_powder')
})