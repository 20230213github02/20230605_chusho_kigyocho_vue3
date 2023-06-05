<template>

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
            if (response.getState == '200'){
                this.applications = response.getData;

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