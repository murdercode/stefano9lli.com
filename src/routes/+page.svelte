<script context="module">
  // Don't need JS hydratating, so...
  //export const hydrate = false; // It seems to crash compilation?
</script>

<svelte:head>
  <title>Stefano9lli website</title>
  <meta
    name="description"
    content="Stefano Novelli – Programmatore, Consulente Informatico e... Ethical qualcosa."
  />
</svelte:head>

<div class="py-4 font-bold text-yellow-100 dark:text-pink-300 italic">
  <p>
    class <span class="bold-1">Dev</span> <span class="bold-2">extends</span>
    <span class="bold-1">Humans</span> &#123;
  </p>
  <p class="row-1">
    use <span class="bold-1">FullStack, WebDev</span>;
  </p>
  <p class="row-1">
    private <span class="bold-2">$info</span> = [
  </p>
  <p class="row-2 bold-3">'Stefano Novelli',</p>

  <p class="row-2 bold-3">
    '<a href="mailto:stefano.novelli@pm.me">stefano.novelli@pm.me</a>',
  </p>
  <p class="row-1">];</p>

  <p class="row-1">
    public <span class="bold-2">$sites</span> = ['<a
      class="bold-3"
      href="https://inforge.net"
      target="_blank"
      rel="noopener">if</a
    >','<a
      class="bold-3"
      href="https://tomshw.it"
      target="_blank"
      rel="noopener">toms</a
    >'];
  </p>

  <p class="row-1">
    protected <span class="bold-2">$hidden</span> = ['<a
      class="bold-3"
      href="https://hacklog.net"
      target="_blank"
      rel="noopener">hacking</a
    >'];
  </p>

  <p class="row-1">
    private <span class="bold-2">$endpoints</span> = ['<a
          class="bold-3"
          href="https://twitter.com/stefano9lli"
          target="_blank"
          rel="me">Twitter</a
  >', '<a rel="me" class="bold-3" href="https://mastodon.social/@stefano9lli">Mastodon</a>'];
  </p>

  <p>
    &#125; <span class="comments">// 99% dev - 1% arrosticini</span>
  </p>
</div>

<style windi:safelist>
  .row-1 {
    @apply pl-4;
  }
  .row-2 {
    @apply pl-8;
  }
  .bold-1 {
    @apply text-orange-500 dark:text-pink-500 not-italic;
  }
  .bold-2 {
    @apply text-yellow-200 dark:text-yellow-200 not-italic;
  }
  .bold-3 {
    @apply text-white hover:text-yellow-100 dark:text-teal-300 dark:hover:text-teal-200 not-italic;
  }
  .comments {
    @apply text-warm-gray-500 font-medium;
  }
  a {
    @apply underline;
  }
</style>
