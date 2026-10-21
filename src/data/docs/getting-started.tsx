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
    content: <></>,
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
