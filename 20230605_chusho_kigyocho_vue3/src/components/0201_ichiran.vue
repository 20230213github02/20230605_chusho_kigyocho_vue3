<template>
    <div>fwe</div>
    <div>
        <h1></h1>
        <!-- <li v-for="application in applications" :key="application.appUketsukeNo">
            {{ application }}
        </li> -->
        <!-- <li v-for="notification in notifacations" :key="notification.ntcID">
            {{ notification }}
        </li> -->
        <el-form>

        </el-form>
        <div>
            {{ applicationPageCount }}
        </div>
        <div class="demo-pagination-block">
            <div class="demonstration">All combined</div>
            <el-pagination v-model:current-page="currentPage" v-model:page-size="applicationPageCount"
                :page-sizes="[10, 20, 50, 100, 200, 500]" :small="small" :disabled="disabled" :background="background"
                layout="total, sizes, prev, pager, next, jumper" :total="applicationPageCount" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
        </div>
    </div>
</template>
<script>
import axios from 'axios';
// import { ref } from 'vue'


export default {
    data() {
        return {
            applications: '',
            notifacations: '',
            applicationPageCount: '',
            applicationPageSize: 10,
            currentPage : 1 
        }
    },
    mounted() {
        axios.get('http://localhost:8815/Application/all').then(response => {
            // for test add by ZHY
            // console.log(response)
            if (response.status == '200') {
                this.applications = response.data.data;

                //for test add by ZHY
                // console.log(this.applications);
            }
        });
        axios.get('http://localhost:8815/Notification/all').then(response => {
            // console.log(response);
            if (response.status == '200') {
                this.notifacations = response.data.data;
                // console.log(this.notifacations);
            }
        });
        this.getApplicationPage(1);

    },
    methods: {
        getApplicationPage(pageNum) {
            axios.get('http://localhost:8815/Application/page/' + pageNum + '/' + this.applicationPageSize).then(response => {
                console.log(response);
                this.applicationPageCount = response.data.pages;
            })
        },
        
    }
}
</script>
<style></style>