<template>
  <div class="container">
    <div class="my-3">
      <router-link :to="{ name: 'index' }" class="d-flex align-items-center">
        <span class="icon-chevron-small-left fs-3"></span>
        返回測驗者列表</router-link>
    </div>
    <div class="d-flex align-items-center title">
      <div class="me-3">周小良</div>
      <div class="text-primary">非學員</div>
    </div>

    <div class="card mt-4">
      <div class="card-body p-4">
        <div class="title mb-3"><span class="icon-pencil2 me-3"></span>個人資料</div>
        <div>
          <div class="row">
            <div class="my-3 col-lg-2 infoItem">
              <label for="">暱稱：</label>
              <div>小良</div>
            </div>
            <div class="my-3 col-lg-2 infoItem">
              <label for="">學歷：</label>
              <div>大專院校</div>
            </div>
            <div class="my-3 col-lg-3 infoItem">
              <label for="">出生年月日：</label>
              <div>1994/10/28</div>
            </div>
            <div class="my-3 col-lg-2 infoItem">
              <label for="">職業別：</label>
              <div>資訊科技</div>
            </div>
            <div class="my-3 col-lg-2 infoItem">
              <label for="">資歷：</label>
              <div>一年以下</div>
            </div>
          </div>
          <div class="row">
            <div class="my-3 col-lg-4 infoItem">
              <label for="">E-mail：</label>
              <div>zhouxiaoliang@gmail.com</div>
            </div>
            <div class="my-3 col-lg-8 infoItem">
              <label for="">感興趣的領域：</label>
              <div>DotNet，Java</div>
            </div>
          </div>

          <div class="my-3 infoItem my-lg-3">
            <label for="">備註：</label>
            <div>–</div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-4">
      <div class="card-body p-4">
        <form>
          <div class="title mb-3">測驗紀錄</div>
          <div class="row">
            <div class="col-12 col-md-6 mb-3">
              <div class="d-flex align-items-center">
                <label class="form-label text-nowrap me-3">測驗主題：</label>
                <select class="form-select">
                  <option v-for="item in testTopic" :key="item.value" :value="item.value">{{ item.label }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-md-6 mb-3">
              <div class="d-flex align-items-center">
                <label for="name" class="form-label text-nowrap me-3">測驗名稱：</label>
                <input type="text" v-model="info.name" class="form-control" id="name">
              </div>
            </div>

            <div class="col-12 col-md-12 mb-3">
              <div class="d-flex align-items-center">
                <label class="form-label text-nowrap me-3">測驗日期：</label>
                <input type="date" v-model="info.startDate" class="form-control me-4">
                <input type="date" v-model="info.endDate" class="form-control">
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

    <div class="card my-4">
      <div class="card-body p-4">
        <div class="table-responsive">
          <table class="table text-nowrap">
            <thead>
              <tr>
                <th>
                  測驗主題
                </th>
                <th>測驗名稱</th>
                <th>答對題數</th>
                <th>正確率</th>
                <th>作答時長</th>
                <th>測驗日期</th>
                <th>測驗ip</th>
                <th>操作</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="item in tableInfo" :key="item.id">
                <td>{{ item.topic }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.correctNum }}</td>
                <td>{{ item.correctRate }}</td>
                <td>{{ item.time }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.ip }}</td>
                <td>
                  <router-link to="/" class="btn-detail">作答狀況</router-link>
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
      info: {
        topic: 'all',
        name: '',
        startDate: '',
        endDate: ''
      },
      testTopic: [
        { label: '全部', value: 'all'},
        { label: 'Java', value: 'java'},
        { label: 'Vue', value: 'vue'},
      ],
      tableInfo: [
        {
          id: '1',
          topic: 'Java',
          name: 'Java基礎測驗(二)',
          correctNum: '18/20',
          correctRate: '90%',
          time: '00:58:32',
          date: '2021/12/01',
          ip: '140.119.23.142',
        },
        {
          id: '2',
          topic: 'Java',
          name: 'Java基礎測驗(二)',
          correctNum: '18/20',
          correctRate: '55%',
          time: '00:58:32',
          date: '2021/12/01',
          ip: '140.119.23.142',
        },
        {
          id: '3',
          topic: 'Java',
          name: 'Java基礎測驗(二)',
          correctNum: '18/20',
          correctRate: '75%',
          time: '00:58:32',
          date: '2021/12/01',
          ip: '140.119.23.142',
        },
        {
          id: '4',
          topic: 'Java',
          name: 'Java基礎測驗(二)',
          correctNum: '18/20',
          correctRate: '80%',
          time: '00:58:32',
          date: '2021/12/01',
          ip: '140.119.23.142',
        },
        {
          id: '5',
          topic: 'Java',
          name: 'Java基礎測驗(二)',
          correctNum: '20/20',
          correctRate: '100%',
          time: '00:58:32',
          date: '2021/12/01',
          ip: '140.119.23.142',
        },
      ]
    }
  },
  methods: {
    clearForm() {
      this.info = {
        topic: 'all',
        name: '',
        startDate: '',
        endDate: ''
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/detail.scss';
</style>