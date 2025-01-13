
<section class="member-card-container">
  <VPTeamMembers
    class="member-card" :members="members" size="medium"
  />
</section>

## 關於我

<section class="intro">
  <div>吳冠儀，前端工程師</div>
  <div><a href= "mailto: annie25506@gmail.com"> annie25506@gmail.com </a></div>
  <div>Taipei, Taiwan</div>
  <div>2017 年碩士班畢業後，成為前端工程師已有 7 年</div>
  <div>對前端技術與網頁設計，充滿熱忱</div>  
  <div>先前工作皆為專案性質，想挑戰有穩定產品的職務</div>  
  <div>有管理前端小組的經驗</div> 
  <div>接受遠端工作、混合辦公</div> 
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
    <span class="tags">JavaScript ES6</span>
    <span class="tags">TypeScript </span>
  </p>
  <p>
    <span class="tags">Vue 2</span>
    <span class="tags">Vue Composition api</span>
    <span class="tags">Vue 3</span>
  </p>
  <p>
    <span class="tags">Nuxt 2</span>
    <span class="tags">Nuxt Composition api</span>
    <span class="tags">Nuxt 3</span>
  </p>
  <p>
    <span class="tags">HTML</span>
    <span class="tags">CSS</span>
    <span class="tags">JQuery</span>
  </p>
</section>

### Others Stack  其他技能 
<section>
  <p>
    <span class="tags">Git</span>
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
    title: 'Frontend Engineer',
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
      border: 1.67px solid #eee;
      border-radius: 8.35px;
      margin: 0 0 0 0.5rem;
    }
  }
</style>
