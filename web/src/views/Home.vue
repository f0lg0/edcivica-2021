<template>
    <div class="home">
        <h1 id="title">
            <TextGlitch
                text="Introduzione"
                background="var(--main-black)"
                fill="var(--accent-main-green)"
                highlight1="red"
                highlight2="blue"
            ></TextGlitch>
        </h1>
    </div>
</template>


<script>
import VueTextGlitch from "vue-text-glitch";
export default {
    components: {
        TextGlitch: VueTextGlitch
    }
};
</script>

<style scoped>
#title {
    font-size: 100px;
    text-align: center;
}
</style>