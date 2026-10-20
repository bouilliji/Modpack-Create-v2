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