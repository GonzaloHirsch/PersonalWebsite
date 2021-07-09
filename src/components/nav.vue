<template>
  <nav :class="[scrolled ? 'nav-shadow dark:shadow-dark-shadow' : '', 'nav dark:bg-background_dark']">
      <a aria-label="Go to Home" class="nav-home dark:text-brand_primary_dark" href="#">Gonzalo Hirsch</a>
      <ul class="nav-list">
          <li><a class="nav-list-link dark:text-brand_primary_dark dark:hover:text-background_dark dark:hover:bg-brand_primary_dark" aria-label="Go to About" href="#about" >{{ $t('nav.about')}}</a></li>
          <li><a class="nav-list-link dark:text-brand_primary_dark dark:hover:text-background_dark dark:hover:bg-brand_primary_dark" aria-label="Go to Experience" href="#experience" >{{ $t('nav.experience')}}</a></li>
          <li><a class="nav-list-link dark:text-brand_primary_dark dark:hover:text-background_dark dark:hover:bg-brand_primary_dark" aria-label="Go to Passion" href="#passion" >{{ $t('nav.passion')}}</a></li>
          <li><a class="nav-list-link dark:text-brand_primary_dark dark:hover:text-background_dark dark:hover:bg-brand_primary_dark" aria-label="Go to Projects" href="#projects" >{{ $t('nav.projects')}}</a></li>
          <li><a class="nav-list-link dark:text-brand_primary_dark dark:hover:text-background_dark dark:hover:bg-brand_primary_dark" aria-label="Go to Contact" href="#contact" >{{ $t('nav.contact')}}</a></li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'Home',
  props: ['scrolled']
}
</script>
<style scoped>
.nav {
    @apply w-full bg-background_light transition duration-300 h-12 flex flex-row items-center justify-between px-8 fixed top-0;
}

.nav-shadow {
    @apply shadow-lg;
}

.nav-home {
    @apply font-highlight text-brand_primary_light text-h3 leading-h3 mb-0 transition duration-300;
}

.nav-list {
    @apply list-none flex flex-row;
}

.nav-list li {
    @apply pl-4;
}

.nav-list-link {
    @apply px-2 py-2 rounded transition duration-300 text-brand_primary_light;
}

.nav-list-link:hover {
    @apply text-background_light bg-brand_primary_light;
}
</style>
