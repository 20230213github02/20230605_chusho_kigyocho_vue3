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
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            applications : '',
            notifacations : '',
            applicationPageCount: ''
        }
    },
    mounted(){
        axios.get('http://localhost:8815/Application/all').then(response =>{
            // for test add by ZHY
            // console.log(response)
            if (response.status == '200'){
                this.applications = response.data.data;

                //for test add by ZHY
                // console.log(this.applications);
            }
        });
        axios.get('http://localhost:8815/Notification/all').then(response =>{
            // console.log(response);
            if(response.status == '200'){
                this.notifacations = response.data.data;
                // console.log(this.notifacations);
            }
        });
        axios.get('http://localhost:8815/Application/page/1/10').then(response =>{
            console.log(response);
            this.applicationPageCount = response.data.pages;
        })
    },
    methods: {

    }
}
</script>
<style>

</style>