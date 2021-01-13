<template>
    <div class="container">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    props: ["msg"]
};
</script>

<style scoped>
.container {
    width: 140px;
    height: 60px;
    background-color: var(--accent-main-green);
    border: 1px solid transparent;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.3s;
    cursor: pointer;
}

.container:hover {
    background-color: var(--main-black);
    border: 1px solid var(--accent-main-green);
    color: var(--accent-main-green);
}

.container:hover > p {
    color: var(--accent-main-green);
}

.container p {
    color: var(--main-font-color);
    font-weight: bold;
    font-size: 20px;
    margin: auto;
}
</style>