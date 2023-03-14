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
      "您将领导公司的控制和系统集成团队，该团队主要负责机 器人运动控制、传感器融合和嵌入式系统等项目。您将带领您的团队以身为则，深入机器人研发的各个技术 领域，指导帮助团队成员调试代码并解决技术难题。此外，您也需要亲自动手参与编码运动控制器和集成新的传 感器以及系统设计等工作。系统研发集成完成之后，您还 需要管理和完善测试体系，以确保产品系统的可靠性、一 致性和健壮性。公司目前正在研发 三 类机器人产品 – 一类应用于展会行 业、一类应用于清洁服务行业、还有一类应用在公用事业 领域。您将参与这所有三个项目的工作，用您的专业知 识、创造力以及机器人方面的技术来帮助各项目团队，优 化三类机器人的性能表现。",
    jdLink: "/jd/Python软件工程师.pdf",
  },
  {
    roleTitle: "Procurement Engineer",
    country: "Shenzhen",
    flag: "/flags/mainlandchina.svg",
    roleType: "Technical",
    iconType: "/icons/technical.svg",
    roleDescription: "",
    jdLink: "/jd/procurement_engineer.pdf",
  },
];
</script>

<style lang="scss" scoped></style>
