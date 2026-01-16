const vocabulary = [

  // ===== CLARITY / UNCLEAR =====
  {
    word: "Equivocal",
    correct: "Ambiguous",
    options: ["Ambiguous", "Explicit", "Definitive", "Limpid"]
  },
  {
    word: "Vague",
    correct: "Unclear",
    options: ["Unclear", "Transparent", "Distinct", "Evident"]
  },
  {
    word: "Explicit",
    correct: "Unequivocal",
    options: ["Unequivocal", "Obscure", "Vague", "Cryptic"]
  },
  {
    word: "Limpid",
    correct: "Lucid",
    options: ["Lucid", "Opaque", "Muddled", "Ambiguous"]
  },
  {
    word: "Pellucid",
    correct: "Perspicuous",
    options: ["Perspicuous", "Convoluted", "Arcane", "Dubious"]
  },
  {
    word: "Evident",
    correct: "Apparent",
    options: ["Apparent", "Latent", "Covert", "Implicit"]
  },

  // ===== SOFTEN / INTENSIFY =====
  {
    word: "Palliate",
    correct: "Mitigate",
    options: ["Mitigate", "Exacerbate", "Inflame", "Aggravate"]
  },
  {
    word: "Alleviate",
    correct: "Soothe",
    options: ["Soothe", "Worsen", "Intensify", "Magnify"]
  },
  {
    word: "Aggravate",
    correct: "Exacerbate",
    options: ["Exacerbate", "Pacify", "Allay", "Assuage"]
  },
  {
    word: "Pacify",
    correct: "Propitiate",
    options: ["Propitiate", "Incite", "Provoke", "Antagonize"]
  },
  {
    word: "Allay",
    correct: "Assuage",
    options: ["Assuage", "Inflame", "Irritate", "Agitate"]
  },

  // ===== IDIOMS (WORSENING) =====
  {
    word: "Add insult to injury",
    correct: "Worsen an already bad situation",
    options: [
      "Worsen an already bad situation",
      "Resolve a conflict",
      "Offer compensation",
      "Make peace"
    ]
  },
  {
    word: "Turn the knife",
    correct: "Deliberately intensify pain",
    options: [
      "Deliberately intensify pain",
      "Avoid confrontation",
      "Offer relief",
      "Withdraw criticism"
    ]
  },
  {
    word: "Stir the pot",
    correct: "Provoke trouble",
    options: [
      "Provoke trouble",
      "Calm tensions",
      "Seek compromise",
      "Remain neutral"
    ]
  },

  // ===== DECEPTION / REVELATION =====
  {
    word: "Dissemble",
    correct: "Feign",
    options: ["Feign", "Disclose", "Expose", "Reveal"]
  },
  {
    word: "Conceal",
    correct: "Hide",
    options: ["Hide", "Unveil", "Divulge", "Broadcast"]
  },
  {
    word: "Divulge",
    correct: "Disclose",
    options: ["Disclose", "Suppress", "Withhold", "Conceal"]
  },
  {
    word: "Pull the wool over one’s eyes",
    correct: "Deceive",
    options: ["Deceive", "Clarify", "Enlighten", "Inform"]
  },
  {
    word: "Wolf in sheep’s clothing",
    correct: "Deceptive person",
    options: [
      "Deceptive person",
      "Innocent victim",
      "Honest critic",
      "Open adversary"
    ]
  },

  // ===== REVENGE / FORGIVENESS =====
  {
    word: "Vindictive",
    correct: "Vengeful",
    options: ["Vengeful", "Magnanimous", "Merciful", "Lenient"]
  },
  {
    word: "Spiteful",
    correct: "Retaliatory",
    options: ["Retaliatory", "Forgiving", "Charitable", "Benign"]
  },
  {
    word: "Get even",
    correct: "Settle a score",
    options: [
      "Settle a score",
      "Forgive an offense",
      "Ignore wrongdoing",
      "Make amends"
    ]
  },
  {
    word: "See eye to eye",
    correct: "Agree",
    options: ["Agree", "Retaliate", "Oppose", "Undermine"]
  },

  // ===== TEMPORARY / PERMANENT =====
  {
    word: "Ephemeral",
    correct: "Transient",
    options: ["Transient", "Enduring", "Perpetual", "Everlasting"]
  },
  {
    word: "Fleeting",
    correct: "Short-lived",
    options: ["Short-lived", "Permanent", "Lasting", "Eternal"]
  },
  {
    word: "Evanescent",
    correct: "Fugacious",
    options: ["Fugacious", "Immutable", "Enduring", "Stable"]
  },
  {
    word: "Everlasting",
    correct: "Perpetual",
    options: ["Perpetual", "Momentary", "Brief", "Ephemeral"]
  },
  {
    word: "A flash in the pan",
    correct: "Brief success",
    options: [
      "Brief success",
      "Long-term achievement",
      "Steady progress",
      "Enduring fame"
    ]
  },

  // ===== FLATTERY / SERVILITY =====
  {
    word: "Obsequious",
    correct: "Sycophantic",
    options: ["Sycophantic", "Assertive", "Independent", "Dignified"]
  },
  {
    word: "Servile",
    correct: "Fawning",
    options: ["Fawning", "Upright", "Resolute", "Autonomous"]
  },
  {
    word: "Toadying",
    correct: "Ingratiating",
    options: ["Ingratiating", "Defiant", "Forthright", "Candid"]
  },
  {
    word: "Apple polishing",
    correct: "Excessive flattery",
    options: [
      "Excessive flattery",
      "Honest praise",
      "Constructive criticism",
      "Moral integrity"
    ]
  },

  // ===== PREVENT / REMOVE =====
  {
    word: "Obviate",
    correct: "Eliminate",
    options: ["Eliminate", "Necessitate", "Demand", "Require"]
  },
  {
    word: "Avert",
    correct: "Forestall",
    options: ["Forestall", "Invite", "Encourage", "Provoke"]
  },
  {
    word: "Do away with",
    correct: "Get rid of",
    options: ["Get rid of", "Preserve", "Retain", "Maintain"]
  },

  // ===== ENERGY =====
  {
    word: "Enervating",
    correct: "Draining",
    options: ["Draining", "Invigorating", "Stimulating", "Revitalizing"]
  },
  {
    word: "Sapping",
    correct: "Weakening",
    options: ["Weakening", "Energizing", "Rejuvenating", "Refreshing"]
  },

  // ===== PRAISE / CRITICISM =====
  {
    word: "Rebuke",
    correct: "Reproach",
    options: ["Reproach", "Extol", "Eulogise", "Exalt"]
  },
  {
    word: "Excoriate",
    correct: "Berate",
    options: ["Berate", "Commend", "Approve", "Praise"]
  },
  {
    word: "Extol",
    correct: "Exalt",
    options: ["Exalt", "Denigrate", "Lampoon", "Demean"]
  },

  // ===== COMMONNESS =====
  {
    word: "Ubiquitous",
    correct: "Omnipresent",
    options: ["Omnipresent", "Confined", "Restricted", "Limited"]
  },
  {
    word: "Rampant",
    correct: "Rife",
    options: ["Rife", "Rare", "Scarce", "Sporadic"]
  },
  {
    word: "A dime a dozen",
    correct: "Very common",
    options: ["Very common", "Extremely rare", "Highly valuable", "Unique"]
  }, {
    word: "Arduous",
    correct: "Strenuous",
    options: ["Strenuous", "Effortless", "Simple", "Routine"]
  },
  {
    word: "Laborious",
    correct: "Toilsome",
    options: ["Toilsome", "Efficient", "Swift", "Automatic"]
  },
  {
    word: "Taxing",
    correct: "Exacting",
    options: ["Exacting", "Trivial", "Light", "Superficial"]
  },
  {
    word: "Herculean",
    correct: "Backbreaking",
    options: ["Backbreaking", "Manageable", "Moderate", "Simple"]
  },
  {
    word: "Grueling",
    correct: "Exhausting",
    options: ["Exhausting", "Refreshing", "Invigorating", "Relaxing"]
  },
  {
    word: "An uphill task",
    correct: "Difficult undertaking",
    options: [
      "Difficult undertaking",
      "Routine activity",
      "Simple procedure",
      "Effortless job"
    ]
  },
  {
    word: "A cakewalk",
    correct: "Very easy task",
    options: [
      "Very easy task",
      "Complex challenge",
      "Demanding effort",
      "Lengthy struggle"
    ]
  },
  {
    word: "A hard nut to crack",
    correct: "Difficult problem",
    options: [
      "Difficult problem",
      "Minor obstacle",
      "Solved issue",
      "Simple puzzle"
    ]
  },

  // ===== HARD WORK / EFFORT =====
  {
    word: "Burn the midnight oil",
    correct: "Work late",
    options: ["Work late", "Waste time", "Sleep early", "Relax"]
  },
  {
    word: "Put one’s nose to the grindstone",
    correct: "Work diligently",
    options: ["Work diligently", "Avoid effort", "Delay work", "Delegate tasks"]
  },
  {
    word: "Break one’s back",
    correct: "Work extremely hard",
    options: [
      "Work extremely hard",
      "Give up easily",
      "Work casually",
      "Act carelessly"
    ]
  },
  {
    word: "Sweat blood",
    correct: "Make extreme effort",
    options: [
      "Make extreme effort",
      "Remain indifferent",
      "Work lazily",
      "Act casually"
    ]
  },

  // ===== CARELESS / CAREFUL =====
  {
    word: "Perfunctory",
    correct: "Cursory",
    options: ["Cursory", "Meticulous", "Thorough", "Painstaking"]
  },
  {
    word: "Superficial",
    correct: "Shallow",
    options: ["Shallow", "Profound", "Thorough", "Detailed"]
  },
  {
    word: "Meticulous",
    correct: "Punctilious",
    options: ["Punctilious", "Careless", "Hasty", "Negligent"]
  },
  {
    word: "Sedulous",
    correct: "Assiduous",
    options: ["Assiduous", "Idle", "Lazy", "Indifferent"]
  },

  // ===== HUMILIATION =====
  {
    word: "Eat humble pie",
    correct: "Make an apology",
    options: [
      "Make an apology",
      "Assert dominance",
      "Take revenge",
      "Refuse responsibility"
    ]
  },

  // ===== FORCE / PERSUASION =====
  {
    word: "Coerce",
    correct: "Compel",
    options: ["Compel", "Encourage", "Request", "Suggest"]
  },
  {
    word: "Twist someone’s arm",
    correct: "Force unwillingly",
    options: [
      "Force unwillingly",
      "Persuade gently",
      "Offer incentives",
      "Give advice"
    ]
  },
  {
    word: "Put the screws on",
    correct: "Apply pressure",
    options: [
      "Apply pressure",
      "Give freedom",
      "Relax rules",
      "Withdraw demands"
    ]
  },
  {
    word: "Browbeat",
    correct: "Intimidate",
    options: ["Intimidate", "Console", "Encourage", "Reassure"]
  },
  {
    word: "Cajole",
    correct: "Coax",
    options: ["Coax", "Threaten", "Force", "Command"]
  },

  // ===== EXPLANATION / CONFUSION =====
  {
    word: "Elucidate",
    correct: "Clarify",
    options: ["Clarify", "Obscure", "Confuse", "Complicate"]
  },
  {
    word: "Expound",
    correct: "Explain",
    options: ["Explain", "Distort", "Conceal", "Suppress"]
  },
  {
    word: "Bewilder",
    correct: "Confound",
    options: ["Confound", "Enlighten", "Clarify", "Simplify"]
  },
  {
    word: "Befuddle",
    correct: "Muddle",
    options: ["Muddle", "Organize", "Arrange", "Systematize"]
  },
  {
    word: "Enigmatize",
    correct: "Make mysterious",
    options: [
      "Make mysterious",
      "Explain clearly",
      "Reveal fully",
      "Simplify"
    ]
  },

  // ===== CAPTURE =====
  {
    word: "Apprehend",
    correct: "Arrest",
    options: ["Arrest", "Release", "Free", "Acquit"]
  },
  {
    word: "Incarcerate",
    correct: "Imprison",
    options: ["Imprison", "Liberate", "Discharge", "Exonerate"]
  }

];

export { vocabulary };
