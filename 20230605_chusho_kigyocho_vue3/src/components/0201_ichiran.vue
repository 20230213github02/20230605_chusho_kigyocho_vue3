<template>
    <div>fwe</div>
    <div>
        <h1></h1>
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
        })
    },
    methods: {

    }
}
</script>
<style>

</style>