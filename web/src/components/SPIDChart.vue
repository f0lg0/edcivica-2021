<script>
import { Line } from "vue-chartjs";

export default {
    extends: Line,
    data: () => ({
        chartdata: {
            labels: [
                "Gen",
                "Feb",
                "Mar",
                "Apr",
                "Mag",
                "Giu",
                "Lug",
                "Ago",
                "Set",
                "Ott",
                "Nov",
                "Dic"
            ],
            datasets: [
                {
                    label: "SPID Erogate nel 2020",
                    pointStyle: "dot",
                    pointRadius: "5",
                    pointBackgroundColor: "#b5e853",
                    borderColor: "#b5e853",
                    fill: false,
                    data: [
                        5685148,
                        5924483,
                        6332555,
                        6581535,
                        7058576,
                        7907614,
                        9052471,
                        9848453,
                        10987271,
                        12235203,
                        13489155,
                        15494031
                    ]
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