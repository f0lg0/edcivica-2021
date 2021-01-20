<script>
import { Bar } from "vue-chartjs";

export default {
    extends: Bar,
    data: () => ({
        chartdata: {
            labels: ["password", "123456", "12345678", "qwerty", "abc123"],
            datasets: [
                {
                    label: "Numero di occorrenze",
                    backgroundColor: "#b5e853",
                    data: [3861493, 24230577, 3026692, 3993346, 2897638]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }),

    mounted() {
        this.renderChart(this.chartdata, this.options);
    }
};
</script>

<style>
</style>
