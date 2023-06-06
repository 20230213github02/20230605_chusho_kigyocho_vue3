<template>
    <div>fwe</div>
    <div>
        <h1></h1>
        <li v-for="application in applications" :key="application.appUketsukeNo">
            {{ application }}
        </li>
        <li v-for="notification in notifacations" :key="notification.ntcID">
            {{ notification }}
        </li>
        <el-form>
            
        </el-form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            applications : '',
            notifacations : ''
        }
    },
    mounted(){
        axios.get('http://localhost:8815/Application/all').then(response =>{
            // for test add by ZHY
            console.log(response)
            if (response.status == '200'){
                this.applications = response.data.data;

                //for test add by ZHY
                console.log(this.applications);
            }
        });
        axios.get('http://localhost:8815/Notification/all').then(response =>{
            console.log(response);
            if(response.status == '200'){
                this.notifacations = response.data.data;
                console.log(this.notifacations);
            }
        })
    },
    methods: {

    }
}
</script>
<style>

</style>