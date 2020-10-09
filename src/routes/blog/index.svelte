<!-- ---
name: 'blog'
title: 'Blog'
---

blog -->

<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`/blog.json`)
		.then(response => response.json())
		.then(posts => {
      return { posts }
    })
	}
</script>

<script>
  export let posts
</script>

<!-- <style type="text/scss">
	ul {
		margin: 0 0 1em 0;
		font-size: 1.5rem;
		line-height: 1.5;
    list-style: none;
    
		li {
			margin: .25em 0;
			&:before {
				content: attr(data-bullet);
				margin-right: .25em;
			}
		}
	}
</style> -->

<svelte:head>
	<title>CHANGE ME</title>
</svelte:head>

<ul>
  {#each posts as post}
		<li>
      <a rel='prefetch' href={post.slug}>
        {post.title}
      </a>
    </li>
	{/each}
</ul>