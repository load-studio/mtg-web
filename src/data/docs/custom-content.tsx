import type { DocSection } from "@/types/documentation"
import { DocumentationCode as Code } from "@/components/docs/DocumentationCode"
import { Figure } from "@/components/docs/Figure"
const wiki = "https://openterraingen.fandom.com/wiki/"

export const customContentDocs: DocSection[] = [
  {
    id: "objects",
    title: "Custom Objects and Structures",
    group: "Custom content",
    summary: "Use BO3 and BO4 objects for trees, rocks, buildings, and larger structures.",
    content: (
      <>
        <p>Custom objects are text-based descriptions of blocks and optional metadata used to place hand-built content during generation or with MTG commands. The inherited OTG format includes BO2, BO3, and BO4, but BO2 is legacy. Prefer BO3 for simpler objects and BO4 where your preset and MTG build support advanced structure features.</p>
        <h2>BO3 and BO4</h2>
        <ul>
          <li>
            <strong>BO3:</strong> a block object suitable for smaller objects and, through structure resources, linked parts of larger builds.</li>
          <li>
            <strong>BO4:</strong> supports advanced branching and structure placement rules. BO4 structures require a compatible preset structure mode; verify <code>CustomStructureType</code>.</li>
          <li>
            <strong>BO2:</strong> legacy support may vary. Test the exact MTG version before building new content around it.</li>
        </ul>
        <h2>Typical preset layout</h2>
        <Code title="Illustrative preset tree">{"MyPreset/\n├── WorldConfig.ini\n├── WorldBiomes/\n│   └── Plains.bc\n└── WorldObjects/\n    ├── Trees/\n    │   └── ExampleTree.bo3\n    └── Structures/\n        └── ExampleHouse.bo4"}</Code>
        <p>This layout is illustrative. Preserve the structure used by your actual preset and ensure the referenced object names match stored files.</p>
        <h2>Spawn an object manually</h2>
        <Code title="Command syntax">/mtg spawn &lt;preset&gt; &lt;object&gt; [location] [force]</Code>
        <p>Run <code>/mtg help spawn</code> for the installed command syntax. The <code>global</code> preset argument checks global objects. Spawning a BO4 requires an MTG world and a preset configured for BO4 custom structures.</p>
        <Figure src="https://static.wikia.nocookie.net/terraincontrol/images/9/99/Tree_1.jpg/revision/latest/scale-to-width-down/220?cb=20180127125132" alt="Example tree build from the original OpenTerrainGenerator tutorial" caption="Tree example from the original OTG custom-object tutorial (legacy instructions; image is illustrative)."/>
        <Figure src="https://static.wikia.nocookie.net/terraincontrol/images/1/1d/Tree_2.jpg/revision/latest/scale-to-width-down/220?cb=20180127132542" alt="Example of selecting a custom tree object" caption="Source: Open Terrain Generator Wiki, “Tutorial: Spawning Custom Object” (community content is marked CC BY-SA on the source page)."/>
        <p>References: <a href={wiki+"Custom_Objects_and_Structures_%28BO2%2FBO3%2FBO4_configs%29"} target="_blank" rel="noreferrer">Custom Objects and Structures</a> and <a href={wiki+"Tutorial%3A_Spawning_Custom_Object"} target="_blank" rel="noreferrer">Spawning a Custom Object tutorial</a>.</p>
      </>
    ),
  },
]
