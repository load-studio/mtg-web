import type { DocSection } from "@/types/documentation"

export const referenceDocs: DocSection[] = [
{
  id: "commands",
  title: "Commands and Permissions",
  group: "Reference",
  summary: "MTG commands registered by the Paper plugin.",
  content: (
    <>
      <p>Use <code>/mtg help</code> to list available commands and <code>/mtg help command</code> for usage. Commands are permission-gated by the permissions defined in the plugin.</p>
      <h2>Common commands</h2>
      <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
      <thead>
      <tr className="border-b">
      <th className="py-2 pr-4">Command</th>
      <th className="py-2 pr-4">Purpose</th>
      <th className="py-2">Permission</th>
      </tr>
      </thead>
      <tbody>{[["/mtg help [command/page]","List commands or show detailed help.","mtg.cmd.help"],["/mtg preset","Show the current world's active preset.","mtg.cmd.preset"],["/mtg biome","Inspect biome and chunk block information.","mtg.cmd.biome"],["/mtg map biomes [width] [height] [threads]","Export a biome-layout image.","mtg.cmd.map"],["/mtg map terrain [width] [height] [threads]","Export a shaded terrain image.","mtg.cmd.map"],["/mtg spawn <preset> <object> [location] [force]","Spawn a custom object.","mtg.cmd.spawn"],["/mtg tp <biome>","Teleport to a biome by name or ID within the search range.","mtg.cmd.tp"],["/mtg export","Export a WorldEdit selection as a BO3.","mtg.cmd.export"],["/mtg edit","Edit preset data.","mtg.cmd.edit"],["/mtg structure","Show structure information.","mtg.cmd.structure"],["/mtg region","Configure the region used by MTG commands.","mtg.cmd.region"],["/mtg flush","Flush MTG data.","mtg.cmd.flush"],["/mtg data","Modify MTG data.","mtg.cmd.data"]].map(row=>
      <tr className="border-b align-top" key={row[0]}>
      <td className="py-2 pr-4 font-mono text-xs">{row[0]}</td>
      <td className="py-2 pr-4">{row[1]}</td>
      <td className="py-2 font-mono text-xs">{row[2]}</td>
      </tr>)}</tbody>
      </table>
      </div>
      <p>Subcommands and argument shapes can change between builds. Built-in help is authoritative for the installed release.</p>
    </>
  ),
},
{
  id: "tools",
  title: "Tools and Resources",
  group: "Reference",
  summary: "Useful starting points for preset makers and server administrators.",
  content: (
    <>
      <ul>
      <li>
      <a href="https://github.com/StudioLoad/ModernTerrainGenerator" target="_blank" rel="noreferrer">ModernTerrainGenerator source code</a> - implementation and bundled presets.</li>
      <li>
      <a href="https://github.com/StudioLoad/ModernTerrainGenerator/releases" target="_blank" rel="noreferrer">MTG releases</a> - release JARs and version notes.</li>
      <li>
      <a href="https://github.com/EngineHub/WorldEdit" target="_blank" rel="noreferrer">WorldEdit</a> - selection and building workflows; MTG lists it as a soft dependency for relevant tools.</li>
      <li>
      <a href="https://openterraingen.fandom.com/wiki/OTG_Presets" target="_blank" rel="noreferrer">Original OTG preset list</a> - background information on older presets. Check compatibility before use.</li>
      <li>
      <a href="https://openterraingen.fandom.com/wiki/Tools_%26_Resources" target="_blank" rel="noreferrer">Original OTG tools and resources</a> - historical links for preset creators.</li>
      <li>
      <a href="https://github.com/StudioLoad/ModernTerrainGenerator/issues" target="_blank" rel="noreferrer">Report a bug</a> - provide logs, version, and a minimal reproducible example.</li>
      </ul>
      <p>Third-party presets and tools from Minecraft 1.12 or 1.16 may need conversion for 1.21.11. Verify licences before redistributing third-party assets.</p>
    </>
  ),
}
]
