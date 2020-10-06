<script>
  import { markdown } from '../../stores.js'
  markdown.set({...$$props})

  import Markdown from './markdown.svelte'
</script>

<!-- scss/global cannont be used in the style tag in this component -->

<Markdown>
  <slot />
</Markdown>