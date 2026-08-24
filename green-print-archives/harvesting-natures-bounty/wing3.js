// wing3.js - Purpose & Boundaries
const wing3Data = [
    {
        title: "Chapter 55. The River’s Bank",
        exhibit: "Constructive Constraint",
        content: `In the "Living Intelligence" of a river, the bank is an accelerator rather than a restriction. Without the resistance of the earth, water would spread thin and lose its ability to move obstacles. By "Saying No" to the spread, the bank "Says Yes" to the water's power.`,
        lesson: `Constraints—like your time, energy, and specific niche—are what provide your impact. When you accept boundaries, you stop leaking energy and move with the focused force of a river.`,
        shift: `Move from resenting limits to utilizing focus. See limits as the "Architecture" that turns your "Soul" into a "Current".`,
        image: ""
    },
    {
        title: "Chapter 56. The Thorn’s Silent 'No'",
        exhibit: "Pre-emptive Protection",
        content: `The thorn is a low-energy, high-impact defense mechanism that communicates a boundary before damage occurs. It ensures a relationship of mutual respect between the plant and the world.`,
        lesson: `Setting a boundary is an act of stewardship. Your "No" is the thorn protecting your "Bloom," ensuring your sweetness remains a gift rather than a commodity.`,
        shift: `Move from people-pleasing to purpose-protecting. A healthy boundary is the "Architecture" that keeps your "Soul" intact.`,
        image: ""
    },
    {
        title: "Chapter 57. The Skin of the Fruit",
        exhibit: "Selective Permeability",
        content: `The skin is an architecture designed to keep vital juices from evaporating while preventing external pathogens from entering. Protection is a prerequisite for ripening; without it, the fruit would rot.`,
        lesson: `Not everyone deserves immediate access to your sweetness. Selective privacy and self-regulation keep your "Inner Gold" safe while you grow.`,
        shift: `Move from vulnerable exposure to contained growth. Build an "Outer Layer" of routines and boundaries to keep your core "Cool" under pressure.`,
        image: ""
    },
    {
        title: "Chapter 58. The Bark’s Rugged Shield",
        exhibit: "External Fortification",
        content: `Bark uses "dead" history to build a fire-resistant and waterproof barrier that insulates the tree’s internal sap and energy. It manages temperature and prevents energy theft.`,
        lesson: `Toughness is the guardian of the soul. Hardened experiences are tools that allow your inner gentleness to remain vibrant even in a winter storm.`,
        shift: `Move from fragility to fortified endurance. Appreciate the "Bark" of resilience you have built to keep your inner life undisturbed.`,
        image: ""
    },
    {
        title: "Chapter 59. The Cell Wall’s Choice",
        exhibit: "Strategic Gatekeeper",
        content: `The cell wall is a dynamic architecture that uses signals to regulate the interior, allowing nutrients in while blocking toxins. Survival depends on the quality of these "Entry Protocols".`,
        lesson: `You are not a sponge; you are a Gate. A healthy soul requires a strict "Entry Code" to distinguish between "Fuel" for your purpose and "Flood".`,
        shift: `Move from passive absorption to active filtering. Refine your boundaries to be firm enough to hold your shape but intelligent enough to let light in.`,
        image: ""
    },
    {
        title: "Chapter 60. The Architecture of the Shell",
        exhibit: "Load Distribution",
        content: `Shells use arched geometry to withstand immense pressure without internal pillars. Enclosure prevents energy leaks and forces internal life to focus growth inward before expanding.`,
        lesson: `Growth requires focus more than space. Limits prevent us from being crushed, acting as an "Architecture of Incubation" for our soul.`,
        shift: `Move from seeking expansion to mastering enclosure. Use current limits to build internal strength so you are unstoppable when the world opens up.`,
        image: ""
    },
    {
        title: "Chapter 61. The Territory of Scent",
        exhibit: "Vibrational Boundary",
        content: `Scent defines an "unseen" boundary that prevents conflict before contact. It uses information rather than matter to signal presence and occupied resources.`,
        lesson: `Boundaries do not always need to be verbalized to be felt. Your energy and integrity create an invisible line that tells others how to treat you.`,
        shift: `Move from defensive arguing to intentional presence. Cultivate an "Aura" of purpose so that your boundaries are respected before you even speak.`,
        image: ""
    },
    {
        title: "Chapter 62. The Edge of the Forest",
        exhibit: "Ecotone",
        content: `An ecotone is a transition zone where systems coexist without assimilation. Mutual restraint creates a vibrant micro-climate more biodiverse than either system alone.`,
        lesson: `Unity does not require sameness. Resilience is found in the "Edges" where we remain different but respectful of the boundaries that let both exist.`,
        shift: `Move from conquest to contribution. Find the "Margin" where your strengths meet others' needs without erasing your unique identity.`,
        image: ""
    },
    {
        title: "Chapter 63. The Gravity of Form",
        exhibit: "Grounded Integrity",
        content: `Gravity acts as an architectural auditor, testing every structure. Nature uses gravity as a blueprint for mass versus height to ensure stable growth.`,
        lesson: `Your human needs and physical limits are your logic. Accepting these constraints turns you from a "Falling" system into a "Standing" one.`,
        shift: `Move from weightless ambition to weighted wisdom. See limitations as the "Defining Edge" of your form, anchoring yourself in reality to survive storms.`,
        image: ""
    },
    {
        title: "Chapter 64. The Leaf’s Singular Duty",
        exhibit: "Functional Purity",
        content: `The leaf is a specialist optimized for photosynthesis, leaving structural support to the stem and water acquisition to the roots.`,
        lesson: `Purpose is a function. Total presence in your one "Singular Duty" makes you an effective contributor to the entire ecosystem.`,
        shift: `Move from fragmented effort to functional clarity. Your soul is meant to be a master of its own "Niche," not a generalist drowning in multitasking.`,
        image: ""
    },
    {
        title: "Chapter 65. The Root’s Humble Descent",
        exhibit: "Invisible Contribution",
        content: `Roots intentionally move away from light to secure unseen minerals and water. A tree's height is strictly limited by the depth of this "Humble Descent".`,
        lesson: `The most important part of the system is often the one in the dark. Private habits and unseen discipline determine if you survive public storms.`,
        shift: `Move from seeking recognition to securing the base. Your "Quiet Purpose" is what makes the "Ascent" possible.`,
        image: ""
    },
    {
        title: "Chapter 66. The Stem’s Integrity",
        exhibit: "Structural Honesty",
        content: `The stem utilizes organic polymers for a durable frame that acts as a dual-highway for water and sugar. It provides vertical alignment between roots and leaves.`,
        lesson: `Integrity is being a bridge. Standing tall in your truth while remaining flexible enough to sway with the storm is the key to maintaining your flow.`,
        shift: `Move from slouching under pressure to standing in alignment. Use your core values as internal "Lignin" so your architecture stands tall naturally.`,
        image: ""
    },
    {
        title: "Chapter 67. The Mission of the Bloom",
        exhibit: "Functional Aesthetics",
        content: `Blooms are high-energy events designed for pollination. True beauty is the outward expression of an internal mission to ensure continuity.`,
        lesson: `Beauty without purpose is a biological error. You are most beautiful when you are most useful, using your "Bloom" to serve the mission of the future.`,
        shift: `Move from vanity to vitality. Stop seeking to be "Seen" and ask what your beauty is serving; let your glow guide your legacy.`,
        image: ""
    },
    {
        title: "Chapter 68. The Seed’s Patient Travel",
        exhibit: "Strategic Spacing",
        content: `Seed dispersal ensures resource optimization by maintaining distance between individuals for light and water. This prevents resource depletion in a single spot.`,
        lesson: `Moving beyond your current circle is a decision for excellence. To find resources for upskilling, you must often move beyond your current mindset or environment.`,
        shift: `Move from passive stasis to active upskilling. Recognize when your current soil no longer provides room for growth and choose a path that expands your reach.`,
        image: ""
    },
    {
        title: "Chapter 69. The Service of Decay",
        exhibit: "Resource Recovery",
        content: `Decay breaks down complex structures into fundamental elements to feed what comes next. Purpose doesn't stop when the heart stops; it shifts from growing to feeding.`,
        lesson: `An ending is a requirement for a new beginning. Finished chapters provide the nutrients for future wisdom and growth for others.`,
        shift: `Move from fear of endings to mastery of legacy. Allow the past to dissolve gracefully so it can become the "Gold" of the future.`,
        image: ""
    },
    {
        title: "Chapter 70. The Predator’s Balance",
        exhibit: "Essential Friction",
        content: `Predation removes the slow and sick to ensure the remaining herd is resilient. Systems without challenge become stagnant and self-destruct.`,
        lesson: `Hard choices serve systemic health. If you do not "prune" toxic habits or draining relationships, they will consume your entire soul.`,
        shift: `Move from avoidance to auditing. Use pressure to remove "Dead Wood" and realize that balance requires both the blossom and the claw.`,
        image: ""
    },
    {
        title: "Chapter 71. The Pollinator’s Pact",
        exhibit: "Mutualistic Architecture",
        content: `Individual purposes intersect to ensure the continuity of the entire ecosystem. Systems thrive when souls serve their own needs by serving others.`,
        lesson: `True purpose is found in the overlap of the selfish and selfless. Your success is built into the success of those you touch.`,
        shift: `Move from isolated ambition to symbiotic service. Align your work with the needs of others to turn purpose into a "Pact" with the universe.`,
        image: ""
    },
    {
        title: "Chapter 72. The Sap’s Hidden Flow",
        exhibit: "Internal Logistics",
        content: `Sap moves nutrients against gravity through daily, unseen movement. Flow is the permanent reality that builds the "Wood" of character.`,
        lesson: `Purpose is found in internal consistency rather than public achievements. You are what you consistently move, not just what you achieve.`,
        shift: `Move from performative effort to internal logistics. Ensure your "Sap" is flowing toward your target so success becomes an inevitability.`,
        image: ""
    },
    {
        title: "Chapter 73. The Peak of the Canopy",
        exhibit: "Optimal Stature",
        content: `Trees reach a point where growth costs exceed energy gains, signaling a shift from expansion to lateral maturation. Trunk thickening and branch strengthening deepen the soul.`,
        lesson: `A limit is a safety protocol for endurance. Reaching your "Peak" is the moment purpose shifts from expansion to integration.`,
        shift: `Move from blind climbing to purposeful width. Honor your "Enough" to invest in the depth of your character rather than a withering ascent.`,
        image: ""
    },
    {
        title: "Chapter 74. The Art of Shedding",
        exhibit: "Essential Subtraction",
        content: `Abscission is a strategic move to push away leaves to protect the tree’s core and prevent water loss. Shedding distinguished between what is "You" and "Yours".`,
        lesson: `Shedding is saving. If a tree refuses to drop leaves, the weight of snow would break its branches; release old habits to survive the cold.`,
        shift: `Move from accumulation to optimization. Measure worth by what you are brave enough to release, clearing the way for a resilient "Spring".`,
        image: ""
    },
    {
        title: "Chapter 75. The Strategic Retreat",
        exhibit: "Metabolic Restraint",
        content: `Dormancy protects the tree's functional core by suspending non-essential growth. Withdrawing energy prevents internal highways from freezing.`,
        lesson: `Retreating is stewardship, not quitting. Withdrawing energy and seeking silence ensures the soul survives the winter storm.`,
        shift: `Move from forced productivity to seasonal wisdom. Recognize slow seasons as the strength-gathering period for your next Spring.`,
        image: ""
    },
    {
        title: "Chapter 76. The Capacity of the Branch",
        exhibit: "Load Management",
        content: `Every branch has a "Critical Point" where fibres can no longer dissipate force. Capacity is a fixed physical reality, not a variable of willpower.`,
        lesson: `Geometry and limit keep branches from breaking. Knowing when a load is "Too Much" is the highest form of intelligence; snapping loses your ability to serve forever.`,
        shift: `Move from heroic over-extension to calibrated capability. Measure your capacity daily and shake off the "Snow" of others' expectations to hold only what you can carry with grace.`,
        image: ""
    },
    {
        title: "Chapter 77. The Ripening’s End",
        exhibit: "Maturation",
        content: `After structural architecture is complete, energy shifts to distilling sugars and flavonoids. Maturation means your duty is to become as "Sweet" and authentic as possible.`,
        lesson: `There is a time to stop the outward push and begin inward ripening. Turn experiences into wisdom; you are measured by your flavour, not your size.`,
        shift: `Move from endless accumulation to intentional distillation. Sitting in the "Sun" of your own life turns hard edges into something sweet.`,
        image: ""
    },
    {
        title: "Chapter 78. The Quenched Root",
        exhibit: "Satiety",
        content: `Hydraulic saturation maintains structure, but roots must stop absorbing to avoid rupturing cell architecture. Health is defined by what you stop taking in.`,
        lesson: `Saturation is a safety protocol. If you don't know how to be "Full," you drown in the things meant to nourish you.`,
        shift: `Move from hunger to homeostasis. Stop apologizing for being "Finished" and honor your "Enough" to reach balance.`,
        image: ""
    },
    {
        title: "Chapter 79. The Night’s Mandate",
        exhibit: "Rhythmic Cessation",
        content: `The system only survives if active phases are balanced by non-negotiable rest. Night is for internal maintenance, repair, and respiration.`,
        lesson: `Night is a mandate, not a suggestion. Constant light leads to metabolic exhaustion; growth happens when you fold your leaves and stop.`,
        shift: `Move from perpetual availability to rhythmic recovery. View sunset as the "Small Gate" that shuts to keep the soul safe.`,
        image: ""
    },
    {
        title: "Chapter 80. The Perennial Pause",
        exhibit: "Strategic Stasis",
        content: `A specific period of "Nothingness" is biochemically required before flowering. This is a high-vibration state of preparation rather than a lack of activity.`,
        lesson: `Winter forest perform a massive biological reset. If you do not have a "Season of Nothing," you eventually run out of "Something".`,
        shift: `Move from guilt-ridden waiting to active dormancy. Your "Gap" is where the next spring is engineered; trust nothingness as much as harvest.`,
        image: ""
    },
    {
        title: "Chapter 81. The Graceful Yield",
        exhibit: "Finality",
        content: `Nature does not "cling" to a finished form; it releases energy back into the common wealth to make room for succession. Knowing when to finish is proof of well-lived purpose.`,
        lesson: `It takes immense soul to know when your work is complete. Clinging leads to decay; the "Graceful Yield" is the act of leaving while your sweetness is remembered.`,
        shift: `Move from fear of finishing to mastery of the exit. Measure life by the purity of completion and step back to become the soil for the next generation.`,
        image: ""
    }
];