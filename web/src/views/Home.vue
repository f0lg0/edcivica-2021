<template>
    <div id="home">
        <div id="desktop-wrapper" v-if="desktop">
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
                        Scegli quali tracce lasciare di te stesso nei computer
                        degli altri.
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

        <div id="small-wrapper" v-else>
            <div class="banner_small">
                <div class="intro_small">
                    <h1 id="title_small">
                        <TextGlitch
                            text="Educazione Civica"
                            background="var(--main-black)"
                            fill="var(--accent-main-green)"
                            highlight1="red"
                            highlight2="blue"
                        ></TextGlitch>
                    </h1>
                    <p id="subtitle_small">
                        Scegli quali tracce lasciare di te stesso nei computer
                        degli altri.
                    </p>
                </div>

                <div class="pic_small" v-if="!isMobile">
                    <img src="../assets/hacker.png" />
                </div>
            </div>
            <div class="btn_small" v-if="!isMobile">
                <Button msg="Inizia" />
            </div>
        </div>
    </div>
</template>


<script>
import VueTextGlitch from "vue-text-glitch";
import Button from "../components/Button.vue";

export default {
    data() {
        return {
            desktop: true,
            isMobile: false
        };
    },
    created() {
        this.desktop = !this.isSmall();
        this.isMobile = this.isSmall();

        window.addEventListener("resize", () => {
            this.desktop = !this.isSmall();
            this.isMobile = this.isSmall();
        });
    },

    methods: {
        isSmall() {
            const screenWidth = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
            );

            if (screenWidth <= 1250) {
                return true;
            } else if (screenWidth <= 1000) {
                return true;
            } else {
                return false;
            }
        }
    },
    components: {
        TextGlitch: VueTextGlitch,
        Button
    }
};
</script>

<style scoped>
#home {
    width: 80%;
    max-width: 1526px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: auto;
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
    min-width: 450px;
    min-height: 400px;
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

/* BEGIN STYLES FOR SMALLER SCREENS */

@media only screen and (max-width: 1250px) {
    #home {
        width: 90%;
    }
}

.banner_small {
    /* background: red; */
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 0;
}
.pic_small {
    width: 500px;
    height: 400px;
    min-width: 450px;
    min-height: 400px;
    margin-left: 150px;
}

.pic_small img {
    width: 100%;
    height: 100%;
}

.intro_small {
    margin-bottom: 0;
    height: 250px;
    margin-left: 20px;
}
#title_small {
    font-size: 45px;
    text-align: left;
    font-weight: 900;
    margin-bottom: 0;
}

#subtitle_small {
    font-size: 20px;
    text-align: left;
    font-weight: 300;
    color: var(--main-font-color);
    margin-top: 20px;
}

.btn_small {
    position: absolute;
    top: 425px;
}

/* MOBILE */
@media only screen and (max-width: 750px) {
    #title_small {
        font-size: 30px;
    }

    #subtitle_small {
        font-size: 14px;
    }
}
</style>