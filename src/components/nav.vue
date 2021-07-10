<template>
  <nav :class="[scrolled ? 'nav-shadow dark:shadow-dark-shadow' : '', 'nav dark:bg-background_dark']">
      <!-- Large viewports -->
      <div class="hidden md:block h-full">
        <div class="nav-content">
          <a aria-label="Go to Home" class="nav-home dark:text-brand_primary_dark" href="#">Gonzalo Hirsch</a>
          <ul class="nav-list">
              <li><a class="nav-list-link dark:text-brand_primary_dark dark:hover:text-background_dark dark:hover:bg-brand_primary_dark" aria-label="Go to About" href="#about" >{{ $t('nav.about')}}</a></li>
              <li><a class="nav-list-link dark:text-brand_primary_dark dark:hover:text-background_dark dark:hover:bg-brand_primary_dark" aria-label="Go to Experience" href="#experience" >{{ $t('nav.experience')}}</a></li>
              <li><a class="nav-list-link dark:text-brand_primary_dark dark:hover:text-background_dark dark:hover:bg-brand_primary_dark" aria-label="Go to Passion" href="#passion" >{{ $t('nav.passion')}}</a></li>
              <li><a class="nav-list-link dark:text-brand_primary_dark dark:hover:text-background_dark dark:hover:bg-brand_primary_dark" aria-label="Go to Projects" href="#projects" >{{ $t('nav.projects')}}</a></li>
              <li><a class="nav-list-link dark:text-brand_primary_dark dark:hover:text-background_dark dark:hover:bg-brand_primary_dark" aria-label="Go to Contact" href="#contact" >{{ $t('nav.contact')}}</a></li>
          </ul>
        </div>
      </div>
      <div class="md:hidden h-full">
        <div class="nav-content">
          <a aria-label="Go to Home" class="nav-home dark:text-brand_primary_dark" href="#">GH</a>
          <svg class="nav-mobile-hamburguer" @click="toggleMenu" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path class="text-brand_primary_light dark:text-brand_primary_dark" fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
          <div v-if="menuVisible" :class="[menuVisible ? 'nav-mobile-menu-overlay-visible' : 'nav-mobile-menu-overlay-invisible', 'nav-mobile-menu-overlay']" @click="toggleMenu" />
          <div :class="[menuVisible ? 'nav-mobile-menu-animate-enter' : 'nav-mobile-menu-animate-leave', 'nav-mobile-menu dark:bg-brand_primary_dark']">
            <div class="nav-mobile-menu-nav-wrapper">
              <a aria-label="Go to Home" class="nav-mobile-home dark:text-background_dark" href="#">Gonzalo Hirsch</a>
              <ul class="nav-list-mobile">
                  <li class="nav-list-link-mobile-wrapper"><a class="nav-list-link-mobile dark:text-background_dark dark:hover:text-brand_primary_dark dark:hover:bg-background_dark" aria-label="Go to About" href="#about" >{{ $t('nav.about')}}</a></li>
                  <li class="nav-list-link-mobile-wrapper"><a class="nav-list-link-mobile dark:text-background_dark dark:hover:text-brand_primary_dark dark:hover:bg-background_dark" aria-label="Go to Experience" href="#experience" >{{ $t('nav.experience')}}</a></li>
                  <li class="nav-list-link-mobile-wrapper"><a class="nav-list-link-mobile dark:text-background_dark dark:hover:text-brand_primary_dark dark:hover:bg-background_dark" aria-label="Go to Passion" href="#passion" >{{ $t('nav.passion')}}</a></li>
                  <li class="nav-list-link-mobile-wrapper"><a class="nav-list-link-mobile dark:text-background_dark dark:hover:text-brand_primary_dark dark:hover:bg-background_dark" aria-label="Go to Projects" href="#projects" >{{ $t('nav.projects')}}</a></li>
                  <li class="nav-list-link-mobile-wrapper"><a class="nav-list-link-mobile dark:text-background_dark dark:hover:text-brand_primary_dark dark:hover:bg-background_dark" aria-label="Go to Contact" href="#contact" >{{ $t('nav.contact')}}</a></li>
              </ul>
              <v-button class="mt-2 mx-auto" :text="$t('nav.button_cv.text')" :aria="$t('nav.button_cv.aria')" href="/GonzaloHirsch-CV.pdf" target="_blank"/>
              <v-button class="mt-4 mx-auto" :text="$t('nav.button_email.text')" :aria="$t('nav.button_email.aria')" href="mailto:hirschgonzalo@gmail.com" target="_blank"/>
            </div>
            <div class="nav-mobile-menu-social-wrapper">
              <div class="nav-mobile-menu-social-icons">
                <a class="nav-mobile-social-icon" href="https://github.com/GonzaloHirsch" aria-label="Go to Github" target="_blank" rel="noopener noreferer">
                  <svg class="hover-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path class="nav-mobile-social-icon-internal dark:text-background_dark" fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </a>
                <a class="nav-mobile-social-icon" href="https://www.linkedin.com/in/gonzalo-hirsch/" aria-label="Go to Linkedin" target="_blank" rel="noopener noreferer">
                  <svg class="hover-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path class="nav-mobile-social-icon-internal dark:text-background_dark" fill="currentColor" d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                  </svg>
                </a>
                <a class="nav-mobile-social-icon" href="https://www.instagram.com/gonzalohirsch/?hl=en" aria-label="Go to Instagram" target="_blank" rel="noopener noreferer">
                  <svg class="hover-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path class="nav-mobile-social-icon-internal dark:text-background_dark" fill="currentColor" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  </svg>
                </a>
                <a class="nav-mobile-social-icon" href="https://www.toptal.com/resume/gonzalo-hirsch" aria-label="Go to Toptal" target="_blank" rel="noopener noreferer">
                  <svg class="hover-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path class="nav-mobile-social-icon-internal dark:text-background_dark" fill="currentColor" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </a>
                <a class="nav-mobile-social-icon" href="mailto:hirschgonzalo@gmail.com" aria-label="Send me an email" target="_blank" rel="noopener noreferer">
                  <svg class="hover-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path class="nav-mobile-social-icon-internal dark:text-background_dark" fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
import vButton from '@/components/button'

export default {
  name: 'Home',
  props: ['scrolled'],
  components: {
    vButton
  },
  data: () => ({
    menuVisible: false
  }),
  methods: {
    toggleMenu: function () {
      this.menuVisible = !this.menuVisible
      this.$store.dispatch('changeMenuVisibility', this.menuVisible)
    }
  }
}
</script>
<style scoped>
.nav {
  @apply w-full z-20 bg-background_light h-12 px-8 fixed top-0;
}

.nav-content {
  @apply flex flex-row items-center justify-between h-full;
}

.nav-shadow {
  @apply shadow-lg;
}

.nav-home {
  @apply font-highlight text-brand_primary_light text-h3 leading-h3 mb-0;
}

.nav-mobile-home {
  @apply font-highlight text-white text-h5 leading-h5 mb-6 w-full text-center;
}

.nav-mobile-email {
  @apply font-text text-white text-base leading-base mb-6 w-full text-center;
}

.nav-list {
  @apply list-none flex flex-row;
}

.nav-mobile {
  @apply list-none flex flex-col;
}

.nav-list li {
  @apply pl-4;
}

.nav-list-link {
  @apply px-2 py-2 rounded text-brand_primary_light;
}

.nav-list-link-mobile-wrapper {
  @apply my-4 text-center;
}

.nav-list-link-mobile {
  @apply px-2 py-2 rounded text-white;
}

.nav-list-link:hover {
  @apply text-background_light bg-brand_primary_light;
}

.nav-list-link-mobile:hover {
  @apply text-brand_primary_light bg-white;
}

.nav-mobile-hamburguer {
  @apply cursor-pointer;
}

.nav-mobile-hamburguer:hover {
  @apply transform scale-125;
}

.nav-mobile-menu-animate-enter {
  transform: translateX(0%);
}

.nav-mobile-menu-animate-leave {
  transform: translateX(150%);
}

.nav-mobile-menu {
  @apply z-50 fixed top-0 right-0 w-6/12 flex flex-col bg-brand_primary_light items-center justify-between;
  height: 100vh;
}

.nav-mobile-menu-overlay {
  @apply z-30 w-full bg-black fixed top-0 right-0;
  height: 100vh;
}

.nav-mobile-menu-overlay-visible {
  @apply opacity-40;
}

.nav-mobile-menu-overlay-invisible {
  @apply opacity-0;
}

.nav-mobile-menu-nav-wrapper {
  @apply w-full mt-6 flex flex-col items-center;
}

.nav-mobile-menu-social-wrapper {
  @apply w-full mb-6 flex flex-col items-center;
}

.nav-mobile-menu-social-icons {
  @apply w-full flex flex-row flex-wrap items-center justify-center;
}

.nav-mobile-social-icon {
  @apply px-2 w-4/12 cursor-pointer flex flex-row justify-center mt-4;
}

.hover-icon:hover {
  @apply transform scale-125;
}

.nav-mobile-social-icon-internal {
  @apply text-white;
}
</style>
