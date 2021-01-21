<script>
import { Bar } from "vue-chartjs";

export default {
    extends: Bar,
    data: () => ({
        chartdata: {
            labels: [
                "password",
                "123456",
                "12345678",
                "qwerty",
                "abc123",
                "m4MySD9U"
            ],
            datasets: [
                {
                    label: "Numero di occorrenze",
                    backgroundColor: "#d62261",
                    data: [3861493, 24230577, 3026692, 3993346, 2897638, 0]
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
