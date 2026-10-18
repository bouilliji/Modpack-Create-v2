ServerEvents.recipes(event => {
    ['create:crushed_raw_osmium', 'create:crushed_raw_platinum', 'create:crushed_raw_tin', 'create:crushed_raw_lead', 'create:crushed_raw_uranium', 'create:crushed_raw_nickel', 'tfmg:crushed_raw_lithium', 'powah:uraninite_raw'].forEach(element => {
        event.custom({
            type: "createsifter:sifting",
            input: {
                item: "minecraft:gravel"
            },
            results: [
                {
                    id: element,
                    chance: 0.07
                }
            ],
            mesh: {
                id: "createsifter:brass_mesh"
            }
        })

        event.custom({
            type: "createsifter:sifting",
            input: {
                item: "minecraft:gravel"
            },
            results: [
                {
                    id: element,
                    chance: 0.07
                }
            ],
            mesh: {
                id: "createsifter:advanced_brass_mesh"
            }
        })
    })

    event.custom({
        type: "createsifter:sifting",
        input: {
            item: 'createsifter:dust'
        },
        results: [
            {
                id: 'mysticalagriculture:prosperity_shard',
                chance: 0.05
            }
        ],
        mesh: {
            id: "createsifter:brass_mesh"
        }
    })

    event.custom({
        type: "createsifter:sifting",
        input: {
            item: 'createsifter:dust'
        },
        results: [
            {
                id: 'mysticalagriculture:prosperity_shard',
                chance: 0.07
            }
        ],
        mesh: {
            id: "createsifter:advanced_brass_mesh"
        }
    })

    event.custom({
        type: "createsifter:sifting",
        input: {
            item: 'createsifter:dust'
        },
        results: [
            {
                id: 'mysticalagriculture:prosperity_shard',
                chance: 0.07
            }
        ],
        mesh: {
            id: "createsifter:andesite_mesh"
        }
    })
    

})