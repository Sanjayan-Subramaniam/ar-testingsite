<template>
  <div>
    <DiegoFeaturesHero />
    <SectionSpacer />
    <DiegoFeaturesUsecases />
    <SectionSpacer />
    <DiegoFeaturesContentimgright
      title="Powerful"
      bgimage-path="bg-[url('/diego-powerful.webp')]"
      icon-path="/icons/virusfree.svg"
      para1="Diego disinfects with UV-C light which has been used effectively for over 100 years (used in hospitals and military bio-defence systems)"
      para2="UV-C light powerfully destroys 99.9% of microorganisms, including bacteria, viruses and mould"
      para3="Give your staff and customers the best protection"
    />

    <SectionSpacer />
    <DiegoFeaturesContentimgleft
      title="Efficient"
      title-color="text-arblue"
      number="2"
      bgimage-path="bg-[url('/diego-efficient.webp')]"
      icon-path="/icons/efficient.svg"
      para1="UV-C light is not only the most powerful, but the most efficient disinfectant"
      para2="Quickly destroys DNA and RNA of microorganisms on exposure"
      para3="Disinfect each room in as little as five minutes"
    />
    <SectionSpacer />
    <DiegoFeaturesContentimgright
      title="Autonomous"
      bgimage-path="bg-[url('/diego-autonomous.webp')]"
      icon-path="/icons/autonomous.svg"
      para1="Diego disinfects with UV-C light which has been used effectively for over 100 years (used in hospitals and military bio-defence systems)"
      para2="UV-C light powerfully destroys 99.9% of microorganisms, including bacteria, viruses and mould"
      para3="Give your staff and customers the best protection"
    />

    <SectionSpacer />
    <DiegoFeaturesContentimgleft
      title="Easy"
      bgimage-path="bg-[url('/diego-easy.webp')]"
      icon-path="/icons/easy.svg"
      para1="Diego autonomously moves around a room and from room to room based on your floorplan"
      para2="Intelligently reaches every nook and cranny"
      para3="Equipped with advanced navigation, obstacle avoidance and safety technology"
      para4="No human supervision – free up valuable labour for other cleaning needs"
    />
    <SectionSpacer />

    <DiegoFeaturesUvcslider />
    <SectionSpacer />
    <DiegoFeaturesUsingdiego />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "diego",
});
</script>

<style lang="scss" scoped></style>
