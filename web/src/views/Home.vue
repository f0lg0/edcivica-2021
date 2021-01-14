<template>
    <div class="home">
        <div class="banner">
            <div class="intro">
                <h1 id="title">
                    <TextGlitch
                        text="Educazione Civica"
                        background="var(--main-black)"
                        fill="var(--accent-main-green)"
                        highlight1="red"
                        highlight2="blue"
                    ></TextGlitch>
                </h1>
                <p id="subtitle">
                    Scegli quali tracce lasciare di te stesso nei computer degli
                    altri.
                </p>
            </div>

            <div class="pic">
                <img src="../assets/hacker.png" />
            </div>
        </div>
        <div class="btn">
            <Button msg="Inizia" />
        </div>
    </div>
</template>


<script>
import VueTextGlitch from "vue-text-glitch";
import Button from "../components/Button.vue";

export default {
    components: {
        TextGlitch: VueTextGlitch,
        Button
    }
};
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: left;
}
.banner {
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 0;
}
.pic {
    width: 700px;
    height: 600px;
    margin-left: 150px;
}

.pic img {
    width: 100%;
    height: 100%;
}

.btn {
    margin-top: 0;
    width: 140px;
}

.intro {
    margin-bottom: 0;
    height: 250px;
}
#title {
    font-size: 60px;
    text-align: left;
    font-weight: 900;
    margin-bottom: 0;
}

#subtitle {
    font-size: 25px;
    text-align: left;
    font-weight: 300;
    color: var(--main-font-color);
    margin-top: 20px;
}
</style>