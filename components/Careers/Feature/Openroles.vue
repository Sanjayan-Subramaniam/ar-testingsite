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
  // {
  //   roleTitle: "Software Engineer",
  //   country: "Hong Kong",
  //   flag: "/flags/hongkong.svg",
  //   roleType: "Technical",
  //   iconType: "/icons/technical.svg",
  //   roleDescription:
  //     "As a Software Engineer, you will be a member of the August Robotics technical team. You will be responsible for writing the software required to ensure that the company’s robots function effectively and reliably, and that the robot user interfaces are intuitive and fully-featured.",
  //   jdLink: "/jd/software_engineer.pdf",
  // },
  // {
  //   roleTitle: "Robotics Field Engineer",
  //   country: "USA",
  //   flag: "/flags/usa.svg",
  //   roleType: "Technical",
  //   iconType: "/icons/technical.svg",
  //   roleDescription:
  //     "As a Robotics Field Engineer, you will be a member of the August Robotics technical team. You will be responsible for installing, deploying and operating innovative robot technology in both the exhibition industry (Lionel) and the hospitality industry (Diego).",
  //   jdLink: "/jd/robotics_field_engineer_LV.pdf",
  // },
  {
    roleTitle: "Sales and Operations Associate",
    country: "Germany",
    flag: "/flags/germany.svg",
    roleType: "Commercial",
    iconType: "/icons/commercial.svg",
    roleDescription:
      "As a Sales and Operations Associate, you will be a member of the August Robotics commerical team. You will assist our German staff members to engage potential customers with professional proposal documents, charm and maintain relationships with existing customers and have a relentless passion for customer happiness.",
    jdLink: "/jd/sales_ and_operations_associate_DE.pdf",
  },
  {
    roleTitle: "On-site Robotics Engineer",
    country: "Germany",
    flag: "/flags/germany.svg",
    roleType: "Technical",
    iconType: "/icons/technical.svg",
    roleDescription:
      "As an On-site Robotics Engineer, you will be a member of the August Robotics technical team. You will assist our German staff members to install, deploy and operate our robot technology with daily tasks including maintenance, interacting with customers and conducting user training.",
    jdLink: "/jd/site_engineer_DE.pdf",
  },
  {
    roleTitle: "Sales Manager",
    country: "USA",
    flag: "/flags/usa.svg",
    roleType: "Commercial",
    iconType: "/icons/commercial.svg",
    roleDescription:
      "As a Sales, you will be a member of the August Robotics commercial team. This role is well-suited for an entrepreneurial and customer- focussed business leader keen for professional independence, responsibility for commercial outcomes and the experience of working in a well-resourced and fast-growing start-up.",
    jdLink: "/jd/sales_manager_US.pdf",
  },
  {
    roleTitle: "Account Executive",
    country: "USA",
    flag: "/flags/usa.svg",
    roleType: "Commercial",
    iconType: "/icons/commercial.svg",
    roleDescription:
      "As an Account Executive you will have an entrepreneurial spirit who can manage complex sales cycles. You will contribute to developing and executing key Go-To-Market strategies, hitting annual targets, growing relationships, and understanding customer needs.",
    jdLink: "/jd/account_executive_US.pdf",
  },

  {
    roleTitle: "Project Manager",
    country: "Shenzhen",
    flag: "/flags/mainlandchina.svg",
    roleType: "Technical",
    iconType: "/icons/technical.svg",
    roleDescription:
      "As a Project manager, you will operate as the “bridge” between our R & D team and our operation teams in Germany, UK and USA. You will work closely with the company CPO to ensure that the global engineering team is focussed on the right priorities at all times.",
    jdLink: "/jd/project_manager_sz.pdf",
  },

  {
    roleTitle: "Robotics Student Internship",
    country: "USA",
    flag: "/flags/usa.svg",
    roleType: "Technical",
    iconType: "/icons/technical.svg",
    roleDescription:
      "As a Robotics Field Engineer, you will be a member of the August Robotics technical team. This program will suit those with an aspiration to build a career as a robotics R&D engineer after graduation, but also to gain some practical work experience in a real-life robotics work environment before their graduation.",
    jdLink: "/jd/robotics_student_ internship.pdf",
  },
  {
    roleTitle: "Part-time Assistant",
    country: "Germany",
    flag: "/flags/germany.svg",
    roleType: "Technical",
    iconType: "/icons/technical.svg",
    roleDescription:
      "As a Part-time assistant, you will be a member of the August Robotics technical team. You will assist our German staff members to deploy our world-leading exhibition robots at exhibition centres all over Germany and around continental Europe (all travel and accommodation expenses met by the company)",
    jdLink: "/jd/part_time_assistant_DE.pdf",
  },

  {
    roleTitle: "Robotics Test Engineer",
    country: "Shenzhen",
    flag: "/flags/mainlandchina.svg",
    roleType: "Technical",
    iconType: "/icons/technical.svg",
    roleDescription:
      "As a Robotics Test Engineer, you will become one of the key members of the August Robotics technical team in Shenzhen. You will participate in the testing and calibration of various robot systems, as well as the deployment and implementation of automated tests.",
    jdLink: "/jd/robotics_test_engineer_sz.pdf",
  },

  // {
  //   roleTitle: "Artificial Intelligence Engineer",
  //   country: "Hong Kong",
  //   flag: "/flags/hongkong.svg",
  //   roleType: "Technical",
  //   iconType: "/icons/technical.svg",
  //   roleDescription:
  //     "As an Artificial Intelligence Engineer, you will be a member of the August Robotics technical team. You will be responsible for writing the software required to ensure that the company’s robots function effectively and reliably, and that the robot user interfaces are intuitive and fully-featured.",
  //   jdLink: "/jd/artificial_intelligence_engineer.pdf",
  // },
  // {
  //   roleTitle: "Python Software Engineer",
  //   country: "Hong Kong",
  //   flag: "/flags/hongkong.svg",
  //   roleType: "Technical",
  //   iconType: "/icons/technical.svg",
  //   roleDescription:
  //     "As a Python Software Engineer, you will be a member of the August Robotics technical team. You will be responsible for writing the software required to ensure that the company’s robots function effectively and reliably, and that the robot user interfaces are intuitive and fully-featured.",
  //   jdLink: "/jd/python_software_engineer.pdf",
  // },

  // {
  //   roleTitle: "Robotics Engineer",
  //   country: "Shenzhen",
  //   flag: "/flags/mainlandchina.svg",
  //   roleType: "Technical",
  //   iconType: "/icons/technical.svg",
  //   roleDescription:
  //     "作为一名机器人工程师，你将会成为澳谷智能深圳技 术团队的关键成员，你将从始至终地参与不同层面的 工作(如传感器、电机和动力系统)。同时你也会是我们系统集成团队的重要成员，负责集 成各种部件，以制造出满足客户需求，且可靠、专 业、稳健的机器人产品。你还会做一些传感器融合方 面的工作(比如激光雷达 LiDAR、IMU、里程计等)， 以确保我们的机器人能感知环境并做出相应反应。",
  //   jdLink: "/jd/robotics_engineer.pdf",
  // },
  // {
  //   roleTitle: "Python软件工程师",
  //   country: "Shenzhen",
  //   flag: "/flags/mainlandchina.svg",
  //   roleType: "Technical",
  //   iconType: "/icons/technical.svg",
  //   roleDescription:
  //     "作为一名Python软件工程师，你将会成为澳谷智能技术团队的成员，你会负责写代码来确保公司的机器人实现有效的功能及保持稳定，同时使机器人的用户界面是直观的和功能齐全的。你将参与贯穿产品的全生命周期（从产品定义和设计到产品生产）。你会负责公司机器人产品的开发，从头至尾地负责不同方面的相关工作。",
  //   jdLink: "/jd/Python软件工程师.pdf",
  // },
  // {
  //   roleTitle: "Procurement Engineer",
  //   country: "Shenzhen",
  //   flag: "/flags/mainlandchina.svg",
  //   roleType: "Technical",
  //   iconType: "/icons/technical.svg",
  //   roleDescription:
  //     "作为一名采购工程师，你将成为澳谷智能供应链管理的重要一员。你将主要负责公司生产、研发及其他方面所需物料采购；对供应商进行有效评估，管理及维护，确保采购质量并尽可能降低采购成本；执行公司产品的进出口物流管理，确保公司产品及时交付海外客户，并满足公司物流成本预算要求；",
  //   jdLink: "/jd/procurement_engineer.pdf",
  // },
  // {
  //   roleTitle: "Business Analyst",
  //   country: "Hong Kong (Remote)",
  //   flag: "/flags/hongkong.svg",
  //   roleType: "Commercial",
  //   iconType: "/icons/commercial.svg",
  //   roleDescription:
  //     "As a Business Analyst, you will be a member of the August Robotics commercial team. You will be responsible for creating compelling sales materials, conducting business analysis and leading workstreams in other commercial areas of the business",
  //   jdLink: "/jd/business_analyst.pdf",
  // },
];
</script>

<style lang="scss" scoped></style>
