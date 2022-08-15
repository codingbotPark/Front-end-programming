<template>
    <div class="sliderWrap">
        <span class="left" @click="toLeft">
            <img src="../assets/arrow.png" alt="">
        </span>
        <span class="right" @click="toRight">
            <img src="../assets/arrow.png" alt="">
        </span>
    </div>
</template>

<script>
    import{
        computed,
        ref
    } from 'vue'
    export default{
        name : "ImgSlider",
        props: {
            option:{
                tyle:Object,
                require:true
            }
        },
        setup(props){
            let currIdx = ref(0)
            const toRight = () => currIdx.value = Math.min(currIdx.value + 1, props.option.list.length - 1)
            const toLeft = () => currIdx.vlaue = Math.max(currIdx.value - 1,0)
        }
    }
</script>