<template>
    <div id="nav">
        <div class="links">
            <div id="main-link" class="tab">
                <div :class="{ 'active-tab': isActive('home') }"></div>
                <p
                    @click.prevent="setActive('home')"
                    :class="{ pActive: isActive('home') }"
                >
                    Home
                </p>
            </div>
            <div class="space"></div>

            <div class="tab">
                <div :class="{ 'active-tab': isActive('privacy') }"></div>
                <p
                    @click.prevent="setActive('privacy')"
                    :class="{ pActive: isActive('privacy') }"
                >
                    Privacy
                </p>
            </div>
            <div class="tab">
                <div
                    :class="{ 'active-tab': isActive('identitadigitale') }"
                ></div>
                <p
                    @click.prevent="setActive('identitadigitale')"
                    :class="{ pActive: isActive('identitadigitale') }"
                >
                    Identità digitale
                </p>
            </div>
            <div class="tab">
                <div :class="{ 'active-tab': isActive('webreputation') }"></div>
                <p
                    @click.prevent="setActive('webreputation')"
                    :class="{ pActive: isActive('webreputation') }"
                >
                    Web reputation
                </p>
            </div>
            <div class="tab">
                <div :class="{ 'active-tab': isActive('datipersonali') }"></div>
                <p
                    @click.prevent="setActive('datipersonali')"
                    :class="{ pActive: isActive('datipersonali') }"
                >
                    Dati personali
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeItem: "home"
        };
    },
    methods: {
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        }
    }
};
</script>

<style scoped>
#nav {
    width: 100%;
    margin: auto;
    margin-top: 40px;
    padding: 10px;
    /* background: red; */
}

.links {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: var(--tertiary-grey);
}

.tab {
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
}

.active-tab {
    content: "";
    background: var(--accent-secondary-red);
    position: absolute;
    height: 5px;
    left: 0;
    bottom: 0;
    width: 40%;
    border-radius: 6px;
}

.pActive {
    color: var(--main-font-color);
}

.links p {
    flex-grow: 3;
    font-size: 20px;
    transition: 0.3s;
}

.links p:hover {
    color: var(--main-font-color);
    cursor: pointer;
}

#main-link {
    margin-left: 200px;
}

.space {
    width: 20%;
}
</style>