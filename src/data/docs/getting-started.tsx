import type { DocSection } from "@/types/documentation"
import { DocumentationCode as Code } from "@/components/docs/DocumentationCode"
import { Figure } from "@/components/docs/Figure"

export const gettingStartedDocs: DocSection[] = [
  {
    id: "overview",
    title: "Overview",
    group: "Getting started",
    summary: "What MTG is and how its preset-driven world generation works.",
    content: (
      <>
        <p>ModernTerrainGenerator (MTG) is a data-driven world generation plugin for <strong>Paper 1.21.11</strong>. It continues the OpenTerrainGenerator configuration and world-generation concepts, adapted for modern Minecraft and Paper.</p>
        <p>MTG separates the generation engine from its presets. A preset describes terrain, biome placement, surface blocks, resources, and custom objects used when generating new chunks.</p>
        <h2>What you can configure</h2>
        <ul>
          <li>Terrain height, volatility, landmasses, oceans, and rivers.</li>
          <li>Biome groups, biome size and rarity, islands, and borders.</li>
          <li>Biome surfaces, underground resources, plants, lakes, and decoration.</li>
          <li>Custom objects and structures defined with BO3 and BO4 files where supported.</li>
          <li>Biome and terrain maps for inspecting generated layouts.</li>
        </ul>
        <h2>Compatibility</h2>
        <p>This documentation targets MTG on Paper 1.21.11 only. It does not cover Forge, Fabric, client-side installation, mod loaders, or modpack-specific dimension configuration. Older OTG pages describe earlier versions; use this guide and the preset files shipped with MTG as the reference for current behaviour.</p>
        <p>Project: <a href="https://github.com/StudioLoad/ModernTerrainGenerator" target="_blank" rel="noreferrer">StudioLoad/ModernTerrainGenerator</a>.</p>
        <Figure src="https://cdn-loadmc.rodriaum.com/assets/designs/mtg-logo.png" alt="ModernTerrainGenerator logo" caption="ModernTerrainGenerator" className="mx-auto w-fit max-w-full" imageClassName="min-w-0 w-36 sm:w-40" />
      </>
    ),
  },
  {
    id: "preset-catalog",
    title: "OTG Presets",
    group: "Getting started",
    summary: "Browse the original OpenTerrainGenerator preset catalogue and check compatibility with MTG.",
    content: (
      <>
        <p>A preset is a ready-made world-generation configuration that can be used for an overworld or, in compatible OTG versions, as a dimension. The original catalogue lists community presets and their historical target versions. These entries are useful for inspiration, but they are not a compatibility guarantee for ModernTerrainGenerator on Paper 1.21.11.</p>
        <p>Source catalogue: <a href="https://openterraingen.fandom.com/wiki/OTG_Presets" target="_blank" rel="noreferrer">OTG Presets on the Open Terrain Generator Wiki</a>.</p>
        <h2>Team OTG</h2>
        <ul>
          <li><strong>Default:</strong> a vanilla-like generation preset intended as a base for further customization.</li>
        </ul>
        <h2>MCPitman</h2>
        <ul>
          <li><strong>Vanilla Vistas:</strong> varied and picturesque terrain with a vanilla feel, balancing height variation with flatter areas for building.</li>
          <li><strong>Biome Bundle:</strong> a mix of realistic and fantasy landscapes, custom biomes, trees, boulders, ruins, buildings, dungeons and other structures.</li>
          <li><strong>Biome Bundle O' Plenty:</strong> a Biome Bundle variation designed around Biomes O' Plenty.</li>
          <li><strong>Wildlands:</strong> detailed landscapes with climate zones, volcanoes, glaciers, craters and transitions between biomes.</li>
          <li><strong>Skylands:</strong> interconnected floating islands above the void, with a lower-verticality variant also described in the catalogue.</li>
          <li><strong>Flatlands:</strong> a superflat-style world with vanilla biomes.</li>
          <li><strong>Void:</strong> a void world with a single floating island at spawn.</li>
          <li><strong>Alien Jungle:</strong> colourful, unusual jungle biomes, primarily described as a dimension preset.</li>
          <li><strong>Tutorial World:</strong> an example preset demonstrating climate groups, mountains, hills, plains, rivers and lakes.</li>
        </ul>
        <h2>Other community presets</h2>
        <ul>
          <li>
            <strong>Dregora (NLBlackEagle):</strong> a large-scale world featuring many biomes and custom structures.</li>
          <li>
            <strong>Traveler's Dream (Darsenia):</strong> detailed terrain inspired by real-world landscapes with a fantasy influence.</li>
          <li>
            <strong>Thaumatic Traveler's Dream (Darsenia):</strong> a Traveler's Dream variant with Thaumcraft support.</li>
          <li>
            <strong>Dungeons (PG85):</strong> a demo dimension for testing custom structure features.</li>
          <li>
            <strong>Eternal (Jayzet):</strong> an overhaul of world generation with custom content and terrain settings.</li>
          <li>
            <strong>Far From Home (Incognietis):</strong> varied terrain styles with smooth biome transitions and expansive views.</li>
        </ul>
        <h2>Preset screenshots and downloads</h2>
        <p>These screenshots and download pages are hosted by the original preset projects. They are legacy OTG downloads, not builds verified for MTG or Paper 1.21.11.</p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <Figure src="https://media.forgecdn.net/attachments/408/116/2021-09-27_01.jpg" alt="Vanilla Vistas terrain screenshot" caption="Vanilla Vistas - varied terrain with a vanilla style" />
            <div className="flex justify-center"><a className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90" href="https://www.curseforge.com/minecraft/mc-mods/vanilla-vistas" target="_blank" rel="noreferrer">↓ Download on CurseForge</a></div>
          </div>
          <div className="rounded-lg border p-4">
            <Figure src="https://i.imgur.com/YtDraMh.jpg" alt="Biome Bundle preset image" caption="Biome Bundle - custom biomes, terrain and structures" />
            <div className="flex justify-center"><a className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90" href="https://www.curseforge.com/minecraft/mc-mods/biome-bundle" target="_blank" rel="noreferrer">↓ Download on CurseForge</a></div>
          </div>
          <div className="rounded-lg border p-4">
            <Figure src="https://i.imgur.com/UBrN38m.png" alt="Biome Bundle O Plenty preset image" caption="Biome Bundle O' Plenty - Biomes O' Plenty integration" />
            <div className="flex justify-center"><a className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90" href="https://www.curseforge.com/minecraft/mc-mods/biome-bundle-o-plenty" target="_blank" rel="noreferrer">↓ Download on CurseForge</a></div>
          </div>
          <div className="rounded-lg border p-4">
            <Figure src="https://i.imgur.com/pvmEtiO.png" alt="Wildlands terrain screenshot" caption="Wildlands - detailed climate zones and dramatic landscapes" />
            <div className="flex justify-center"><a className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90" href="https://www.curseforge.com/minecraft/mc-mods/wildlands" target="_blank" rel="noreferrer">↓ Download on CurseForge</a></div>
          </div>
          <div className="rounded-lg border p-4">
            <Figure src="https://media.forgecdn.net/attachments/409/183/2021-11-20_19.jpg" alt="Skylands floating islands screenshot" caption="Skylands - interconnected floating islands above the void" />
            <div className="flex justify-center"><a className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90" href="https://www.curseforge.com/minecraft/mc-mods/otg-skylands" target="_blank" rel="noreferrer">↓ Download on CurseForge</a></div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex justify-center"><a className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90" href="https://www.curseforge.com/minecraft/mc-mods/dregora" target="_blank" rel="noreferrer">↓ Download Dregora on CurseForge</a></div>
            <p className="mt-3 text-sm text-muted-foreground">Dregora - large-scale generation with hundreds of biomes and custom objects. Open the project page for its current gallery and files.</p>
          </div>
        </div>
        <h2>Compatibility with MTG</h2>
        <p>The original catalogue lists older OTG releases, including Minecraft 1.12 and 1.16, and may describe Forge, PaperSpigot or Spigot support for those versions. That historical support does not imply support for MTG or Paper 1.21.11.</p>
        <ol>
          <li>Check the preset's original Minecraft and OTG version, licence, and download details on the source page.</li>
          <li>Back up the server and test the preset on a separate Paper 1.21.11 instance.</li>
          <li>Compare its <code>WorldConfig.ini</code>, biome configs, resource queue and custom objects with the <a href="https://github.com/StudioLoad/ModernTerrainGenerator/tree/main/resources/Presets" target="_blank" rel="noreferrer">presets bundled with MTG</a>.</li>
          <li>Replace unsupported blocks, biome identifiers or mod-specific dependencies, and inspect server logs and newly generated chunks.</li>
        </ol>
        <p>Do not assume a preset will work unchanged simply because the original page lists Paper or Spigot support. Test it before using it on a live world.</p>
      </>
    ),
  },
  {
    id: "installation",
    title: "Installation",
    group: "Getting started",
    summary: "Install MTG on a Paper 1.21.11 server and select a preset generator.",
    content: (
      <>
        <h2>Requirements</h2>
        <ul>
          <li>A Minecraft Java server running <strong>Paper 1.21.11</strong>.</li>
          <li>A Java runtime supported by that Paper build.</li>
          <li>Permission to stop the server and install plugins.</li>
        </ul>
        <h2>Install the plugin</h2>
        <ol>
          <li>Stop the server cleanly.</li>
          <li>Download the MTG release JAR that explicitly targets Paper 1.21.11 from <a href="https://github.com/StudioLoad/ModernTerrainGenerator/releases" target="_blank" rel="noreferrer">GitHub Releases</a>.</li>
          <li>Place the JAR in the server's <code>plugins</code> directory.</li>
          <li>Start the server and check the console for plugin loading errors.</li>
          <li>Stop the server before editing preset files or making a backup.</li>
        </ol>
        <p>MTG is a Paper plugin. Do not place its plugin JAR in a <code>mods</code> directory.</p>
        <h2>Install a preset</h2>
        <p>Download or prepare a preset supported by MTG. For the original community catalogue and compatibility notes, see <a href="/documentation/preset-catalog">OTG Presets</a>. Test legacy presets against the files included with MTG before using them on a live server.</p>
        <p>When creating the world, specify MTG and the preset name as the generator. Replace <code>world_name</code> with the target world's actual name and <code>Wildlands</code> with the name of your chosen preset.</p>
        <h3>With Multiverse</h3>
        <Code title="Generator syntax">-g ModernTerrainGenerator:Wildlands</Code>
        <h3>Without Multiverse</h3>
        <p>Add the generator setting to your <code>bukkit.yml</code> file:</p>
        <Code title="bukkit.yml">{`worlds:\n    world_name:\n        generator: ModernTerrainGenerator:Wildlands`}</Code>
        <p>The world name and preset name must match your server setup for MTG to select the correct generator and preset.</p>
        <h2>Verify the installation</h2>
        <p>Run <code>/mtg help</code> in-game or from the console to view available commands. In an MTG world, run <code>/mtg preset</code> to view the active preset name and description.</p>
        <h2>Client-side requirements and visual limitations</h2>
        <p>MTG is a Paper plugin and is not required on players' clients. However, some visual features, including foliage, grass, sky and fog colours, are not fully supported client-side. These may appear as plain colours rather than gradients.</p>
        <h2>Back up first</h2>
        <p>World-generation settings affect newly generated chunks. Make a full backup before changing presets. Changing a preset does not retroactively regenerate chunks that already exist.</p>
      </>
    ),
  },
  {
    id: "install-presets",
    title: "Installing Presets",
    group: "Getting started",
    summary: "Add a preset folder and use it when creating an MTG world.",
    content: (
      <>
        <p>A preset is a directory containing a world configuration, biome configuration files, and optionally custom objects. MTG ships with a <code>Default</code> preset that can be used as a starting point.</p>
        <h2>Preset directory</h2>
        <p>The preset loader reads preset folders from the plugin's data directory. The bundled source files are in <code>resources/Presets/Default</code>. Confirm the exact runtime data path in the installed build before copying files.</p>
        <h2>Install a preset</h2>
        <ol>
          <li>Stop the server.</li>
          <li>Copy the complete preset folder into the plugin's <code>Presets</code> directory. Keep the internal structure, including <code>WorldConfig.ini</code>, <code>WorldBiomes</code>, and any <code>WorldObjects</code> directory.</li>
          <li>Check that the folder name is unique and all referenced biome and object files exist.</li>
          <li>Start the server and inspect the console for configuration warnings.</li>
          <li>Configure a newly created world to use MTG and the desired preset using the world-creation workflow supported by your server.</li>
        </ol>
        <p>Do not assume an OTG 1.12 or 1.16 preset works unchanged. Validate resource names, Minecraft block identifiers, biome names, and object configuration against MTG and Minecraft 1.21.11.</p>
        <h2>Existing worlds</h2>
        <p>Back up the world before changing its generator. Existing chunks remain; newly generated areas may differ if the generator or preset changes.</p>
      </>
    ),
  },
  {
    id: "dimensions",
    title: "Worlds and Dimensions",
    group: "Getting started",
    summary: "Understand world-generator scope without legacy modpack setup.",
    content: (
      <>
        <p>MTG is a Paper plugin and configures terrain through its preset and world-generation integration. It does not use the Forge world-creation GUI or Forge modpack dimension files described in older OTG articles.</p>
        <h2>Choosing the generator</h2>
        <p>Ensure that the target world is created with MTG's generator. Installing the plugin does not mean every world automatically uses MTG. The preset command reports whether MTG is enabled in the current world.</p>
        <Code title="Check the active preset">/mtg preset</Code>
        <h2>Separate worlds</h2>
        <p>For separate environments, create and configure worlds with the Paper setup or a compatible world-management workflow. The exact creation command depends on how your server provisions worlds; use that workflow's current documentation rather than old Forge-only examples.</p>
        <p>Nether and End behaviour depends on Paper configuration and the generator integration. Do not assume legacy OTG dimension GUI or portal options exist in MTG.</p>
      </>
    ),
  },
]
