<template>
  <div id="join" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div :class="['content', $i18n.locale]">
      <h1>{{ $t('nav.join') }}</h1>
      <table v-for="pos in positions" :key="pos.name">
        <tr>
          <th colspan="4">{{ pos.name }}</th>
        </tr>
        <tr>
          <th>发布日期</th>
          <td>{{ pos.date }}</td>
          <th>学历要求</th>
          <td>{{ pos.degree }}</td>
        </tr>
        <tr>
          <th>岗位职责</th>
          <td colspan="3"><ol>
            <li v-for="duty in pos.duties" :key="duty">{{ duty }}</li>
          </oL></td>
        </tr>
        <tr>
          <th>任职要求</th>
          <td colspan="3"><ol>
            <li v-for="req in pos.requirements" :key="req">{{ req }}</li>
          </oL></td>
        </tr>
        <tr>
          <th>申请方式</th>
          <td colspan="3"><ol>
            <li>邮件：发送个人简历至 xy.guang(at)syngen.tech，主题注明“职位申请-{{ pos.name }}”；</li>
            <li>猎聘：前往“{{ pos.name }}”在猎聘网上的 <a :href="pos.liepin" target="blank">职位页面</a> 进行申请。</li>
          </oL></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'join',
  data () {
    return {
      banner: require('@/assets/banner-1.jpg'),
      positions: [{
        name: '细胞治疗研究员',
        date: '2021.06.22',
        degree: '硕士及以上',
        duties: [
          '从事SynCAR-M, SynCAR-T等免疫细胞疗法的研发。',
          '调研文献与竞品，协助设计项目开发方案。',
          '协助建立临床前研究平台、优化实验方法。',
          '执行实验计划、收集并分析实验数据、撰写实验报告和申报资料。'
        ],
        requirements: [
          '具有自主研发能力和意识，可以独立推动子项目的研发工作，包括但不限于项目计划与方案的制定，实验方案的执行，实验数据的整理、归纳与分析，项目上下游的协调与配合等。',
          '有扎实的分子生物学、细胞生物学和免疫学理论知识，熟练掌握DNA/RNA提取、逆转录、PCR/qPCR、流式细胞术（FACS）、Western blot、ELISA和哺乳动物细胞培养等实验技能。',
          '熟悉原代细胞（T细胞、NK细胞、DC细胞、iPSC等）培养、PBMC分离、功能检测（MTT/LDH杀伤实验等）、质粒转染、慢病毒/逆转录病毒/腺病毒包装及滴度测定者优先。',
          '有较好的英文文献阅读能力，能够了解和追踪相关领域的研究进展和产业发展动态。',
          '工作积极主动，具有责任心和团队合作精神。',
          '医学或生物学相关专业，免疫学和细胞治疗专业背景者优先',
          '2年以上肿瘤免疫（尤其巨噬细胞相关肿瘤免疫）基础研究或细胞治疗、抗体药、小分子药物研发经验者优先。'
        ],
        liepin: 'https://m-crecruit.liepin.com/job/share/detail-ding?sk=6c5c9339f826a7ca328f2765f6a4e7db'
      }, {
        name: '研发QC',
        date: '2021.06.23',
        degree: '本科及以上',
        duties: [
          '负责研究相关的文献查阅及知识储备、政策法规，根据需求开发新方法',
          '负责牵头项目的研究方案，研究结果，分析处理，总结汇报',
          '负责实验室的日常管理、清洁、维护',
          '按时完成实验记录及数据处理',
          '完成上级交代的其他工作'
        ],
        requirements: [
          '具有丰富细胞培养经验',
          '熟悉细胞生物学各种实验如：细胞转染、增殖、侵袭、克隆等，掌握Elisa、WB、流式细胞仪、PCR、qPCR等实验技术',
          '具备英文文献检索、分析、整合能力',
          '从事生物制药方面等2年以上工作经验',
          '执行力强，可接受加班，具有团队合作精神',
          '熟悉药品指导原则及法规，具有撰写资料能力优先'
        ],
        liepin: 'https://m-crecruit.liepin.com/job/share/detail-ding?sk=6c5c9339f826a7ca328f2765f6a4e7db'
      }, {
        name: '分子病毒研究员',
        date: '2021.06.24',
        degree: '本科及以上',
        duties: [
          '负责依据法规及指导文件，调研文献、设计开发并建立基因治疗、免疫治疗项目的体外验证方法；',
          '负责制定撰写药物开发过程中的体外验证实验方案，并负责执行方案；',
          '负责数据收集、整理及分析，撰写实验报告；',
          '积极配合或负责撰写IND申请相关体外验证资料。'
        ],
        requirements: [
          '具有良好药物研发能力和思维，可独立完成项目方案设计、执行、项目数据分析和项目报告撰写；有独立解决项目执行中遇到问题能力；',
          '第一作者身份发表过SCI文章，英语6级；具有项目相关文献资料的调研与总结，调研报告的整理与撰写能力；',
          '熟练掌握细胞培养、DNA/RNA提取、 PCR/qPCR、 ELISA、Western-blot、流式细胞术等实验技术及原理；',
          '具有良好的团队协作能力，沟通、协调能力，良好的执行力；',
          '完成上级交代的其他工作。',
          '有肿瘤免疫相关研究经验者优先，如溶瘤病毒、mRNA、CAR-T等；',
          '有病毒包装、纯化及TCID50检测等经验者优先。'
        ],
        liepin: 'https://m-crecruit.liepin.com/job/share/detail-ding?sk=6c5c9339f826a7ca328f2765f6a4e7db'
      }, {
        name: '药理研究员',
        date: '2021.06.24',
        degree: '本科及以上',
        duties: [
          '负责依据法规及指导文件，调研文献、设计开发并建立基因治疗、免疫治疗项目的体内验证方法，如PD、PK及毒理研究；',
          '负责依据法规及指导文件，制定撰写体内验证实验方案，并负责执行方案；',
          '负责数据收集、整理及分析，撰写实验报告；',
          '积极配合或负责撰写IND申请相关体内验证资料。'
        ],
        requirements: [
          '具有良好药物研发能力，可独立完成体内药效学验证，包括但不限于实验方案设计、模型构建、体内外药效学评价、机理研究、数据分析和研究报告的撰写；',
          '第一作者身份发表过SCI文章，英语6级者优先；具有项目相关文献资料的调研与总结，调研报告的整理与撰写能力；',
          '熟练掌握细胞培养、DNA/RNA提取、 PCR/qPCR、 ELISA、ELISPOT、Western-blot、流式细胞术等分子生物学技术及原理；',
          '熟练掌握常规动物实验操作、脾脏淋巴细胞分离技术、肿瘤浸润淋巴细胞分离技术',
          '具有良好的团队协作能力，沟通、协调能力，良好的执行力。',
          '有肿瘤免疫药物开发及IND申报经验者优先'
        ],
        liepin: 'https://m-crecruit.liepin.com/job/share/detail-ding?sk=6c5c9339f826a7ca328f2765f6a4e7db'
      }, {
        name: '分子研究员',
        date: '2021.08.20',
        degree: '大专及以上',
        duties: [
          '分子生物学相关实验项目，主要包括：分子克隆设计和实验、质粒制备、质粒库管理等',
          '做好实验记录，完成实验报告，及时报告和分析整理实验异常',
          '实验室日常环境维护',
          '主管安排的其他工作'
        ],
        requirements: [
          '有扎实的分子生物学基础知识，熟练掌握分子克隆实验技能',
          '细致耐心，抗压能力强，能够条理清楚地处理复杂的工作任务',
          '工作积极主动，责任心强，良好的团队精神；',
          '一年以上分子克隆工作经验者优先'
        ],
        liepin: 'https://m-crecruit.liepin.com/job/share/detail-ding?sk=6c5c9339f826a7ca328f2765f6a4e7db'
      }, {
        name: '药物分析专员',
        date: '2021.08.20',
        degree: '本科及以上',
        duties: [
          '独立文献调研，负责核酸药物的HPLC、LC-MS等检测方法的建立与验证',
          '负责核酸药物的的样品分析与质控检测',
          '负责液相及质谱等分析仪器的管理维护和日常运行',
          '独立执行实验计划、收集并分析实验数据、撰写实验报告',
          '在指导下进行申报资料的撰写工作'
        ],
        requirements: [
          '药学、药物化学、分析化学等相关专业；或生物相关专业，具有生物药分析方法开发经验',
          '熟练使用HPLC、质谱等分析仪器；或熟练使用AKTA纯化仪的操作',
          '能够独立、正确地完成所负责的实验任务',
          '能独立查找相关资料，有志于从事新药研发工作',
          '良好的沟通能力和学习能力，较强的责任心和团队精神',
          '一年以上生物药分析方法开发经验者优先'
        ],
        liepin: 'https://m-crecruit.liepin.com/job/share/detail-ding?sk=6c5c9339f826a7ca328f2765f6a4e7db'
      }, {
        name: '临床监察员（CRA）/临床试验项目主管',
        date: '2021.08.26',
        degree: '本科',
        duties: [
          '完成临床试验中心筛选、启动、日常监察及收尾工作，确保试验符合GCP要求和试验方案以及部门SOP开展；',
          '负责临床试验的执行实施，有效协调项目总体进度，把握项目时间节点，确保项目的完成质量；',
          '撰写审核临床试验方案、临床总结报告等临床研究文件；',
          '对临床研究中发生的安全性数据进行医学审核；',
          '调研和汇总国内外同类品种的临床试验数据；',
          '完成上级领导安排的其他工作。'
        ],
        requirements: [
          '了解掌握GCP及其他相关法规指导原则；',
          '具有较强的应变、沟通、协调能力；',
          '具有独立的工作能力和解决问题能力；',
          '具有主动学习能力；',
          '1-2年药物临床试验运营经验，有肿瘤项目药物临床试验经验的优先。'
        ],
        liepin: 'https://m-crecruit.liepin.com/job/share/detail-ding?sk=6c5c9339f826a7ca328f2765f6a4e7db'
      }]
    }
  }
}
</script>

<style lang="scss">
@import "@/utils.scss";

#join {
  table {
    width: 100%;
    border-collapse: collapse;
  }

  table, th, td {
    border: 1px solid black;
  }

  tr:first-child th {
    font-size: 1.2em;
    background-color: #39b9e6;
  }

  tr:nth-child(2) td {
    text-align: center;
  }

  th {
    width: 80px;
    height: 50px;
    background-color: #ccc;
  }

  table + table {
    margin-top: 2em;
  }
}
</style>
