<template>
  <div class="container mx-auto">
    <h2
      class="leading-normal md:text-5xl text-center text-3xl text-ardarkgreen"
    >
      Open Roles
    </h2>

    <SectionSpacer></SectionSpacer>

    <div class="flex flex-col gap-y-6">
      <CareersFeatureRolecard
        roleTitle="Software Engineer"
        country="Hong Kong"
        flag="/flags/hongkong.svg"
        roleType="Technical"
        iconType="/icons/engineering.svg"
        roleDescription="As a Software Engineer, you will be a member of the August
Robotics technical team. You will be responsible for writing
the software required to ensure that the company’s robots
function effectively and reliably, and that the robot user
interfaces are intuitive and fully-featured."
      ></CareersFeatureRolecard>
      <CareersFeatureRolecard
        roleTitle="Python Software Engineer"
        country="Hong Kong"
        flag="/flags/hongkong.svg"
        roleType="Technical"
        iconType="/icons/engineering.svg"
        roleDescription="As a Python Software Engineer, you will be a member of the
August Robotics technical team. You will be responsible for
writing the software required to ensure that the company’s
robots function effectively and reliably, and that the robot
user interfaces are intuitive and fully-featured..."
      ></CareersFeatureRolecard>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
