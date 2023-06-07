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
        v-for="role in roles"
        :roleTitle="role.roleTitle"
        :country="role.country"
        :flag="role.flag"
        :roleType="role.roleType"
        :iconType="role.iconType"
        :roleDescription="role.roleDescription"
        :jdLink="role.jdLink"
      />
    </div>
  </div>
</template>

<script setup>
const roles = [
  {
    roleTitle: "Software Engineer",
    country: "Hong Kong",
    flag: "/flags/hongkong.svg",
    roleType: "Technical",
    iconType: "/icons/technical.svg",
    roleDescription:
      "As a Software Engineer, you will be a member of the August Robotics technical team. You will be responsible for writing the software required to ensure that the company’s robots function effectively and reliably, and that the robot user interfaces are intuitive and fully-featured.",
    jdLink: "/jd/software_engineer.pdf",
  },
  {
    roleTitle: "Python Software Engineer",
    country: "Hong Kong",
    flag: "/flags/hongkong.svg",
    roleType: "Technical",
    iconType: "/icons/technical.svg",
    roleDescription:
      "As a Python Software Engineer, you will be a member of the August Robotics technical team. You will be responsible for writing the software required to ensure that the company’s robots function effectively and reliably, and that the robot user interfaces are intuitive and fully-featured.",
    jdLink: "/jd/python_software_engineer.pdf",
  },

  {
    roleTitle: "Robotics Engineer",
    country: "Shenzhen",
    flag: "/flags/mainlandchina.svg",
    roleType: "Technical",
    iconType: "/icons/technical.svg",
    roleDescription:
      "作为一名机器人工程师，你将会成为澳谷智能深圳技 术团队的关键成员，你将从始至终地参与不同层面的 工作(如传感器、电机和动力系统)。同时你也会是我们系统集成团队的重要成员，负责集 成各种部件，以制造出满足客户需求，且可靠、专 业、稳健的机器人产品。你还会做一些传感器融合方 面的工作(比如激光雷达 LiDAR、IMU、里程计等)， 以确保我们的机器人能感知环境并做出相应反应。",
    jdLink: "/jd/robotics_engineer.pdf",
  },
  {
    roleTitle: "Python软件工程师",
    country: "Shenzhen",
    flag: "/flags/mainlandchina.svg",
    roleType: "Technical",
    iconType: "/icons/technical.svg",
    roleDescription:
      "作为一名Python软件工程师，你将会成为澳谷智能技术团队的成员，你会负责写代码来确保公司的机器人实现有效的功能及保持稳定，同时使机器人的用户界面是直观的和功能齐全的。你将参与贯穿产品的全生命周期（从产品定义和设计到产品生产）。你会负责公司机器人产品的开发，从头至尾地负责不同方面的相关工作。",
    jdLink: "/jd/Python软件工程师.pdf",
  },
  {
    roleTitle: "Procurement Engineer",
    country: "Shenzhen",
    flag: "/flags/mainlandchina.svg",
    roleType: "Technical",
    iconType: "/icons/technical.svg",
    roleDescription:
      "作为一名采购工程师，你将成为澳谷智能供应链管理的重要一员。你将主要负责公司生产、研发及其他方面所需物料采购；对供应商进行有效评估，管理及维护，确保采购质量并尽可能降低采购成本；执行公司产品的进出口物流管理，确保公司产品及时交付海外客户，并满足公司物流成本预算要求；",
    jdLink: "/jd/procurement_engineer.pdf",
  },
  {
    roleTitle: "Sales and Strategy Associate",
    country: "Hong Kong (Remote)",
    flag: "/flags/hongkong.svg",
    roleType: "Commercial",
    iconType: "/icons/commercial.svg",
    roleDescription:
      "As a Sales and Strategy Associate, you will be a member of the August Robotics commercial team. You will be responsible for creating compelling sales materials, conducting business analysis and leading workstreams in other commercial areas of the business",
    jdLink: "/jd/sales_and_strategy_associate.pdf",
  },
];
</script>

<style lang="scss" scoped></style>
