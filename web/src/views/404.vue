<template>
    <div id="not-found">
        <p><span class="hl">[edcivica]$</span> curl {{ this.$route.path }}</p>
        <p><span class="err">404:</span> Pagina non trovata</p>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#not-found {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 1526px;
}

#not-found p {
    font-size: 40px;
    text-align: center;
}

.hl {
    color: var(--accent-main-green);
    font-weight: bold;
}

.err {
    color: var(--accent-main-red);
    font-weight: bold;
}
</style>