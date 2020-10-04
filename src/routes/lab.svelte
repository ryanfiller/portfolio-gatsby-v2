<!-- import PostPreview from '../components/content/post-preview' -->

<style type="text/scss">
  @import '../styles/functions.scss';

  #site.lab {

    #content {
      .list {
        list-style: none;
        margin: 0;
        padding: 0;
        @include container;

        // @include large {
        //   display: grid;
        //   grid-gap: var(--padding);
        //   grid-template-columns: 1fr 1fr;
        //   grid-template-rows: auto;
        //   grid-template-areas: "gadgets experiments";

        //   li:before {
        //     position:relative;
        //     z-index:1
        //   }

        //   .lab--gadgets {
        //     grid-area: gadgets;

        //     // &:before {
        //     //   content: 'gadgets';
        //     // }
        //   }

        //   .lab--experiments {
        //     grid-area: experiments;

        //     // &:before {
        //     //   content: 'experiments';
        //     // }
        //   }
        // }
      }
    }
  }
</style>

<main>
  <section>
    <ul class='list'>
      TODO - lab
      <!-- {posts.map((post, index) => (
        <li
          key={index}
          class={`lab--${post.node.frontmatter.meta.categories[0]}`}
          style={{ marginBottom: '2rem' }}
        >
          <PostPreview {...post} />
        </li>
      ))} -->
    </ul>
  </section>
</main>