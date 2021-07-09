<template>
  <footer :class="['footer dark:bg-brand_primary_dark']">
      <p class="footer-made-by dark:text-background_dark" v-html="$t('footer.made_by')"/>
      <svg class="footer-theme-icon-svg hover-icon" :alt="$t('footer.experience_dark')" :aria-label="$t('footer.experience_dark')" v-if="currentTheme === 'light'" @click="toggleTheme" style="width:24px;height:24px" viewBox="0 0 24 24">
        <!-- Moon -->
        <path class="footer-icon dark:text-background_dark" fill="currentColor" d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" />
      </svg>
      <svg class="footer-theme-icon-svg hover-icon" :alt="$t('footer.experience_light')" :aria-label="$t('footer.experience_light')" v-else @click="toggleTheme" style="width:24px;height:24px" viewBox="0 0 24 24">
        <!-- Sun -->
        <path class="footer-icon dark:text-background_dark" fill="currentColor" d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z" />
      </svg>
      <div class="footer-social">
        <a class="footer-social-icon" href="https://github.com/GonzaloHirsch" aria-label="Go to Github" target="_blank" rel="noopener noreferer">
          <svg class="hover-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path class="footer-icon dark:text-background_dark" fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        </a>
        <a class="footer-social-icon" href="https://www.linkedin.com/in/gonzalo-hirsch/" aria-label="Go to Linkedin" target="_blank" rel="noopener noreferer">
          <svg class="hover-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path class="footer-icon dark:text-background_dark" fill="currentColor" d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
          </svg>
        </a>
        <a class="footer-social-icon" href="https://www.instagram.com/gonzalohirsch/?hl=en" aria-label="Go to Instagram" target="_blank" rel="noopener noreferer">
          <svg class="hover-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path class="footer-icon dark:text-background_dark" fill="currentColor" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
          </svg>
        </a>
        <a class="footer-social-icon" href="https://www.toptal.com/resume/gonzalo-hirsch" aria-label="Go to Toptal" target="_blank" rel="noopener noreferer">
          <svg class="hover-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path class="footer-icon dark:text-background_dark" fill="currentColor" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        </a>
      </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Footer',
  data: () => ({
    currentTheme: false
  }),
  methods: {
    toggleTheme () {
      this.$store.dispatch('toggleTheme')
    }
  },
  computed: {
    ...mapGetters({ theme: 'getTheme' })
  },
  watch: {
    theme (newTheme, oldTheme) {
      newTheme === 'light'
        ? document.querySelector('html').classList.remove('dark')
        : document.querySelector('html').classList.add('dark')
      this.currentTheme = newTheme
    }
  },
  mounted () {
    this.theme === 'light'
      ? document.querySelector('html').classList.remove('dark')
      : document.querySelector('html').classList.add('dark')
    this.currentTheme = this.theme
  }
}
</script>
<style scoped>
.footer {
  @apply w-full h-36 px-8 bg-brand_primary_light text-white flex flex-col justify-center items-center;
}

.footer-made-by {
  @apply w-full text-base leading-base flex flex-row justify-center items-center;
}

.footer-icon {
  @apply text-white;
}

.footer-theme-icon-svg {
  @apply cursor-pointer w-full mt-4;
}

.hover-icon:hover {
  @apply transform scale-125;
}

.footer-social {
  @apply flex flex-row justify-center items-center w-full mt-4;
}

.footer-social-icon {
  @apply px-2 cursor-pointer;
}

@screen sm {
  .footer {
    @apply h-12 flex-row justify-between items-center;
  }

  .footer-made-by {
    @apply text-h5-sm leading-h5-sm w-5/12 justify-start;
  }

  .footer-social {
    @apply w-5/12 justify-end mt-0;
  }

  .footer-theme-icon-svg {
    @apply w-2/12 mt-0;
  }
}
</style>
