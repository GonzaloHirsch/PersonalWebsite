<template>
<div class="home">
  <ExperienceJob/>
  <ExperienceEducation/>
  <ExperienceAchievements/>
  <ExperienceAbilities/>
</div>
</template>

<script>
import ExperienceJob from '@/views/experience/Experience_Job'
import ExperienceAbilities from '@/views/experience/Experience_Abilities'
import ExperienceEducation from '@/views/experience/Experience_Education'
import ExperienceAchievements from '@/views/experience/Experience_Achievements'

export default {
  name: 'Experience',
  components: {
    ExperienceJob,
    ExperienceAbilities,
    ExperienceEducation,
    ExperienceAchievements
  }
}
</script>
