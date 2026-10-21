# MTG Documentation

Documentation website for [ModernTerrainGenerator](https://github.com/StudioLoad/ModernTerrainGenerator), focused on **Paper 1.21.11**.

The site adapts the original OpenTerrainGenerator wiki topics for MTG and excludes Forge, Fabric, mod-loader, and modpack-specific setup. Legacy OTG pages are linked as background references where useful; they are not presented as confirmation that every old setting works in MTG.

## Development

Requirements: Node.js compatible with the Vite version in `package.json` and pnpm.

```bash
pnpm install
pnpm dev
```

## Checks

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Documentation coverage

- Installation and preset setup
- Worlds, dimensions, commands, and permissions
- `WorldConfig.ini`, biome configuration files, and resource queues
- Custom objects and structures
- Creating presets, spawning custom objects, and image-based biome maps
- Preset compatibility and useful resources

The site uses the shadcn/ui components already included in this repository. Images from the original OTG community wiki are credited in context and retained as historical illustrations when they remain available.
