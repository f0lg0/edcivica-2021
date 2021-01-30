<script>
import { HorizontalBar } from "vue-chartjs";

export default {
    extends: HorizontalBar,
    data: () => ({
        chartdata: {
            labels: [
                "Recensioni negative sul servizio/prodotto",
                "Commenti negativi sui social network",
                "Articoli negativi sui quotidiani",
                "Commenti negativi in TV",
                "Altro",
            ],
            datasets: [
                {
                    label: "Percentuale di danno",
                    backgroundColor: "#37ab45",
                    data: [62, 59, 23, 9, 3],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        ticks: {
                            fontSize: 15,
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: {
                            fontSize: 15,
                        },
                    },
                ],
            },
        },
    }),

    mounted() {
        this.renderChart(this.chartdata, this.options);
    },
};
</script>

<style>
</style>