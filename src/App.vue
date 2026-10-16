<template>
  <a class="skip" href="#main">Skip to content</a>
  <AnnouncementBar />
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <VisitSection />
    <ExperienceSection />
    <MissionSection />
    <StoriesSection />
    <SignupSection />
    <ProgramsSection />
    <DonateSection />
  </main>
  <SiteFooter />
</template>

<script setup>
import AnnouncementBar from './components/AnnouncementBar.vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import VisitSection from './components/VisitSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import MissionSection from './components/MissionSection.vue'
import StoriesSection from './components/StoriesSection.vue'
import SignupSection from './components/SignupSection.vue'
import ProgramsSection from './components/ProgramsSection.vue'
import DonateSection from './components/DonateSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
