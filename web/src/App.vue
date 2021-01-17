<template>
    <div id="app">
        <Navbar />
        <router-view />
    </div>
</template>


<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
    name: "Home",
    components: {
        Navbar
    }
};
</script>

<style>
/* vars */
:root {
    --main-black: #18191a;
    --seconday-black: #1f1f1f;
    --amoled-black: #000000;

    --main-grey: #2b2b2b;
    --secondary-grey: #303030;
    --tertiary-grey: #858585b7;

    --main-blue: #111827;

    --accent-main-green: #37ab45;
    --accent-secondary-green: #31eaaa;

    --accent-main-red: #9f3537;
    --accent-secondary-red: #e65152;

    --accent-main-blue: #70eef1;

    --accent-main-yellow: #b5e853;

    --accent-main-magenta: #d62261;

    --main-font-color: #f2f2f2;
}

::selection {
    background: var(--main-font-color);
    color: var(--main-black);
}

body {
    background-color: var(--main-black);
    color: var(--main-font-color);
    width: 80%;
    margin: auto;
}

#app {
    /* font-family: "Roboto", sans-serif; */
    font-family: Fira Code, Monaco, Consolas, Ubuntu Mono, monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none;
}

.center_with_abs {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
