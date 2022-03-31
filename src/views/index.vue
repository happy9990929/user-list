<template>
  <div class="container">
    <div class="mt-5">
      <nav class="mb-4">
        <ul class="navBtn">
          <li v-for="item in menu" :key="item.title">
          <router-link to="/" class="navLink" :class="{active: currentMenu === item.title}" @click.native="changeMenu(item.title)">
          <span class="me-1" :class="item.icon"></span>
          {{ item.title }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="card mt-1">
        <div class="card-body p-4">
          <form>
            <div class="title mb-3">測驗者列表</div>
            <div class="row">
              <div class="col-12 col-md-4 mb-3">
                <div class="d-flex align-items-center">
                  <label for="name" class="col-4 form-label">測驗者姓名：</label>
                  <input type="text" v-model="info.name" class="form-control" id="name">
                </div>
              </div>
              <div class="col-12 col-md-4 mb-3">
                <div class="d-flex align-items-center">
                  <label class="col-4 form-label">完成測驗：</label>
                  <select class="form-select" v-model="info.complete">
                    <option v-for="item in completeOptions" :key="item.value" :value="item.value">{{ item.label }}</option>
                  </select>
                </div>
              </div>
              <div class="col-12 col-md-4 mb-3">
                <div class="d-flex align-items-center">
                  <label for="correctRate" class="col-4 form-label">測驗正確率</label>
                  <input type="text" v-model="info.correctRate" class="form-control me-3" id="correctRate">
                  <span class="text-nowrap">% 以上</span>
                </div>
              </div>
              <div class="col-12 col-md-4 mb-3">
                <div class="d-flex align-items-center">
                  <label for="email" class="col-4 form-label">測驗者e-mail：</label>
                  <input type="text" v-model="info.email" class="form-control" id="email">
                </div>
              </div>
              <div class="col-12 col-md-4 mb-3">
                <div class="d-flex align-items-center">
                  <label class="col-4 form-label">測驗者身分：</label>
                  <select class="form-select" v-model="info.trainees">
                  <option v-for="item in trainees" :key="item.value" :value="item.value">{{ item.label }}</option>
                  </select>
                </div>
              </div>
              <div class="col-12 col-md-4 mb-3">
                <div class="d-flex align-items-center">
                  <label for="remark" class="col-4 form-label">備註：</label>
                  <input type="text" v-model="info.remark" class="form-control" id="name">
                </div>
              </div>
            </div>
            <div class="text-center mt-3">
              <button type="button" class="btn btn-primary me-3">查詢</button>
              <button type="button" class="btn btn-outline-primary" @click="clearForm">清除查詢</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="card my-5">
      <div class="card-body p-4">
        <div>
          <button type="button" class="btn btn-border me-3">設為學員</button>
          <button type="button" class="btn btn-border">設為非學員</button>
        </div>

        <div class="table-responsive mt-3">
          <table class="table text-nowrap">
            <thead>
              <tr>
                <th>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model='allChecked' @click="checkedAll">
                  </div>
                </th>
                <th>姓名</th>
                <th>身份</th>
                <th>E-mail</th>
                <th>備註</th>
                <th>操作</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="item in tableInfo" :key="item.id">
                <td>
                  <input class="form-check-input" type="checkbox" :value="item.id" v-model='checkboxList'>
                </td>
                <td>{{ item.name }}</td>
                <td>{{ item.isTrainees ? '學員' : '非學員' }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.remark }}</td>
                <td>
                  <router-link :to="{ name: 'detail', params: {id: item.id} }" class=" btn-detail">詳細資訊</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  data() {
    return {
      menu: [
        { title: '測驗管理', icon: 'icon-pencil'},
        { title: '測驗者管理', icon: 'icon-user'},
        { title: '資訊管理', icon: 'icon-cog'},
        { title: '意願名單', icon: 'icon-open-book'},
      ],
      currentMenu: '測驗管理',
      info: {
        name: '',
        correctRate: '',
        email: '',
        remark: '',
        complete: 'all',
        trainees: null
      },
      completeOptions: [
        { label: '全部', value: 'all'},
        { label: 'Java', value: 'java'},
        { label: 'Vue', value: 'vue'},
      ],
      trainees: [
        { label: '全部', value: null},
        { label: '學員', value: true},
        { label: '非學員', value: false},
      ],
      tableInfo: [
        {
          id: '1',
          selectd: true,
          name: '周小良',
          isTrainees: false,
          email: 'zhouxiaoliang@gmail.com',
          remark: '–'
        },
        {
          id: '2',
          selectd: false,
          name: '孟小祥',
          isTrainees: false,
          email: 'mengxiaoxiang@yahoo.com.tw',
          remark: '對Java課程有興趣'
        },
        {
          id: '3',
          selectd: false,
          name: '張小昊',
          isTrainees: false,
          email: 'zhangxiaohao@gmail.com',
          remark: '–'
        },
        {
          id: '4',
          selectd: false,
          name: '楊小明',
          isTrainees: true,
          email: 'yangxiaomiing@gmail.com',
          remark: '正在上Java進階課程'
        },
        {
          id: '5',
          selectd: false,
          name: '高小琳',
          isTrainees: true,
          email: 'gaoxiaolin@hotmail.com',
          remark: '正在上Java進階課程'
        }
      ],
      checkboxList: [],
      allChecked: false, // 全選
    }
  },
  methods: {
    clearForm() {
      this.info = {
        name: '',
        correctRate: '',
        email: '',
        remark: '',
        complete: 'all',
        trainees: null
      }
    },
    checkedAll: function() {
      if (this.allChecked) {//實現反選
          this.checkboxList = [];
      } else { //實現全選
          this.checkboxList = [];
          this.tableInfo.forEach((item) => {
              this.checkboxList.push(item.id);
          });
      }
    },
    changeMenu(item) {
      this.currentMenu = item;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/index.scss';
</style>