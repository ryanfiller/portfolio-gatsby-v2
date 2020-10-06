<script>
  import { meta } from '../site-config'
</script>

<style global type='text/scss'>
  section {
    display: flex;
    align-items: center;
  }

  div {
    line-height: 1.5;
  }

  p {
    margin: 1em 0;
  }

  img {
    float: right;
    margin: 0 0 1em 1em;
    width: 200px;
  }
</style>

<main>
  <section class='temp-bio'>
    <div>
      <h1>{meta.description}</h1>
      <p>
        {meta.about}
      </p>
    </div>
    <img  
      src={meta.headshot}
      alt={meta.author}
    />
  </section>
  
  <!-- <Posts posts={props.data.allMdx.edges} /> -->
  
  <!-- <Form {...contactForm} location={props.location.pathname} /> -->

</main>