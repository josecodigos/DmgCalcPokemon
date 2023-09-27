$(document).ready(function () {
  const tipos = [
    { id: 0, nome: "(nenhum)" },
    { id: 1, nome: "normal", index: 0 },
    { id: 2, nome: "fire", index: 1 },
    { id: 3, nome: "water", index: 2 },
    { id: 4, nome: "electric", index: 3 },
    { id: 5, nome: "grass", index: 4 },
    { id: 6, nome: "ice", index: 5 },
    { id: 7, nome: "fighting", index: 6 },
    { id: 8, nome: "poison", index: 7 },
    { id: 9, nome: "ground", index: 8 },
    { id: 10, nome: "flying", index: 9 },
    { id: 11, nome: "psychic", index: 10 },
    { id: 12, nome: "bug", index: 11 },
    { id: 13, nome: "rock", index: 12 },
    { id: 14, nome: "ghost", index: 13 },
    { id: 15, nome: "dragon", index: 14 },
  ];
  const interacaoTipos = [
    [
      1 /*n*/, 1 /*f*/, 1 /*w*/, 1 /*e*/, 1 /*g*/, 1 /*i*/, 1 /*f*/, 1 /*p*/,
      1 /*gr*/, 1 /*fl*/, 1 /*ps*/, 1 /*b*/, 0.5 /*r*/, 0 /*gh*/, 1 /*d*/,
    ], //normal
    [
      1 /*n*/, 0.5 /*f*/, 0.5 /*w*/, 1 /*e*/, 2 /*g*/, 2 /*i*/, 1 /*f*/,
      1 /*p*/, 1 /*gr*/, 1 /*fl*/, 1 /*ps*/, 2 /*b*/, 0.5 /*r*/, 1 /*gh*/,
      0.5 /*d*/,
    ], //fire
    [
      1 /*n*/, 2 /*f*/, 0.5 /*w*/, 1 /*e*/, 0.5 /*g*/, 1 /*i*/, 1 /*f*/,
      1 /*p*/, 2 /*gr*/, 1 /*fl*/, 1 /*ps*/, 1 /*b*/, 2 /*r*/, 1 /*gh*/,
      0.5 /*d*/,
    ], //water
    [
      1 /*n*/, 1 /*f*/, 2 /*w*/, 0.5 /*e*/, 0.5 /*g*/, 1 /*i*/, 1 /*f*/,
      1 /*p*/, 0 /*gr*/, 2 /*fl*/, 1 /*ps*/, 1 /*b*/, 1 /*r*/, 1 /*gh*/,
      0.5 /*d*/,
    ], //electric
    [
      1 /*n*/, 0.5 /*f*/, 2 /*w*/, 1 /*e*/, 0.5 /*g*/, 1 /*i*/, 1 /*f*/,
      0.5 /*p*/, 2 /*gr*/, 0.5 /*fl*/, 1 /*ps*/, 0.5 /*b*/, 2 /*r*/, 1 /*gh*/,
      0.5 /*d*/,
    ], //grass
    [
      1 /*n*/, 1 /*f*/, 0.5 /*w*/, 1 /*e*/, 2 /*g*/, 0.5 /*i*/, 1 /*f*/,
      1 /*p*/, 1 /*gr*/, 2 /*fl*/, 1 /*ps*/, 1 /*b*/, 1 /*r*/, 1 /*gh*/,
      2 /*d*/,
    ], //ice
    [
      2 /*n*/, 1 /*f*/, 1 /*w*/, 1 /*e*/, 1 /*g*/, 2 /*i*/, 1 /*f*/, 0.5 /*p*/,
      1 /*gr*/, 0.5 /*fl*/, 0.5 /*ps*/, 0.5 /*b*/, 2 /*r*/, 0 /*gh*/, 1 /*d*/,
    ], //fighting
    [
      1 /*n*/, 1 /*f*/, 1 /*w*/, 1 /*e*/, 2 /*g*/, 1 /*i*/, 1 /*f*/, 0.5 /*p*/,
      0.5 /*gr*/, 1 /*fl*/, 1 /*ps*/, 2 /*b*/, 0.5 /*r*/, 0.5 /*gh*/, 1 /*d*/,
    ], //poison
    [
      1 /*n*/, 2 /*f*/, 1 /*w*/, 2 /*e*/, 0.5 /*g*/, 1 /*i*/, 1 /*f*/, 2 /*p*/,
      1 /*gr*/, 0 /*fl*/, 1 /*ps*/, 0.5 /*b*/, 2 /*r*/, 1 /*gh*/, 1 /*d*/,
    ], //ground
    [
      1 /*n*/, 1 /*f*/, 1 /*w*/, 0.5 /*e*/, 2 /*g*/, 1 /*i*/, 2 /*f*/, 1 /*p*/,
      1 /*gr*/, 1 /*fl*/, 1 /*ps*/, 2 /*b*/, 0.5 /*r*/, 1 /*gh*/, 1 /*d*/,
    ], //flying
    [
      1 /*n*/, 1 /*f*/, 1 /*w*/, 1 /*e*/, 1 /*g*/, 1 /*i*/, 2 /*f*/, 2 /*p*/,
      1 /*gr*/, 1 /*fl*/, 0, 5 /*ps*/, 1 /*b*/, 1 /*r*/, 1 /*gh*/, 1 /*d*/,
    ], //psychic
    [
      1 /*n*/, 0.5 /*f*/, 1 /*w*/, 1 /*e*/, 2 /*g*/, 1 /*i*/, 0.5 /*f*/,
      2 /*p*/, 1 /*gr*/, 0.5 /*fl*/, 2 /*ps*/, 1 /*b*/, 1 /*r*/, 0.5 /*gh*/,
      1 /*d*/,
    ], //bug
    [
      1 /*n*/, 2 /*f*/, 1 /*w*/, 1 /*e*/, 1 /*g*/, 2 /*i*/, 0.5 /*f*/, 1 /*p*/,
      0.5 /*gr*/, 2 /*fl*/, 1 /*ps*/, 2 /*b*/, 1 /*r*/, 1 /*gh*/, 1 /*d*/,
    ], //rock
    [
      1 /*n*/, 1 /*f*/, 1 /*w*/, 1 /*e*/, 1 /*g*/, 1 /*i*/, 1 /*f*/, 1 /*p*/,
      1 /*gr*/, 1 /*fl*/, 1 /*ps*/, 1 /*b*/, 1 /*r*/, 2 /*gh*/, 1 /*d*/,
    ], //ghost
    [
      1 /*n*/, 1 /*f*/, 1 /*w*/, 1 /*e*/, 1 /*g*/, 1 /*i*/, 1 /*f*/, 1 /*p*/,
      1 /*gr*/, 1 /*fl*/, 1 /*ps*/, 1 /*b*/, 1 /*r*/, 1 /*gh*/, 2 /*d*/,
    ], //dragon
  ];
  const pokemon = [
    {
      nome: "Bulbasaur",
      tipoId: 5,
      tipoId2: 8,
      stats: {
        hp: 45,
        atk: 49,
        def: 49,
        spc: 65,
        spe: 45,
      },
    },
    {
      nome: "Charmander",
      tipoId: 2,
      tipoId2: 0,
      stats: {
        hp: 39,
        atk: 52,
        def: 43,
        spc: 50,
        spe: 65,
      },
    },
    {
      nome: "Kabuto",
      tipoId: 13,
      tipoId2: 3,
      stats: {
        hp: 30,
        atk: 80,
        def: 90,
        spe: 55,
        spc: 45,
      },
    },
    {
      nome: "Caterpie",
      tipoId: 12,
      tipoId2: 0,
      stats: {
        hp: 45,
        atk: 30,
        def: 35,
        spe: 45,
        spc: 20,
      },
    },
    {
      nome: "Rattata",
      tipoId: 1,
      tipoId2: 0,
      stats: {
        hp: 30,
        atk: 56,
        def: 35,
        spe: 72,
        spc: 25,
      },
    },
    {
      nome: "Gastly",
      tipoId: 14,
      tipoId2: 8,
      stats: {
        hp: 30,
        atk: 35,
        def: 30,
        spe: 80,
        spc: 100,
      },
    },
    {
      nome: "Pikachu",
      tipoId: 4,
      tipoId2: 0,
      stats: {
        hp: 35,
        atk: 55,
        def: 30,
        spe: 90,
        spc: 50,
      },
    },
    {
      nome: "Cubone",
      tipoId: 9,
      tipoId2: 0,
      stats: {
        hp: 50,
        atk: 50,
        def: 95,
        spe: 35,
        spc: 40,
      },
    },
    {
      nome: "Mankey",
      tipoId: 7,
      tipoId2: 0,
      stats: {
        hp: 40,
        atk: 80,
        def: 35,
        spe: 70,
        spc: 35,
      },
    },
    {
      nome: "Articuno",
      tipoId: 6,
      tipoId2: 10,
      stats: {
        hp: 90,
        atk: 85,
        def: 100,
        spe: 85,
        spc: 125,
      },
    },
    {
      nome: "Mew",
      tipoId: 11,
      tipoId2: 0,
      stats: {
        hp: 100,
        atk: 100,
        def: 100,
        spe: 100,
        spc: 100,
      },
    },
    {
      nome: "Pinsir",
      tipoId: 12,
      tipoId2: 0,
      stats: {
        hp: 65,
        atk: 125,
        def: 100,
        spe: 85,
        spc: 55,
      },
    },
    {
      nome: "Dratini",
      tipoId: 15,
      tipoId2: 0,
      stats: {
        hp: 41,
        atk: 64,
        def: 45,
        spe: 50,
        spc: 50,
      },
    },
  ];
  const ataques = [
    {
      nome: "Absorb",
      tipoId: 5,
      power: 20,
      cat: "s",
    },

    {
      nome: "Acid",
      tipoId: 8,
      power: 40,
      cat: "s",
    },

    {
      nome: "Barrage",
      tipoId: 1,
      power: 15,
      cat: "p",
    },

    {
      nome: "Confusion",
      tipoId: 11,
      power: 50,
      cat: "s",
    },

    {
      nome: "Crabhammer",
      tipoId: 3,
      power: 100,
      cat: "p",
    },

    {
      nome: "Dig",
      tipoId: 9,
      power: 80,
      cat: "p",
    },

    {
      nome: "Gust",
      tipoId: 10,
      power: 40,
      cat: "s",
    },
    {
      nome: "Ember",
      tipoId: 2,
      power: 40,
      cat: "s",
    },
    {
      nome: "Thunder",
      tipoId: 4,
      power: 110,
      cat: "s",
    },
    {
      nome: "Ice Punch",
      tipoId: 6,
      power: 75,
      cat: "p",
    },
    {
      nome: "Jump Kick",
      tipoId: 7,
      power: 100,
      cat: "p",
    },
    {
      nome: "Leech Life",
      tipoId: 12,
      power: 80,
      cat: "p",
    },
    {
      nome: "Rock Slide",
      tipoId: 13,
      power: 75,
      cat: "p",
    },
    {
      nome: "Lick",
      tipoId: 14,
      power: 30,
      cat: "p",
    },
  ];

  function loadPokemon(dropdown, classe) {
    for (let i = 0; i < pokemon.length; i++) {
      let html =
        "<option><a class='dropdown-item" +
        classe +
        "'>" +
        pokemon[i].nome +
        "</a></option>";
      $(dropdown).append(html);
    }
  }
  function loadAtaques(select, id) {
    for (let i = 0; i < ataques.length; i++) {
      let html =
        "<option><a id=" + id + "'>" + ataques[i].nome + "</a></option>";
      $(select).append(html);
    }
  }

  function loadTipo(pokeTipo, id){
    let tipo = tipos.find(tipo => tipo.id == pokeTipo)
      let html = "<td class='tipopkmn'>"+tipo.nome+"</td>"
    $(id).html(html)
  }

  loadPokemon(".dropdownpkmn1", "pkmn1");
  loadPokemon(".dropdownpkmn2", "pkmn2");
  loadAtaques("#selectAtaque", "optionAtaque");

  function buscaPkmn(nomePokemon) {
    //recebe o nome do pokemon 1
    let retornoPkmn1;
    pokemon.forEach(function (p) {
      if (p.nome == nomePokemon) {
        retornoPkmn1 = p;
      }
    });
    return retornoPkmn1; //retorna todos os dados do pokemon 1
  }
  function buscaAtk(nomeAtaque) {
    //recebe nome do ataque
    let retornoAtk;
    ataques.forEach(function (a) {
      if (a.nome == nomeAtaque) {
        retornoAtk = a;
      }
    });
    return retornoAtk; //retorna todos os dados do ataque
  }

  $(".btnSelecao").click(function mostrarTudo(){
    let atkSelecionado = buscaAtk($("#selectAtaque").find(":selected").val());
    let pkmn1 = buscaPkmn($(".dropdownpkmn1").find(":selected").val())
    let pkmn2 = buscaPkmn($(".dropdownpkmn2").find(":selected").val())

    if(pkmn1.tipoId2 == 0){
      loadTipo(pkmn1.tipoId, "#tipo1pkmn1")
    } else{
      loadTipo(pkmn1.tipoId, "#tipo1pkmn1")
      loadTipo(pkmn1.tipoId2, "#tipo2pkmn1")
    }    
    if(pkmn2.tipoId2 == 0){
      loadTipo(pkmn2.tipoId, "#tipo1pkmn2")
    } else{
      loadTipo(pkmn2.tipoId, "#tipo1pkmn2")
      loadTipo(pkmn2.tipoId2, "#tipo2pkmn2")
    }


    $("#hppkmn1").val(pkmn1.stats.hp)
    $("#atkpkmn1").val(pkmn1.stats.atk)
    $("#defpkmn1").val(pkmn1.stats.def)
    $("#spcpkmn1").val(pkmn1.stats.spc)
    $("#spepkmn1").val(pkmn1.stats.spe)

    $("#hppkmn2").val(pkmn2.stats.hp)
    $("#atkpkmn2").val(pkmn2.stats.atk)
    $("#defpkmn2").val(pkmn2.stats.def)
    $("#spcpkmn2").val(pkmn2.stats.spc)
    $("#spepkmn2").val(pkmn2.stats.spe)

    $(".totalhp1").html("<td class ='totalhp1'>"+getHpStat(pkmn1,"#lvlpkmn1","#hpivpkmn1")+"</td>")
    $(".totalatk1").html("<td class ='totalatk1'>"+getAtkStat(pkmn1,"#lvlpkmn1","#atkivpkmn1")+"</td>")
    $(".totaldef1").html("<td class ='totaldef1'>"+getDefStat(pkmn1,"#lvlpkmn1","#defivpkmn1")+"</td>")
    $(".totalspc1").html("<td class ='totalspc1'>"+getSpcStat(pkmn1,"#lvlpkmn1","#spcivpkmn1")+"</td>")
    $(".totalspe1").html("<td class ='totalspe1'>"+getSpeStat(pkmn1,"#lvlpkmn1","#speivpkmn1")+"</td>")

    $(".totalhp2").html("<td class ='totalhp1'>"+getHpStat(pkmn2,"#lvlpkmn2","#hpivpkmn2")+"</td>")
    $(".totalatk2").html("<td class ='totalatk1'>"+getAtkStat(pkmn2,"#lvlpkmn2","#atkivpkmn2")+"</td>")
    $(".totaldef2").html("<td class ='totaldef1'>"+getDefStat(pkmn2,"#lvlpkmn2","#defivpkmn2")+"</td>")
    $(".totalspc2").html("<td class ='totalspc1'>"+getSpcStat(pkmn2,"#lvlpkmn2","#spcivpkmn2")+"</td>")
    $(".totalspe2").html("<td class ='totalspe1'>"+getSpeStat(pkmn2,"#lvlpkmn2","#speivpkmn2")+"</td>")
  
    $("#danoPkmn").html("<p class='textDano'>"+getDano()+"</p>")

    function getDano(){
      if(atkSelecionado.cat == "p"){
        return dmgF(pkmn1, pkmn2, atkSelecionado)  
      }else{  
        return dmgS(pkmn1, pkmn2, atkSelecionado)
      }
    }
    function calculoEfetivo() { 
      if(pkmn2.tipoId2 == 0){
      let indexDef = getIndexTipoDef(pkmn2.tipoId);
      let indexAtk = getIndexTipoAtk(atkSelecionado.tipoId);
      return interacaoTipos[indexAtk][indexDef];
      }else{
        let indexDef = getIndexTipoDef(pkmn2.tipoId);
        let indexAtk = getIndexTipoAtk(atkSelecionado.tipoId);
        let indexDef2 = getIndexTipoDef(pkmn2.tipoId2);
        let indexAtk2 = getIndexTipoAtk(atkSelecionado.tipoId);
        return  interacaoTipos[indexAtk][indexDef] * interacaoTipos[indexAtk2][indexDef2];
      }
    }
    function calculoSTAB() {
      //retorna 2 se o ataque for do mesmo tipo do pokemon atacando, se não, retorna 1
      if (atkSelecionado.tipoId == pkmn1.tipoId) {
        return 1.5;
      } else {
        return 1;
      }
    }
    function dmgF(pk1, pk2, ataque) {
      let dmg = Math.floor(Math.floor(((2 * $("#lvlpkmn1").val() / 5 + 2) * ataque.power * getAtkStat(pk1,"#lvlpkmn1", "#atkivpkmn1")) / getDefStat(pk2,"#lvlpkmn2", "#defivpkmn2") / 50 + 2) * calculoSTAB() * calculoEfetivo() * 1);
      return "O ataque é físico<br>mínimo de dano: "+Math.floor(dmg*0.85)+"<br>máximo de dano: "+ dmg;
    }
    function dmgS(pk1, pk2, ataque) {
      let dmg = Math.floor(Math.floor(((2 * 100 / 5 + 2) * ataque.power * getSpcStat(pk1, "#lvlpkmn1", "#spcivpkmn1")) / getSpcStat(pk2,"#lvlpkmn2", "#spcivpkmn2") / 50 + 2) * calculoSTAB() * calculoEfetivo() * 1);
      return "O ataque é especial<br>mínimo de dano: "+Math.floor(dmg*0.85)+"<br>máximo de dano: "+ dmg;
    }
  })


  










  


  function getIndexTipoAtk(tipoAtk) {
    //recebe tipo do ataque
    let indexTipoAtk;
    tipos.forEach(function (t) {
      if (t.id == tipoAtk) {
        indexTipoAtk = t.index;
      }
    });
    return indexTipoAtk; //retorna index do tipo do ataque
  }
  function getIndexTipoDef(tipoDef) {
    //recebe tipo do pokemon2
    let indexTipoDef;
    tipos.forEach(function (t) {
      if (t.id == tipoDef) {
        indexTipoDef = t.index;
      }
    });
    return indexTipoDef; //retorna index do tipo do pokemon2
  }
  function getAtkStat(poke, idlvl, idivs) {
    //recebe pokemon
    let lvl = Number($(idlvl).val());
    let dvs = Number($(idivs).val());
    let e = 5;
    let retornoStatAtk = Math.floor(
      (((poke.stats.atk + dvs) * 2 + 63) * lvl) / 100 + e
    );
    return retornoStatAtk; //retorna stat total de atk
  }
  function getHpStat(poke, idlvl, idivs) {
    //recebe pokemon
    let lvl = Number($(idlvl).val());
    let dvs = Number($(idivs).val());
    let e = lvl + 10;
    let retornoStatHp = (((poke.stats.hp + dvs) * 2 + 63) * lvl) / 100 + e;
    return retornoStatHp;
  }
  function getDefStat(poke, idlvl, idivs) {
    //recebe pokemon
    let lvl = Number($(idlvl).val());
    let dvs = Number($(idivs).val());
    let e = 5;
    let retornoStatDef = (((poke.stats.def + dvs) * 2 + 63) * lvl) / 100 + e;
    return retornoStatDef;
  }
  function getSpcStat(poke, idlvl, idivs) {
    //recebe pokemon e ivs de special
    let lvl = Number($(idlvl).val());
    let dvs = Number($(idivs).val());   
    let e = 5;
    let retornoStatSpc = (((poke.stats.spc + dvs) * 2 + 63) * lvl) / 100 + e;
    return retornoStatSpc;
  }
  function getSpeStat(poke, idlvl, idivs) {
    //recebe pokemon e ivs de speed
    let lvl = Number($(idlvl).val());
    let dvs = Number($(idivs).val());
    let e = 5;
    let retornoStatSpe = (((poke.stats.spe + dvs) * 2 + 63) * lvl) / 100 + e;
    return retornoStatSpe;
  }
});
