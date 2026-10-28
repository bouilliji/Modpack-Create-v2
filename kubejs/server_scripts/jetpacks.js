ServerEvents.tags('item', event => {
  const jetpacks = [
    "mekanism:jetpack",
    "mekanism:jetpack_armored",
    "oritech:jetpack",
    "oritech:exo_jetpack",
    "oritech:jetpack_elytra",
    "oritech:jetpack_exo_elytra"
  ]

  jetpacks.forEach(jetpack => {
    event.add('curios:back', jetpack)
  })
})