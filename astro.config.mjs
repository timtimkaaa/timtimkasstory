// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarEntries } from 'starlight-obsidian';

// https://astro.build/config
export default defineConfig({
	markdown: {
		processor: unified(),
	},
	integrations: [
		starlight({
          plugins: [
            // Generate the Obsidian vault pages.
            starlightObsidian({
              vault: './src/content/obsidian',
            }),
          ],
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
                {
                  label: 'Categories',
                  // Add the generated Obsidian sidebar entries to this group.
                  items: [obsidianSidebarEntries],
                },
				{
					label: 'Guides',
					items: [
						{ autogenerate: { directory: 'guides' } }

					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
                {
                    label: 'Memories',
                    items: [{ autogenerate: { directory: 'memories' } }],
                },
			],
		}),
	],
});
