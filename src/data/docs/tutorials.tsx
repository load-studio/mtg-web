import type { DocSection } from "@/types/documentation"
import { DocumentationCode as Code } from "@/components/docs/DocumentationCode"
const wiki = "https://openterraingen.fandom.com/wiki/"

export const tutorialDocs: DocSection[] = [
  {
    id: "create-preset",
    title: "Creating a Preset",
    group: "Tutorials",
    summary: "Start a new preset from MTG's bundled Default preset.",
    content: (
      <>
        <p>The safest starting point is the Default preset shipped with MTG. It contains a working world configuration and biome files using the format expected by that source revision.</p>
        <h2>1. Copy Default</h2>
        <p>Copy <code>resources/Presets/Default</code> for development, or copy the generated plugin-data preset after first startup. Give the copy a clear name and keep the original unchanged.</p>
        <h2>2. Set preset identity</h2>
        <p>In <code>WorldConfig.ini</code>, update identity fields such as <code>Author</code>, <code>Description</code>, and version values. Use the existing file as the syntax reference.</p>
        <h2>3. Edit global generation</h2>
        <p>Start with a few world settings, such as biome grouping, land and ocean size, rivers, or terrain height. Changing too many values at once makes issues harder to diagnose.</p>
        <h2>4. Edit a biome</h2>
        <p>Choose a <code>.bc</code> file under <code>WorldBiomes</code> and adjust terrain, surface, climate, or the resource queue. Check references before renaming biomes.</p>
        <h2>5. Add custom objects</h2>
        <p>Store BO3/BO4 files in the preset object directory and reference them from supported resources or structure settings. Test an object manually before enabling frequent generation.</p>
        <h2>6. Test in a clean world</h2>
        <p>Create a disposable test world. Check several biomes, use <code>/mtg map biomes</code> and <code>/mtg map terrain</code>, and inspect logs before using the preset on a live server.</p>
        <p>Original reference: <a href={wiki+"Creating_your_own_preset"} target="_blank" rel="noreferrer">Creating your own preset</a>.</p>
      </>
    ),
  },
  {
    id: "spawn-object",
    title: "Tutorial: Spawning a Custom Object",
    group: "Tutorials",
    summary: "Build, export, configure, and test a custom object.",
    content: (
      <>
        <p>This tutorial outlines the workflow for a small custom object such as a tree, boulder, or building. Legacy OTG tools and exact export commands may differ, so use commands available in your MTG build.</p>
        <h2>1. Build the object</h2>
        <p>Build in a test world using the blocks you intend to export. Keep dimensions within the limits supported by the object type and placement resource.</p>
        <h2>2. Export the selection</h2>
        <p>MTG declares a WorldEdit soft dependency and provides an export command for the current WorldEdit selection as BO3. Install a compatible WorldEdit build if required, select the object, then run:</p>
        <Code title="Export the selection">/mtg export</Code>
        <p>Check command output for the exported file location. If unavailable, verify plugin version, permissions, WorldEdit, and <code>/mtg help export</code>.</p>
        <h2>3. Add the object to the preset</h2>
        <p>Move or copy the exported BO3 into the intended preset's <code>WorldObjects</code> directory.</p>
        <h2>4. Spawn it for testing</h2>
        <Code title="Spawn syntax">/mtg spawn &lt;preset&gt; &lt;object&gt; [location] [force]</Code>
        <p>Use the preset and object names and an explicit location when needed. Test with force disabled first.</p>
        <h2>5. Add natural spawning</h2>
        <p>When manual placement works, add the suitable <code>Tree(...)</code>, <code>CustomObject(...)</code>, or <code>CustomStructure(...)</code> entry to a biome configuration if supported. Validate syntax against working resources in Default.</p>
        <p>Original reference: <a href={wiki+"Tutorial%3A_Spawning_Custom_Object"} target="_blank" rel="noreferrer">Tutorial: Spawning Custom Object</a>.</p>
      </>
    ),
  },
  {
    id: "image-world",
    title: "Creating a World from an Image",
    group: "Tutorials",
    summary: "Use biome colours as a map input where FromImage mode is supported.",
    content: (
      <>
        <p>Image-based biome generation can use a colour-coded image to define biome placement. The inherited format exposes settings such as <code>BiomeMode</code>, <code>ImageMode</code>, <code>ImageFile</code>, <code>ImageOrientation</code>, and image offsets. Confirm support and exact behaviour in the MTG build before relying on it for production.</p>
        <h2>Prepare the map</h2>
        <ol>
          <li>Set a unique <code>BiomeColor</code> for each biome.</li>
          <li>Create an RGB PNG using those exact colours. Disable anti-aliasing, blur, transparency, and lossy compression.</li>
          <li>Use a hard-edged pencil tool. Colours that do not match may resolve to the fill biome.</li>
          <li>Place the image in the path expected by the preset and set the image options.</li>
          <li>Generate a small test world to confirm orientation, offsets, and behaviour beyond image edges.</li>
        </ol>
        <h2>Example settings</h2>
        <Code title="Illustrative WorldConfig.ini excerpt">{"BiomeMode: FromImage\nImageMode: Mirror\nImageFile: map.png\nImageOrientation: West\nImageFillBiome: Ocean\nImageXOffset: 0\nImageZOffset: 0"}</Code>
        <p>The correct orientation and fill biome depend on your map. Test before generating large areas.</p>
        <p>For a visual example of map-based biome generation, see the original <a href={wiki+"Creating_a_world_from_an_image"} target="_blank" rel="noreferrer">image-based world tutorial</a>. Its exact settings and screenshots describe legacy OTG and should not be treated as confirmed MTG 1.21.11 behaviour.</p>
        <p>Original reference: <a href={wiki+"Creating_a_world_from_an_image"} target="_blank" rel="noreferrer">Creating a world from an image</a>.</p>
      </>
    ),
  },
]
