<style global type='text/scss'> 
  .framework-list {
    ul {
      margin-left: 0;
      padding-left: 2em;
    
      & > li {
        list-style: none;
        position: relative;
        margin-bottom: 0;
    
        + li {
          margin-top: 2em;
        }
    
        &:before {
          content: '';
          display: block;
          height: 1.5em;
          width: 1.5em;
          background-size: contain;
          background-position: center center;
          background-repeat: no-repeat;
          position: absolute;
          top: 0;
          left: -2em;
        }
    
        &:nth-child(1):before {
          background-image: url('/images/react-logo.svg');
        }
    
        &:nth-child(2):before {
          background-image: url('/images/svelte-logo.svg');
        }
    
        &:nth-child(3):before {
          background-image: url('/images/vue-logo.svg');
        }
      }
    }
  }
</style>

<section class='framework-list'>
  <slot />
</section>