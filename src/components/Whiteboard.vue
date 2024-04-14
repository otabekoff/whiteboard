<template>
    <div class="whiteboard">
        <!-- Canvas container -->
        <div class="canvas-container" ref="container">
            <!-- Canvas element -->
            <canvas class="canvas" ref="canvas"></canvas>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Whiteboard',
        mounted() {
            this.setupCanvas();
        },
        methods: {
            setupCanvas() {
                const canvas = this.$refs.canvas;
                const container = this.$refs.container;

                // Set canvas size to fill its container
                canvas.width = container.offsetWidth;
                canvas.height = container.offsetHeight;

                const context = canvas.getContext('2d');

                // Enable anti-aliasing
                context.imageSmoothingEnabled = true;

                context.lineWidth = 2; // Adjust as needed

                context.lineCap = 'round'; // Rounded line ends
                context.lineJoin = 'round'; // Rounded line corners

                // Set background color
                context.fillStyle = '#008000'; // Green color
                context.fillRect(0, 0, canvas.width, canvas.height); // Fill canvas with green color

                let isDrawing = false;
                let lastX = 0;
                let lastY = 0;

                // Event listeners for drawing
                canvas.addEventListener('mousedown', startDrawing);
                canvas.addEventListener('mousemove', draw);
                canvas.addEventListener('mouseup', endDrawing);
                canvas.addEventListener('mouseleave', endDrawing);

                function startDrawing(event) {
                    isDrawing = true;
                    [lastX, lastY] = [event.offsetX, event.offsetY];
                }

                function draw(event) {
                    if (!isDrawing) return;

                    const x = event.offsetX;
                    const y = event.offsetY;

                    // Set pen color to white
                    context.strokeStyle = '#ffffff'; // White color

                    // Draw line
                    context.beginPath();
                    context.moveTo(lastX, lastY);
                    context.lineTo(x, y);
                    context.stroke();

                    [lastX, lastY] = [x, y]; // Update last position
                }

                function endDrawing() {
                    isDrawing = false;
                    context.beginPath();
                }
            }
        }
    };
</script>

<style>
    .whiteboard {
        /* Optional styling for the whiteboard container */
        background-color: #a36222;
        /* Set background color to white */
        /* Add a border */
        padding: 20px;
        overflow: hidden !important;
    }

    .canvas-container {
        /* Set container size as desired */
        width: 100%;
        height: calc(100vh - 40px);
        overflow: hidden !important;
        /* Adjust the height as needed */
        /* Add any additional styles for the container */
    }

    .canvas {
        /* Make canvas fill its container */
        width: 100%;
        height: 100%;
        /* Optional border for visualization */
        /* Add any additional styles for the canvas */
    }
</style>