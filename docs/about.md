
<section class="member-card-container">
  <VPTeamMembers
    class="member-card" :members="members" size="medium"
  />
</section>

## 關於我

<section class="intro">
  <div>吳冠儀，資深前端工程師</div>
  <div><a href= "mailto: annie25506@gmail.com"> annie25506@gmail.com </a></div>
  <div>Taipei, Taiwan</div>
  <div>2017 年碩士班畢業後，成為前端工程師已有 8 年</div>
  <div>對前端技術與網頁設計，充滿熱忱</div>  
  <div>想挑戰有穩定產品的職務</div>  
  <div>有管理前端小組的經驗</div> 
  <div>接受遠端工作、混合辦公</div> 
  <div>熟悉Vue並有完整的5年專案開發及架構設計經驗、以及React的小型專案實作經驗</div> 
  <div>暫不考慮博奕相關產業</div> 
</section>

## 學歷
<section>
  <div>
    <img width="80px;" alt="國立臺北科技大學校徽" src="https://media.cakeresume.com/image/upload/v1580033831/soirvvdapfsxrvhd6iph.png" />
    <div class="highlight">國立臺北科技大學</div> 
    <div>資訊與財金管理系 碩士班</div>
    <div>2015 - 2017</div>
    <div>碩士學位論文題目：<a target="_blank" title="另開視窗前往長期照護人才推薦系統之研究" href="https://hdl.handle.net/11296/x3s9yy">長期照護人才推薦系統之研究</a></div>
</div>
</section>

## 技能

### Frontend Tech Stack  前端技能 
<section>
  <p>
    <span class="tags">
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg" alt="javascript"></a>
    </span>
    <span class="tags">
      <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg" alt="typescript"></a>
    </span>
  </p>
  <p>
    <span class="tags">
      <a href="https://vuejs.org/" target="_blank"><img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg" alt="vue"></a>
    </span>
    <span class="tags">
      <a href="https://nuxt.com/" target="_blank"><img src="https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-ar21.svg" alt="Nuxt"></a>
    </span>
  </p>
  <p>
    <span class="tags">
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" alt="html"></a> 
    </span>
    <span class="tags">
      <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics" target="_blank"><img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg" alt="css"></a>
    </span>
    <span class="tags">
      <a href="https://jquery.com/" target="_blank"><img src="https://www.vectorlogo.zone/logos/jquery/jquery-ar21.svg" alt="jquery"></a>
    </span>
  </p>
</section>

### Others Stack  其他技能 
<section>
  <p>
    <span class="tags">
      <a href="https://git-scm.com/" target="_blank"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" alt="git"></a>
    </span>
  </p>
</section>
<!-- 

<section class="">

</section>
<section class="">

</section> -->


<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/nayuki0115.png',
    name: 'Annie Wu',
    title: 'Sr. Frontend Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/nayuki0115' },
      { icon: 'linkedin', link: 'https://tw.linkedin.com/in/nayuki0115?trk=people-guest_people_search-card' },
    ]
  }
]
</script>

<style scoped>
  .member-card {
    display: grid;
    place-content: center;
  }

  section {
    line-height: 1.75;
    .highlight {
      font-size: 1.25rem;
      font-weight: 600;
    }
    .tags {
      display: inline-block;
      padding: 5.01px 8.35px;
      margin-bottom: 6.68px;
      line-height: 30px;
      margin: 0 0 0 0.5rem;
    }
  }
</style>
